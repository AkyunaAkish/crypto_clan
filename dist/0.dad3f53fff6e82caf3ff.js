webpackJsonp([0],{

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Chart = __webpack_require__(1181);

var _Chart2 = _interopRequireDefault(_Chart);

var _MemberDetails = __webpack_require__(1187);

var _MemberDetails2 = _interopRequireDefault(_MemberDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_PureComponent) {
    _inherits(Layout, _PureComponent);

    function Layout(props) {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'layout-container' },
                _react2.default.createElement(_MemberDetails2.default, null),
                _react2.default.createElement(_Chart2.default, null)
            );
        }
    }]);

    return Layout;
}(_react.PureComponent);

exports.default = Layout;

/***/ }),

/***/ 1053:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js

;(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                __webpack_require__(1184)("./" + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(377)(module)))

/***/ }),

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var af = moment.defineLocale('af', {
        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM : function (input) {
            return /^nm$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'vm' : 'VM';
            } else {
                return isLower ? 'nm' : 'NM';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Vandag om] LT',
            nextDay : '[Môre om] LT',
            nextWeek : 'dddd [om] LT',
            lastDay : '[Gister om] LT',
            lastWeek : '[Laas] dddd [om] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'oor %s',
            past : '%s gelede',
            s : '\'n paar sekondes',
            ss : '%d sekondes',
            m : '\'n minuut',
            mm : '%d minute',
            h : '\'n uur',
            hh : '%d ure',
            d : '\'n dag',
            dd : '%d dae',
            M : '\'n maand',
            MM : '%d maande',
            y : '\'n jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
        },
        week : {
            dow : 1, // Maandag is die eerste dag van die week.
            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
        }
    });

    return af;

})));


/***/ }),

/***/ 1055:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    }, pluralForm = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals = {
        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    }, pluralize = function (u) {
        return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return str.replace(/%d/i, number);
        };
    }, months = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];

    var ar = moment.defineLocale('ar', {
        months : months,
        monthsShort : months,
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'بعد %s',
            past : 'منذ %s',
            s : pluralize('s'),
            ss : pluralize('s'),
            m : pluralize('m'),
            mm : pluralize('m'),
            h : pluralize('h'),
            hh : pluralize('h'),
            d : pluralize('d'),
            dd : pluralize('d'),
            M : pluralize('M'),
            MM : pluralize('M'),
            y : pluralize('y'),
            yy : pluralize('y')
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return ar;

})));


/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var arDz = moment.defineLocale('ar-dz', {
        months : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return arDz;

})));


/***/ }),

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var arKw = moment.defineLocale('ar-kw', {
        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return arKw;

})));


/***/ }),

/***/ 1058:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '0': '0'
    }, pluralForm = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals = {
        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    }, pluralize = function (u) {
        return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return str.replace(/%d/i, number);
        };
    }, months = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];

    var arLy = moment.defineLocale('ar-ly', {
        months : months,
        monthsShort : months,
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'بعد %s',
            past : 'منذ %s',
            s : pluralize('s'),
            ss : pluralize('s'),
            m : pluralize('m'),
            mm : pluralize('m'),
            h : pluralize('h'),
            hh : pluralize('h'),
            d : pluralize('d'),
            dd : pluralize('d'),
            M : pluralize('M'),
            MM : pluralize('M'),
            y : pluralize('y'),
            yy : pluralize('y')
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return arLy;

})));


/***/ }),

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var arMa = moment.defineLocale('ar-ma', {
        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return arMa;

})));


/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    };

    var arSa = moment.defineLocale('ar-sa', {
        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return arSa;

})));


/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var arTn = moment.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss : '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return arTn;

})));


/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var suffixes = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        6: '-ncı',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı',
        90: '-ıncı'
    };

    var az = moment.defineLocale('az', {
        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugün saat] LT',
            nextDay : '[sabah saat] LT',
            nextWeek : '[gələn həftə] dddd [saat] LT',
            lastDay : '[dünən] LT',
            lastWeek : '[keçən həftə] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s əvvəl',
            s : 'birneçə saniyə',
            ss : '%d saniyə',
            m : 'bir dəqiqə',
            mm : '%d dəqiqə',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gün',
            dd : '%d gün',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir il',
            yy : '%d il'
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM : function (input) {
            return /^(gündüz|axşam)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'gecə';
            } else if (hour < 12) {
                return 'səhər';
            } else if (hour < 17) {
                return 'gündüz';
            } else {
                return 'axşam';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '-ıncı';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return az;

})));


/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
            'dd': 'дзень_дні_дзён',
            'MM': 'месяц_месяцы_месяцаў',
            'yy': 'год_гады_гадоў'
        };
        if (key === 'm') {
            return withoutSuffix ? 'хвіліна' : 'хвіліну';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'гадзіна' : 'гадзіну';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }

    var be = moment.defineLocale('be', {
        months : {
            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
        },
        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays : {
            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY г.',
            LLL : 'D MMMM YYYY г., HH:mm',
            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar : {
            sameDay: '[Сёння ў] LT',
            nextDay: '[Заўтра ў] LT',
            lastDay: '[Учора ў] LT',
            nextWeek: function () {
                return '[У] dddd [ў] LT';
            },
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return '[У мінулую] dddd [ў] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[У мінулы] dddd [ў] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'праз %s',
            past : '%s таму',
            s : 'некалькі секунд',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithPlural,
            hh : relativeTimeWithPlural,
            d : 'дзень',
            dd : relativeTimeWithPlural,
            M : 'месяц',
            MM : relativeTimeWithPlural,
            y : 'год',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM : function (input) {
            return /^(дня|вечара)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночы';
            } else if (hour < 12) {
                return 'раніцы';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечара';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
                case 'D':
                    return number + '-га';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return be;

})));


/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var bg = moment.defineLocale('bg', {
        months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Днес в] LT',
            nextDay : '[Утре в] LT',
            nextWeek : 'dddd [в] LT',
            lastDay : '[Вчера в] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[В изминалата] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[В изминалия] dddd [в] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'след %s',
            past : 'преди %s',
            s : 'няколко секунди',
            ss : '%d секунди',
            m : 'минута',
            mm : '%d минути',
            h : 'час',
            hh : '%d часа',
            d : 'ден',
            dd : '%d дни',
            M : 'месец',
            MM : '%d месеца',
            y : 'година',
            yy : '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-ев';
            } else if (last2Digits === 0) {
                return number + '-ен';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
            } else if (lastDigit === 1) {
                return number + '-ви';
            } else if (lastDigit === 2) {
                return number + '-ри';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
            } else {
                return number + '-ти';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return bg;

})));


/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var bm = moment.defineLocale('bm', {
        months : 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
        monthsShort : 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
        weekdays : 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
        weekdaysShort : 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
        weekdaysMin : 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'MMMM [tile] D [san] YYYY',
            LLL : 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
            LLLL : 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm'
        },
        calendar : {
            sameDay : '[Bi lɛrɛ] LT',
            nextDay : '[Sini lɛrɛ] LT',
            nextWeek : 'dddd [don lɛrɛ] LT',
            lastDay : '[Kunu lɛrɛ] LT',
            lastWeek : 'dddd [tɛmɛnen lɛrɛ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s kɔnɔ',
            past : 'a bɛ %s bɔ',
            s : 'sanga dama dama',
            ss : 'sekondi %d',
            m : 'miniti kelen',
            mm : 'miniti %d',
            h : 'lɛrɛ kelen',
            hh : 'lɛrɛ %d',
            d : 'tile kelen',
            dd : 'tile %d',
            M : 'kalo kelen',
            MM : 'kalo %d',
            y : 'san kelen',
            yy : 'san %d'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return bm;

})));


/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
        '0': '০'
    },
    numberMap = {
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9',
        '০': '0'
    };

    var bn = moment.defineLocale('bn', {
        months : 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort : 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
        weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
        weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
        weekdaysMin : 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
        longDateFormat : {
            LT : 'A h:mm সময়',
            LTS : 'A h:mm:ss সময়',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm সময়',
            LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
        },
        calendar : {
            sameDay : '[আজ] LT',
            nextDay : '[আগামীকাল] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[গতকাল] LT',
            lastWeek : '[গত] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s পরে',
            past : '%s আগে',
            s : 'কয়েক সেকেন্ড',
            ss : '%d সেকেন্ড',
            m : 'এক মিনিট',
            mm : '%d মিনিট',
            h : 'এক ঘন্টা',
            hh : '%d ঘন্টা',
            d : 'এক দিন',
            dd : '%d দিন',
            M : 'এক মাস',
            MM : '%d মাস',
            y : 'এক বছর',
            yy : '%d বছর'
        },
        preparse: function (string) {
            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'রাত' && hour >= 4) ||
                    (meridiem === 'দুপুর' && hour < 5) ||
                    meridiem === 'বিকাল') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'রাত';
            } else if (hour < 10) {
                return 'সকাল';
            } else if (hour < 17) {
                return 'দুপুর';
            } else if (hour < 20) {
                return 'বিকাল';
            } else {
                return 'রাত';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return bn;

})));


/***/ }),

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '༡',
        '2': '༢',
        '3': '༣',
        '4': '༤',
        '5': '༥',
        '6': '༦',
        '7': '༧',
        '8': '༨',
        '9': '༩',
        '0': '༠'
    },
    numberMap = {
        '༡': '1',
        '༢': '2',
        '༣': '3',
        '༤': '4',
        '༥': '5',
        '༦': '6',
        '༧': '7',
        '༨': '8',
        '༩': '9',
        '༠': '0'
    };

    var bo = moment.defineLocale('bo', {
        months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
        weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[དི་རིང] LT',
            nextDay : '[སང་ཉིན] LT',
            nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
            lastDay : '[ཁ་སང] LT',
            lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ལ་',
            past : '%s སྔན་ལ',
            s : 'ལམ་སང',
            ss : '%d སྐར་ཆ།',
            m : 'སྐར་མ་གཅིག',
            mm : '%d སྐར་མ',
            h : 'ཆུ་ཚོད་གཅིག',
            hh : '%d ཆུ་ཚོད',
            d : 'ཉིན་གཅིག',
            dd : '%d ཉིན་',
            M : 'ཟླ་བ་གཅིག',
            MM : '%d ཟླ་བ',
            y : 'ལོ་གཅིག',
            yy : '%d ལོ'
        },
        preparse: function (string) {
            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
                    (meridiem === 'ཉིན་གུང' && hour < 5) ||
                    meridiem === 'དགོང་དག') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'མཚན་མོ';
            } else if (hour < 10) {
                return 'ཞོགས་ཀས';
            } else if (hour < 17) {
                return 'ཉིན་གུང';
            } else if (hour < 20) {
                return 'དགོང་དག';
            } else {
                return 'མཚན་མོ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return bo;

})));


/***/ }),

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function relativeTimeWithMutation(number, withoutSuffix, key) {
        var format = {
            'mm': 'munutenn',
            'MM': 'miz',
            'dd': 'devezh'
        };
        return number + ' ' + mutation(format[key], number);
    }
    function specialMutationForYears(number) {
        switch (lastNumber(number)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return number + ' bloaz';
            default:
                return number + ' vloaz';
        }
    }
    function lastNumber(number) {
        if (number > 9) {
            return lastNumber(number % 10);
        }
        return number;
    }
    function mutation(text, number) {
        if (number === 2) {
            return softMutation(text);
        }
        return text;
    }
    function softMutation(text) {
        var mutationTable = {
            'm': 'v',
            'b': 'v',
            'd': 'z'
        };
        if (mutationTable[text.charAt(0)] === undefined) {
            return text;
        }
        return mutationTable[text.charAt(0)] + text.substring(1);
    }

    var br = moment.defineLocale('br', {
        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h[e]mm A',
            LTS : 'h[e]mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D [a viz] MMMM YYYY',
            LLL : 'D [a viz] MMMM YYYY h[e]mm A',
            LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
        },
        calendar : {
            sameDay : '[Hiziv da] LT',
            nextDay : '[Warc\'hoazh da] LT',
            nextWeek : 'dddd [da] LT',
            lastDay : '[Dec\'h da] LT',
            lastWeek : 'dddd [paset da] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'a-benn %s',
            past : '%s \'zo',
            s : 'un nebeud segondennoù',
            ss : '%d eilenn',
            m : 'ur vunutenn',
            mm : relativeTimeWithMutation,
            h : 'un eur',
            hh : '%d eur',
            d : 'un devezh',
            dd : relativeTimeWithMutation,
            M : 'ur miz',
            MM : relativeTimeWithMutation,
            y : 'ur bloaz',
            yy : specialMutationForYears
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal : function (number) {
            var output = (number === 1) ? 'añ' : 'vet';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return br;

})));


/***/ }),

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                if (number === 1) {
                    result += 'sekunda';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sekunde';
                } else {
                    result += 'sekundi';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
            case 'mm':
                if (number === 1) {
                    result += 'minuta';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'minute';
                } else {
                    result += 'minuta';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'jedan sat' : 'jednog sata';
            case 'hh':
                if (number === 1) {
                    result += 'sat';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sata';
                } else {
                    result += 'sati';
                }
                return result;
            case 'dd':
                if (number === 1) {
                    result += 'dan';
                } else {
                    result += 'dana';
                }
                return result;
            case 'MM':
                if (number === 1) {
                    result += 'mjesec';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'mjeseca';
                } else {
                    result += 'mjeseci';
                }
                return result;
            case 'yy':
                if (number === 1) {
                    result += 'godina';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'godine';
                } else {
                    result += 'godina';
                }
                return result;
        }
    }

    var bs = moment.defineLocale('bs', {
        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[jučer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return '[prošlu] dddd [u] LT';
                    case 6:
                        return '[prošle] [subote] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prošli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            ss     : translate,
            m      : translate,
            mm     : translate,
            h      : translate,
            hh     : translate,
            d      : 'dan',
            dd     : translate,
            M      : 'mjesec',
            MM     : translate,
            y      : 'godinu',
            yy     : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return bs;

})));


/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ca = moment.defineLocale('ca', {
        months : {
            standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
            format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
            isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort : 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact : true,
        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin : 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM [de] YYYY',
            ll : 'D MMM YYYY',
            LLL : 'D MMMM [de] YYYY [a les] H:mm',
            lll : 'D MMM YYYY, H:mm',
            LLLL : 'dddd D MMMM [de] YYYY [a les] H:mm',
            llll : 'ddd D MMM YYYY, H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextDay : function () {
                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastDay : function () {
                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'd\'aquí %s',
            past : 'fa %s',
            s : 'uns segons',
            ss : '%d segons',
            m : 'un minut',
            mm : '%d minuts',
            h : 'una hora',
            hh : '%d hores',
            d : 'un dia',
            dd : '%d dies',
            M : 'un mes',
            MM : '%d mesos',
            y : 'un any',
            yy : '%d anys'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal : function (number, period) {
            var output = (number === 1) ? 'r' :
                (number === 2) ? 'n' :
                (number === 3) ? 'r' :
                (number === 4) ? 't' : 'è';
            if (period === 'w' || period === 'W') {
                output = 'a';
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ca;

})));


/***/ }),

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');

    var monthsParse = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i];
    // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
    // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
    var monthsRegex = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

    function plural(n) {
        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':  // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
            case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'sekundy' : 'sekund');
                } else {
                    return result + 'sekundami';
                }
                break;
            case 'm':  // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'minuty' : 'minut');
                } else {
                    return result + 'minutami';
                }
                break;
            case 'h':  // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh': // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'hodiny' : 'hodin');
                } else {
                    return result + 'hodinami';
                }
                break;
            case 'd':  // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'den' : 'dnem';
            case 'dd': // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'dny' : 'dní');
                } else {
                    return result + 'dny';
                }
                break;
            case 'M':  // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
            case 'MM': // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'měsíce' : 'měsíců');
                } else {
                    return result + 'měsíci';
                }
                break;
            case 'y':  // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
            case 'yy': // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'roky' : 'let');
                } else {
                    return result + 'lety';
                }
                break;
        }
    }

    var cs = moment.defineLocale('cs', {
        months : months,
        monthsShort : monthsShort,
        monthsRegex : monthsRegex,
        monthsShortRegex : monthsRegex,
        // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
        // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
        monthsStrictRegex : /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex : /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,
        weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm',
            l : 'D. M. YYYY'
        },
        calendar : {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v neděli v] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [v] LT';
                    case 3:
                        return '[ve středu v] LT';
                    case 4:
                        return '[ve čtvrtek v] LT';
                    case 5:
                        return '[v pátek v] LT';
                    case 6:
                        return '[v sobotu v] LT';
                }
            },
            lastDay: '[včera v] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[minulou neděli v] LT';
                    case 1:
                    case 2:
                        return '[minulé] dddd [v] LT';
                    case 3:
                        return '[minulou středu v] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [v] LT';
                    case 6:
                        return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'před %s',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse : /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return cs;

})));


/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var cv = moment.defineLocale('cv', {
        months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
            LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
            LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
        },
        calendar : {
            sameDay: '[Паян] LT [сехетре]',
            nextDay: '[Ыран] LT [сехетре]',
            lastDay: '[Ӗнер] LT [сехетре]',
            nextWeek: '[Ҫитес] dddd LT [сехетре]',
            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
            sameElse: 'L'
        },
        relativeTime : {
            future : function (output) {
                var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
                return output + affix;
            },
            past : '%s каялла',
            s : 'пӗр-ик ҫеккунт',
            ss : '%d ҫеккунт',
            m : 'пӗр минут',
            mm : '%d минут',
            h : 'пӗр сехет',
            hh : '%d сехет',
            d : 'пӗр кун',
            dd : '%d кун',
            M : 'пӗр уйӑх',
            MM : '%d уйӑх',
            y : 'пӗр ҫул',
            yy : '%d ҫул'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal : '%d-мӗш',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return cv;

})));


/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var cy = moment.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact : true,
        // time formats are the same as en-gb
        longDateFormat: {
            LT: 'HH:mm',
            LTS : 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Heddiw am] LT',
            nextDay: '[Yfory am] LT',
            nextWeek: 'dddd [am] LT',
            lastDay: '[Ddoe am] LT',
            lastWeek: 'dddd [diwethaf am] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'mewn %s',
            past: '%s yn ôl',
            s: 'ychydig eiliadau',
            ss: '%d eiliad',
            m: 'munud',
            mm: '%d munud',
            h: 'awr',
            hh: '%d awr',
            d: 'diwrnod',
            dd: '%d diwrnod',
            M: 'mis',
            MM: '%d mis',
            y: 'blwyddyn',
            yy: '%d flynedd'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
        ordinal: function (number) {
            var b = number,
                output = '',
                lookup = [
                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
                ];
            if (b > 20) {
                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                    output = 'fed'; // not 30ain, 70ain or 90ain
                } else {
                    output = 'ain';
                }
            } else if (b > 0) {
                output = lookup[b];
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return cy;

})));


/***/ }),

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var da = moment.defineLocale('da', {
        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay : '[i dag kl.] LT',
            nextDay : '[i morgen kl.] LT',
            nextWeek : 'på dddd [kl.] LT',
            lastDay : '[i går kl.] LT',
            lastWeek : '[i] dddd[s kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'få sekunder',
            ss : '%d sekunder',
            m : 'et minut',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dage',
            M : 'en måned',
            MM : '%d måneder',
            y : 'et år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return da;

})));


/***/ }),

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var de = moment.defineLocale('de', {
        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return de;

})));


/***/ }),

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var deAt = moment.defineLocale('de-at', {
        months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return deAt;

})));


/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var deCh = moment.defineLocale('de-ch', {
        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return deCh;

})));


/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = [
        'ޖެނުއަރީ',
        'ފެބްރުއަރީ',
        'މާރިޗު',
        'އޭޕްރީލު',
        'މޭ',
        'ޖޫން',
        'ޖުލައި',
        'އޯގަސްޓު',
        'ސެޕްޓެމްބަރު',
        'އޮކްޓޯބަރު',
        'ނޮވެމްބަރު',
        'ޑިސެމްބަރު'
    ], weekdays = [
        'އާދިއްތަ',
        'ހޯމަ',
        'އަންގާރަ',
        'ބުދަ',
        'ބުރާސްފަތި',
        'ހުކުރު',
        'ހޮނިހިރު'
    ];

    var dv = moment.defineLocale('dv', {
        months : months,
        monthsShort : months,
        weekdays : weekdays,
        weekdaysShort : weekdays,
        weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
        longDateFormat : {

            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/M/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /މކ|މފ/,
        isPM : function (input) {
            return 'މފ' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'މކ';
            } else {
                return 'މފ';
            }
        },
        calendar : {
            sameDay : '[މިއަދު] LT',
            nextDay : '[މާދަމާ] LT',
            nextWeek : 'dddd LT',
            lastDay : '[އިއްޔެ] LT',
            lastWeek : '[ފާއިތުވި] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ތެރޭގައި %s',
            past : 'ކުރިން %s',
            s : 'ސިކުންތުކޮޅެއް',
            ss : 'd% ސިކުންތު',
            m : 'މިނިޓެއް',
            mm : 'މިނިޓު %d',
            h : 'ގަޑިއިރެއް',
            hh : 'ގަޑިއިރު %d',
            d : 'ދުވަހެއް',
            dd : 'ދުވަސް %d',
            M : 'މަހެއް',
            MM : 'މަސް %d',
            y : 'އަހަރެއް',
            yy : 'އަހަރު %d'
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week : {
            dow : 7,  // Sunday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return dv;

})));


/***/ }),

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }


    var el = moment.defineLocale('el', {
        monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months : function (momentToFormat, format) {
            if (!momentToFormat) {
                return this._monthsNominativeEl;
            } else if (typeof format === 'string' && /D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
                return this._monthsGenitiveEl[momentToFormat.month()];
            } else {
                return this._monthsNominativeEl[momentToFormat.month()];
            }
        },
        monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'μμ' : 'ΜΜ';
            } else {
                return isLower ? 'πμ' : 'ΠΜ';
            }
        },
        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === 'μ');
        },
        meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl : {
            sameDay : '[Σήμερα {}] LT',
            nextDay : '[Αύριο {}] LT',
            nextWeek : 'dddd [{}] LT',
            lastDay : '[Χθες {}] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 6:
                        return '[το προηγούμενο] dddd [{}] LT';
                    default:
                        return '[την προηγούμενη] dddd [{}] LT';
                }
            },
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendarEl[key],
                hours = mom && mom.hours();
            if (isFunction(output)) {
                output = output.apply(mom);
            }
            return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
        },
        relativeTime : {
            future : 'σε %s',
            past : '%s πριν',
            s : 'λίγα δευτερόλεπτα',
            ss : '%d δευτερόλεπτα',
            m : 'ένα λεπτό',
            mm : '%d λεπτά',
            h : 'μία ώρα',
            hh : '%d ώρες',
            d : 'μία μέρα',
            dd : '%d μέρες',
            M : 'ένας μήνας',
            MM : '%d μήνες',
            y : 'ένας χρόνος',
            yy : '%d χρόνια'
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: '%dη',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4st is the first week of the year.
        }
    });

    return el;

})));


/***/ }),

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enSG = moment.defineLocale('en-SG', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enSG;

})));


/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enAu = moment.defineLocale('en-au', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enAu;

})));


/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enCa = moment.defineLocale('en-ca', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'YYYY-MM-DD',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY h:mm A',
            LLLL : 'dddd, MMMM D, YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    return enCa;

})));


/***/ }),

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enGb = moment.defineLocale('en-gb', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enGb;

})));


/***/ }),

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enIe = moment.defineLocale('en-ie', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enIe;

})));


/***/ }),

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enIl = moment.defineLocale('en-il', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    return enIl;

})));


/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enNz = moment.defineLocale('en-nz', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enNz;

})));


/***/ }),

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var eo = moment.defineLocale('eo', {
        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
        weekdays : 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
        weekdaysShort : 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
        weekdaysMin : 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D[-a de] MMMM, YYYY',
            LLL : 'D[-a de] MMMM, YYYY HH:mm',
            LLLL : 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (input) {
            return input.charAt(0).toLowerCase() === 'p';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'p.t.m.' : 'P.T.M.';
            } else {
                return isLower ? 'a.t.m.' : 'A.T.M.';
            }
        },
        calendar : {
            sameDay : '[Hodiaŭ je] LT',
            nextDay : '[Morgaŭ je] LT',
            nextWeek : 'dddd [je] LT',
            lastDay : '[Hieraŭ je] LT',
            lastWeek : '[pasinta] dddd [je] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'post %s',
            past : 'antaŭ %s',
            s : 'sekundoj',
            ss : '%d sekundoj',
            m : 'minuto',
            mm : '%d minutoj',
            h : 'horo',
            hh : '%d horoj',
            d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
            dd : '%d tagoj',
            M : 'monato',
            MM : '%d monatoj',
            y : 'jaro',
            yy : '%d jaroj'
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal : '%da',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return eo;

})));


/***/ }),

/***/ 1088:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    var es = moment.defineLocale('es', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsRegex : monthsRegex,
        monthsShortRegex : monthsRegex,
        monthsStrictRegex : /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex : /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY H:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return es;

})));


/***/ }),

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    var esDo = moment.defineLocale('es-do', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY h:mm A',
            LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return esDo;

})));


/***/ }),

/***/ 1090:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    var esUs = moment.defineLocale('es-us', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'MM/DD/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY h:mm A',
            LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return esUs;

})));


/***/ }),

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
            'ss': [number + 'sekundi', number + 'sekundit'],
            'm' : ['ühe minuti', 'üks minut'],
            'mm': [number + ' minuti', number + ' minutit'],
            'h' : ['ühe tunni', 'tund aega', 'üks tund'],
            'hh': [number + ' tunni', number + ' tundi'],
            'd' : ['ühe päeva', 'üks päev'],
            'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
            'MM': [number + ' kuu', number + ' kuud'],
            'y' : ['ühe aasta', 'aasta', 'üks aasta'],
            'yy': [number + ' aasta', number + ' aastat']
        };
        if (withoutSuffix) {
            return format[key][2] ? format[key][2] : format[key][1];
        }
        return isFuture ? format[key][0] : format[key][1];
    }

    var et = moment.defineLocale('et', {
        months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat : {
            LT   : 'H:mm',
            LTS : 'H:mm:ss',
            L    : 'DD.MM.YYYY',
            LL   : 'D. MMMM YYYY',
            LLL  : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[Täna,] LT',
            nextDay  : '[Homme,] LT',
            nextWeek : '[Järgmine] dddd LT',
            lastDay  : '[Eile,] LT',
            lastWeek : '[Eelmine] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s pärast',
            past   : '%s tagasi',
            s      : processRelativeTime,
            ss     : processRelativeTime,
            m      : processRelativeTime,
            mm     : processRelativeTime,
            h      : processRelativeTime,
            hh     : processRelativeTime,
            d      : processRelativeTime,
            dd     : '%d päeva',
            M      : processRelativeTime,
            MM     : processRelativeTime,
            y      : processRelativeTime,
            yy     : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return et;

})));


/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var eu = moment.defineLocale('eu', {
        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact : true,
        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY[ko] MMMM[ren] D[a]',
            LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
            l : 'YYYY-M-D',
            ll : 'YYYY[ko] MMM D[a]',
            lll : 'YYYY[ko] MMM D[a] HH:mm',
            llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
        },
        calendar : {
            sameDay : '[gaur] LT[etan]',
            nextDay : '[bihar] LT[etan]',
            nextWeek : 'dddd LT[etan]',
            lastDay : '[atzo] LT[etan]',
            lastWeek : '[aurreko] dddd LT[etan]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s barru',
            past : 'duela %s',
            s : 'segundo batzuk',
            ss : '%d segundo',
            m : 'minutu bat',
            mm : '%d minutu',
            h : 'ordu bat',
            hh : '%d ordu',
            d : 'egun bat',
            dd : '%d egun',
            M : 'hilabete bat',
            MM : '%d hilabete',
            y : 'urte bat',
            yy : '%d urte'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return eu;

})));


/***/ }),

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
    }, numberMap = {
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
        '۰': '0'
    };

    var fa = moment.defineLocale('fa', {
        months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
        weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
        weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (input) {
            return /بعد از ظهر/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'قبل از ظهر';
            } else {
                return 'بعد از ظهر';
            }
        },
        calendar : {
            sameDay : '[امروز ساعت] LT',
            nextDay : '[فردا ساعت] LT',
            nextWeek : 'dddd [ساعت] LT',
            lastDay : '[دیروز ساعت] LT',
            lastWeek : 'dddd [پیش] [ساعت] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'در %s',
            past : '%s پیش',
            s : 'چند ثانیه',
            ss : 'ثانیه d%',
            m : 'یک دقیقه',
            mm : '%d دقیقه',
            h : 'یک ساعت',
            hh : '%d ساعت',
            d : 'یک روز',
            dd : '%d روز',
            M : 'یک ماه',
            MM : '%d ماه',
            y : 'یک سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/[۰-۹]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal : '%dم',
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 12th is the first week of the year.
        }
    });

    return fa;

})));


/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
        numbersFuture = [
            'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
            numbersPast[7], numbersPast[8], numbersPast[9]
        ];
    function translate(number, withoutSuffix, key, isFuture) {
        var result = '';
        switch (key) {
            case 's':
                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
            case 'ss':
                return isFuture ? 'sekunnin' : 'sekuntia';
            case 'm':
                return isFuture ? 'minuutin' : 'minuutti';
            case 'mm':
                result = isFuture ? 'minuutin' : 'minuuttia';
                break;
            case 'h':
                return isFuture ? 'tunnin' : 'tunti';
            case 'hh':
                result = isFuture ? 'tunnin' : 'tuntia';
                break;
            case 'd':
                return isFuture ? 'päivän' : 'päivä';
            case 'dd':
                result = isFuture ? 'päivän' : 'päivää';
                break;
            case 'M':
                return isFuture ? 'kuukauden' : 'kuukausi';
            case 'MM':
                result = isFuture ? 'kuukauden' : 'kuukautta';
                break;
            case 'y':
                return isFuture ? 'vuoden' : 'vuosi';
            case 'yy':
                result = isFuture ? 'vuoden' : 'vuotta';
                break;
        }
        result = verbalNumber(number, isFuture) + ' ' + result;
        return result;
    }
    function verbalNumber(number, isFuture) {
        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
    }

    var fi = moment.defineLocale('fi', {
        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'Do MMMM[ta] YYYY',
            LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l : 'D.M.YYYY',
            ll : 'Do MMM YYYY',
            lll : 'Do MMM YYYY, [klo] HH.mm',
            llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar : {
            sameDay : '[tänään] [klo] LT',
            nextDay : '[huomenna] [klo] LT',
            nextWeek : 'dddd [klo] LT',
            lastDay : '[eilen] [klo] LT',
            lastWeek : '[viime] dddd[na] [klo] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s päästä',
            past : '%s sitten',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fi;

})));


/***/ }),

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var fo = moment.defineLocale('fo', {
        months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D. MMMM, YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Í dag kl.] LT',
            nextDay : '[Í morgin kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[Í gjár kl.] LT',
            lastWeek : '[síðstu] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'um %s',
            past : '%s síðani',
            s : 'fá sekund',
            ss : '%d sekundir',
            m : 'ein minuttur',
            mm : '%d minuttir',
            h : 'ein tími',
            hh : '%d tímar',
            d : 'ein dagur',
            dd : '%d dagar',
            M : 'ein mánaður',
            MM : '%d mánaðir',
            y : 'eitt ár',
            yy : '%d ár'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fo;

})));


/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var fr = moment.defineLocale('fr', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal : function (number, period) {
            switch (period) {
                // TODO: Return 'e' when day of month > 1. Move this case inside
                // block for masculine words below.
                // See https://github.com/moment/moment/issues/3375
                case 'D':
                    return number + (number === 1 ? 'er' : '');

                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fr;

})));


/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var frCa = moment.defineLocale('fr-ca', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal : function (number, period) {
            switch (period) {
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'D':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        }
    });

    return frCa;

})));


/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var frCh = moment.defineLocale('fr-ch', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal : function (number, period) {
            switch (period) {
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'D':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return frCh;

})));


/***/ }),

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

    var fy = moment.defineLocale('fy', {
        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },
        monthsParseExact : true,
        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[hjoed om] LT',
            nextDay: '[moarn om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[juster om] LT',
            lastWeek: '[ôfrûne] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'oer %s',
            past : '%s lyn',
            s : 'in pear sekonden',
            ss : '%d sekonden',
            m : 'ien minút',
            mm : '%d minuten',
            h : 'ien oere',
            hh : '%d oeren',
            d : 'ien dei',
            dd : '%d dagen',
            M : 'ien moanne',
            MM : '%d moannen',
            y : 'ien jier',
            yy : '%d jierren'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fy;

})));


/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';



    var months = [
        'Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Méitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deaireadh Fómhair', 'Samhain', 'Nollaig'
    ];

    var monthsShort = ['Eaná', 'Feab', 'Márt', 'Aibr', 'Beal', 'Méit', 'Iúil', 'Lúna', 'Meán', 'Deai', 'Samh', 'Noll'];

    var weekdays = ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Satharn'];

    var weekdaysShort = ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'hAo', 'Sat'];

    var weekdaysMin = ['Do', 'Lu', 'Má', 'Ce', 'Dé', 'hA', 'Sa'];

    var ga = moment.defineLocale('ga', {
        months: months,
        monthsShort: monthsShort,
        monthsParseExact: true,
        weekdays: weekdays,
        weekdaysShort: weekdaysShort,
        weekdaysMin: weekdaysMin,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Inniu ag] LT',
            nextDay: '[Amárach ag] LT',
            nextWeek: 'dddd [ag] LT',
            lastDay: '[Inné aig] LT',
            lastWeek: 'dddd [seo caite] [ag] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'i %s',
            past: '%s ó shin',
            s: 'cúpla soicind',
            ss: '%d soicind',
            m: 'nóiméad',
            mm: '%d nóiméad',
            h: 'uair an chloig',
            hh: '%d uair an chloig',
            d: 'lá',
            dd: '%d lá',
            M: 'mí',
            MM: '%d mí',
            y: 'bliain',
            yy: '%d bliain'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (number) {
            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
            return number + output;
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ga;

})));


/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = [
        'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
    ];

    var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

    var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

    var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

    var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

    var gd = moment.defineLocale('gd', {
        months : months,
        monthsShort : monthsShort,
        monthsParseExact : true,
        weekdays : weekdays,
        weekdaysShort : weekdaysShort,
        weekdaysMin : weekdaysMin,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[An-diugh aig] LT',
            nextDay : '[A-màireach aig] LT',
            nextWeek : 'dddd [aig] LT',
            lastDay : '[An-dè aig] LT',
            lastWeek : 'dddd [seo chaidh] [aig] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ann an %s',
            past : 'bho chionn %s',
            s : 'beagan diogan',
            ss : '%d diogan',
            m : 'mionaid',
            mm : '%d mionaidean',
            h : 'uair',
            hh : '%d uairean',
            d : 'latha',
            dd : '%d latha',
            M : 'mìos',
            MM : '%d mìosan',
            y : 'bliadhna',
            yy : '%d bliadhna'
        },
        dayOfMonthOrdinalParse : /\d{1,2}(d|na|mh)/,
        ordinal : function (number) {
            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return gd;

})));


/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var gl = moment.defineLocale('gl', {
        months : 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort : 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY H:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
            },
            nextDay : function () {
                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
            },
            lastDay : function () {
                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
            },
            lastWeek : function () {
                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : function (str) {
                if (str.indexOf('un') === 0) {
                    return 'n' + str;
                }
                return 'en ' + str;
            },
            past : 'hai %s',
            s : 'uns segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'unha hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return gl;

})));


/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's': ['thodde secondanim', 'thodde second'],
            'ss': [number + ' secondanim', number + ' second'],
            'm': ['eka mintan', 'ek minute'],
            'mm': [number + ' mintanim', number + ' mintam'],
            'h': ['eka voran', 'ek vor'],
            'hh': [number + ' voranim', number + ' voram'],
            'd': ['eka disan', 'ek dis'],
            'dd': [number + ' disanim', number + ' dis'],
            'M': ['eka mhoinean', 'ek mhoino'],
            'MM': [number + ' mhoineanim', number + ' mhoine'],
            'y': ['eka vorsan', 'ek voros'],
            'yy': [number + ' vorsanim', number + ' vorsam']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var gomLatn = moment.defineLocale('gom-latn', {
        months : 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
        monthsShort : 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
        weekdaysShort : 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
        weekdaysMin : 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'A h:mm [vazta]',
            LTS : 'A h:mm:ss [vazta]',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY A h:mm [vazta]',
            LLLL : 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
            llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
        },
        calendar : {
            sameDay: '[Aiz] LT',
            nextDay: '[Faleam] LT',
            nextWeek: '[Ieta to] dddd[,] LT',
            lastDay: '[Kal] LT',
            lastWeek: '[Fatlo] dddd[,] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s',
            past : '%s adim',
            s : processRelativeTime,
            ss : processRelativeTime,
            m : processRelativeTime,
            mm : processRelativeTime,
            h : processRelativeTime,
            hh : processRelativeTime,
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse : /\d{1,2}(er)/,
        ordinal : function (number, period) {
            switch (period) {
                // the ordinal 'er' only applies to day of the month
                case 'D':
                    return number + 'er';
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                case 'w':
                case 'W':
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'rati') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'sokalli') {
                return hour;
            } else if (meridiem === 'donparam') {
                return hour > 12 ? hour : hour + 12;
            } else if (meridiem === 'sanje') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'rati';
            } else if (hour < 12) {
                return 'sokalli';
            } else if (hour < 16) {
                return 'donparam';
            } else if (hour < 20) {
                return 'sanje';
            } else {
                return 'rati';
            }
        }
    });

    return gomLatn;

})));


/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
            '1': '૧',
            '2': '૨',
            '3': '૩',
            '4': '૪',
            '5': '૫',
            '6': '૬',
            '7': '૭',
            '8': '૮',
            '9': '૯',
            '0': '૦'
        },
        numberMap = {
            '૧': '1',
            '૨': '2',
            '૩': '3',
            '૪': '4',
            '૫': '5',
            '૬': '6',
            '૭': '7',
            '૮': '8',
            '૯': '9',
            '૦': '0'
        };

    var gu = moment.defineLocale('gu', {
        months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
        monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
        monthsParseExact: true,
        weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
        weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
        weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
        longDateFormat: {
            LT: 'A h:mm વાગ્યે',
            LTS: 'A h:mm:ss વાગ્યે',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
            LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
        },
        calendar: {
            sameDay: '[આજ] LT',
            nextDay: '[કાલે] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ગઇકાલે] LT',
            lastWeek: '[પાછલા] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s મા',
            past: '%s પેહલા',
            s: 'અમુક પળો',
            ss: '%d સેકંડ',
            m: 'એક મિનિટ',
            mm: '%d મિનિટ',
            h: 'એક કલાક',
            hh: '%d કલાક',
            d: 'એક દિવસ',
            dd: '%d દિવસ',
            M: 'એક મહિનો',
            MM: '%d મહિનો',
            y: 'એક વર્ષ',
            yy: '%d વર્ષ'
        },
        preparse: function (string) {
            return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'રાત') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'સવાર') {
                return hour;
            } else if (meridiem === 'બપોર') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'સાંજ') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'રાત';
            } else if (hour < 10) {
                return 'સવાર';
            } else if (hour < 17) {
                return 'બપોર';
            } else if (hour < 20) {
                return 'સાંજ';
            } else {
                return 'રાત';
            }
        },
        week: {
            dow: 0, // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.
        }
    });

    return gu;

})));


/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var he = moment.defineLocale('he', {
        months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [ב]MMMM YYYY',
            LLL : 'D [ב]MMMM YYYY HH:mm',
            LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
            l : 'D/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[היום ב־]LT',
            nextDay : '[מחר ב־]LT',
            nextWeek : 'dddd [בשעה] LT',
            lastDay : '[אתמול ב־]LT',
            lastWeek : '[ביום] dddd [האחרון בשעה] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'בעוד %s',
            past : 'לפני %s',
            s : 'מספר שניות',
            ss : '%d שניות',
            m : 'דקה',
            mm : '%d דקות',
            h : 'שעה',
            hh : function (number) {
                if (number === 2) {
                    return 'שעתיים';
                }
                return number + ' שעות';
            },
            d : 'יום',
            dd : function (number) {
                if (number === 2) {
                    return 'יומיים';
                }
                return number + ' ימים';
            },
            M : 'חודש',
            MM : function (number) {
                if (number === 2) {
                    return 'חודשיים';
                }
                return number + ' חודשים';
            },
            y : 'שנה',
            yy : function (number) {
                if (number === 2) {
                    return 'שנתיים';
                } else if (number % 10 === 0 && number !== 10) {
                    return number + ' שנה';
                }
                return number + ' שנים';
            }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM : function (input) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 5) {
                return 'לפנות בוקר';
            } else if (hour < 10) {
                return 'בבוקר';
            } else if (hour < 12) {
                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
            } else if (hour < 18) {
                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
            } else {
                return 'בערב';
            }
        }
    });

    return he;

})));


/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    var hi = moment.defineLocale('hi', {
        months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: true,
        weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat : {
            LT : 'A h:mm बजे',
            LTS : 'A h:mm:ss बजे',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm बजे',
            LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[कल] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[कल] LT',
            lastWeek : '[पिछले] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s में',
            past : '%s पहले',
            s : 'कुछ ही क्षण',
            ss : '%d सेकंड',
            m : 'एक मिनट',
            mm : '%d मिनट',
            h : 'एक घंटा',
            hh : '%d घंटे',
            d : 'एक दिन',
            dd : '%d दिन',
            M : 'एक महीने',
            MM : '%d महीने',
            y : 'एक वर्ष',
            yy : '%d वर्ष'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सुबह') {
                return hour;
            } else if (meridiem === 'दोपहर') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'शाम') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात';
            } else if (hour < 10) {
                return 'सुबह';
            } else if (hour < 17) {
                return 'दोपहर';
            } else if (hour < 20) {
                return 'शाम';
            } else {
                return 'रात';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return hi;

})));


/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                if (number === 1) {
                    result += 'sekunda';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sekunde';
                } else {
                    result += 'sekundi';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
            case 'mm':
                if (number === 1) {
                    result += 'minuta';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'minute';
                } else {
                    result += 'minuta';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'jedan sat' : 'jednog sata';
            case 'hh':
                if (number === 1) {
                    result += 'sat';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sata';
                } else {
                    result += 'sati';
                }
                return result;
            case 'dd':
                if (number === 1) {
                    result += 'dan';
                } else {
                    result += 'dana';
                }
                return result;
            case 'MM':
                if (number === 1) {
                    result += 'mjesec';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'mjeseca';
                } else {
                    result += 'mjeseci';
                }
                return result;
            case 'yy':
                if (number === 1) {
                    result += 'godina';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'godine';
                } else {
                    result += 'godina';
                }
                return result;
        }
    }

    var hr = moment.defineLocale('hr', {
        months : {
            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
        },
        monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[jučer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return '[prošlu] dddd [u] LT';
                    case 6:
                        return '[prošle] [subote] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prošli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            ss     : translate,
            m      : translate,
            mm     : translate,
            h      : translate,
            hh     : translate,
            d      : 'dan',
            dd     : translate,
            M      : 'mjesec',
            MM     : translate,
            y      : 'godinu',
            yy     : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return hr;

})));


/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    function translate(number, withoutSuffix, key, isFuture) {
        var num = number;
        switch (key) {
            case 's':
                return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
                return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';
            case 'm':
                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'mm':
                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'hh':
                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'd':
                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'dd':
                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'MM':
                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'y':
                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
            case 'yy':
                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
        }
        return '';
    }
    function week(isFuture) {
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
    }

    var hu = moment.defineLocale('hu', {
        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY. MMMM D.',
            LLL : 'YYYY. MMMM D. H:mm',
            LLLL : 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            } else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar : {
            sameDay : '[ma] LT[-kor]',
            nextDay : '[holnap] LT[-kor]',
            nextWeek : function () {
                return week.call(this, true);
            },
            lastDay : '[tegnap] LT[-kor]',
            lastWeek : function () {
                return week.call(this, false);
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s múlva',
            past : '%s',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return hu;

})));


/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var hyAm = moment.defineLocale('hy-am', {
        months : {
            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
        },
        monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
        weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
        weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY թ.',
            LLL : 'D MMMM YYYY թ., HH:mm',
            LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
        },
        calendar : {
            sameDay: '[այսօր] LT',
            nextDay: '[վաղը] LT',
            lastDay: '[երեկ] LT',
            nextWeek: function () {
                return 'dddd [օրը ժամը] LT';
            },
            lastWeek: function () {
                return '[անցած] dddd [օրը ժամը] LT';
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s հետո',
            past : '%s առաջ',
            s : 'մի քանի վայրկյան',
            ss : '%d վայրկյան',
            m : 'րոպե',
            mm : '%d րոպե',
            h : 'ժամ',
            hh : '%d ժամ',
            d : 'օր',
            dd : '%d օր',
            M : 'ամիս',
            MM : '%d ամիս',
            y : 'տարի',
            yy : '%d տարի'
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (input) {
            return /^(ցերեկվա|երեկոյան)$/.test(input);
        },
        meridiem : function (hour) {
            if (hour < 4) {
                return 'գիշերվա';
            } else if (hour < 12) {
                return 'առավոտվա';
            } else if (hour < 17) {
                return 'ցերեկվա';
            } else {
                return 'երեկոյան';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'DDD':
                case 'w':
                case 'W':
                case 'DDDo':
                    if (number === 1) {
                        return number + '-ին';
                    }
                    return number + '-րդ';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return hyAm;

})));


/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var id = moment.defineLocale('id', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'siang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sore' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'siang';
            } else if (hours < 19) {
                return 'sore';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Besok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kemarin pukul] LT',
            lastWeek : 'dddd [lalu pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lalu',
            s : 'beberapa detik',
            ss : '%d detik',
            m : 'semenit',
            mm : '%d menit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return id;

})));


/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function plural(n) {
        if (n % 100 === 11) {
            return true;
        } else if (n % 10 === 1) {
            return false;
        }
        return true;
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':
                return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
            case 'ss':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum');
                }
                return result + 'sekúnda';
            case 'm':
                return withoutSuffix ? 'mínúta' : 'mínútu';
            case 'mm':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
                } else if (withoutSuffix) {
                    return result + 'mínúta';
                }
                return result + 'mínútu';
            case 'hh':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
                }
                return result + 'klukkustund';
            case 'd':
                if (withoutSuffix) {
                    return 'dagur';
                }
                return isFuture ? 'dag' : 'degi';
            case 'dd':
                if (plural(number)) {
                    if (withoutSuffix) {
                        return result + 'dagar';
                    }
                    return result + (isFuture ? 'daga' : 'dögum');
                } else if (withoutSuffix) {
                    return result + 'dagur';
                }
                return result + (isFuture ? 'dag' : 'degi');
            case 'M':
                if (withoutSuffix) {
                    return 'mánuður';
                }
                return isFuture ? 'mánuð' : 'mánuði';
            case 'MM':
                if (plural(number)) {
                    if (withoutSuffix) {
                        return result + 'mánuðir';
                    }
                    return result + (isFuture ? 'mánuði' : 'mánuðum');
                } else if (withoutSuffix) {
                    return result + 'mánuður';
                }
                return result + (isFuture ? 'mánuð' : 'mánuði');
            case 'y':
                return withoutSuffix || isFuture ? 'ár' : 'ári';
            case 'yy':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
                }
                return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
        }
    }

    var is = moment.defineLocale('is', {
        months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar : {
            sameDay : '[í dag kl.] LT',
            nextDay : '[á morgun kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[í gær kl.] LT',
            lastWeek : '[síðasta] dddd [kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'eftir %s',
            past : 'fyrir %s síðan',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : 'klukkustund',
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return is;

})));


/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var it = moment.defineLocale('it', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort : 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin : 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past : '%s fa',
            s : 'alcuni secondi',
            ss : '%d secondi',
            m : 'un minuto',
            mm : '%d minuti',
            h : 'un\'ora',
            hh : '%d ore',
            d : 'un giorno',
            dd : '%d giorni',
            M : 'un mese',
            MM : '%d mesi',
            y : 'un anno',
            yy : '%d anni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return it;

})));


/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var itCh = moment.defineLocale('it-ch', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort : 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin : 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past : '%s fa',
            s : 'alcuni secondi',
            ss : '%d secondi',
            m : 'un minuto',
            mm : '%d minuti',
            h : 'un\'ora',
            hh : '%d ore',
            d : 'un giorno',
            dd : '%d giorni',
            M : 'un mese',
            MM : '%d mesi',
            y : 'un anno',
            yy : '%d anni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return itCh;

})));


/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ja = moment.defineLocale('ja', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日 HH:mm',
            LLLL : 'YYYY年M月D日 dddd HH:mm',
            l : 'YYYY/MM/DD',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日(ddd) HH:mm'
        },
        meridiemParse: /午前|午後/i,
        isPM : function (input) {
            return input === '午後';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '午前';
            } else {
                return '午後';
            }
        },
        calendar : {
            sameDay : '[今日] LT',
            nextDay : '[明日] LT',
            nextWeek : function (now) {
                if (now.week() < this.week()) {
                    return '[来週]dddd LT';
                } else {
                    return 'dddd LT';
                }
            },
            lastDay : '[昨日] LT',
            lastWeek : function (now) {
                if (this.week() < now.week()) {
                    return '[先週]dddd LT';
                } else {
                    return 'dddd LT';
                }
            },
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse : /\d{1,2}日/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '日';
                default:
                    return number;
            }
        },
        relativeTime : {
            future : '%s後',
            past : '%s前',
            s : '数秒',
            ss : '%d秒',
            m : '1分',
            mm : '%d分',
            h : '1時間',
            hh : '%d時間',
            d : '1日',
            dd : '%d日',
            M : '1ヶ月',
            MM : '%dヶ月',
            y : '1年',
            yy : '%d年'
        }
    });

    return ja;

})));


/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var jv = moment.defineLocale('jv', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'enjing') {
                return hour;
            } else if (meridiem === 'siyang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'enjing';
            } else if (hours < 15) {
                return 'siyang';
            } else if (hours < 19) {
                return 'sonten';
            } else {
                return 'ndalu';
            }
        },
        calendar : {
            sameDay : '[Dinten puniko pukul] LT',
            nextDay : '[Mbenjang pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kala wingi pukul] LT',
            lastWeek : 'dddd [kepengker pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'wonten ing %s',
            past : '%s ingkang kepengker',
            s : 'sawetawis detik',
            ss : '%d detik',
            m : 'setunggal menit',
            mm : '%d menit',
            h : 'setunggal jam',
            hh : '%d jam',
            d : 'sedinten',
            dd : '%d dinten',
            M : 'sewulan',
            MM : '%d wulan',
            y : 'setaun',
            yy : '%d taun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return jv;

})));


/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ka = moment.defineLocale('ka', {
        months : {
            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
        },
        monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays : {
            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
            isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[დღეს] LT[-ზე]',
            nextDay : '[ხვალ] LT[-ზე]',
            lastDay : '[გუშინ] LT[-ზე]',
            nextWeek : '[შემდეგ] dddd LT[-ზე]',
            lastWeek : '[წინა] dddd LT-ზე',
            sameElse : 'L'
        },
        relativeTime : {
            future : function (s) {
                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
                    s.replace(/ი$/, 'ში') :
                    s + 'ში';
            },
            past : function (s) {
                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
                    return s.replace(/(ი|ე)$/, 'ის წინ');
                }
                if ((/წელი/).test(s)) {
                    return s.replace(/წელი$/, 'წლის წინ');
                }
            },
            s : 'რამდენიმე წამი',
            ss : '%d წამი',
            m : 'წუთი',
            mm : '%d წუთი',
            h : 'საათი',
            hh : '%d საათი',
            d : 'დღე',
            dd : '%d დღე',
            M : 'თვე',
            MM : '%d თვე',
            y : 'წელი',
            yy : '%d წელი'
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal : function (number) {
            if (number === 0) {
                return number;
            }
            if (number === 1) {
                return number + '-ლი';
            }
            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
                return 'მე-' + number;
            }
            return number + '-ე';
        },
        week : {
            dow : 1,
            doy : 7
        }
    });

    return ka;

})));


/***/ }),

/***/ 1117:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var suffixes = {
        0: '-ші',
        1: '-ші',
        2: '-ші',
        3: '-ші',
        4: '-ші',
        5: '-ші',
        6: '-шы',
        7: '-ші',
        8: '-ші',
        9: '-шы',
        10: '-шы',
        20: '-шы',
        30: '-шы',
        40: '-шы',
        50: '-ші',
        60: '-шы',
        70: '-ші',
        80: '-ші',
        90: '-шы',
        100: '-ші'
    };

    var kk = moment.defineLocale('kk', {
        months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
        weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Бүгін сағат] LT',
            nextDay : '[Ертең сағат] LT',
            nextWeek : 'dddd [сағат] LT',
            lastDay : '[Кеше сағат] LT',
            lastWeek : '[Өткен аптаның] dddd [сағат] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ішінде',
            past : '%s бұрын',
            s : 'бірнеше секунд',
            ss : '%d секунд',
            m : 'бір минут',
            mm : '%d минут',
            h : 'бір сағат',
            hh : '%d сағат',
            d : 'бір күн',
            dd : '%d күн',
            M : 'бір ай',
            MM : '%d ай',
            y : 'бір жыл',
            yy : '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal : function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return kk;

})));


/***/ }),

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '១',
        '2': '២',
        '3': '៣',
        '4': '៤',
        '5': '៥',
        '6': '៦',
        '7': '៧',
        '8': '៨',
        '9': '៩',
        '0': '០'
    }, numberMap = {
        '១': '1',
        '២': '2',
        '៣': '3',
        '៤': '4',
        '៥': '5',
        '៦': '6',
        '៧': '7',
        '៨': '8',
        '៩': '9',
        '០': '0'
    };

    var km = moment.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_'
        ),
        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_'
        ),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function (input) {
            return input === 'ល្ងាច';
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ព្រឹក';
            } else {
                return 'ល្ងាច';
            }
        },
        calendar: {
            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
            nextDay: '[ស្អែក ម៉ោង] LT',
            nextWeek: 'dddd [ម៉ោង] LT',
            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%sទៀត',
            past: '%sមុន',
            s: 'ប៉ុន្មានវិនាទី',
            ss: '%d វិនាទី',
            m: 'មួយនាទី',
            mm: '%d នាទី',
            h: 'មួយម៉ោង',
            hh: '%d ម៉ោង',
            d: 'មួយថ្ងៃ',
            dd: '%d ថ្ងៃ',
            M: 'មួយខែ',
            MM: '%d ខែ',
            y: 'មួយឆ្នាំ',
            yy: '%d ឆ្នាំ'
        },
        dayOfMonthOrdinalParse : /ទី\d{1,2}/,
        ordinal : 'ទី%d',
        preparse: function (string) {
            return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return km;

})));


/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '೧',
        '2': '೨',
        '3': '೩',
        '4': '೪',
        '5': '೫',
        '6': '೬',
        '7': '೭',
        '8': '೮',
        '9': '೯',
        '0': '೦'
    },
    numberMap = {
        '೧': '1',
        '೨': '2',
        '೩': '3',
        '೪': '4',
        '೫': '5',
        '೬': '6',
        '೭': '7',
        '೮': '8',
        '೯': '9',
        '೦': '0'
    };

    var kn = moment.defineLocale('kn', {
        months : 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
        monthsShort : 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
        monthsParseExact: true,
        weekdays : 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
        weekdaysShort : 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
        weekdaysMin : 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[ಇಂದು] LT',
            nextDay : '[ನಾಳೆ] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[ನಿನ್ನೆ] LT',
            lastWeek : '[ಕೊನೆಯ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ನಂತರ',
            past : '%s ಹಿಂದೆ',
            s : 'ಕೆಲವು ಕ್ಷಣಗಳು',
            ss : '%d ಸೆಕೆಂಡುಗಳು',
            m : 'ಒಂದು ನಿಮಿಷ',
            mm : '%d ನಿಮಿಷ',
            h : 'ಒಂದು ಗಂಟೆ',
            hh : '%d ಗಂಟೆ',
            d : 'ಒಂದು ದಿನ',
            dd : '%d ದಿನ',
            M : 'ಒಂದು ತಿಂಗಳು',
            MM : '%d ತಿಂಗಳು',
            y : 'ಒಂದು ವರ್ಷ',
            yy : '%d ವರ್ಷ'
        },
        preparse: function (string) {
            return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ರಾತ್ರಿ') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
                return hour;
            } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'ಸಂಜೆ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ರಾತ್ರಿ';
            } else if (hour < 10) {
                return 'ಬೆಳಿಗ್ಗೆ';
            } else if (hour < 17) {
                return 'ಮಧ್ಯಾಹ್ನ';
            } else if (hour < 20) {
                return 'ಸಂಜೆ';
            } else {
                return 'ರಾತ್ರಿ';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal : function (number) {
            return number + 'ನೇ';
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return kn;

})));


/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ko = moment.defineLocale('ko', {
        months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY년 MMMM D일',
            LLL : 'YYYY년 MMMM D일 A h:mm',
            LLLL : 'YYYY년 MMMM D일 dddd A h:mm',
            l : 'YYYY.MM.DD.',
            ll : 'YYYY년 MMMM D일',
            lll : 'YYYY년 MMMM D일 A h:mm',
            llll : 'YYYY년 MMMM D일 dddd A h:mm'
        },
        calendar : {
            sameDay : '오늘 LT',
            nextDay : '내일 LT',
            nextWeek : 'dddd LT',
            lastDay : '어제 LT',
            lastWeek : '지난주 dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s 후',
            past : '%s 전',
            s : '몇 초',
            ss : '%d초',
            m : '1분',
            mm : '%d분',
            h : '한 시간',
            hh : '%d시간',
            d : '하루',
            dd : '%d일',
            M : '한 달',
            MM : '%d달',
            y : '일 년',
            yy : '%d년'
        },
        dayOfMonthOrdinalParse : /\d{1,2}(일|월|주)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '일';
                case 'M':
                    return number + '월';
                case 'w':
                case 'W':
                    return number + '주';
                default:
                    return number;
            }
        },
        meridiemParse : /오전|오후/,
        isPM : function (token) {
            return token === '오후';
        },
        meridiem : function (hour, minute, isUpper) {
            return hour < 12 ? '오전' : '오후';
        }
    });

    return ko;

})));


/***/ }),

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    },
    months = [
        'کانونی دووەم',
        'شوبات',
        'ئازار',
        'نیسان',
        'ئایار',
        'حوزەیران',
        'تەمموز',
        'ئاب',
        'ئەیلوول',
        'تشرینی یەكەم',
        'تشرینی دووەم',
        'كانونی یەکەم'
    ];


    var ku = moment.defineLocale('ku', {
        months : months,
        monthsShort : months,
        weekdays : 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysShort : 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysMin : 'ی_د_س_چ_پ_ه_ش'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM: function (input) {
            return /ئێواره‌/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'به‌یانی';
            } else {
                return 'ئێواره‌';
            }
        },
        calendar : {
            sameDay : '[ئه‌مرۆ كاتژمێر] LT',
            nextDay : '[به‌یانی كاتژمێر] LT',
            nextWeek : 'dddd [كاتژمێر] LT',
            lastDay : '[دوێنێ كاتژمێر] LT',
            lastWeek : 'dddd [كاتژمێر] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'له‌ %s',
            past : '%s',
            s : 'چه‌ند چركه‌یه‌ك',
            ss : 'چركه‌ %d',
            m : 'یه‌ك خوله‌ك',
            mm : '%d خوله‌ك',
            h : 'یه‌ك كاتژمێر',
            hh : '%d كاتژمێر',
            d : 'یه‌ك ڕۆژ',
            dd : '%d ڕۆژ',
            M : 'یه‌ك مانگ',
            MM : '%d مانگ',
            y : 'یه‌ك ساڵ',
            yy : '%d ساڵ'
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 12th is the first week of the year.
        }
    });

    return ku;

})));


/***/ }),

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var suffixes = {
        0: '-чү',
        1: '-чи',
        2: '-чи',
        3: '-чү',
        4: '-чү',
        5: '-чи',
        6: '-чы',
        7: '-чи',
        8: '-чи',
        9: '-чу',
        10: '-чу',
        20: '-чы',
        30: '-чу',
        40: '-чы',
        50: '-чү',
        60: '-чы',
        70: '-чи',
        80: '-чи',
        90: '-чу',
        100: '-чү'
    };

    var ky = moment.defineLocale('ky', {
        months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
        weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
        weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Бүгүн саат] LT',
            nextDay : '[Эртең саат] LT',
            nextWeek : 'dddd [саат] LT',
            lastDay : '[Кечээ саат] LT',
            lastWeek : '[Өткөн аптанын] dddd [күнү] [саат] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ичинде',
            past : '%s мурун',
            s : 'бирнече секунд',
            ss : '%d секунд',
            m : 'бир мүнөт',
            mm : '%d мүнөт',
            h : 'бир саат',
            hh : '%d саат',
            d : 'бир күн',
            dd : '%d күн',
            M : 'бир ай',
            MM : '%d ай',
            y : 'бир жыл',
            yy : '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal : function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return ky;

})));


/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eng Minutt', 'enger Minutt'],
            'h': ['eng Stonn', 'enger Stonn'],
            'd': ['een Dag', 'engem Dag'],
            'M': ['ee Mount', 'engem Mount'],
            'y': ['ee Joer', 'engem Joer']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }
    function processFutureTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'a ' + string;
        }
        return 'an ' + string;
    }
    function processPastTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'viru ' + string;
        }
        return 'virun ' + string;
    }
    /**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
    function eifelerRegelAppliesToNumber(number) {
        number = parseInt(number, 10);
        if (isNaN(number)) {
            return false;
        }
        if (number < 0) {
            // Negative Number --> always true
            return true;
        } else if (number < 10) {
            // Only 1 digit
            if (4 <= number && number <= 7) {
                return true;
            }
            return false;
        } else if (number < 100) {
            // 2 digits
            var lastDigit = number % 10, firstDigit = number / 10;
            if (lastDigit === 0) {
                return eifelerRegelAppliesToNumber(firstDigit);
            }
            return eifelerRegelAppliesToNumber(lastDigit);
        } else if (number < 10000) {
            // 3 or 4 digits --> recursively check first digit
            while (number >= 10) {
                number = number / 10;
            }
            return eifelerRegelAppliesToNumber(number);
        } else {
            // Anything larger than 4 digits: recursively check first n-3 digits
            number = number / 1000;
            return eifelerRegelAppliesToNumber(number);
        }
    }

    var lb = moment.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm [Auer]',
            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
        },
        calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[Gëschter um] LT',
            lastWeek: function () {
                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
                switch (this.day()) {
                    case 2:
                    case 4:
                        return '[Leschten] dddd [um] LT';
                    default:
                        return '[Leschte] dddd [um] LT';
                }
            }
        },
        relativeTime : {
            future : processFutureTime,
            past : processPastTime,
            s : 'e puer Sekonnen',
            ss : '%d Sekonnen',
            m : processRelativeTime,
            mm : '%d Minutten',
            h : processRelativeTime,
            hh : '%d Stonnen',
            d : processRelativeTime,
            dd : '%d Deeg',
            M : processRelativeTime,
            MM : '%d Méint',
            y : processRelativeTime,
            yy : '%d Joer'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lb;

})));


/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var lo = moment.defineLocale('lo', {
        months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (input) {
            return input === 'ຕອນແລງ';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ຕອນເຊົ້າ';
            } else {
                return 'ຕອນແລງ';
            }
        },
        calendar : {
            sameDay : '[ມື້ນີ້ເວລາ] LT',
            nextDay : '[ມື້ອື່ນເວລາ] LT',
            nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
            lastDay : '[ມື້ວານນີ້ເວລາ] LT',
            lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ອີກ %s',
            past : '%sຜ່ານມາ',
            s : 'ບໍ່ເທົ່າໃດວິນາທີ',
            ss : '%d ວິນາທີ' ,
            m : '1 ນາທີ',
            mm : '%d ນາທີ',
            h : '1 ຊົ່ວໂມງ',
            hh : '%d ຊົ່ວໂມງ',
            d : '1 ມື້',
            dd : '%d ມື້',
            M : '1 ເດືອນ',
            MM : '%d ເດືອນ',
            y : '1 ປີ',
            yy : '%d ປີ'
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal : function (number) {
            return 'ທີ່' + number;
        }
    });

    return lo;

})));


/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var units = {
        'ss' : 'sekundė_sekundžių_sekundes',
        'm' : 'minutė_minutės_minutę',
        'mm': 'minutės_minučių_minutes',
        'h' : 'valanda_valandos_valandą',
        'hh': 'valandos_valandų_valandas',
        'd' : 'diena_dienos_dieną',
        'dd': 'dienos_dienų_dienas',
        'M' : 'mėnuo_mėnesio_mėnesį',
        'MM': 'mėnesiai_mėnesių_mėnesius',
        'y' : 'metai_metų_metus',
        'yy': 'metai_metų_metus'
    };
    function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
            return 'kelios sekundės';
        } else {
            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
        }
    }
    function translateSingular(number, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
    }
    function special(number) {
        return number % 10 === 0 || (number > 10 && number < 20);
    }
    function forms(key) {
        return units[key].split('_');
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        if (number === 1) {
            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
        } else if (withoutSuffix) {
            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
        } else {
            if (isFuture) {
                return result + forms(key)[1];
            } else {
                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
            }
        }
    }
    var lt = moment.defineLocale('lt', {
        months : {
            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays : {
            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY [m.] MMMM D [d.]',
            LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l : 'YYYY-MM-DD',
            ll : 'YYYY [m.] MMMM D [d.]',
            lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar : {
            sameDay : '[Šiandien] LT',
            nextDay : '[Rytoj] LT',
            nextWeek : 'dddd LT',
            lastDay : '[Vakar] LT',
            lastWeek : '[Praėjusį] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'po %s',
            past : 'prieš %s',
            s : translateSeconds,
            ss : translate,
            m : translateSingular,
            mm : translate,
            h : translateSingular,
            hh : translate,
            d : translateSingular,
            dd : translate,
            M : translateSingular,
            MM : translate,
            y : translateSingular,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal : function (number) {
            return number + '-oji';
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lt;

})));


/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var units = {
        'ss': 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'h': 'stundas_stundām_stunda_stundas'.split('_'),
        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
        'd': 'dienas_dienām_diena_dienas'.split('_'),
        'dd': 'dienas_dienām_diena_dienas'.split('_'),
        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'y': 'gada_gadiem_gads_gadi'.split('_'),
        'yy': 'gada_gadiem_gads_gadi'.split('_')
    };
    /**
     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
     */
    function format(forms, number, withoutSuffix) {
        if (withoutSuffix) {
            // E.g. "21 minūte", "3 minūtes".
            return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
        } else {
            // E.g. "21 minūtes" as in "pēc 21 minūtes".
            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
            return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
        }
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        return number + ' ' + format(units[key], number, withoutSuffix);
    }
    function relativeTimeWithSingular(number, withoutSuffix, key) {
        return format(units[key], number, withoutSuffix);
    }
    function relativeSeconds(number, withoutSuffix) {
        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
    }

    var lv = moment.defineLocale('lv', {
        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY.',
            LL : 'YYYY. [gada] D. MMMM',
            LLL : 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar : {
            sameDay : '[Šodien pulksten] LT',
            nextDay : '[Rīt pulksten] LT',
            nextWeek : 'dddd [pulksten] LT',
            lastDay : '[Vakar pulksten] LT',
            lastWeek : '[Pagājušā] dddd [pulksten] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'pēc %s',
            past : 'pirms %s',
            s : relativeSeconds,
            ss : relativeTimeWithPlural,
            m : relativeTimeWithSingular,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithSingular,
            hh : relativeTimeWithPlural,
            d : relativeTimeWithSingular,
            dd : relativeTimeWithPlural,
            M : relativeTimeWithSingular,
            MM : relativeTimeWithPlural,
            y : relativeTimeWithSingular,
            yy : relativeTimeWithPlural
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lv;

})));


/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var translator = {
        words: { //Different grammatical cases
            ss: ['sekund', 'sekunda', 'sekundi'],
            m: ['jedan minut', 'jednog minuta'],
            mm: ['minut', 'minuta', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mjesec', 'mjeseca', 'mjeseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var me = moment.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact : true,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sjutra u] LT',

            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juče u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[prošle] [nedjelje] [u] LT',
                    '[prošlog] [ponedjeljka] [u] LT',
                    '[prošlog] [utorka] [u] LT',
                    '[prošle] [srijede] [u] LT',
                    '[prošlog] [četvrtka] [u] LT',
                    '[prošlog] [petka] [u] LT',
                    '[prošle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'nekoliko sekundi',
            ss     : translator.translate,
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'dan',
            dd     : translator.translate,
            M      : 'mjesec',
            MM     : translator.translate,
            y      : 'godinu',
            yy     : translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return me;

})));


/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var mi = moment.defineLocale('mi', {
        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [i] HH:mm',
            LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
        },
        calendar: {
            sameDay: '[i teie mahana, i] LT',
            nextDay: '[apopo i] LT',
            nextWeek: 'dddd [i] LT',
            lastDay: '[inanahi i] LT',
            lastWeek: 'dddd [whakamutunga i] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'i roto i %s',
            past: '%s i mua',
            s: 'te hēkona ruarua',
            ss: '%d hēkona',
            m: 'he meneti',
            mm: '%d meneti',
            h: 'te haora',
            hh: '%d haora',
            d: 'he ra',
            dd: '%d ra',
            M: 'he marama',
            MM: '%d marama',
            y: 'he tau',
            yy: '%d tau'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return mi;

})));


/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var mk = moment.defineLocale('mk', {
        months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Денес во] LT',
            nextDay : '[Утре во] LT',
            nextWeek : '[Во] dddd [во] LT',
            lastDay : '[Вчера во] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[Изминатата] dddd [во] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[Изминатиот] dddd [во] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'после %s',
            past : 'пред %s',
            s : 'неколку секунди',
            ss : '%d секунди',
            m : 'минута',
            mm : '%d минути',
            h : 'час',
            hh : '%d часа',
            d : 'ден',
            dd : '%d дена',
            M : 'месец',
            MM : '%d месеци',
            y : 'година',
            yy : '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-ев';
            } else if (last2Digits === 0) {
                return number + '-ен';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
            } else if (lastDigit === 1) {
                return number + '-ви';
            } else if (lastDigit === 2) {
                return number + '-ри';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
            } else {
                return number + '-ти';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return mk;

})));


/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ml = moment.defineLocale('ml', {
        months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        monthsParseExact : true,
        weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm -നു',
            LTS : 'A h:mm:ss -നു',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm -നു',
            LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
        },
        calendar : {
            sameDay : '[ഇന്ന്] LT',
            nextDay : '[നാളെ] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[ഇന്നലെ] LT',
            lastWeek : '[കഴിഞ്ഞ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s കഴിഞ്ഞ്',
            past : '%s മുൻപ്',
            s : 'അൽപ നിമിഷങ്ങൾ',
            ss : '%d സെക്കൻഡ്',
            m : 'ഒരു മിനിറ്റ്',
            mm : '%d മിനിറ്റ്',
            h : 'ഒരു മണിക്കൂർ',
            hh : '%d മണിക്കൂർ',
            d : 'ഒരു ദിവസം',
            dd : '%d ദിവസം',
            M : 'ഒരു മാസം',
            MM : '%d മാസം',
            y : 'ഒരു വർഷം',
            yy : '%d വർഷം'
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'രാത്രി' && hour >= 4) ||
                    meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
                    meridiem === 'വൈകുന്നേരം') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'രാത്രി';
            } else if (hour < 12) {
                return 'രാവിലെ';
            } else if (hour < 17) {
                return 'ഉച്ച കഴിഞ്ഞ്';
            } else if (hour < 20) {
                return 'വൈകുന്നേരം';
            } else {
                return 'രാത്രി';
            }
        }
    });

    return ml;

})));


/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function translate(number, withoutSuffix, key, isFuture) {
        switch (key) {
            case 's':
                return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
            case 'ss':
                return number + (withoutSuffix ? ' секунд' : ' секундын');
            case 'm':
            case 'mm':
                return number + (withoutSuffix ? ' минут' : ' минутын');
            case 'h':
            case 'hh':
                return number + (withoutSuffix ? ' цаг' : ' цагийн');
            case 'd':
            case 'dd':
                return number + (withoutSuffix ? ' өдөр' : ' өдрийн');
            case 'M':
            case 'MM':
                return number + (withoutSuffix ? ' сар' : ' сарын');
            case 'y':
            case 'yy':
                return number + (withoutSuffix ? ' жил' : ' жилийн');
            default:
                return number;
        }
    }

    var mn = moment.defineLocale('mn', {
        months : 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort : '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact : true,
        weekdays : 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort : 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin : 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY оны MMMMын D',
            LLL : 'YYYY оны MMMMын D HH:mm',
            LLLL : 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM : function (input) {
            return input === 'ҮХ';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ҮӨ';
            } else {
                return 'ҮХ';
            }
        },
        calendar : {
            sameDay : '[Өнөөдөр] LT',
            nextDay : '[Маргааш] LT',
            nextWeek : '[Ирэх] dddd LT',
            lastDay : '[Өчигдөр] LT',
            lastWeek : '[Өнгөрсөн] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s дараа',
            past : '%s өмнө',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + ' өдөр';
                default:
                    return number;
            }
        }
    });

    return mn;

})));


/***/ }),

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    function relativeTimeMr(number, withoutSuffix, string, isFuture)
    {
        var output = '';
        if (withoutSuffix) {
            switch (string) {
                case 's': output = 'काही सेकंद'; break;
                case 'ss': output = '%d सेकंद'; break;
                case 'm': output = 'एक मिनिट'; break;
                case 'mm': output = '%d मिनिटे'; break;
                case 'h': output = 'एक तास'; break;
                case 'hh': output = '%d तास'; break;
                case 'd': output = 'एक दिवस'; break;
                case 'dd': output = '%d दिवस'; break;
                case 'M': output = 'एक महिना'; break;
                case 'MM': output = '%d महिने'; break;
                case 'y': output = 'एक वर्ष'; break;
                case 'yy': output = '%d वर्षे'; break;
            }
        }
        else {
            switch (string) {
                case 's': output = 'काही सेकंदां'; break;
                case 'ss': output = '%d सेकंदां'; break;
                case 'm': output = 'एका मिनिटा'; break;
                case 'mm': output = '%d मिनिटां'; break;
                case 'h': output = 'एका तासा'; break;
                case 'hh': output = '%d तासां'; break;
                case 'd': output = 'एका दिवसा'; break;
                case 'dd': output = '%d दिवसां'; break;
                case 'M': output = 'एका महिन्या'; break;
                case 'MM': output = '%d महिन्यां'; break;
                case 'y': output = 'एका वर्षा'; break;
                case 'yy': output = '%d वर्षां'; break;
            }
        }
        return output.replace(/%d/i, number);
    }

    var mr = moment.defineLocale('mr', {
        months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact : true,
        weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat : {
            LT : 'A h:mm वाजता',
            LTS : 'A h:mm:ss वाजता',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm वाजता',
            LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[उद्या] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[काल] LT',
            lastWeek: '[मागील] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future: '%sमध्ये',
            past: '%sपूर्वी',
            s: relativeTimeMr,
            ss: relativeTimeMr,
            m: relativeTimeMr,
            mm: relativeTimeMr,
            h: relativeTimeMr,
            hh: relativeTimeMr,
            d: relativeTimeMr,
            dd: relativeTimeMr,
            M: relativeTimeMr,
            MM: relativeTimeMr,
            y: relativeTimeMr,
            yy: relativeTimeMr
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात्री') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सकाळी') {
                return hour;
            } else if (meridiem === 'दुपारी') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'सायंकाळी') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात्री';
            } else if (hour < 10) {
                return 'सकाळी';
            } else if (hour < 17) {
                return 'दुपारी';
            } else if (hour < 20) {
                return 'सायंकाळी';
            } else {
                return 'रात्री';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return mr;

})));


/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ms = moment.defineLocale('ms', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            ss : '%d saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return ms;

})));


/***/ }),

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var msMy = moment.defineLocale('ms-my', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            ss : '%d saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return msMy;

})));


/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var mt = moment.defineLocale('mt', {
        months : 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
        monthsShort : 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
        weekdays : 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
        weekdaysShort : 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
        weekdaysMin : 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Illum fil-]LT',
            nextDay : '[Għada fil-]LT',
            nextWeek : 'dddd [fil-]LT',
            lastDay : '[Il-bieraħ fil-]LT',
            lastWeek : 'dddd [li għadda] [fil-]LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'f’ %s',
            past : '%s ilu',
            s : 'ftit sekondi',
            ss : '%d sekondi',
            m : 'minuta',
            mm : '%d minuti',
            h : 'siegħa',
            hh : '%d siegħat',
            d : 'ġurnata',
            dd : '%d ġranet',
            M : 'xahar',
            MM : '%d xhur',
            y : 'sena',
            yy : '%d sni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return mt;

})));


/***/ }),

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '၁',
        '2': '၂',
        '3': '၃',
        '4': '၄',
        '5': '၅',
        '6': '၆',
        '7': '၇',
        '8': '၈',
        '9': '၉',
        '0': '၀'
    }, numberMap = {
        '၁': '1',
        '၂': '2',
        '၃': '3',
        '၄': '4',
        '၅': '5',
        '၆': '6',
        '၇': '7',
        '၈': '8',
        '၉': '9',
        '၀': '0'
    };

    var my = moment.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[ယနေ.] LT [မှာ]',
            nextDay: '[မနက်ဖြန်] LT [မှာ]',
            nextWeek: 'dddd LT [မှာ]',
            lastDay: '[မနေ.က] LT [မှာ]',
            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'လာမည့် %s မှာ',
            past: 'လွန်ခဲ့သော %s က',
            s: 'စက္ကန်.အနည်းငယ်',
            ss : '%d စက္ကန့်',
            m: 'တစ်မိနစ်',
            mm: '%d မိနစ်',
            h: 'တစ်နာရီ',
            hh: '%d နာရီ',
            d: 'တစ်ရက်',
            dd: '%d ရက်',
            M: 'တစ်လ',
            MM: '%d လ',
            y: 'တစ်နှစ်',
            yy: '%d နှစ်'
        },
        preparse: function (string) {
            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return my;

})));


/***/ }),

/***/ 1137:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var nb = moment.defineLocale('nb', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact : true,
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] HH:mm',
            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'noen sekunder',
            ss : '%d sekunder',
            m : 'ett minutt',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dager',
            M : 'en måned',
            MM : '%d måneder',
            y : 'ett år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nb;

})));


/***/ }),

/***/ 1138:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    var ne = moment.defineLocale('ne', {
        months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        monthsParseExact : true,
        weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'Aको h:mm बजे',
            LTS : 'Aको h:mm:ss बजे',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, Aको h:mm बजे',
            LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'राति') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'बिहान') {
                return hour;
            } else if (meridiem === 'दिउँसो') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'साँझ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 3) {
                return 'राति';
            } else if (hour < 12) {
                return 'बिहान';
            } else if (hour < 16) {
                return 'दिउँसो';
            } else if (hour < 20) {
                return 'साँझ';
            } else {
                return 'राति';
            }
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[भोलि] LT',
            nextWeek : '[आउँदो] dddd[,] LT',
            lastDay : '[हिजो] LT',
            lastWeek : '[गएको] dddd[,] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sमा',
            past : '%s अगाडि',
            s : 'केही क्षण',
            ss : '%d सेकेण्ड',
            m : 'एक मिनेट',
            mm : '%d मिनेट',
            h : 'एक घण्टा',
            hh : '%d घण्टा',
            d : 'एक दिन',
            dd : '%d दिन',
            M : 'एक महिना',
            MM : '%d महिना',
            y : 'एक बर्ष',
            yy : '%d बर्ष'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return ne;

})));


/***/ }),

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

    var nl = moment.defineLocale('nl', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },

        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,

        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            ss : '%d seconden',
            m : 'één minuut',
            mm : '%d minuten',
            h : 'één uur',
            hh : '%d uur',
            d : 'één dag',
            dd : '%d dagen',
            M : 'één maand',
            MM : '%d maanden',
            y : 'één jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nl;

})));


/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

    var nlBe = moment.defineLocale('nl-be', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },

        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,

        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            ss : '%d seconden',
            m : 'één minuut',
            mm : '%d minuten',
            h : 'één uur',
            hh : '%d uur',
            d : 'één dag',
            dd : '%d dagen',
            M : 'één maand',
            MM : '%d maanden',
            y : 'één jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nlBe;

})));


/***/ }),

/***/ 1141:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var nn = moment.defineLocale('nn', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I går klokka] LT',
            lastWeek: '[Føregåande] dddd [klokka] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s sidan',
            s : 'nokre sekund',
            ss : '%d sekund',
            m : 'eit minutt',
            mm : '%d minutt',
            h : 'ein time',
            hh : '%d timar',
            d : 'ein dag',
            dd : '%d dagar',
            M : 'ein månad',
            MM : '%d månader',
            y : 'eit år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nn;

})));


/***/ }),

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '੧',
        '2': '੨',
        '3': '੩',
        '4': '੪',
        '5': '੫',
        '6': '੬',
        '7': '੭',
        '8': '੮',
        '9': '੯',
        '0': '੦'
    },
    numberMap = {
        '੧': '1',
        '੨': '2',
        '੩': '3',
        '੪': '4',
        '੫': '5',
        '੬': '6',
        '੭': '7',
        '੮': '8',
        '੯': '9',
        '੦': '0'
    };

    var paIn = moment.defineLocale('pa-in', {
        // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
        months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
        weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm ਵਜੇ',
            LTS : 'A h:mm:ss ਵਜੇ',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
            LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
        },
        calendar : {
            sameDay : '[ਅਜ] LT',
            nextDay : '[ਕਲ] LT',
            nextWeek : '[ਅਗਲਾ] dddd, LT',
            lastDay : '[ਕਲ] LT',
            lastWeek : '[ਪਿਛਲੇ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ਵਿੱਚ',
            past : '%s ਪਿਛਲੇ',
            s : 'ਕੁਝ ਸਕਿੰਟ',
            ss : '%d ਸਕਿੰਟ',
            m : 'ਇਕ ਮਿੰਟ',
            mm : '%d ਮਿੰਟ',
            h : 'ਇੱਕ ਘੰਟਾ',
            hh : '%d ਘੰਟੇ',
            d : 'ਇੱਕ ਦਿਨ',
            dd : '%d ਦਿਨ',
            M : 'ਇੱਕ ਮਹੀਨਾ',
            MM : '%d ਮਹੀਨੇ',
            y : 'ਇੱਕ ਸਾਲ',
            yy : '%d ਸਾਲ'
        },
        preparse: function (string) {
            return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ਰਾਤ') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ਸਵੇਰ') {
                return hour;
            } else if (meridiem === 'ਦੁਪਹਿਰ') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'ਸ਼ਾਮ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ਰਾਤ';
            } else if (hour < 10) {
                return 'ਸਵੇਰ';
            } else if (hour < 17) {
                return 'ਦੁਪਹਿਰ';
            } else if (hour < 20) {
                return 'ਸ਼ਾਮ';
            } else {
                return 'ਰਾਤ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return paIn;

})));


/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    function plural(n) {
        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
    }
    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                return result + (plural(number) ? 'sekundy' : 'sekund');
            case 'm':
                return withoutSuffix ? 'minuta' : 'minutę';
            case 'mm':
                return result + (plural(number) ? 'minuty' : 'minut');
            case 'h':
                return withoutSuffix  ? 'godzina'  : 'godzinę';
            case 'hh':
                return result + (plural(number) ? 'godziny' : 'godzin');
            case 'MM':
                return result + (plural(number) ? 'miesiące' : 'miesięcy');
            case 'yy':
                return result + (plural(number) ? 'lata' : 'lat');
        }
    }

    var pl = moment.defineLocale('pl', {
        months : function (momentToFormat, format) {
            if (!momentToFormat) {
                return monthsNominative;
            } else if (format === '') {
                // Hack: if format empty we know this is used to generate
                // RegExp by moment. Give then back both valid forms of months
                // in RegExp ready format.
                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
            } else if (/D MMMM/.test(format)) {
                return monthsSubjective[momentToFormat.month()];
            } else {
                return monthsNominative[momentToFormat.month()];
            }
        },
        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort : 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin : 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W niedzielę o] LT';

                    case 2:
                        return '[We wtorek o] LT';

                    case 3:
                        return '[W środę o] LT';

                    case 6:
                        return '[W sobotę o] LT';

                    default:
                        return '[W] dddd [o] LT';
                }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W zeszłą niedzielę o] LT';
                    case 3:
                        return '[W zeszłą środę o] LT';
                    case 6:
                        return '[W zeszłą sobotę o] LT';
                    default:
                        return '[W zeszły] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : '%s temu',
            s : 'kilka sekund',
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : '1 dzień',
            dd : '%d dni',
            M : 'miesiąc',
            MM : translate,
            y : 'rok',
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return pl;

})));


/***/ }),

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var pt = moment.defineLocale('pt', {
        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'há %s',
            s : 'segundos',
            ss : '%d segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return pt;

})));


/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ptBr = moment.defineLocale('pt-br', {
        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'há %s',
            s : 'poucos segundos',
            ss : '%d segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal : '%dº'
    });

    return ptBr;

})));


/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
                'ss': 'secunde',
                'mm': 'minute',
                'hh': 'ore',
                'dd': 'zile',
                'MM': 'luni',
                'yy': 'ani'
            },
            separator = ' ';
        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
            separator = ' de ';
        }
        return number + separator + format[key];
    }

    var ro = moment.defineLocale('ro', {
        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'peste %s',
            past : '%s în urmă',
            s : 'câteva secunde',
            ss : relativeTimeWithPlural,
            m : 'un minut',
            mm : relativeTimeWithPlural,
            h : 'o oră',
            hh : relativeTimeWithPlural,
            d : 'o zi',
            dd : relativeTimeWithPlural,
            M : 'o lună',
            MM : relativeTimeWithPlural,
            y : 'un an',
            yy : relativeTimeWithPlural
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return ro;

})));


/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            'hh': 'час_часа_часов',
            'dd': 'день_дня_дней',
            'MM': 'месяц_месяца_месяцев',
            'yy': 'год_года_лет'
        };
        if (key === 'm') {
            return withoutSuffix ? 'минута' : 'минуту';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }
    var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

    // http://new.gramota.ru/spravka/rules/139-prop : § 103
    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    var ru = moment.defineLocale('ru', {
        months : {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort : {
            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays : {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,

        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

        // Выражение, которое соотвествует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY г.',
            LLL : 'D MMMM YYYY г., H:mm',
            LLLL : 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar : {
            sameDay: '[Сегодня, в] LT',
            nextDay: '[Завтра, в] LT',
            lastDay: '[Вчера, в] LT',
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[В следующее] dddd, [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В следующий] dddd, [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В следующую] dddd, [в] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd, [в] LT';
                    } else {
                        return '[В] dddd, [в] LT';
                    }
                }
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[В прошлое] dddd, [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В прошлый] dddd, [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В прошлую] dddd, [в] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd, [в] LT';
                    } else {
                        return '[В] dddd, [в] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'через %s',
            past : '%s назад',
            s : 'несколько секунд',
            ss : relativeTimeWithPlural,
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : 'час',
            hh : relativeTimeWithPlural,
            d : 'день',
            dd : relativeTimeWithPlural,
            M : 'месяц',
            MM : relativeTimeWithPlural,
            y : 'год',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM : function (input) {
            return /^(дня|вечера)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночи';
            } else if (hour < 12) {
                return 'утра';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечера';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                    return number + '-й';
                case 'D':
                    return number + '-го';
                case 'w':
                case 'W':
                    return number + '-я';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ru;

})));


/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = [
        'جنوري',
        'فيبروري',
        'مارچ',
        'اپريل',
        'مئي',
        'جون',
        'جولاءِ',
        'آگسٽ',
        'سيپٽمبر',
        'آڪٽوبر',
        'نومبر',
        'ڊسمبر'
    ];
    var days = [
        'آچر',
        'سومر',
        'اڱارو',
        'اربع',
        'خميس',
        'جمع',
        'ڇنڇر'
    ];

    var sd = moment.defineLocale('sd', {
        months : months,
        monthsShort : months,
        weekdays : days,
        weekdaysShort : days,
        weekdaysMin : days,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd، D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM : function (input) {
            return 'شام' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'صبح';
            }
            return 'شام';
        },
        calendar : {
            sameDay : '[اڄ] LT',
            nextDay : '[سڀاڻي] LT',
            nextWeek : 'dddd [اڳين هفتي تي] LT',
            lastDay : '[ڪالهه] LT',
            lastWeek : '[گزريل هفتي] dddd [تي] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s پوء',
            past : '%s اڳ',
            s : 'چند سيڪنڊ',
            ss : '%d سيڪنڊ',
            m : 'هڪ منٽ',
            mm : '%d منٽ',
            h : 'هڪ ڪلاڪ',
            hh : '%d ڪلاڪ',
            d : 'هڪ ڏينهن',
            dd : '%d ڏينهن',
            M : 'هڪ مهينو',
            MM : '%d مهينا',
            y : 'هڪ سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sd;

})));


/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var se = moment.defineLocale('se', {
        months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
        monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
        weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'MMMM D. [b.] YYYY',
            LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
            LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
        },
        calendar : {
            sameDay: '[otne ti] LT',
            nextDay: '[ihttin ti] LT',
            nextWeek: 'dddd [ti] LT',
            lastDay: '[ikte ti] LT',
            lastWeek: '[ovddit] dddd [ti] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s geažes',
            past : 'maŋit %s',
            s : 'moadde sekunddat',
            ss: '%d sekunddat',
            m : 'okta minuhta',
            mm : '%d minuhtat',
            h : 'okta diimmu',
            hh : '%d diimmut',
            d : 'okta beaivi',
            dd : '%d beaivvit',
            M : 'okta mánnu',
            MM : '%d mánut',
            y : 'okta jahki',
            yy : '%d jagit'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return se;

})));


/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    /*jshint -W100*/
    var si = moment.defineLocale('si', {
        months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
        monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'a h:mm',
            LTS : 'a h:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY MMMM D',
            LLL : 'YYYY MMMM D, a h:mm',
            LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
        },
        calendar : {
            sameDay : '[අද] LT[ට]',
            nextDay : '[හෙට] LT[ට]',
            nextWeek : 'dddd LT[ට]',
            lastDay : '[ඊයේ] LT[ට]',
            lastWeek : '[පසුගිය] dddd LT[ට]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sකින්',
            past : '%sකට පෙර',
            s : 'තත්පර කිහිපය',
            ss : 'තත්පර %d',
            m : 'මිනිත්තුව',
            mm : 'මිනිත්තු %d',
            h : 'පැය',
            hh : 'පැය %d',
            d : 'දිනය',
            dd : 'දින %d',
            M : 'මාසය',
            MM : 'මාස %d',
            y : 'වසර',
            yy : 'වසර %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal : function (number) {
            return number + ' වැනි';
        },
        meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM : function (input) {
            return input === 'ප.ව.' || input === 'පස් වරු';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'ප.ව.' : 'පස් වරු';
            } else {
                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
            }
        }
    });

    return si;

})));


/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    function plural(n) {
        return (n > 1) && (n < 5);
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':  // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
            case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'sekundy' : 'sekúnd');
                } else {
                    return result + 'sekundami';
                }
                break;
            case 'm':  // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'minúty' : 'minút');
                } else {
                    return result + 'minútami';
                }
                break;
            case 'h':  // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh': // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'hodiny' : 'hodín');
                } else {
                    return result + 'hodinami';
                }
                break;
            case 'd':  // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
            case 'dd': // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'dni' : 'dní');
                } else {
                    return result + 'dňami';
                }
                break;
            case 'M':  // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
            case 'MM': // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'mesiace' : 'mesiacov');
                } else {
                    return result + 'mesiacmi';
                }
                break;
            case 'y':  // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
            case 'yy': // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'roky' : 'rokov');
                } else {
                    return result + 'rokmi';
                }
                break;
        }
    }

    var sk = moment.defineLocale('sk', {
        months : months,
        monthsShort : monthsShort,
        weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [o] LT';
                    case 3:
                        return '[v stredu o] LT';
                    case 4:
                        return '[vo štvrtok o] LT';
                    case 5:
                        return '[v piatok o] LT';
                    case 6:
                        return '[v sobotu o] LT';
                }
            },
            lastDay: '[včera o] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[minulú nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[minulý] dddd [o] LT';
                    case 3:
                        return '[minulú stredu o] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [o] LT';
                    case 6:
                        return '[minulú sobotu o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'pred %s',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sk;

})));


/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':
                return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
            case 'ss':
                if (number === 1) {
                    result += withoutSuffix ? 'sekundo' : 'sekundi';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
                } else {
                    result += 'sekund';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'ena minuta' : 'eno minuto';
            case 'mm':
                if (number === 1) {
                    result += withoutSuffix ? 'minuta' : 'minuto';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'minute' : 'minutami';
                } else {
                    result += withoutSuffix || isFuture ? 'minut' : 'minutami';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'ena ura' : 'eno uro';
            case 'hh':
                if (number === 1) {
                    result += withoutSuffix ? 'ura' : 'uro';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'uri' : 'urama';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'ure' : 'urami';
                } else {
                    result += withoutSuffix || isFuture ? 'ur' : 'urami';
                }
                return result;
            case 'd':
                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
            case 'dd':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'dan' : 'dnem';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
                } else {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
                }
                return result;
            case 'M':
                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
            case 'MM':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
                } else {
                    result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
                }
                return result;
            case 'y':
                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
            case 'yy':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'leto' : 'letom';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'leti' : 'letoma';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'leta' : 'leti';
                } else {
                    result += withoutSuffix || isFuture ? 'let' : 'leti';
                }
                return result;
        }
    }

    var sl = moment.defineLocale('sl', {
        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danes ob] LT',
            nextDay  : '[jutri ob] LT',

            nextWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[v] [nedeljo] [ob] LT';
                    case 3:
                        return '[v] [sredo] [ob] LT';
                    case 6:
                        return '[v] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[v] dddd [ob] LT';
                }
            },
            lastDay  : '[včeraj ob] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[prejšnjo] [nedeljo] [ob] LT';
                    case 3:
                        return '[prejšnjo] [sredo] [ob] LT';
                    case 6:
                        return '[prejšnjo] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prejšnji] dddd [ob] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'čez %s',
            past   : 'pred %s',
            s      : processRelativeTime,
            ss     : processRelativeTime,
            m      : processRelativeTime,
            mm     : processRelativeTime,
            h      : processRelativeTime,
            hh     : processRelativeTime,
            d      : processRelativeTime,
            dd     : processRelativeTime,
            M      : processRelativeTime,
            MM     : processRelativeTime,
            y      : processRelativeTime,
            yy     : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return sl;

})));


/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var sq = moment.defineLocale('sq', {
        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
        weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
        weekdaysParseExact : true,
        meridiemParse: /PD|MD/,
        isPM: function (input) {
            return input.charAt(0) === 'M';
        },
        meridiem : function (hours, minutes, isLower) {
            return hours < 12 ? 'PD' : 'MD';
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Sot në] LT',
            nextDay : '[Nesër në] LT',
            nextWeek : 'dddd [në] LT',
            lastDay : '[Dje në] LT',
            lastWeek : 'dddd [e kaluar në] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'në %s',
            past : '%s më parë',
            s : 'disa sekonda',
            ss : '%d sekonda',
            m : 'një minutë',
            mm : '%d minuta',
            h : 'një orë',
            hh : '%d orë',
            d : 'një ditë',
            dd : '%d ditë',
            M : 'një muaj',
            MM : '%d muaj',
            y : 'një vit',
            yy : '%d vite'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sq;

})));


/***/ }),

/***/ 1154:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var translator = {
        words: { //Different grammatical cases
            ss: ['sekunda', 'sekunde', 'sekundi'],
            m: ['jedan minut', 'jedne minute'],
            mm: ['minut', 'minute', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mesec', 'meseca', 'meseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var sr = moment.defineLocale('sr', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedelju] [u] LT';
                    case 3:
                        return '[u] [sredu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juče u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[prošle] [nedelje] [u] LT',
                    '[prošlog] [ponedeljka] [u] LT',
                    '[prošlog] [utorka] [u] LT',
                    '[prošle] [srede] [u] LT',
                    '[prošlog] [četvrtka] [u] LT',
                    '[prošlog] [petka] [u] LT',
                    '[prošle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'pre %s',
            s      : 'nekoliko sekundi',
            ss     : translator.translate,
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'dan',
            dd     : translator.translate,
            M      : 'mesec',
            MM     : translator.translate,
            y      : 'godinu',
            yy     : translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return sr;

})));


/***/ }),

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var translator = {
        words: { //Different grammatical cases
            ss: ['секунда', 'секунде', 'секунди'],
            m: ['један минут', 'једне минуте'],
            mm: ['минут', 'минуте', 'минута'],
            h: ['један сат', 'једног сата'],
            hh: ['сат', 'сата', 'сати'],
            dd: ['дан', 'дана', 'дана'],
            MM: ['месец', 'месеца', 'месеци'],
            yy: ['година', 'године', 'година']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var srCyrl = moment.defineLocale('sr-cyrl', {
        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
        monthsParseExact: true,
        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[данас у] LT',
            nextDay: '[сутра у] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[у] [недељу] [у] LT';
                    case 3:
                        return '[у] [среду] [у] LT';
                    case 6:
                        return '[у] [суботу] [у] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[у] dddd [у] LT';
                }
            },
            lastDay  : '[јуче у] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[прошле] [недеље] [у] LT',
                    '[прошлог] [понедељка] [у] LT',
                    '[прошлог] [уторка] [у] LT',
                    '[прошле] [среде] [у] LT',
                    '[прошлог] [четвртка] [у] LT',
                    '[прошлог] [петка] [у] LT',
                    '[прошле] [суботе] [у] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'за %s',
            past   : 'пре %s',
            s      : 'неколико секунди',
            ss     : translator.translate,
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'дан',
            dd     : translator.translate,
            M      : 'месец',
            MM     : translator.translate,
            y      : 'годину',
            yy     : translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return srCyrl;

})));


/***/ }),

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ss = moment.defineLocale('ss', {
        months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
        monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
        weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
        weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
        weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Namuhla nga] LT',
            nextDay : '[Kusasa nga] LT',
            nextWeek : 'dddd [nga] LT',
            lastDay : '[Itolo nga] LT',
            lastWeek : 'dddd [leliphelile] [nga] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'nga %s',
            past : 'wenteka nga %s',
            s : 'emizuzwana lomcane',
            ss : '%d mzuzwana',
            m : 'umzuzu',
            mm : '%d emizuzu',
            h : 'lihora',
            hh : '%d emahora',
            d : 'lilanga',
            dd : '%d emalanga',
            M : 'inyanga',
            MM : '%d tinyanga',
            y : 'umnyaka',
            yy : '%d iminyaka'
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'ekuseni';
            } else if (hours < 15) {
                return 'emini';
            } else if (hours < 19) {
                return 'entsambama';
            } else {
                return 'ebusuku';
            }
        },
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ekuseni') {
                return hour;
            } else if (meridiem === 'emini') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
                if (hour === 0) {
                    return 0;
                }
                return hour + 12;
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal : '%d',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ss;

})));


/***/ }),

/***/ 1157:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var sv = moment.defineLocale('sv', {
        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [kl.] HH:mm',
            LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : 'för %s sedan',
            s : 'några sekunder',
            ss : '%d sekunder',
            m : 'en minut',
            mm : '%d minuter',
            h : 'en timme',
            hh : '%d timmar',
            d : 'en dag',
            dd : '%d dagar',
            M : 'en månad',
            MM : '%d månader',
            y : 'ett år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'e' :
                (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                (b === 3) ? 'e' : 'e';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sv;

})));


/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var sw = moment.defineLocale('sw', {
        months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[leo saa] LT',
            nextDay : '[kesho saa] LT',
            nextWeek : '[wiki ijayo] dddd [saat] LT',
            lastDay : '[jana] LT',
            lastWeek : '[wiki iliyopita] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s baadaye',
            past : 'tokea %s',
            s : 'hivi punde',
            ss : 'sekunde %d',
            m : 'dakika moja',
            mm : 'dakika %d',
            h : 'saa limoja',
            hh : 'masaa %d',
            d : 'siku moja',
            dd : 'masiku %d',
            M : 'mwezi mmoja',
            MM : 'miezi %d',
            y : 'mwaka mmoja',
            yy : 'miaka %d'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return sw;

})));


/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '௧',
        '2': '௨',
        '3': '௩',
        '4': '௪',
        '5': '௫',
        '6': '௬',
        '7': '௭',
        '8': '௮',
        '9': '௯',
        '0': '௦'
    }, numberMap = {
        '௧': '1',
        '௨': '2',
        '௩': '3',
        '௪': '4',
        '௫': '5',
        '௬': '6',
        '௭': '7',
        '௮': '8',
        '௯': '9',
        '௦': '0'
    };

    var ta = moment.defineLocale('ta', {
        months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, HH:mm',
            LLLL : 'dddd, D MMMM YYYY, HH:mm'
        },
        calendar : {
            sameDay : '[இன்று] LT',
            nextDay : '[நாளை] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[நேற்று] LT',
            lastWeek : '[கடந்த வாரம்] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s இல்',
            past : '%s முன்',
            s : 'ஒரு சில விநாடிகள்',
            ss : '%d விநாடிகள்',
            m : 'ஒரு நிமிடம்',
            mm : '%d நிமிடங்கள்',
            h : 'ஒரு மணி நேரம்',
            hh : '%d மணி நேரம்',
            d : 'ஒரு நாள்',
            dd : '%d நாட்கள்',
            M : 'ஒரு மாதம்',
            MM : '%d மாதங்கள்',
            y : 'ஒரு வருடம்',
            yy : '%d ஆண்டுகள்'
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal : function (number) {
            return number + 'வது';
        },
        preparse: function (string) {
            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // refer http://ta.wikipedia.org/s/1er1
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem : function (hour, minute, isLower) {
            if (hour < 2) {
                return ' யாமம்';
            } else if (hour < 6) {
                return ' வைகறை';  // வைகறை
            } else if (hour < 10) {
                return ' காலை'; // காலை
            } else if (hour < 14) {
                return ' நண்பகல்'; // நண்பகல்
            } else if (hour < 18) {
                return ' எற்பாடு'; // எற்பாடு
            } else if (hour < 22) {
                return ' மாலை'; // மாலை
            } else {
                return ' யாமம்';
            }
        },
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'யாமம்') {
                return hour < 2 ? hour : hour + 12;
            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
                return hour;
            } else if (meridiem === 'நண்பகல்') {
                return hour >= 10 ? hour : hour + 12;
            } else {
                return hour + 12;
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return ta;

})));


/***/ }),

/***/ 1160:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var te = moment.defineLocale('te', {
        months : 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
        monthsShort : 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
        monthsParseExact : true,
        weekdays : 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
        weekdaysShort : 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
        weekdaysMin : 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[నేడు] LT',
            nextDay : '[రేపు] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[నిన్న] LT',
            lastWeek : '[గత] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s లో',
            past : '%s క్రితం',
            s : 'కొన్ని క్షణాలు',
            ss : '%d సెకన్లు',
            m : 'ఒక నిమిషం',
            mm : '%d నిమిషాలు',
            h : 'ఒక గంట',
            hh : '%d గంటలు',
            d : 'ఒక రోజు',
            dd : '%d రోజులు',
            M : 'ఒక నెల',
            MM : '%d నెలలు',
            y : 'ఒక సంవత్సరం',
            yy : '%d సంవత్సరాలు'
        },
        dayOfMonthOrdinalParse : /\d{1,2}వ/,
        ordinal : '%dవ',
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'రాత్రి') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ఉదయం') {
                return hour;
            } else if (meridiem === 'మధ్యాహ్నం') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'సాయంత్రం') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'రాత్రి';
            } else if (hour < 10) {
                return 'ఉదయం';
            } else if (hour < 17) {
                return 'మధ్యాహ్నం';
            } else if (hour < 20) {
                return 'సాయంత్రం';
            } else {
                return 'రాత్రి';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return te;

})));


/***/ }),

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var tet = moment.defineLocale('tet', {
        months : 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
        weekdaysShort : 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
        weekdaysMin : 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Ohin iha] LT',
            nextDay: '[Aban iha] LT',
            nextWeek: 'dddd [iha] LT',
            lastDay: '[Horiseik iha] LT',
            lastWeek: 'dddd [semana kotuk] [iha] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'iha %s',
            past : '%s liuba',
            s : 'minutu balun',
            ss : 'minutu %d',
            m : 'minutu ida',
            mm : 'minutu %d',
            h : 'oras ida',
            hh : 'oras %d',
            d : 'loron ida',
            dd : 'loron %d',
            M : 'fulan ida',
            MM : 'fulan %d',
            y : 'tinan ida',
            yy : 'tinan %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return tet;

})));


/***/ }),

/***/ 1162:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var suffixes = {
        0: '-ум',
        1: '-ум',
        2: '-юм',
        3: '-юм',
        4: '-ум',
        5: '-ум',
        6: '-ум',
        7: '-ум',
        8: '-ум',
        9: '-ум',
        10: '-ум',
        12: '-ум',
        13: '-ум',
        20: '-ум',
        30: '-юм',
        40: '-ум',
        50: '-ум',
        60: '-ум',
        70: '-ум',
        80: '-ум',
        90: '-ум',
        100: '-ум'
    };

    var tg = moment.defineLocale('tg', {
        months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays : 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
        weekdaysShort : 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
        weekdaysMin : 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Имрӯз соати] LT',
            nextDay : '[Пагоҳ соати] LT',
            lastDay : '[Дирӯз соати] LT',
            nextWeek : 'dddd[и] [ҳафтаи оянда соати] LT',
            lastWeek : 'dddd[и] [ҳафтаи гузашта соати] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'баъди %s',
            past : '%s пеш',
            s : 'якчанд сония',
            m : 'як дақиқа',
            mm : '%d дақиқа',
            h : 'як соат',
            hh : '%d соат',
            d : 'як рӯз',
            dd : '%d рӯз',
            M : 'як моҳ',
            MM : '%d моҳ',
            y : 'як сол',
            yy : '%d сол'
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'шаб') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'субҳ') {
                return hour;
            } else if (meridiem === 'рӯз') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'бегоҳ') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'шаб';
            } else if (hour < 11) {
                return 'субҳ';
            } else if (hour < 16) {
                return 'рӯз';
            } else if (hour < 19) {
                return 'бегоҳ';
            } else {
                return 'шаб';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1th is the first week of the year.
        }
    });

    return tg;

})));


/***/ }),

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var th = moment.defineLocale('th', {
        months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort : 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: true,
        weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
        weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY เวลา H:mm',
            LLLL : 'วันddddที่ D MMMM YYYY เวลา H:mm'
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (input) {
            return input === 'หลังเที่ยง';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ก่อนเที่ยง';
            } else {
                return 'หลังเที่ยง';
            }
        },
        calendar : {
            sameDay : '[วันนี้ เวลา] LT',
            nextDay : '[พรุ่งนี้ เวลา] LT',
            nextWeek : 'dddd[หน้า เวลา] LT',
            lastDay : '[เมื่อวานนี้ เวลา] LT',
            lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'อีก %s',
            past : '%sที่แล้ว',
            s : 'ไม่กี่วินาที',
            ss : '%d วินาที',
            m : '1 นาที',
            mm : '%d นาที',
            h : '1 ชั่วโมง',
            hh : '%d ชั่วโมง',
            d : '1 วัน',
            dd : '%d วัน',
            M : '1 เดือน',
            MM : '%d เดือน',
            y : '1 ปี',
            yy : '%d ปี'
        }
    });

    return th;

})));


/***/ }),

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var tlPh = moment.defineLocale('tl-ph', {
        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'MM/D/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY HH:mm',
            LLLL : 'dddd, MMMM DD, YYYY HH:mm'
        },
        calendar : {
            sameDay: 'LT [ngayong araw]',
            nextDay: '[Bukas ng] LT',
            nextWeek: 'LT [sa susunod na] dddd',
            lastDay: 'LT [kahapon]',
            lastWeek: 'LT [noong nakaraang] dddd',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'sa loob ng %s',
            past : '%s ang nakalipas',
            s : 'ilang segundo',
            ss : '%d segundo',
            m : 'isang minuto',
            mm : '%d minuto',
            h : 'isang oras',
            hh : '%d oras',
            d : 'isang araw',
            dd : '%d araw',
            M : 'isang buwan',
            MM : '%d buwan',
            y : 'isang taon',
            yy : '%d taon'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return tlPh;

})));


/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

    function translateFuture(output) {
        var time = output;
        time = (output.indexOf('jaj') !== -1) ?
        time.slice(0, -3) + 'leS' :
        (output.indexOf('jar') !== -1) ?
        time.slice(0, -3) + 'waQ' :
        (output.indexOf('DIS') !== -1) ?
        time.slice(0, -3) + 'nem' :
        time + ' pIq';
        return time;
    }

    function translatePast(output) {
        var time = output;
        time = (output.indexOf('jaj') !== -1) ?
        time.slice(0, -3) + 'Hu’' :
        (output.indexOf('jar') !== -1) ?
        time.slice(0, -3) + 'wen' :
        (output.indexOf('DIS') !== -1) ?
        time.slice(0, -3) + 'ben' :
        time + ' ret';
        return time;
    }

    function translate(number, withoutSuffix, string, isFuture) {
        var numberNoun = numberAsNoun(number);
        switch (string) {
            case 'ss':
                return numberNoun + ' lup';
            case 'mm':
                return numberNoun + ' tup';
            case 'hh':
                return numberNoun + ' rep';
            case 'dd':
                return numberNoun + ' jaj';
            case 'MM':
                return numberNoun + ' jar';
            case 'yy':
                return numberNoun + ' DIS';
        }
    }

    function numberAsNoun(number) {
        var hundred = Math.floor((number % 1000) / 100),
        ten = Math.floor((number % 100) / 10),
        one = number % 10,
        word = '';
        if (hundred > 0) {
            word += numbersNouns[hundred] + 'vatlh';
        }
        if (ten > 0) {
            word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
        }
        if (one > 0) {
            word += ((word !== '') ? ' ' : '') + numbersNouns[one];
        }
        return (word === '') ? 'pagh' : word;
    }

    var tlh = moment.defineLocale('tlh', {
        months : 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
        monthsShort : 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
        monthsParseExact : true,
        weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[DaHjaj] LT',
            nextDay: '[wa’leS] LT',
            nextWeek: 'LLL',
            lastDay: '[wa’Hu’] LT',
            lastWeek: 'LLL',
            sameElse: 'L'
        },
        relativeTime : {
            future : translateFuture,
            past : translatePast,
            s : 'puS lup',
            ss : translate,
            m : 'wa’ tup',
            mm : translate,
            h : 'wa’ rep',
            hh : translate,
            d : 'wa’ jaj',
            dd : translate,
            M : 'wa’ jar',
            MM : translate,
            y : 'wa’ DIS',
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return tlh;

})));


/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {


;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';

    var suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'üncü',
        4: '\'üncü',
        100: '\'üncü',
        6: '\'ncı',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'ıncı',
        90: '\'ıncı'
    };

    var tr = moment.defineLocale('tr', {
        months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugün saat] LT',
            nextDay : '[yarın saat] LT',
            nextWeek : '[gelecek] dddd [saat] LT',
            lastDay : '[dün] LT',
            lastWeek : '[geçen] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s önce',
            s : 'birkaç saniye',
            ss : '%d saniye',
            m : 'bir dakika',
            mm : '%d dakika',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gün',
            dd : '%d gün',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir yıl',
            yy : '%d yıl'
        },
        ordinal: function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'Do':
                case 'DD':
                    return number;
                default:
                    if (number === 0) {  // special case for zero
                        return number + '\'ıncı';
                    }
                    var a = number % 10,
                        b = number % 100 - a,
                        c = number >= 100 ? 100 : null;
                    return number + (suffixes[a] || suffixes[b] || suffixes[c]);
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return tr;

})));


/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
    // This is currently too difficult (maybe even impossible) to add.
    var tzl = moment.defineLocale('tzl', {
        months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM [dallas] YYYY',
            LLL : 'D. MMMM [dallas] YYYY HH.mm',
            LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM : function (input) {
            return 'd\'o' === input.toLowerCase();
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'd\'o' : 'D\'O';
            } else {
                return isLower ? 'd\'a' : 'D\'A';
            }
        },
        calendar : {
            sameDay : '[oxhi à] LT',
            nextDay : '[demà à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[ieiri à] LT',
            lastWeek : '[sür el] dddd [lasteu à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'osprei %s',
            past : 'ja%s',
            s : processRelativeTime,
            ss : processRelativeTime,
            m : processRelativeTime,
            mm : processRelativeTime,
            h : processRelativeTime,
            hh : processRelativeTime,
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's': ['viensas secunds', '\'iensas secunds'],
            'ss': [number + ' secunds', '' + number + ' secunds'],
            'm': ['\'n míut', '\'iens míut'],
            'mm': [number + ' míuts', '' + number + ' míuts'],
            'h': ['\'n þora', '\'iensa þora'],
            'hh': [number + ' þoras', '' + number + ' þoras'],
            'd': ['\'n ziua', '\'iensa ziua'],
            'dd': [number + ' ziuas', '' + number + ' ziuas'],
            'M': ['\'n mes', '\'iens mes'],
            'MM': [number + ' mesen', '' + number + ' mesen'],
            'y': ['\'n ar', '\'iens ar'],
            'yy': [number + ' ars', '' + number + ' ars']
        };
        return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
    }

    return tzl;

})));


/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var tzm = moment.defineLocale('tzm', {
        months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
            nextWeek: 'dddd [ⴴ] LT',
            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
            lastWeek: 'dddd [ⴴ] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
            past : 'ⵢⴰⵏ %s',
            s : 'ⵉⵎⵉⴽ',
            ss : '%d ⵉⵎⵉⴽ',
            m : 'ⵎⵉⵏⵓⴺ',
            mm : '%d ⵎⵉⵏⵓⴺ',
            h : 'ⵙⴰⵄⴰ',
            hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
            d : 'ⴰⵙⵙ',
            dd : '%d oⵙⵙⴰⵏ',
            M : 'ⴰⵢoⵓⵔ',
            MM : '%d ⵉⵢⵢⵉⵔⵏ',
            y : 'ⴰⵙⴳⴰⵙ',
            yy : '%d ⵉⵙⴳⴰⵙⵏ'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return tzm;

})));


/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var tzmLatn = moment.defineLocale('tzm-latn', {
        months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[asdkh g] LT',
            nextDay: '[aska g] LT',
            nextWeek: 'dddd [g] LT',
            lastDay: '[assant g] LT',
            lastWeek: 'dddd [g] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dadkh s yan %s',
            past : 'yan %s',
            s : 'imik',
            ss : '%d imik',
            m : 'minuḍ',
            mm : '%d minuḍ',
            h : 'saɛa',
            hh : '%d tassaɛin',
            d : 'ass',
            dd : '%d ossan',
            M : 'ayowr',
            MM : '%d iyyirn',
            y : 'asgas',
            yy : '%d isgasn'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return tzmLatn;

})));


/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js language configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ugCn = moment.defineLocale('ug-cn', {
        months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
            '_'
        ),
        monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
            '_'
        ),
        weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split(
            '_'
        ),
        weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
            LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
            LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm'
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (
                meridiem === 'يېرىم كېچە' ||
                meridiem === 'سەھەر' ||
                meridiem === 'چۈشتىن بۇرۇن'
            ) {
                return hour;
            } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {
                return hour + 12;
            } else {
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return 'يېرىم كېچە';
            } else if (hm < 900) {
                return 'سەھەر';
            } else if (hm < 1130) {
                return 'چۈشتىن بۇرۇن';
            } else if (hm < 1230) {
                return 'چۈش';
            } else if (hm < 1800) {
                return 'چۈشتىن كېيىن';
            } else {
                return 'كەچ';
            }
        },
        calendar: {
            sameDay: '[بۈگۈن سائەت] LT',
            nextDay: '[ئەتە سائەت] LT',
            nextWeek: '[كېلەركى] dddd [سائەت] LT',
            lastDay: '[تۆنۈگۈن] LT',
            lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s كېيىن',
            past: '%s بۇرۇن',
            s: 'نەچچە سېكونت',
            ss: '%d سېكونت',
            m: 'بىر مىنۇت',
            mm: '%d مىنۇت',
            h: 'بىر سائەت',
            hh: '%d سائەت',
            d: 'بىر كۈن',
            dd: '%d كۈن',
            M: 'بىر ئاي',
            MM: '%d ئاي',
            y: 'بىر يىل',
            yy: '%d يىل'
        },

        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '-كۈنى';
                case 'w':
                case 'W':
                    return number + '-ھەپتە';
                default:
                    return number;
            }
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1, // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    });

    return ugCn;

})));


/***/ }),

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
            'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
            'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
            'dd': 'день_дні_днів',
            'MM': 'місяць_місяці_місяців',
            'yy': 'рік_роки_років'
        };
        if (key === 'm') {
            return withoutSuffix ? 'хвилина' : 'хвилину';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'година' : 'годину';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }
    function weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
        };

        if (m === true) {
            return weekdays['nominative'].slice(1, 7).concat(weekdays['nominative'].slice(0, 1));
        }
        if (!m) {
            return weekdays['nominative'];
        }

        var nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
            'accusative' :
            ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
                'genitive' :
                'nominative');
        return weekdays[nounCase][m.day()];
    }
    function processHoursFunction(str) {
        return function () {
            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
        };
    }

    var uk = moment.defineLocale('uk', {
        months : {
            'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
            'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
        },
        monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
        weekdays : weekdaysCaseReplace,
        weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY р.',
            LLL : 'D MMMM YYYY р., HH:mm',
            LLLL : 'dddd, D MMMM YYYY р., HH:mm'
        },
        calendar : {
            sameDay: processHoursFunction('[Сьогодні '),
            nextDay: processHoursFunction('[Завтра '),
            lastDay: processHoursFunction('[Вчора '),
            nextWeek: processHoursFunction('[У] dddd ['),
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return processHoursFunction('[Минулої] dddd [').call(this);
                    case 1:
                    case 2:
                    case 4:
                        return processHoursFunction('[Минулого] dddd [').call(this);
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'за %s',
            past : '%s тому',
            s : 'декілька секунд',
            ss : relativeTimeWithPlural,
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : 'годину',
            hh : relativeTimeWithPlural,
            d : 'день',
            dd : relativeTimeWithPlural,
            M : 'місяць',
            MM : relativeTimeWithPlural,
            y : 'рік',
            yy : relativeTimeWithPlural
        },
        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (input) {
            return /^(дня|вечора)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночі';
            } else if (hour < 12) {
                return 'ранку';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечора';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return number + '-й';
                case 'D':
                    return number + '-го';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return uk;

})));


/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = [
        'جنوری',
        'فروری',
        'مارچ',
        'اپریل',
        'مئی',
        'جون',
        'جولائی',
        'اگست',
        'ستمبر',
        'اکتوبر',
        'نومبر',
        'دسمبر'
    ];
    var days = [
        'اتوار',
        'پیر',
        'منگل',
        'بدھ',
        'جمعرات',
        'جمعہ',
        'ہفتہ'
    ];

    var ur = moment.defineLocale('ur', {
        months : months,
        monthsShort : months,
        weekdays : days,
        weekdaysShort : days,
        weekdaysMin : days,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd، D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM : function (input) {
            return 'شام' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'صبح';
            }
            return 'شام';
        },
        calendar : {
            sameDay : '[آج بوقت] LT',
            nextDay : '[کل بوقت] LT',
            nextWeek : 'dddd [بوقت] LT',
            lastDay : '[گذشتہ روز بوقت] LT',
            lastWeek : '[گذشتہ] dddd [بوقت] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s بعد',
            past : '%s قبل',
            s : 'چند سیکنڈ',
            ss : '%d سیکنڈ',
            m : 'ایک منٹ',
            mm : '%d منٹ',
            h : 'ایک گھنٹہ',
            hh : '%d گھنٹے',
            d : 'ایک دن',
            dd : '%d دن',
            M : 'ایک ماہ',
            MM : '%d ماہ',
            y : 'ایک سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ur;

})));


/***/ }),

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var uz = moment.defineLocale('uz', {
        months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'D MMMM YYYY, dddd HH:mm'
        },
        calendar : {
            sameDay : '[Бугун соат] LT [да]',
            nextDay : '[Эртага] LT [да]',
            nextWeek : 'dddd [куни соат] LT [да]',
            lastDay : '[Кеча соат] LT [да]',
            lastWeek : '[Утган] dddd [куни соат] LT [да]',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Якин %s ичида',
            past : 'Бир неча %s олдин',
            s : 'фурсат',
            ss : '%d фурсат',
            m : 'бир дакика',
            mm : '%d дакика',
            h : 'бир соат',
            hh : '%d соат',
            d : 'бир кун',
            dd : '%d кун',
            M : 'бир ой',
            MM : '%d ой',
            y : 'бир йил',
            yy : '%d йил'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return uz;

})));


/***/ }),

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var uzLatn = moment.defineLocale('uz-latn', {
        months : 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
        monthsShort : 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
        weekdays : 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
        weekdaysShort : 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
        weekdaysMin : 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'D MMMM YYYY, dddd HH:mm'
        },
        calendar : {
            sameDay : '[Bugun soat] LT [da]',
            nextDay : '[Ertaga] LT [da]',
            nextWeek : 'dddd [kuni soat] LT [da]',
            lastDay : '[Kecha soat] LT [da]',
            lastWeek : '[O\'tgan] dddd [kuni soat] LT [da]',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Yaqin %s ichida',
            past : 'Bir necha %s oldin',
            s : 'soniya',
            ss : '%d soniya',
            m : 'bir daqiqa',
            mm : '%d daqiqa',
            h : 'bir soat',
            hh : '%d soat',
            d : 'bir kun',
            dd : '%d kun',
            M : 'bir oy',
            MM : '%d oy',
            y : 'bir yil',
            yy : '%d yil'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return uzLatn;

})));


/***/ }),

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var vi = moment.defineLocale('vi', {
        months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
        monthsParseExact : true,
        weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact : true,
        meridiemParse: /sa|ch/i,
        isPM : function (input) {
            return /^ch$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'sa' : 'SA';
            } else {
                return isLower ? 'ch' : 'CH';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM [năm] YYYY',
            LLL : 'D MMMM [năm] YYYY HH:mm',
            LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
            l : 'DD/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Hôm nay lúc] LT',
            nextDay: '[Ngày mai lúc] LT',
            nextWeek: 'dddd [tuần tới lúc] LT',
            lastDay: '[Hôm qua lúc] LT',
            lastWeek: 'dddd [tuần rồi lúc] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s tới',
            past : '%s trước',
            s : 'vài giây',
            ss : '%d giây' ,
            m : 'một phút',
            mm : '%d phút',
            h : 'một giờ',
            hh : '%d giờ',
            d : 'một ngày',
            dd : '%d ngày',
            M : 'một tháng',
            MM : '%d tháng',
            y : 'một năm',
            yy : '%d năm'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return vi;

})));


/***/ }),

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var xPseudo = moment.defineLocale('x-pseudo', {
        months : 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
        monthsShort : 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
        monthsParseExact : true,
        weekdays : 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
        weekdaysShort : 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
        weekdaysMin : 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[T~ódá~ý át] LT',
            nextDay : '[T~ómó~rró~w át] LT',
            nextWeek : 'dddd [át] LT',
            lastDay : '[Ý~ést~érdá~ý át] LT',
            lastWeek : '[L~ást] dddd [át] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'í~ñ %s',
            past : '%s á~gó',
            s : 'á ~féw ~sécó~ñds',
            ss : '%d s~écóñ~ds',
            m : 'á ~míñ~úté',
            mm : '%d m~íñú~tés',
            h : 'á~ñ hó~úr',
            hh : '%d h~óúrs',
            d : 'á ~dáý',
            dd : '%d d~áýs',
            M : 'á ~móñ~th',
            MM : '%d m~óñt~hs',
            y : 'á ~ýéár',
            yy : '%d ý~éárs'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return xPseudo;

})));


/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var yo = moment.defineLocale('yo', {
        months : 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
        monthsShort : 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
        weekdays : 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
        weekdaysShort : 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
        weekdaysMin : 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Ònì ni] LT',
            nextDay : '[Ọ̀la ni] LT',
            nextWeek : 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
            lastDay : '[Àna ni] LT',
            lastWeek : 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ní %s',
            past : '%s kọjá',
            s : 'ìsẹjú aayá die',
            ss :'aayá %d',
            m : 'ìsẹjú kan',
            mm : 'ìsẹjú %d',
            h : 'wákati kan',
            hh : 'wákati %d',
            d : 'ọjọ́ kan',
            dd : 'ọjọ́ %d',
            M : 'osù kan',
            MM : 'osù %d',
            y : 'ọdún kan',
            yy : 'ọdún %d'
        },
        dayOfMonthOrdinalParse : /ọjọ́\s\d{1,2}/,
        ordinal : 'ọjọ́ %d',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return yo;

})));


/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var zhCn = moment.defineLocale('zh-cn', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日Ah点mm分',
            LLLL : 'YYYY年M月D日ddddAh点mm分',
            l : 'YYYY/M/D',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' ||
                    meridiem === '上午') {
                return hour;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            } else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : '[今天]LT',
            nextDay : '[明天]LT',
            nextWeek : '[下]ddddLT',
            lastDay : '[昨天]LT',
            lastWeek : '[上]ddddLT',
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '日';
                case 'M':
                    return number + '月';
                case 'w':
                case 'W':
                    return number + '周';
                default:
                    return number;
            }
        },
        relativeTime : {
            future : '%s内',
            past : '%s前',
            s : '几秒',
            ss : '%d 秒',
            m : '1 分钟',
            mm : '%d 分钟',
            h : '1 小时',
            hh : '%d 小时',
            d : '1 天',
            dd : '%d 天',
            M : '1 个月',
            MM : '%d 个月',
            y : '1 年',
            yy : '%d 年'
        },
        week : {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return zhCn;

})));


/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var zhHk = moment.defineLocale('zh-hk', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日 HH:mm',
            LLLL : 'YYYY年M月D日dddd HH:mm',
            l : 'YYYY/M/D',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
            } else if (meridiem === '中午') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : '[今天]LT',
            nextDay : '[明天]LT',
            nextWeek : '[下]ddddLT',
            lastDay : '[昨天]LT',
            lastWeek : '[上]ddddLT',
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd' :
                case 'D' :
                case 'DDD' :
                    return number + '日';
                case 'M' :
                    return number + '月';
                case 'w' :
                case 'W' :
                    return number + '週';
                default :
                    return number;
            }
        },
        relativeTime : {
            future : '%s內',
            past : '%s前',
            s : '幾秒',
            ss : '%d 秒',
            m : '1 分鐘',
            mm : '%d 分鐘',
            h : '1 小時',
            hh : '%d 小時',
            d : '1 天',
            dd : '%d 天',
            M : '1 個月',
            MM : '%d 個月',
            y : '1 年',
            yy : '%d 年'
        }
    });

    return zhHk;

})));


/***/ }),

/***/ 1180:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(1053)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var zhTw = moment.defineLocale('zh-tw', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日 HH:mm',
            LLLL : 'YYYY年M月D日dddd HH:mm',
            l : 'YYYY/M/D',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
            } else if (meridiem === '中午') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : '[今天] LT',
            nextDay : '[明天] LT',
            nextWeek : '[下]dddd LT',
            lastDay : '[昨天] LT',
            lastWeek : '[上]dddd LT',
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd' :
                case 'D' :
                case 'DDD' :
                    return number + '日';
                case 'M' :
                    return number + '月';
                case 'w' :
                case 'W' :
                    return number + '週';
                default :
                    return number;
            }
        },
        relativeTime : {
            future : '%s內',
            past : '%s前',
            s : '幾秒',
            ss : '%d 秒',
            m : '1 分鐘',
            mm : '%d 分鐘',
            h : '1 小時',
            hh : '%d 小時',
            d : '1 天',
            dd : '%d 天',
            M : '1 個月',
            MM : '%d 個月',
            y : '1 年',
            yy : '%d 年'
        }
    });

    return zhTw;

})));


/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(43);

var _reactHighcharts = __webpack_require__(1182);

var _reactHighcharts2 = _interopRequireDefault(_reactHighcharts);

var _moment = __webpack_require__(1053);

var _moment2 = _interopRequireDefault(_moment);

var _CircularProgress = __webpack_require__(1185);

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overview = function (_PureComponent) {
    _inherits(Overview, _PureComponent);

    function Overview(props) {
        _classCallCheck(this, Overview);

        var _this = _possibleConstructorReturn(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).call(this, props));

        _this.state = {
            highChartsConfig: {
                chart: {
                    zoomType: 'x',
                    backgroundColor: 'rgba(0, 218, 179, .4)',
                    height: 380
                },
                title: {
                    text: '',
                    style: {
                        color: 'rgb(255, 255, 255)'
                    }
                },
                plotOptions: {
                    column: {
                        depth: 25
                    },
                    tooltip: {
                        pointFormat: '{point}'
                    }
                },
                xAxis: {
                    title: {
                        text: 'Timestamp of Exchange Price',
                        style: {
                            fontSize: '15px',
                            color: 'rgb(255, 255, 255)'
                        }
                    },
                    categories: [],
                    labels: {
                        style: {
                            fontSize: '11px',
                            color: 'rgb(255, 255, 255)'
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: 'BTC Price',
                        style: {
                            fontSize: '15px',
                            color: 'rgb(255, 255, 255)'
                        }
                    },
                    labels: {
                        style: {
                            fontSize: '11px',
                            color: 'rgb(255, 255, 255)'
                        }
                    }
                },
                legend: {
                    enabled: true,
                    itemStyle: {
                        color: 'rgb(255,255,255)'
                    }
                },
                series: []
            }
        };
        return _this;
    }

    _createClass(Overview, [{
        key: 'getCoinNameToRender',
        value: function getCoinNameToRender() {
            switch (this.props.selectedMember) {
                case 'huey':
                    return 'ethereum';
                    break;

                case 'luey':
                    return 'litecoin';
                    break;

                case 'duey':
                    return 'dash';
                    break;

                default:
                    return 'ethereum';
                    break;
            }
        }
    }, {
        key: 'drawChart',
        value: function drawChart(props) {
            var _this2 = this;

            if (props.coins.length) {
                var chartSeries = [];
                var chartCategories = [];
                var coinToRender = this.getCoinNameToRender();

                var chartColors = ['rgb(241, 206, 107)', 'rgb(193, 227, 246)', 'rgb(107, 146, 196)', 'rgb(255, 52, 29)'];

                props.coins.forEach(function (coin) {
                    if (coin.name == coinToRender) {
                        chartSeries.push({
                            name: coin.exchangeName + ' - ' + coin.name,
                            data: coin.prices.map(function (p) {
                                return p.price;
                            }),
                            color: chartColors.splice(0, 1)[0]
                        });
                    }
                });

                this.setState({
                    highChartsConfig: _extends({}, this.state.highChartsConfig, {
                        title: _extends({}, this.state.highChartsConfig.title, {
                            text: coinToRender[0].toUpperCase() + coinToRender.slice(1) + ' \n                               Prices'
                        }),
                        series: chartSeries,
                        xAxis: _extends({}, this.state.highChartsConfig.xAxis, {
                            categories: props.coins[0].prices.map(function (p) {
                                return (0, _moment2.default)(p.date).format('MM/DD/YY | hh:mm');
                            })
                        })
                    })
                });

                setTimeout(function () {
                    _this2.refs.chart.getChart().redraw();
                }, 500);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            setTimeout(function () {
                _this3.drawChart(_this3.props);
            }, 500);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var _this4 = this;

            setTimeout(function () {
                _this4.drawChart(props);
            }, 500);
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.coins && this.props.coins.length) {
                return _react2.default.createElement(
                    'div',
                    { className: 'chart-container' },
                    _react2.default.createElement(_reactHighcharts2.default, { config: this.state.highChartsConfig, ref: 'chart' })
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'chart-container' },
                    _react2.default.createElement(_CircularProgress2.default, { color: 'rgb(2,218,179)' })
                );
            }
        }
    }]);

    return Overview;
}(_react.PureComponent);

function mapStateToProps(state) {
    return {
        coins: state.coins.coins,
        selectedMember: state.members.selectedMember
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Overview);

/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(1), __webpack_require__(1183));
	else if(typeof define === 'function' && define.amd)
		define(["react", "highcharts"], factory);
	else if(typeof exports === 'object')
		exports["ReactHighcharts"] = factory(require("react"), require("highcharts"));
	else
		root["ReactHighcharts"] = factory(root["React"], root["Highcharts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
function defaultClearTimeout () {
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
} ())
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
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
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
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(2);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(6);

var emptyObject = __webpack_require__(9);
var _invariant = __webpack_require__(1);

if (process.env.NODE_ENV !== 'production') {
  var warning = __webpack_require__(3);
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (process.env.NODE_ENV !== 'production') {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (process.env.NODE_ENV !== 'production') {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (process.env.NODE_ENV !== 'production') {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isInherited = name in Constructor;
      _invariant(
        !isInherited,
        'ReactClass: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be ' +
          'due to a mixin.',
        name
      );
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (process.env.NODE_ENV !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (process.env.NODE_ENV !== 'production') {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (process.env.NODE_ENV !== 'production') {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(5);
var factory = __webpack_require__(7);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(5);
var createReactClass = __webpack_require__(8);
var PropTypes = __webpack_require__(14);
var win = typeof global === 'undefined' ? window : global;

module.exports = function (chartType, Highcharts) {
  var displayName = 'Highcharts' + chartType;
  var result = createReactClass({
    displayName: displayName,

    propTypes: {
      config: PropTypes.object,
      isPureConfig: PropTypes.bool,
      neverReflow: PropTypes.bool,
      callback: PropTypes.func,
      domProps: PropTypes.object
    },
    getDefaultProps: function getDefaultProps() {
      return {
        callback: function callback() {},
        domProps: {}
      };
    },
    setChartRef: function setChartRef(chartRef) {
      this.chartRef = chartRef;
    },
    renderChart: function renderChart(config) {
      var _this = this;

      if (!config) {
        throw new Error('Config must be specified for the ' + displayName + ' component');
      }
      var chartConfig = config.chart;
      this.chart = new Highcharts[chartType](_extends({}, config, {
        chart: _extends({}, chartConfig, {
          renderTo: this.chartRef
        })
      }), this.props.callback);

      if (!this.props.neverReflow) {
        win && win.requestAnimationFrame && requestAnimationFrame(function () {
          _this.chart && _this.chart.options && _this.chart.reflow();
        });
      }
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
      if (nextProps.neverReflow || nextProps.isPureConfig && this.props.config === nextProps.config) {
        return true;
      }
      this.renderChart(nextProps.config);
      return false;
    },


    getChart: function getChart() {
      if (!this.chart) {
        throw new Error('getChart() should not be called before the component is mounted');
      }
      return this.chart;
    },

    componentDidMount: function componentDidMount() {
      this.renderChart(this.props.config);
    },

    componentWillUnmount: function componentWillUnmount() {
      this.chart.destroy();
    },


    render: function render() {
      return React.createElement('div', _extends({ ref: this.setChartRef }, this.props.domProps));
    }
  });

  result.Highcharts = Highcharts;
  result.withHighcharts = function (Highcharts) {
    return module.exports(chartType, Highcharts);
  };
  return result;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(1);
  var warning = __webpack_require__(3);
  var ReactPropTypesSecret = __webpack_require__(4);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(1);
var ReactPropTypesSecret = __webpack_require__(4);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(1);
var warning = __webpack_require__(3);
var assign = __webpack_require__(6);

var ReactPropTypesSecret = __webpack_require__(4);
var checkPropTypes = __webpack_require__(11);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(13)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(12)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(10)('Chart', __webpack_require__(17));

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ })
/******/ ]);
});

/***/ }),

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v6.2.0 (2018-10-17)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(S,K){"object"===typeof module&&module.exports?module.exports=S.document?K(S):K: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return K(S)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):S.Highcharts=K(S)})("undefined"!==typeof window?window:this,function(S){var K=function(){var a="undefined"===typeof S?window:S,C=a.document,F=a.navigator&&a.navigator.userAgent||"",I=C&&C.createElementNS&&!!C.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,n=/(edge|msie|trident)/i.test(F)&&!a.opera,f=-1!==F.indexOf("Firefox"),
e=-1!==F.indexOf("Chrome"),u=f&&4>parseInt(F.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",version:"6.2.0",deg2rad:2*Math.PI/360,doc:C,hasBidiBug:u,hasTouch:C&&void 0!==C.documentElement.ontouchstart,isMS:n,isWebKit:-1!==F.indexOf("AppleWebKit"),isFirefox:f,isChrome:e,isSafari:!e&&-1!==F.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(F),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:I,win:a,marginNames:["plotTop",
"marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){a.timers=[];var C=a.charts,F=a.doc,I=a.win;a.error=function(n,f){n=a.isNumber(n)?"Highcharts error #"+n+": www.highcharts.com/errors/"+n:n;if(f)throw Error(n);I.console&&console.log(n)};a.Fx=function(a,f,e){this.options=f;this.elem=a;this.prop=e};a.Fx.prototype={dSetter:function(){var a=this.paths[0],f=this.paths[1],e=[],u=this.now,x=a.length,t;if(1===u)e=this.toD;else if(x===f.length&&1>u)for(;x--;)t=parseFloat(a[x]),
e[x]=isNaN(t)?f[x]:u*parseFloat(f[x]-t)+t;else e=f;this.elem.attr("d",e,null,!0)},update:function(){var a=this.elem,f=this.prop,e=this.now,u=this.options.step;if(this[f+"Setter"])this[f+"Setter"]();else a.attr?a.element&&a.attr(f,e,null,!0):a.style[f]=e+this.unit;u&&u.call(a,e,this)},run:function(n,f,e){var u=this,x=u.options,t=function(a){return t.stopped?!1:u.step(a)},w=I.requestAnimationFrame||function(a){setTimeout(a,13)},y=function(){for(var c=0;c<a.timers.length;c++)a.timers[c]()||a.timers.splice(c--,
1);a.timers.length&&w(y)};n!==f||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=n,this.end=f,this.unit=e,this.now=this.start,this.pos=0,t.elem=this.elem,t.prop=this.prop,t()&&1===a.timers.push(t)&&w(y)):(delete x.curAnim[this.prop],x.complete&&0===a.keys(x.curAnim).length&&x.complete.call(this.elem))},step:function(n){var f=+new Date,e,u=this.options,x=this.elem,t=u.complete,w=u.duration,y=u.curAnim;x.attr&&!x.element?n=!1:n||f>=w+this.startTime?(this.now=this.end,this.pos=
1,this.update(),e=y[this.prop]=!0,a.objectEach(y,function(a){!0!==a&&(e=!1)}),e&&t&&t.call(x),n=!1):(this.pos=u.easing((f-this.startTime)/w),this.now=this.start+(this.end-this.start)*this.pos,this.update(),n=!0);return n},initPath:function(n,f,e){function u(a){var b,k;for(d=a.length;d--;)b="M"===a[d]||"L"===a[d],k=/[a-zA-Z]/.test(a[d+3]),b&&k&&a.splice(d+1,0,a[d+1],a[d+2],a[d+1],a[d+2])}function x(a,h){for(;a.length<k;){a[0]=h[k-a.length];var c=a.slice(0,p);[].splice.apply(a,[0,0].concat(c));b&&(c=
a.slice(a.length-p),[].splice.apply(a,[a.length,0].concat(c)),d--)}a[0]="M"}function t(a,d){for(var c=(k-a.length)/p;0<c&&c--;)q=a.slice().splice(a.length/v-p,p*v),q[0]=d[k-p-c*p],h&&(q[p-6]=q[p-2],q[p-5]=q[p-1]),[].splice.apply(a,[a.length/v,0].concat(q)),b&&c--}f=f||"";var w,y=n.startX,c=n.endX,h=-1<f.indexOf("C"),p=h?7:3,k,q,d;f=f.split(" ");e=e.slice();var b=n.isArea,v=b?2:1,J;h&&(u(f),u(e));if(y&&c){for(d=0;d<y.length;d++)if(y[d]===c[0]){w=d;break}else if(y[0]===c[c.length-y.length+d]){w=d;J=
!0;break}void 0===w&&(f=[])}f.length&&a.isNumber(w)&&(k=e.length+w*v*p,J?(x(f,e),t(e,f)):(x(e,f),t(f,e)));return[f,e]},fillSetter:function(){a.Fx.prototype.strokeSetter.apply(this,arguments)},strokeSetter:function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)}};a.merge=function(){var n,f=arguments,e,u={},x=function(e,n){"object"!==typeof e&&(e={});a.objectEach(n,function(y,c){!a.isObject(y,!0)||a.isClass(y)||a.isDOMElement(y)?e[c]=n[c]:e[c]=x(e[c]||{},
y)});return e};!0===f[0]&&(u=f[1],f=Array.prototype.slice.call(f,2));e=f.length;for(n=0;n<e;n++)u=x(u,f[n]);return u};a.pInt=function(a,f){return parseInt(a,f||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(n,f){return!!n&&"object"===typeof n&&(!f||!a.isArray(n))};a.isDOMElement=function(n){return a.isObject(n)&&"number"===typeof n.nodeType};a.isClass=function(n){var f=
n&&n.constructor;return!(!a.isObject(n,!0)||a.isDOMElement(n)||!f||!f.name||"Object"===f.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,f){for(var e=a.length;e--;)if(a[e]===f){a.splice(e,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(n,f,e){var u;a.isString(f)?a.defined(e)?n.setAttribute(f,e):n&&n.getAttribute&&((u=n.getAttribute(f))||"class"!==f||(u=n.getAttribute(f+"Name"))):a.defined(f)&&a.isObject(f)&&
a.objectEach(f,function(a,e){n.setAttribute(e,a)});return u};a.splat=function(n){return a.isArray(n)?n:[n]};a.syncTimeout=function(a,f,e){if(f)return setTimeout(a,f,e);a.call(0,e)};a.clearTimeout=function(n){a.defined(n)&&clearTimeout(n)};a.extend=function(a,f){var e;a||(a={});for(e in f)a[e]=f[e];return a};a.pick=function(){var a=arguments,f,e,u=a.length;for(f=0;f<u;f++)if(e=a[f],void 0!==e&&null!==e)return e};a.css=function(n,f){a.isMS&&!a.svg&&f&&void 0!==f.opacity&&(f.filter="alpha(opacity\x3d"+
100*f.opacity+")");a.extend(n.style,f)};a.createElement=function(n,f,e,u,x){n=F.createElement(n);var t=a.css;f&&a.extend(n,f);x&&t(n,{padding:0,border:"none",margin:0});e&&t(n,e);u&&u.appendChild(n);return n};a.extendClass=function(n,f){var e=function(){};e.prototype=new n;a.extend(e.prototype,f);return e};a.pad=function(a,f,e){return Array((f||2)+1-String(a).replace("-","").length).join(e||0)+a};a.relativeLength=function(a,f,e){return/%$/.test(a)?f*parseFloat(a)/100+(e||0):parseFloat(a)};a.wrap=
function(a,f,e){var n=a[f];a[f]=function(){var a=Array.prototype.slice.call(arguments),t=arguments,w=this;w.proceed=function(){n.apply(w,arguments.length?arguments:t)};a.unshift(n);a=e.apply(this,a);w.proceed=null;return a}};a.datePropsToTimestamps=function(n){a.objectEach(n,function(f,e){a.isObject(f)&&"function"===typeof f.getTime?n[e]=f.getTime():(a.isObject(f)||a.isArray(f))&&a.datePropsToTimestamps(f)})};a.formatSingle=function(n,f,e){var u=/\.([0-9])/,x=a.defaultOptions.lang;/f$/.test(n)?(e=
(e=n.match(u))?e[1]:-1,null!==f&&(f=a.numberFormat(f,e,x.decimalPoint,-1<n.indexOf(",")?x.thousandsSep:""))):f=(e||a.time).dateFormat(n,f);return f};a.format=function(n,f,e){for(var u="{",x=!1,t,w,y,c,h=[],p;n;){u=n.indexOf(u);if(-1===u)break;t=n.slice(0,u);if(x){t=t.split(":");w=t.shift().split(".");c=w.length;p=f;for(y=0;y<c;y++)p&&(p=p[w[y]]);t.length&&(p=a.formatSingle(t.join(":"),p,e));h.push(p)}else h.push(t);n=n.slice(u+1);u=(x=!x)?"}":"{"}h.push(n);return h.join("")};a.getMagnitude=function(a){return Math.pow(10,
Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(n,f,e,u,x){var t,w=n;e=a.pick(e,1);t=n/e;f||(f=x?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===u&&(1===e?f=a.grep(f,function(a){return 0===a%1}):.1>=e&&(f=[1/e])));for(u=0;u<f.length&&!(w=f[u],x&&w*e>=n||!x&&t<=(f[u]+(f[u+1]||f[u]))/2);u++);return w=a.correctFloat(w*e,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,f){var e=a.length,n,x;for(x=0;x<e;x++)a[x].safeI=x;a.sort(function(a,e){n=f(a,e);return 0===n?
a.safeI-e.safeI:n});for(x=0;x<e;x++)delete a[x].safeI};a.arrayMin=function(a){for(var f=a.length,e=a[0];f--;)a[f]<e&&(e=a[f]);return e};a.arrayMax=function(a){for(var f=a.length,e=a[0];f--;)a[f]>e&&(e=a[f]);return e};a.destroyObjectProperties=function(n,f){a.objectEach(n,function(a,u){a&&a!==f&&a.destroy&&a.destroy();delete n[u]})};a.discardElement=function(n){var f=a.garbageBin;f||(f=a.createElement("div"));n&&f.appendChild(n);f.innerHTML=""};a.correctFloat=function(a,f){return parseFloat(a.toPrecision(f||
14))};a.setAnimation=function(n,f){f.renderer.globalAnimation=a.pick(n,f.options.chart.animation,!0)};a.animObject=function(n){return a.isObject(n)?a.merge(n):{duration:n?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(n,f,e,u){n=+n||0;f=+f;var x=a.defaultOptions.lang,t=(n.toString().split(".")[1]||"").split("e")[0].length,w,y,c=n.toString().split("e");-1===f?f=Math.min(t,20):a.isNumber(f)?f&&c[1]&&0>c[1]&&
(w=f+ +c[1],0<=w?(c[0]=(+c[0]).toExponential(w).split("e")[0],f=w):(c[0]=c[0].split(".")[0]||0,n=20>f?(c[0]*Math.pow(10,c[1])).toFixed(f):0,c[1]=0)):f=2;y=(Math.abs(c[1]?c[0]:n)+Math.pow(10,-Math.max(f,t)-1)).toFixed(f);t=String(a.pInt(y));w=3<t.length?t.length%3:0;e=a.pick(e,x.decimalPoint);u=a.pick(u,x.thousandsSep);n=(0>n?"-":"")+(w?t.substr(0,w)+u:"");n+=t.substr(w).replace(/(\d{3})(?=\d)/g,"$1"+u);f&&(n+=e+y.slice(-f));c[1]&&0!==+n&&(n+="e"+c[1]);return n};Math.easeInOutSine=function(a){return-.5*
(Math.cos(Math.PI*a)-1)};a.getStyle=function(n,f,e){if("width"===f)return Math.max(0,Math.min(n.offsetWidth,n.scrollWidth)-a.getStyle(n,"padding-left")-a.getStyle(n,"padding-right"));if("height"===f)return Math.max(0,Math.min(n.offsetHeight,n.scrollHeight)-a.getStyle(n,"padding-top")-a.getStyle(n,"padding-bottom"));I.getComputedStyle||a.error(27,!0);if(n=I.getComputedStyle(n,void 0))n=n.getPropertyValue(f),a.pick(e,"opacity"!==f)&&(n=a.pInt(n));return n};a.inArray=function(n,f,e){return(a.indexOfPolyfill||
Array.prototype.indexOf).call(f,n,e)};a.grep=function(n,f){return(a.filterPolyfill||Array.prototype.filter).call(n,f)};a.find=Array.prototype.find?function(a,f){return a.find(f)}:function(a,f){var e,u=a.length;for(e=0;e<u;e++)if(f(a[e],e))return a[e]};a.some=function(n,f,e){return(a.somePolyfill||Array.prototype.some).call(n,f,e)};a.map=function(a,f){for(var e=[],u=0,x=a.length;u<x;u++)e[u]=f.call(a[u],a[u],u,a);return e};a.keys=function(n){return(a.keysPolyfill||Object.keys).call(void 0,n)};a.reduce=
function(n,f,e){return(a.reducePolyfill||Array.prototype.reduce).apply(n,2<arguments.length?[f,e]:[f])};a.offset=function(a){var f=F.documentElement;a=a.parentElement||a.parentNode?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(I.pageYOffset||f.scrollTop)-(f.clientTop||0),left:a.left+(I.pageXOffset||f.scrollLeft)-(f.clientLeft||0)}};a.stop=function(n,f){for(var e=a.timers.length;e--;)a.timers[e].elem!==n||f&&f!==a.timers[e].prop||(a.timers[e].stopped=!0)};a.each=function(n,f,e){return(a.forEachPolyfill||
Array.prototype.forEach).call(n,f,e)};a.objectEach=function(a,f,e){for(var u in a)a.hasOwnProperty(u)&&f.call(e||a[u],a[u],u,a)};a.addEvent=function(n,f,e,u){var x,t=n.addEventListener||a.addEventListenerPolyfill;x="function"===typeof n&&n.prototype?n.prototype.protoEvents=n.prototype.protoEvents||{}:n.hcEvents=n.hcEvents||{};a.Point&&n instanceof a.Point&&n.series&&n.series.chart&&(n.series.chart.runTrackerClick=!0);t&&t.call(n,f,e,!1);x[f]||(x[f]=[]);x[f].push(e);u&&a.isNumber(u.order)&&(e.order=
u.order,x[f].sort(function(a,e){return a.order-e.order}));return function(){a.removeEvent(n,f,e)}};a.removeEvent=function(n,f,e){function u(e,c){var h=n.removeEventListener||a.removeEventListenerPolyfill;h&&h.call(n,e,c,!1)}function x(e){var c,h;n.nodeName&&(f?(c={},c[f]=!0):c=e,a.objectEach(c,function(a,k){if(e[k])for(h=e[k].length;h--;)u(k,e[k][h])}))}var t,w;a.each(["protoEvents","hcEvents"],function(y){var c=n[y];c&&(f?(t=c[f]||[],e?(w=a.inArray(e,t),-1<w&&(t.splice(w,1),c[f]=t),u(f,e)):(x(c),
c[f]=[])):(x(c),n[y]={}))})};a.fireEvent=function(n,f,e,u){var x,t,w,y,c;e=e||{};F.createEvent&&(n.dispatchEvent||n.fireEvent)?(x=F.createEvent("Events"),x.initEvent(f,!0,!0),a.extend(x,e),n.dispatchEvent?n.dispatchEvent(x):n.fireEvent(f,x)):a.each(["protoEvents","hcEvents"],function(h){if(n[h])for(t=n[h][f]||[],w=t.length,e.target||a.extend(e,{preventDefault:function(){e.defaultPrevented=!0},target:n,type:f}),y=0;y<w;y++)(c=t[y])&&!1===c.call(n,e)&&e.preventDefault()});u&&!e.defaultPrevented&&u.call(n,
e)};a.animate=function(n,f,e){var u,x="",t,w,y;a.isObject(e)||(y=arguments,e={duration:y[2],easing:y[3],complete:y[4]});a.isNumber(e.duration)||(e.duration=400);e.easing="function"===typeof e.easing?e.easing:Math[e.easing]||Math.easeInOutSine;e.curAnim=a.merge(f);a.objectEach(f,function(c,h){a.stop(n,h);w=new a.Fx(n,e,h);t=null;"d"===h?(w.paths=w.initPath(n,n.d,f.d),w.toD=f.d,u=0,t=1):n.attr?u=n.attr(h):(u=parseFloat(a.getStyle(n,h))||0,"opacity"!==h&&(x="px"));t||(t=c);t&&t.match&&t.match("px")&&
(t=t.replace(/px/g,""));w.run(u,t,x)})};a.seriesType=function(n,f,e,u,x){var t=a.getOptions(),w=a.seriesTypes;t.plotOptions[n]=a.merge(t.plotOptions[f],e);w[n]=a.extendClass(w[f]||function(){},u);w[n].prototype.type=n;x&&(w[n].prototype.pointClass=a.extendClass(a.Point,x));return w[n]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),f=0;return function(){return"highcharts-"+a+"-"+f++}}();I.jQuery&&(I.jQuery.fn.highcharts=function(){var n=[].slice.call(arguments);if(this[0])return n[0]?
(new (a[a.isString(n[0])?n.shift():"Chart"])(this[0],n[0],n[1]),this):C[a.attr(this[0],"data-highcharts-chart")]})})(K);(function(a){var C=a.each,F=a.isNumber,I=a.map,n=a.merge,f=a.pInt;a.Color=function(e){if(!(this instanceof a.Color))return new a.Color(e);this.init(e)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[f(a[1]),f(a[2]),f(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[f(a[1]),f(a[2]),f(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(e){var f,x,t,w;if((this.input=e=this.names[e&&e.toLowerCase?e.toLowerCase():""]||e)&&e.stops)this.stops=I(e.stops,function(e){return new a.Color(e[1])});else if(e&&e.charAt&&"#"===e.charAt()&&(f=e.length,e=parseInt(e.substr(1),16),7===f?x=[(e&16711680)>>16,(e&65280)>>8,e&255,1]:4===f&&(x=[(e&3840)>>4|(e&3840)>>8,(e&240)>>4|e&240,(e&15)<<4|e&15,1])),!x)for(t=this.parsers.length;t--&&!x;)w=this.parsers[t],
(f=w.regex.exec(e))&&(x=w.parse(f));this.rgba=x||[]},get:function(a){var e=this.input,f=this.rgba,t;this.stops?(t=n(e),t.stops=[].concat(t.stops),C(this.stops,function(e,y){t.stops[y]=[t.stops[y][0],e.get(a)]})):t=f&&F(f[0])?"rgb"===a||!a&&1===f[3]?"rgb("+f[0]+","+f[1]+","+f[2]+")":"a"===a?f[3]:"rgba("+f.join(",")+")":e;return t},brighten:function(a){var e,x=this.rgba;if(this.stops)C(this.stops,function(e){e.brighten(a)});else if(F(a)&&0!==a)for(e=0;3>e;e++)x[e]+=f(255*a),0>x[e]&&(x[e]=0),255<x[e]&&
(x[e]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,f){var e=this.rgba,t=a.rgba;t.length&&e&&e.length?(a=1!==t[3]||1!==e[3],f=(a?"rgba(":"rgb(")+Math.round(t[0]+(e[0]-t[0])*(1-f))+","+Math.round(t[1]+(e[1]-t[1])*(1-f))+","+Math.round(t[2]+(e[2]-t[2])*(1-f))+(a?","+(t[3]+(e[3]-t[3])*(1-f)):"")+")"):f=a.input||"none";return f}};a.color=function(e){return new a.Color(e)}})(K);(function(a){var C,F,I=a.addEvent,n=a.animate,f=a.attr,e=a.charts,u=a.color,x=a.css,
t=a.createElement,w=a.defined,y=a.deg2rad,c=a.destroyObjectProperties,h=a.doc,p=a.each,k=a.extend,q=a.erase,d=a.grep,b=a.hasTouch,v=a.inArray,J=a.isArray,l=a.isFirefox,L=a.isMS,B=a.isObject,D=a.isString,m=a.isWebKit,G=a.merge,A=a.noop,N=a.objectEach,E=a.pick,g=a.pInt,r=a.removeEvent,M=a.stop,O=a.svg,H=a.SVG_NS,R=a.symbolSizes,Q=a.win;C=a.SVGElement=function(){return this};k(C.prototype,{opacity:1,SVG_NS:H,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
init:function(a,g){this.element="span"===g?t(g):h.createElementNS(this.SVG_NS,g);this.renderer=a},animate:function(z,g,r){g=a.animObject(E(g,this.renderer.globalAnimation,!0));0!==g.duration?(r&&(g.complete=r),n(this,z,g)):(this.attr(z,null,r),g.step&&g.step.call(this));return this},complexColor:function(z,g,r){var b=this.renderer,k,m,d,H,c,h,q,A,v,P,l,O=[],M;a.fireEvent(this.renderer,"complexColor",{args:arguments},function(){z.radialGradient?m="radialGradient":z.linearGradient&&(m="linearGradient");
m&&(d=z[m],c=b.gradients,q=z.stops,P=r.radialReference,J(d)&&(z[m]=d={x1:d[0],y1:d[1],x2:d[2],y2:d[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===m&&P&&!w(d.gradientUnits)&&(H=d,d=G(d,b.getRadialAttr(P,H),{gradientUnits:"userSpaceOnUse"})),N(d,function(a,z){"id"!==z&&O.push(z,a)}),N(q,function(a){O.push(a)}),O=O.join(","),c[O]?l=c[O].attr("id"):(d.id=l=a.uniqueKey(),c[O]=h=b.createElement(m).attr(d).add(b.defs),h.radAttr=H,h.stops=[],p(q,function(z){0===z[1].indexOf("rgba")?(k=a.color(z[1]),
A=k.get("rgb"),v=k.get("a")):(A=z[1],v=1);z=b.createElement("stop").attr({offset:z[0],"stop-color":A,"stop-opacity":v}).add(h);h.stops.push(z)})),M="url("+b.url+"#"+l+")",r.setAttribute(g,M),r.gradient=O,z.toString=function(){return M})})},applyTextOutline:function(z){var g=this.element,r,b,d,m,k;-1!==z.indexOf("contrast")&&(z=z.replace(/contrast/g,this.renderer.getContrast(g.style.fill)));z=z.split(" ");b=z[z.length-1];if((d=z[0])&&"none"!==d&&a.svg){this.fakeTS=!0;z=[].slice.call(g.getElementsByTagName("tspan"));
this.ySetter=this.xSetter;d=d.replace(/(^[\d\.]+)(.*?)$/g,function(a,z,g){return 2*z+g});for(k=z.length;k--;)r=z[k],"highcharts-text-outline"===r.getAttribute("class")&&q(z,g.removeChild(r));m=g.firstChild;p(z,function(a,z){0===z&&(a.setAttribute("x",g.getAttribute("x")),z=g.getAttribute("y"),a.setAttribute("y",z||0),null===z&&g.setAttribute("y",0));a=a.cloneNode(1);f(a,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":d,"stroke-linejoin":"round"});g.insertBefore(a,m)})}},attr:function(a,
g,r,b){var z,d=this.element,m,k=this,c,H;"string"===typeof a&&void 0!==g&&(z=a,a={},a[z]=g);"string"===typeof a?k=(this[a+"Getter"]||this._defaultGetter).call(this,a,d):(N(a,function(z,g){c=!1;b||M(this,g);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(g)&&(m||(this.symbolAttr(a),m=!0),c=!0);!this.rotation||"x"!==g&&"y"!==g||(this.doTransform=!0);c||(H=this[g+"Setter"]||this._defaultSetter,H.call(this,z,g,d),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g)&&
this.updateShadows(g,z,H))},this),this.afterSetters());r&&r.call(this);return k},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,g,r){for(var z=this.shadows,d=z.length;d--;)r.call(z[d],"height"===a?Math.max(g-(z[d].cutHeight||0),0):"d"===a?this.d:g,a,z[d])},addClass:function(a,g){var z=this.attr("class")||"";-1===z.indexOf(a)&&(g||(a=(z+(z?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==
v(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var z=this;p("x y r start end width height innerR anchorX anchorY".split(" "),function(g){z[g]=E(a[g],z[g])});z.attr({d:z.renderer.symbols[z.symbolName](z.x,z.y,z.width,z.height,z)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,g){var z;g=g||a.strokeWidth||0;z=Math.round(g)%2/2;
a.x=Math.floor(a.x||this.x||0)+z;a.y=Math.floor(a.y||this.y||0)+z;a.width=Math.floor((a.width||this.width||0)-2*z);a.height=Math.floor((a.height||this.height||0)-2*z);w(a.strokeWidth)&&(a.strokeWidth=g);return a},css:function(a){var z=this.styles,r={},d=this.element,b,m="",c,H=!z,h=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);z&&N(a,function(a,g){a!==z[g]&&(r[g]=a,H=!0)});H&&(z&&(a=k(z,r)),a&&(null===a.width||"auto"===a.width?delete this.textWidth:"text"===d.nodeName.toLowerCase()&&
a.width&&(b=this.textWidth=g(a.width))),this.styles=a,b&&!O&&this.renderer.forExport&&delete a.width,d.namespaceURI===this.SVG_NS?(c=function(a,z){return"-"+z.toLowerCase()},N(a,function(a,z){-1===v(z,h)&&(m+=z.replace(/([A-Z])/g,c)+":"+a+";")}),m&&f(d,"style",m)):x(d,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,g){var z=this,r=
z.element;b&&"click"===a?(r.ontouchstart=function(a){z.touchEventFired=Date.now();a.preventDefault();g.call(r,a)},r.onclick=function(a){(-1===Q.navigator.userAgent.indexOf("Android")||1100<Date.now()-(z.touchEventFired||0))&&g.call(r,a)}):r["on"+a]=g;return this},setRadialReference:function(a){var z=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;z&&z.radAttr&&z.animate(this.renderer.getRadialAttr(a,z.radAttr));return this},translate:function(a,g){return this.attr({translateX:a,
translateY:g})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,g=this.translateY||0,r=this.scaleX,d=this.scaleY,b=this.inverted,m=this.rotation,k=this.matrix,c=this.element;b&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];w(k)&&a.push("matrix("+k.join(",")+")");b?a.push("rotate(90) scale(-1,1)"):m&&a.push("rotate("+m+" "+E(this.rotationOriginX,c.getAttribute("x"),0)+" "+E(this.rotationOriginY,c.getAttribute("y")||
0)+")");(w(r)||w(d))&&a.push("scale("+E(r,1)+" "+E(d,1)+")");a.length&&c.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,g,r){var z,d,b,m,k={};d=this.renderer;b=d.alignedObjects;var c,H;if(a){if(this.alignOptions=a,this.alignByTranslate=g,!r||D(r))this.alignTo=z=r||"renderer",q(b,this),b.push(this),r=null}else a=this.alignOptions,g=this.alignByTranslate,z=this.alignTo;r=E(r,d[z],d);z=a.align;d=a.verticalAlign;b=
(r.x||0)+(a.x||0);m=(r.y||0)+(a.y||0);"right"===z?c=1:"center"===z&&(c=2);c&&(b+=(r.width-(a.width||0))/c);k[g?"translateX":"x"]=Math.round(b);"bottom"===d?H=1:"middle"===d&&(H=2);H&&(m+=(r.height-(a.height||0))/H);k[g?"translateY":"y"]=Math.round(m);this[this.placed?"animate":"attr"](k);this.placed=!0;this.alignAttr=k;return this},getBBox:function(a,g){var z,r=this.renderer,d,b=this.element,m=this.styles,c,H=this.textStr,h,q=r.cache,A=r.cacheKeys,v=b.namespaceURI===this.SVG_NS,l;g=E(g,this.rotation);
d=g*y;c=m&&m.fontSize;w(H)&&(l=H.toString(),-1===l.indexOf("\x3c")&&(l=l.replace(/[0-9]/g,"0")),l+=["",g||0,c,this.textWidth,m&&m.textOverflow].join());l&&!a&&(z=q[l]);if(!z){if(v||r.forExport){try{(h=this.fakeTS&&function(a){p(b.querySelectorAll(".highcharts-text-outline"),function(g){g.style.display=a})})&&h("none"),z=b.getBBox?k({},b.getBBox()):{width:b.offsetWidth,height:b.offsetHeight},h&&h("")}catch(X){}if(!z||0>z.width)z={width:0,height:0}}else z=this.htmlGetBBox();r.isSVG&&(a=z.width,r=z.height,
v&&(z.height=r={"11px,17":14,"13px,20":16}[m&&m.fontSize+","+Math.round(r)]||r),g&&(z.width=Math.abs(r*Math.sin(d))+Math.abs(a*Math.cos(d)),z.height=Math.abs(r*Math.cos(d))+Math.abs(a*Math.sin(d))));if(l&&0<z.height){for(;250<A.length;)delete q[A.shift()];q[l]||A.push(l);q[l]=z}}return z},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var g=this;g.animate({opacity:0},{duration:a||150,complete:function(){g.attr({y:-9999})}})},
add:function(a){var g=this.renderer,z=this.element,r;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&g.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)r=this.zIndexSetter();r||(a?a.element:g.box).appendChild(z);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var g=a.parentNode;g&&g.removeChild(a)},destroy:function(){var a=this,g=a.element||{},r=a.renderer.isSVG&&"SPAN"===g.nodeName&&a.parentGroup,d=g.ownerSVGElement,b=a.clipPath;g.onclick=
g.onmouseout=g.onmouseover=g.onmousemove=g.point=null;M(a);b&&d&&(p(d.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var g=a.getAttribute("clip-path"),z=b.element.id;(-1<g.indexOf("(#"+z+")")||-1<g.indexOf('("#'+z+'")'))&&a.removeAttribute("clip-path")}),a.clipPath=b.destroy());if(a.stops){for(d=0;d<a.stops.length;d++)a.stops[d]=a.stops[d].destroy();a.stops=null}a.safeRemoveChild(g);for(a.destroyShadows();r&&r.div&&0===r.div.childNodes.length;)g=r.parentGroup,a.safeRemoveChild(r.div),delete r.div,
r=g;a.alignTo&&q(a.renderer.alignedObjects,a);N(a,function(g,z){delete a[z]});return null},shadow:function(a,g,r){var z=[],d,b,m=this.element,k,c,H,h;if(!a)this.destroyShadows();else if(!this.shadows){c=E(a.width,3);H=(a.opacity||.15)/c;h=this.parentInverted?"(-1,-1)":"("+E(a.offsetX,1)+", "+E(a.offsetY,1)+")";for(d=1;d<=c;d++)b=m.cloneNode(0),k=2*c+1-2*d,f(b,{stroke:a.color||"#000000","stroke-opacity":H*d,"stroke-width":k,transform:"translate"+h,fill:"none"}),b.setAttribute("class",(b.getAttribute("class")||
"")+" highcharts-shadow"),r&&(f(b,"height",Math.max(f(b,"height")-k,0)),b.cutHeight=k),g?g.element.appendChild(b):m.parentNode&&m.parentNode.insertBefore(b,m),z.push(b);this.shadows=z}return this},destroyShadows:function(){p(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=E(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):
null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,g,r){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[g]!==a&&(r.setAttribute(g,a),this[g]=a)},dashstyleSetter:function(a){var r,z=this["stroke-width"];"inherit"===z&&(z=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,
"").split(",");for(r=a.length;r--;)a[r]=g(a[r])*z;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,g,r){this[g]=a;r.setAttribute(g,a)},titleSetter:function(a){var g=this.element.getElementsByTagName("title")[0];g||(g=h.createElementNS(this.SVG_NS,"title"),this.element.appendChild(g));g.firstChild&&g.removeChild(g.firstChild);
g.appendChild(h.createTextNode(String(E(a),"").replace(/<[^>]*>/g,"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,g,r){"string"===typeof a?r.setAttribute(g,a):a&&this.complexColor(a,g,r)},visibilitySetter:function(a,g,r){"inherit"===a?r.removeAttribute(g):this[g]!==a&&r.setAttribute(g,a);this[g]=a},zIndexSetter:function(a,r){var z=this.renderer,d=this.parentGroup,
b=(d||z).element||z.box,m,k=this.element,c,H,z=b===z.box;m=this.added;var h;w(a)?(k.setAttribute("data-z-index",a),a=+a,this[r]===a&&(m=!1)):w(this[r])&&k.removeAttribute("data-z-index");this[r]=a;if(m){(a=this.zIndex)&&d&&(d.handleZ=!0);r=b.childNodes;for(h=r.length-1;0<=h&&!c;h--)if(d=r[h],m=d.getAttribute("data-z-index"),H=!w(m),d!==k)if(0>a&&H&&!z&&!h)b.insertBefore(k,r[h]),c=!0;else if(g(m)<=a||H&&(!w(a)||0<=a))b.insertBefore(k,r[h+1]||null),c=!0;c||(b.insertBefore(k,r[z?3:0]||null),c=!0)}return c},
_defaultSetter:function(a,g,r){r.setAttribute(g,a)}});C.prototype.yGetter=C.prototype.xGetter;C.prototype.translateXSetter=C.prototype.translateYSetter=C.prototype.rotationSetter=C.prototype.verticalAlignSetter=C.prototype.rotationOriginXSetter=C.prototype.rotationOriginYSetter=C.prototype.scaleXSetter=C.prototype.scaleYSetter=C.prototype.matrixSetter=function(a,g){this[g]=a;this.doTransform=!0};C.prototype["stroke-widthSetter"]=C.prototype.strokeSetter=function(a,g,r){this[g]=a;this.stroke&&this["stroke-width"]?
(C.prototype.fillSetter.call(this,this.stroke,"stroke",r),r.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke&&(r.removeAttribute("stroke"),this.hasStroke=!1)};F=a.SVGRenderer=function(){this.init.apply(this,arguments)};k(F.prototype,{Element:C,SVG_NS:H,init:function(a,g,r,d,b,k){var z;d=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(d));z=d.element;a.appendChild(z);f(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&
f(z,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=z;this.boxWrapper=d;this.alignedObjects=[];this.url=(l||m)&&h.getElementsByTagName("base").length?Q.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(h.createTextNode("Created with Highcharts 6.2.0"));this.defs=this.createElement("defs").add();this.allowHTML=k;this.forExport=b;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(g,
r,!1);var c;l&&a.getBoundingClientRect&&(g=function(){x(a,{left:0,top:0});c=a.getBoundingClientRect();x(a,{left:Math.ceil(c.left)-c.left+"px",top:Math.ceil(c.top)-c.top+"px"})},g(),this.unSubPixelFix=I(Q,"resize",g))},getStyle:function(a){return this.style=k({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=
this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();c(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var g=new this.Element;g.init(this,a);return g},draw:A,getRadialAttr:function(a,g){return{cx:a[0]-a[2]/2+g.cx*a[2],cy:a[1]-a[2]/2+g.cy*a[2],r:g.r*a[2]}},truncate:function(a,g,r,d,b,m,k){var z=this,c=a.rotation,H,q=d?1:0,A=(r||d).length,v=A,p=[],l=function(a){g.firstChild&&
g.removeChild(g.firstChild);a&&g.appendChild(h.createTextNode(a))},O=function(m,c){c=c||m;if(void 0===p[c])if(g.getSubStringLength)try{p[c]=b+g.getSubStringLength(0,d?c+1:c)}catch(Y){}else z.getSpanWidth&&(l(k(r||d,m)),p[c]=b+z.getSpanWidth(a,g));return p[c]},G,M;a.rotation=0;G=O(g.textContent.length);if(M=b+G>m){for(;q<=A;)v=Math.ceil((q+A)/2),d&&(H=k(d,v)),G=O(v,H&&H.length-1),q===A?q=A+1:G>m?A=v-1:q=v;0===A?l(""):r&&A===r.length-1||l(H||k(r||d,v))}d&&d.splice(0,v);a.actualWidth=G;a.rotation=c;
return M},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var r=a.element,b=this,m=b.forExport,c=E(a.textStr,"").toString(),z=-1!==c.indexOf("\x3c"),k=r.childNodes,q,A=f(r,"x"),l=a.styles,G=a.textWidth,M=l&&l.lineHeight,e=l&&l.textOutline,B=l&&"ellipsis"===l.textOverflow,R=l&&"nowrap"===l.whiteSpace,y=l&&l.fontSize,t,D,J=k.length,l=G&&!a.added&&this.box,w=function(a){var d;d=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:y||
b.style.fontSize||12;return M?g(M):b.fontMetrics(d,a.getAttribute("style")?a:r).h},Q=function(a,g){N(b.escapes,function(r,d){g&&-1!==v(r,g)||(a=a.toString().replace(new RegExp(r,"g"),d))});return a},u=function(a,g){var r;r=a.indexOf("\x3c");a=a.substring(r,a.indexOf("\x3e")-r);r=a.indexOf(g+"\x3d");if(-1!==r&&(r=r+g.length+1,g=a.charAt(r),'"'===g||"'"===g))return a=a.substring(r+1),a.substring(0,a.indexOf(g))};t=[c,B,R,M,e,y,G].join();if(t!==a.textCache){for(a.textCache=t;J--;)r.removeChild(k[J]);
z||e||B||G||-1!==c.indexOf(" ")?(l&&l.appendChild(r),c=z?c.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[c],c=d(c,function(a){return""!==a}),p(c,function(g,d){var c,z=0,k=0;g=g.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");c=g.split("|||");p(c,function(g){if(""!==g||1===
c.length){var v={},l=h.createElementNS(b.SVG_NS,"tspan"),p,M;(p=u(g,"class"))&&f(l,"class",p);if(p=u(g,"style"))p=p.replace(/(;| |^)color([ :])/,"$1fill$2"),f(l,"style",p);(M=u(g,"href"))&&!m&&(f(l,"onclick",'location.href\x3d"'+M+'"'),f(l,"class","highcharts-anchor"),x(l,{cursor:"pointer"}));g=Q(g.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==g){l.appendChild(h.createTextNode(g));z?v.dx=0:d&&null!==A&&(v.x=A);f(l,v);r.appendChild(l);!z&&D&&(!O&&m&&x(l,{display:"block"}),f(l,"dy",w(l)));if(G){var e=
g.replace(/([^\^])-/g,"$1- ").split(" "),v=!R&&(1<c.length||d||1<e.length);M=0;var t=w(l);if(B)q=b.truncate(a,l,g,void 0,0,Math.max(0,G-parseInt(y||12,10)),function(a,g){return a.substring(0,g)+"\u2026"});else if(v)for(;e.length;)e.length&&!R&&0<M&&(l=h.createElementNS(H,"tspan"),f(l,{dy:t,x:A}),p&&f(l,"style",p),l.appendChild(h.createTextNode(e.join(" ").replace(/- /g,"-"))),r.appendChild(l)),b.truncate(a,l,null,e,0===M?k:0,G,function(a,g){return e.slice(0,g).join(" ").replace(/- /g,"-")}),k=a.actualWidth,
M++}z++}}});D=D||r.childNodes.length}),B&&q&&a.attr("title",Q(a.textStr,["\x26lt;","\x26gt;"])),l&&l.removeChild(r),e&&a.applyTextOutline&&a.applyTextOutline(e)):r.appendChild(h.createTextNode(Q(c)))}},getContrast:function(a){a=u(a).rgba;a[0]*=1;a[1]*=1.2;a[2]*=.5;return 459<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,g,r,d,b,c,m,H,h){var z=this.label(a,g,r,h,null,null,null,null,"button"),q=0;z.attr(G({padding:8,r:2},b));var A,v,l,p;b=G({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,
style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},b);A=b.style;delete b.style;c=G(b,{fill:"#e6e6e6"},c);v=c.style;delete c.style;m=G(b,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},m);l=m.style;delete m.style;H=G(b,{style:{color:"#cccccc"}},H);p=H.style;delete H.style;I(z.element,L?"mouseover":"mouseenter",function(){3!==q&&z.setState(1)});I(z.element,L?"mouseout":"mouseleave",function(){3!==q&&z.setState(q)});z.setState=function(a){1!==a&&(z.state=q=a);z.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+
["normal","hover","pressed","disabled"][a||0]);z.attr([b,c,m,H][a||0]).css([A,v,l,p][a||0])};z.attr(b).css(k({cursor:"default"},A));return z.on("click",function(a){3!==q&&d.call(z,a)})},crispLine:function(a,g){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-g%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+g%2/2);return a},path:function(a){var g={fill:"none"};J(a)?g.d=a:B(a)&&k(g,a);return this.createElement("path").attr(g)},circle:function(a,g,r){a=B(a)?a:{x:a,y:g,r:r};g=this.createElement("circle");g.xSetter=
g.ySetter=function(a,g,r){r.setAttribute("c"+g,a)};return g.attr(a)},arc:function(a,g,r,d,b,c){B(a)?(d=a,g=d.y,r=d.r,a=d.x):d={innerR:d,start:b,end:c};a=this.symbol("arc",a,g,r,r,d);a.r=r;return a},rect:function(a,g,r,d,b,c){b=B(a)?a.r:b;var m=this.createElement("rect");a=B(a)?a:void 0===a?{}:{x:a,y:g,width:Math.max(r,0),height:Math.max(d,0)};void 0!==c&&(a.strokeWidth=c,a=m.crisp(a));a.fill="none";b&&(a.r=b);m.rSetter=function(a,g,r){f(r,{rx:a,ry:a})};return m.attr(a)},setSize:function(a,g,r){var d=
this.alignedObjects,b=d.length;this.width=a;this.height=g;for(this.boxWrapper.animate({width:a,height:g},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:E(r,!0)?void 0:0});b--;)d[b].align()},g:function(a){var g=this.createElement("g");return a?g.attr({"class":"highcharts-"+a}):g},image:function(a,g,r,d,b,c){var m={preserveAspectRatio:"none"},H,h=function(a,g){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",g):a.setAttribute("hc-svg-href",
g)},q=function(g){h(H.element,a);c.call(H,g)};1<arguments.length&&k(m,{x:g,y:r,width:d,height:b});H=this.createElement("image").attr(m);c?(h(H.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"),m=new Q.Image,I(m,"load",q),m.src=a,m.complete&&q({})):h(H.element,a);return H},symbol:function(a,g,r,d,b,c){var m=this,H,q=/^url\((.*?)\)$/,A=q.test(a),v=!A&&(this.symbols[a]?a:"circle"),z=v&&this.symbols[v],l=w(g)&&z&&z.call(this.symbols,Math.round(g),Math.round(r),
d,b,c),G,M;z?(H=this.path(l),H.attr("fill","none"),k(H,{symbolName:v,x:g,y:r,width:d,height:b}),c&&k(H,c)):A&&(G=a.match(q)[1],H=this.image(G),H.imgwidth=E(R[G]&&R[G].width,c&&c.width),H.imgheight=E(R[G]&&R[G].height,c&&c.height),M=function(){H.attr({width:H.width,height:H.height})},p(["width","height"],function(a){H[a+"Setter"]=function(a,g){var r={},d=this["img"+g],b="width"===g?"translateX":"translateY";this[g]=a;w(d)&&(this.element&&this.element.setAttribute(g,d),this.alignByTranslate||(r[b]=
((this[g]||0)-d)/2,this.attr(r)))}}),w(g)&&H.attr({x:g,y:r}),H.isImg=!0,w(H.imgwidth)&&w(H.imgheight)?M():(H.attr({width:0,height:0}),t("img",{onload:function(){var a=e[m.chartIndex];0===this.width&&(x(this,{position:"absolute",top:"-999em"}),h.body.appendChild(this));R[G]={width:this.width,height:this.height};H.imgwidth=this.width;H.imgheight=this.height;H.element&&M();this.parentNode&&this.parentNode.removeChild(this);m.imgCount--;if(!m.imgCount&&a&&a.onload)a.onload()},src:G}),this.imgCount++));
return H},symbols:{circle:function(a,g,r,d){return this.arc(a+r/2,g+d/2,r/2,d/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,g,r,d){return["M",a,g,"L",a+r,g,a+r,g+d,a,g+d,"Z"]},triangle:function(a,g,r,d){return["M",a+r/2,g,"L",a+r,g+d,a,g+d,"Z"]},"triangle-down":function(a,g,r,d){return["M",a,g,"L",a+r,g,a+r/2,g+d,"Z"]},diamond:function(a,g,r,d){return["M",a+r/2,g,"L",a+r,g+d/2,a+r/2,g+d,a,g+d/2,"Z"]},arc:function(a,g,r,d,b){var c=b.start,m=b.r||r,H=b.r||d||r,k=b.end-.001;r=b.innerR;d=E(b.open,
.001>Math.abs(b.end-b.start-2*Math.PI));var h=Math.cos(c),q=Math.sin(c),A=Math.cos(k),k=Math.sin(k);b=.001>b.end-c-Math.PI?0:1;m=["M",a+m*h,g+H*q,"A",m,H,0,b,1,a+m*A,g+H*k];w(r)&&m.push(d?"M":"L",a+r*A,g+r*k,"A",r,r,0,b,0,a+r*h,g+r*q);m.push(d?"":"Z");return m},callout:function(a,g,r,d,b){var c=Math.min(b&&b.r||0,r,d),m=c+6,H=b&&b.anchorX;b=b&&b.anchorY;var k;k=["M",a+c,g,"L",a+r-c,g,"C",a+r,g,a+r,g,a+r,g+c,"L",a+r,g+d-c,"C",a+r,g+d,a+r,g+d,a+r-c,g+d,"L",a+c,g+d,"C",a,g+d,a,g+d,a,g+d-c,"L",a,g+c,
"C",a,g,a,g,a+c,g];H&&H>r?b>g+m&&b<g+d-m?k.splice(13,3,"L",a+r,b-6,a+r+6,b,a+r,b+6,a+r,g+d-c):k.splice(13,3,"L",a+r,d/2,H,b,a+r,d/2,a+r,g+d-c):H&&0>H?b>g+m&&b<g+d-m?k.splice(33,3,"L",a,b+6,a-6,b,a,b-6,a,g+c):k.splice(33,3,"L",a,d/2,H,b,a,d/2,a,g+c):b&&b>d&&H>a+m&&H<a+r-m?k.splice(23,3,"L",H+6,g+d,H,g+d+6,H-6,g+d,a+c,g+d):b&&0>b&&H>a+m&&H<a+r-m&&k.splice(3,3,"L",H-6,g,H,g-6,H+6,g,r-c,g);return k}},clipRect:function(g,r,d,b){var c=a.uniqueKey(),m=this.createElement("clipPath").attr({id:c}).add(this.defs);
g=this.rect(g,r,d,b,0).add(m);g.id=c;g.clipPath=m;g.count=0;return g},text:function(a,g,r,d){var b={};if(d&&(this.allowHTML||!this.forExport))return this.html(a,g,r);b.x=Math.round(g||0);r&&(b.y=Math.round(r));w(a)&&(b.text=a);a=this.createElement("text").attr(b);d||(a.xSetter=function(a,g,r){var d=r.getElementsByTagName("tspan"),b,c=r.getAttribute(g),m;for(m=0;m<d.length;m++)b=d[m],b.getAttribute(g)===c&&b.setAttribute(g,a);r.setAttribute(g,a)});return a},fontMetrics:function(a,r){a=a||r&&r.style&&
r.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?g(a):/em/.test(a)?parseFloat(a)*(r?this.fontMetrics(null,r.parentNode).f:16):12;r=24>a?a+3:Math.round(1.2*a);return{h:r,b:Math.round(.8*r),f:a}},rotCorr:function(a,g,r){var d=a;g&&r&&(d=Math.max(d*Math.cos(g*y),4));return{x:-a/3*Math.sin(g*y),y:d}},label:function(g,d,b,c,m,H,h,q,A){var v=this,l=v.g("button"!==A&&"label"),M=l.text=v.text("",0,0,h).attr({zIndex:1}),O,z,e=0,B=3,R=0,f,y,t,D,J,E={},N,x,Q=/^url\((.*?)\)$/.test(c),u=Q,L,n,
P,T;A&&l.addClass("highcharts-"+A);u=Q;L=function(){return(N||0)%2/2};n=function(){var a=M.element.style,g={};z=(void 0===f||void 0===y||J)&&w(M.textStr)&&M.getBBox();l.width=(f||z.width||0)+2*B+R;l.height=(y||z.height||0)+2*B;x=B+v.fontMetrics(a&&a.fontSize,M).b;u&&(O||(l.box=O=v.symbols[c]||Q?v.symbol(c):v.rect(),O.addClass(("button"===A?"":"highcharts-label-box")+(A?" highcharts-"+A+"-box":"")),O.add(l),a=L(),g.x=a,g.y=(q?-x:0)+a),g.width=Math.round(l.width),g.height=Math.round(l.height),O.attr(k(g,
E)),E={})};P=function(){var a=R+B,g;g=q?0:x;w(f)&&z&&("center"===J||"right"===J)&&(a+={center:.5,right:1}[J]*(f-z.width));if(a!==M.x||g!==M.y)M.attr("x",a),M.hasBoxWidthChanged&&(z=M.getBBox(!0),n()),void 0!==g&&M.attr("y",g);M.x=a;M.y=g};T=function(a,g){O?O.attr(a,g):E[a]=g};l.onAdd=function(){M.add(l);l.attr({text:g||0===g?g:"",x:d,y:b});O&&w(m)&&l.attr({anchorX:m,anchorY:H})};l.widthSetter=function(g){f=a.isNumber(g)?g:null};l.heightSetter=function(a){y=a};l["text-alignSetter"]=function(a){J=a};
l.paddingSetter=function(a){w(a)&&a!==B&&(B=l.padding=a,P())};l.paddingLeftSetter=function(a){w(a)&&a!==R&&(R=a,P())};l.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==e&&(e=a,z&&l.attr({x:t}))};l.textSetter=function(a){void 0!==a&&M.textSetter(a);n();P()};l["stroke-widthSetter"]=function(a,g){a&&(u=!0);N=this["stroke-width"]=a;T(g,a)};l.strokeSetter=l.fillSetter=l.rSetter=function(a,g){"r"!==g&&("fill"===g&&a&&(u=!0),l[g]=a);T(g,a)};l.anchorXSetter=function(a,g){m=l.anchorX=a;T(g,Math.round(a)-
L()-t)};l.anchorYSetter=function(a,g){H=l.anchorY=a;T(g,a-D)};l.xSetter=function(a){l.x=a;e&&(a-=e*((f||z.width)+2*B),l["forceAnimate:x"]=!0);t=Math.round(a);l.attr("translateX",t)};l.ySetter=function(a){D=l.y=Math.round(a);l.attr("translateY",D)};var V=l.css;return k(l,{css:function(a){if(a){var g={};a=G(a);p(l.textProps,function(r){void 0!==a[r]&&(g[r]=a[r],delete a[r])});M.css(g);"width"in g&&n()}return V.call(l,a)},getBBox:function(){return{width:z.width+2*B,height:z.height+2*B,x:z.x-B,y:z.y-
B}},shadow:function(a){a&&(n(),O&&O.shadow(a));return l},destroy:function(){r(l.element,"mouseenter");r(l.element,"mouseleave");M&&(M=M.destroy());O&&(O=O.destroy());C.prototype.destroy.call(l);l=v=n=P=T=null}})}});a.Renderer=F})(K);(function(a){var C=a.attr,F=a.createElement,I=a.css,n=a.defined,f=a.each,e=a.extend,u=a.isFirefox,x=a.isMS,t=a.isWebKit,w=a.pick,y=a.pInt,c=a.SVGRenderer,h=a.win,p=a.wrap;e(a.SVGElement.prototype,{htmlCss:function(a){var c="SPAN"===this.element.tagName&&a&&"width"in a,
d=w(c&&a.width,void 0);c&&(delete a.width,this.textWidth=d,this.htmlUpdateTransform());a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=e(this.styles,a);I(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,c=this.element,d=this.translateX||0,b=this.translateY||0,h=this.x||0,p=this.y||0,l=this.textAlign||
"left",e={left:0,center:.5,right:1}[l],B=this.styles,t=B&&B.whiteSpace;I(c,{marginLeft:d,marginTop:b});this.shadows&&f(this.shadows,function(a){I(a,{marginLeft:d+1,marginTop:b+1})});this.inverted&&f(c.childNodes,function(d){a.invertChild(d,c)});if("SPAN"===c.tagName){var B=this.rotation,m=this.textWidth&&y(this.textWidth),G=[B,l,c.innerHTML,this.textWidth,this.textAlign].join(),A;(A=m!==this.oldTextWidth)&&!(A=m>this.oldTextWidth)&&((A=this.textPxLength)||(I(c,{width:"",whiteSpace:t||"nowrap"}),A=
c.offsetWidth),A=A>m);A&&/[ \-]/.test(c.textContent||c.innerText)?(I(c,{width:m+"px",display:"block",whiteSpace:t||"normal"}),this.oldTextWidth=m,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;G!==this.cTT&&(t=a.fontMetrics(c.style.fontSize).b,!n(B)||B===(this.oldRotation||0)&&l===this.oldAlign||this.setSpanRotation(B,e,t),this.getSpanCorrection(!n(B)&&this.textPxLength||c.offsetWidth,t,e,B,l));I(c,{left:h+(this.xCorr||0)+"px",top:p+(this.yCorr||0)+"px"});this.cTT=G;this.oldRotation=B;this.oldAlign=
l}}else this.alignOnAdd=!0},setSpanRotation:function(a,c,d){var b={},k=this.renderer.getTransformKey();b[k]=b.transform="rotate("+a+"deg)";b[k+(u?"Origin":"-origin")]=b.transformOrigin=100*c+"% "+d+"px";I(this.element,b)},getSpanCorrection:function(a,c,d){this.xCorr=-a*d;this.yCorr=-c}});e(c.prototype,{getTransformKey:function(){return x&&!/Edge/.test(h.navigator.userAgent)?"-ms-transform":t?"-webkit-transform":u?"MozTransform":h.opera?"-o-transform":""},html:function(a,c,d){var b=this.createElement("span"),
k=b.element,h=b.renderer,l=h.isSVG,q=function(a,d){f(["opacity","visibility"],function(b){p(a,b+"Setter",function(a,b,c,m){a.call(this,b,c,m);d[c]=b})});a.addedSetters=!0};b.textSetter=function(a){a!==k.innerHTML&&delete this.bBox;this.textStr=a;k.innerHTML=w(a,"");b.doTransform=!0};l&&q(b,b.element.style);b.xSetter=b.ySetter=b.alignSetter=b.rotationSetter=function(a,d){"align"===d&&(d="textAlign");b[d]=a;b.doTransform=!0};b.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=
!1)};b.attr({text:a,x:Math.round(c),y:Math.round(d)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});k.style.whiteSpace="nowrap";b.css=b.htmlCss;l&&(b.add=function(a){var d,c=h.box.parentNode,l=[];if(this.parentGroup=a){if(d=a.div,!d){for(;a;)l.push(a),a=a.parentGroup;f(l.reverse(),function(a){function m(g,d){a[d]=g;"translateX"===d?k.left=g+"px":k.top=g+"px";a.doTransform=!0}var k,g=C(a.element,"class");g&&(g={className:g});d=a.div=a.div||F("div",g,{position:"absolute",
left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},d||c);k=d.style;e(a,{classSetter:function(a){return function(g){this.element.setAttribute("class",g);a.className=g}}(d),on:function(){l[0].div&&b.on.apply({element:l[0].div},arguments);return a},translateXSetter:m,translateYSetter:m});a.addedSetters||q(a,k)})}}else d=c;d.appendChild(k);b.added=!0;b.alignOnAdd&&b.htmlUpdateTransform();return b});return b}})})(K);
(function(a){var C=a.defined,F=a.each,I=a.extend,n=a.merge,f=a.pick,e=a.timeUnits,u=a.win;a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},update:function(a){var e=f(a&&a.useUTC,!0),w=this;this.options=a=n(!0,this.options||{},a);this.Date=a.Date||u.Date;this.timezoneOffset=(this.useUTC=e)&&a.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(e&&!a.getTimezoneOffset&&!a.timezone))||this.timezoneOffset?(this.get=function(a,c){var h=
c.getTime(),p=h-w.getTimezoneOffset(c);c.setTime(p);a=c["getUTC"+a]();c.setTime(h);return a},this.set=function(a,c,h){var p;if("Milliseconds"===a||"Seconds"===a||"Minutes"===a&&0===c.getTimezoneOffset()%60)c["set"+a](h);else p=w.getTimezoneOffset(c),p=c.getTime()-p,c.setTime(p),c["setUTC"+a](h),a=w.getTimezoneOffset(c),p=c.getTime()+a,c.setTime(p)}):e?(this.get=function(a,c){return c["getUTC"+a]()},this.set=function(a,c,h){return c["setUTC"+a](h)}):(this.get=function(a,c){return c["get"+a]()},this.set=
function(a,c,h){return c["set"+a](h)})},makeTime:function(e,t,w,y,c,h){var p,k,q;this.useUTC?(p=this.Date.UTC.apply(0,arguments),k=this.getTimezoneOffset(p),p+=k,q=this.getTimezoneOffset(p),k!==q?p+=q-k:k-36E5!==this.getTimezoneOffset(p-36E5)||a.isSafari||(p-=36E5)):p=(new this.Date(e,t,f(w,1),f(y,0),f(c,0),f(h,0))).getTime();return p},timezoneOffsetFunction:function(){var e=this,f=this.options,w=u.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(f.timezone){if(w)return function(a){return 6E4*
-w.tz(a,f.timezone).utcOffset()};a.error(25)}return this.useUTC&&f.getTimezoneOffset?function(a){return 6E4*f.getTimezoneOffset(a)}:function(){return 6E4*(e.timezoneOffset||0)}},dateFormat:function(e,f,w){if(!a.defined(f)||isNaN(f))return a.defaultOptions.lang.invalidDate||"";e=a.pick(e,"%Y-%m-%d %H:%M:%S");var t=this,c=new this.Date(f),h=this.get("Hours",c),p=this.get("Day",c),k=this.get("Date",c),q=this.get("Month",c),d=this.get("FullYear",c),b=a.defaultOptions.lang,v=b.weekdays,J=b.shortWeekdays,
l=a.pad,c=a.extend({a:J?J[p]:v[p].substr(0,3),A:v[p],d:l(k),e:l(k,2," "),w:p,b:b.shortMonths[q],B:b.months[q],m:l(q+1),o:q+1,y:d.toString().substr(2,2),Y:d,H:l(h),k:h,I:l(h%12||12),l:h%12||12,M:l(t.get("Minutes",c)),p:12>h?"AM":"PM",P:12>h?"am":"pm",S:l(c.getSeconds()),L:l(Math.floor(f%1E3),3)},a.dateFormats);a.objectEach(c,function(a,d){for(;-1!==e.indexOf("%"+d);)e=e.replace("%"+d,"function"===typeof a?a.call(t,f):a)});return w?e.substr(0,1).toUpperCase()+e.substr(1):e},resolveDTLFormat:function(e){return a.isObject(e,
!0)?e:(e=a.splat(e),{main:e[0],from:e[1],to:e[2]})},getTimeTicks:function(a,t,w,y){var c=this,h=[],p,k={},q;p=new c.Date(t);var d=a.unitRange,b=a.count||1,v;y=f(y,1);if(C(t)){c.set("Milliseconds",p,d>=e.second?0:b*Math.floor(c.get("Milliseconds",p)/b));d>=e.second&&c.set("Seconds",p,d>=e.minute?0:b*Math.floor(c.get("Seconds",p)/b));d>=e.minute&&c.set("Minutes",p,d>=e.hour?0:b*Math.floor(c.get("Minutes",p)/b));d>=e.hour&&c.set("Hours",p,d>=e.day?0:b*Math.floor(c.get("Hours",p)/b));d>=e.day&&c.set("Date",
p,d>=e.month?1:b*Math.floor(c.get("Date",p)/b));d>=e.month&&(c.set("Month",p,d>=e.year?0:b*Math.floor(c.get("Month",p)/b)),q=c.get("FullYear",p));d>=e.year&&c.set("FullYear",p,q-q%b);d===e.week&&(q=c.get("Day",p),c.set("Date",p,c.get("Date",p)-q+y+(q<y?-7:0)));q=c.get("FullYear",p);y=c.get("Month",p);var J=c.get("Date",p),l=c.get("Hours",p);t=p.getTime();c.variableTimezone&&(v=w-t>4*e.month||c.getTimezoneOffset(t)!==c.getTimezoneOffset(w));t=p.getTime();for(p=1;t<w;)h.push(t),t=d===e.year?c.makeTime(q+
p*b,0):d===e.month?c.makeTime(q,y+p*b):!v||d!==e.day&&d!==e.week?v&&d===e.hour&&1<b?c.makeTime(q,y,J,l+p*b):t+d*b:c.makeTime(q,y,J+p*b*(d===e.day?1:7)),p++;h.push(t);d<=e.hour&&1E4>h.length&&F(h,function(a){0===a%18E5&&"000000000"===c.dateFormat("%H%M%S%L",a)&&(k[a]="day")})}h.info=I(a,{higherRanks:k,totalRange:d*b});return h}}})(K);(function(a){var C=a.color,F=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle",
"diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,
chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",
labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",
position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:C("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(C){a.defaultOptions=F(!0,a.defaultOptions,C);
a.time.update(F(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;a.time=new a.Time(F(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(C,n,f){return a.time.dateFormat(C,n,f)}})(K);(function(a){var C=a.correctFloat,F=a.defined,I=a.destroyObjectProperties,n=a.fireEvent,f=a.isNumber,e=a.merge,u=a.pick,x=a.deg2rad;a.Tick=function(a,e,f,c,h){this.axis=a;this.pos=
e;this.type=f||"";this.isNewLabel=this.isNew=!0;this.parameters=h||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;f||c||this.addLabel()};a.Tick.prototype={addLabel:function(){var f=this,w=f.axis,y=w.options,c=w.chart,h=w.categories,p=w.names,k=f.pos,q=u(f.options&&f.options.labels,y.labels),d=w.tickPositions,b=k===d[0],v=k===d[d.length-1],h=this.parameters.category||(h?u(h[k],p[k],k):k),J=f.label,d=d.info,l,n,B,D;w.isDatetimeAxis&&d&&(n=c.time.resolveDTLFormat(y.dateTimeLabelFormats[!y.grid&&
d.higherRanks[k]||d.unitName]),l=n.main);f.isFirst=b;f.isLast=v;f.formatCtx={axis:w,chart:c,isFirst:b,isLast:v,dateTimeLabelFormat:l,tickPositionInfo:d,value:w.isLog?C(w.lin2log(h)):h,pos:k};y=w.labelFormatter.call(f.formatCtx,this.formatCtx);if(D=n&&n.list)f.shortenLabel=function(){for(B=0;B<D.length;B++)if(J.attr({text:w.labelFormatter.call(a.extend(f.formatCtx,{dateTimeLabelFormat:D[B]}))}),J.getBBox().width<w.getSlotWidth(f)-2*u(q.padding,5))return;J.attr({text:""})};if(F(J))J&&J.textStr!==y&&
(!J.textWidth||q.style&&q.style.width||J.styles.width||J.css({width:null}),J.attr({text:y}));else{if(f.label=J=F(y)&&q.enabled?c.renderer.text(y,0,0,q.useHTML).css(e(q.style)).add(w.labelGroup):null)J.textPxLength=J.getBBox().width;f.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var e=this.axis,f=e.options.labels,c=a.x,h=e.chart.chartWidth,p=e.chart.spacing,k=u(e.labelLeft,Math.min(e.pos,p[3])),p=u(e.labelRight,
Math.max(e.isRadial?0:e.pos+e.len,h-p[1])),q=this.label,d=this.rotation,b={left:0,center:.5,right:1}[e.labelAlign||q.attr("align")],v=q.getBBox().width,J=e.getSlotWidth(this),l=J,t=1,B,D={};if(d||"justify"!==u(f.overflow,"justify"))0>d&&c-b*v<k?B=Math.round(c/Math.cos(d*x)-k):0<d&&c+b*v>p&&(B=Math.round((h-c)/Math.cos(d*x)));else if(h=c+(1-b)*v,c-b*v<k?l=a.x+l*(1-b)-k:h>p&&(l=p-a.x+l*b,t=-1),l=Math.min(J,l),l<J&&"center"===e.labelAlign&&(a.x+=t*(J-l-b*(J-Math.min(v,l)))),v>l||e.autoRotation&&(q.styles||
{}).width)B=l;B&&(this.shortenLabel?this.shortenLabel():(D.width=B,(f.style||{}).textOverflow||(D.textOverflow="ellipsis"),q.css(D)))},getPosition:function(e,f,y,c){var h=this.axis,p=h.chart,k=c&&p.oldChartHeight||p.chartHeight;e={x:e?a.correctFloat(h.translate(f+y,null,null,c)+h.transB):h.left+h.offset+(h.opposite?(c&&p.oldChartWidth||p.chartWidth)-h.right-h.left:0),y:e?k-h.bottom+h.offset-(h.opposite?h.height:0):a.correctFloat(k-h.translate(f+y,null,null,c)-h.transB)};n(this,"afterGetPosition",
{pos:e});return e},getLabelPosition:function(a,e,f,c,h,p,k,q){var d=this.axis,b=d.transA,v=d.reversed,J=d.staggerLines,l=d.tickRotCorr||{x:0,y:0},t=h.y,B=c||d.reserveSpaceDefault?0:-d.labelOffset*("center"===d.labelAlign?.5:1),D={};F(t)||(t=0===d.side?f.rotation?-8:-f.getBBox().height:2===d.side?l.y+8:Math.cos(f.rotation*x)*(l.y-f.getBBox(!1,0).height/2));a=a+h.x+B+l.x-(p&&c?p*b*(v?-1:1):0);e=e+t-(p&&!c?p*b*(v?1:-1):0);J&&(f=k/(q||1)%J,d.opposite&&(f=J-f-1),e+=d.labelOffset/J*f);D.x=a;D.y=Math.round(e);
n(this,"afterGetLabelPosition",{pos:D});return D},getMarkPath:function(a,e,f,c,h,p){return p.crispLine(["M",a,e,"L",a+(h?0:-f),e+(h?f:0)],c)},renderGridLine:function(a,e,f){var c=this.axis,h=c.options,p=this.gridLine,k={},q=this.pos,d=this.type,b=u(this.tickmarkOffset,c.tickmarkOffset),v=c.chart.renderer,J=d?d+"Grid":"grid",l=h[J+"LineWidth"],t=h[J+"LineColor"],h=h[J+"LineDashStyle"];p||(k.stroke=t,k["stroke-width"]=l,h&&(k.dashstyle=h),d||(k.zIndex=1),a&&(e=0),this.gridLine=p=v.path().attr(k).addClass("highcharts-"+
(d?d+"-":"")+"grid-line").add(c.gridGroup));if(p&&(f=c.getPlotLinePath(q+b,p.strokeWidth()*f,a,"pass")))p[a||this.isNew?"attr":"animate"]({d:f,opacity:e})},renderMark:function(a,e,f){var c=this.axis,h=c.options,p=c.chart.renderer,k=this.type,q=k?k+"Tick":"tick",d=c.tickSize(q),b=this.mark,v=!b,J=a.x;a=a.y;var l=u(h[q+"Width"],!k&&c.isXAxis?1:0),h=h[q+"Color"];d&&(c.opposite&&(d[0]=-d[0]),v&&(this.mark=b=p.path().addClass("highcharts-"+(k?k+"-":"")+"tick").add(c.axisGroup),b.attr({stroke:h,"stroke-width":l})),
b[v?"attr":"animate"]({d:this.getMarkPath(J,a,d[0],b.strokeWidth()*f,c.horiz,p),opacity:e}))},renderLabel:function(a,e,y,c){var h=this.axis,p=h.horiz,k=h.options,q=this.label,d=k.labels,b=d.step,h=u(this.tickmarkOffset,h.tickmarkOffset),v=!0,J=a.x;a=a.y;q&&f(J)&&(q.xy=a=this.getLabelPosition(J,a,q,p,d,h,c,b),this.isFirst&&!this.isLast&&!u(k.showFirstLabel,1)||this.isLast&&!this.isFirst&&!u(k.showLastLabel,1)?v=!1:!p||d.step||d.rotation||e||0===y||this.handleOverflow(a),b&&c%b&&(v=!1),v&&f(a.y)?(a.opacity=
y,q[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(q.attr("y",-9999),this.isNewLabel=!0))},render:function(e,f,y){var c=this.axis,h=c.horiz,p=this.pos,k=u(this.tickmarkOffset,c.tickmarkOffset),p=this.getPosition(h,p,k,f),k=p.x,q=p.y,c=h&&k===c.pos+c.len||!h&&q===c.pos?-1:1;y=u(y,1);this.isActive=!0;this.renderGridLine(f,y,c);this.renderMark(p,y,c);this.renderLabel(p,f,y,e);this.isNew=!1;a.fireEvent(this,"afterRender")},destroy:function(){I(this,this.axis)}}})(K);var W=function(a){var C=
a.addEvent,F=a.animObject,I=a.arrayMax,n=a.arrayMin,f=a.color,e=a.correctFloat,u=a.defaultOptions,x=a.defined,t=a.deg2rad,w=a.destroyObjectProperties,y=a.each,c=a.extend,h=a.fireEvent,p=a.format,k=a.getMagnitude,q=a.grep,d=a.inArray,b=a.isArray,v=a.isNumber,J=a.isString,l=a.merge,L=a.normalizeTickInterval,B=a.objectEach,D=a.pick,m=a.removeEvent,G=a.splat,A=a.syncTimeout,N=a.Tick,E=function(){this.init.apply(this,arguments)};a.extend(E.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",
range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",
style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",
textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,r){var g=r.isX,b=this;b.chart=a;b.horiz=a.inverted&&!b.isZAxis?!g:g;b.isXAxis=g;b.coll=b.coll||(g?"xAxis":"yAxis");h(this,"init",{userOptions:r});b.opposite=
r.opposite;b.side=r.side||(b.horiz?b.opposite?0:2:b.opposite?1:3);b.setOptions(r);var c=this.options,m=c.type;b.labelFormatter=c.labels.formatter||b.defaultLabelFormatter;b.userOptions=r;b.minPixelPadding=0;b.reversed=c.reversed;b.visible=!1!==c.visible;b.zoomEnabled=!1!==c.zoomEnabled;b.hasNames="category"===m||!0===c.categories;b.categories=c.categories||b.hasNames;b.names||(b.names=[],b.names.keys={});b.plotLinesAndBandsGroups={};b.isLog="logarithmic"===m;b.isDatetimeAxis="datetime"===m;b.positiveValuesOnly=
b.isLog&&!b.allowNegativeLog;b.isLinked=x(c.linkedTo);b.ticks={};b.labelEdge=[];b.minorTicks={};b.plotLinesAndBands=[];b.alternateBands={};b.len=0;b.minRange=b.userMinRange=c.minRange||c.maxZoom;b.range=c.range;b.offset=c.offset||0;b.stacks={};b.oldStacks={};b.stacksTouched=0;b.max=null;b.min=null;b.crosshair=D(c.crosshair,G(a.options.tooltip.crosshairs)[g?0:1],!1);r=b.options.events;-1===d(b,a.axes)&&(g?a.axes.splice(a.xAxis.length,0,b):a.axes.push(b),a[b.coll].push(b));b.series=b.series||[];a.inverted&&
!b.isZAxis&&g&&void 0===b.reversed&&(b.reversed=!0);B(r,function(a,g){C(b,g,a)});b.lin2log=c.linearToLogConverter||b.lin2log;b.isLog&&(b.val2lin=b.log2lin,b.lin2val=b.lin2log);h(this,"afterInit")},setOptions:function(a){this.options=l(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],l(u[this.coll],a));h(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var g=
this.axis,r=this.value,b=g.chart.time,d=g.categories,c=this.dateTimeLabelFormat,m=u.lang,k=m.numericSymbols,m=m.numericSymbolMagnitude||1E3,h=k&&k.length,l,q=g.options.labels.format,g=g.isLog?Math.abs(r):g.tickInterval;if(q)l=p(q,this,b);else if(d)l=r;else if(c)l=b.dateFormat(c,r);else if(h&&1E3<=g)for(;h--&&void 0===l;)b=Math.pow(m,h+1),g>=b&&0===10*r%b&&null!==k[h]&&0!==r&&(l=a.numberFormat(r/b,-1)+k[h]);void 0===l&&(l=1E4<=Math.abs(r)?a.numberFormat(r,-1):a.numberFormat(r,-1,void 0,""));return l},
getSeriesExtremes:function(){var a=this,r=a.chart;h(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();y(a.series,function(g){if(g.visible||!r.options.chart.ignoreHiddenSeries){var b=g.options,d=b.threshold,c;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=d&&(d=null);if(a.isXAxis)b=g.xData,b.length&&(g=n(b),c=I(b),v(g)||g instanceof Date||(b=q(b,v),g=n(b),c=I(b)),b.length&&(a.dataMin=Math.min(D(a.dataMin,
b[0],g),g),a.dataMax=Math.max(D(a.dataMax,b[0],c),c)));else if(g.getExtremes(),c=g.dataMax,g=g.dataMin,x(g)&&x(c)&&(a.dataMin=Math.min(D(a.dataMin,g),g),a.dataMax=Math.max(D(a.dataMax,c),c)),x(d)&&(a.threshold=d),!b.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});h(this,"afterGetSeriesExtremes")},translate:function(a,r,b,d,c,m){var g=this.linkedParent||this,k=1,H=0,l=d?g.oldTransA:g.transA;d=d?g.oldMin:g.min;var h=g.minPixelPadding;c=(g.isOrdinal||g.isBroken||g.isLog&&c)&&g.lin2val;l||
(l=g.transA);b&&(k*=-1,H=g.len);g.reversed&&(k*=-1,H-=k*(g.sector||g.len));r?(a=(a*k+H-h)/l+d,c&&(a=g.lin2val(a))):(c&&(a=g.val2lin(a)),a=v(d)?k*(a-d)*l+H+k*h+(v(m)?l*m:0):void 0);return a},toPixels:function(a,r){return this.translate(a,!1,!this.horiz,null,!0)+(r?0:this.pos)},toValue:function(a,r){return this.translate(a-(r?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,r,b,d,c){var g=this.chart,m=this.left,k=this.top,H,l,h=b&&g.oldChartHeight||g.chartHeight,q=b&&g.oldChartWidth||
g.chartWidth,A;H=this.transB;var e=function(a,g,r){if("pass"!==d&&a<g||a>r)d?a=Math.min(Math.max(g,a),r):A=!0;return a};c=D(c,this.translate(a,null,null,b));c=Math.min(Math.max(-1E5,c),1E5);a=b=Math.round(c+H);H=l=Math.round(h-c-H);v(c)?this.horiz?(H=k,l=h-this.bottom,a=b=e(a,m,m+this.width)):(a=m,b=q-this.right,H=l=e(H,k,k+this.height)):(A=!0,d=!1);return A&&!d?null:g.renderer.crispLine(["M",a,H,"L",b,l],r||1)},getLinearTickPositions:function(a,r,b){var g,d=e(Math.floor(r/a)*a);b=e(Math.ceil(b/a)*
a);var c=[],m;e(d+a)===d&&(m=20);if(this.single)return[r];for(r=d;r<=b;){c.push(r);r=e(r+a,m);if(r===g)break;g=r}return c},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?D(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,r=a.options,b=a.tickPositions,d=a.minorTickInterval,c=[],m=a.pointRangePadding||0,k=a.min-m,m=a.max+m,l=m-k;if(l&&l/d<a.len/3)if(a.isLog)y(this.paddedTicks,function(g,r,b){r&&c.push.apply(c,
a.getLogTickPositions(d,b[r-1],b[r],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())c=c.concat(a.getTimeTicks(a.normalizeTimeTickInterval(d),k,m,r.startOfWeek));else for(r=k+(b[0]-k)%d;r<=m&&r!==c[0];r+=d)c.push(r);0!==c.length&&a.trimTicks(c);return c},adjustForMinRange:function(){var a=this.options,r=this.min,b=this.max,d,c,m,k,l,h,q,v;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(x(a.min)||x(a.max)?this.minRange=null:(y(this.series,function(a){h=a.xData;for(k=q=a.xIncrement?
1:h.length-1;0<k;k--)if(l=h[k]-h[k-1],void 0===m||l<m)m=l}),this.minRange=Math.min(5*m,this.dataMax-this.dataMin)));b-r<this.minRange&&(c=this.dataMax-this.dataMin>=this.minRange,v=this.minRange,d=(v-b+r)/2,d=[r-d,D(a.min,r-d)],c&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),r=I(d),b=[r+v,D(a.max,r+v)],c&&(b[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),b=n(b),b-r<v&&(d[0]=b-v,d[1]=D(a.min,b-v),r=I(d)));this.min=r;this.max=b},getClosest:function(){var a;this.categories?a=1:y(this.series,
function(g){var r=g.closestPointRange,b=g.visible||!g.chart.options.chart.ignoreHiddenSeries;!g.noSharedTooltip&&x(r)&&b&&(a=x(a)?Math.min(a,r):r)});return a},nameToX:function(a){var g=b(this.categories),c=g?this.categories:this.names,m=a.options.x,k;a.series.requireSorting=!1;x(m)||(m=!1===this.options.uniqueNames?a.series.autoIncrement():g?d(a.name,c):D(c.keys[a.name],-1));-1===m?g||(k=c.length):k=m;void 0!==k&&(this.names[k]=a.name,this.names.keys[a.name]=k);return k},updateNames:function(){var g=
this,r=this.names;0<r.length&&(y(a.keys(r.keys),function(a){delete r.keys[a]}),r.length=0,this.minRange=this.userMinRange,y(this.series||[],function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)a.processData(),a.generatePoints();y(a.points,function(r,b){var d;r.options&&(d=g.nameToX(r),void 0!==d&&d!==r.x&&(r.x=d,a.xData[b]=d))})}))},setAxisTranslation:function(a){var g=this,b=g.max-g.min,d=g.axisPointRange||0,c,m=0,k=0,l=g.linkedParent,q=!!g.categories,v=g.transA,A=g.isXAxis;if(A||q||d)c=g.getClosest(),
l?(m=l.minPointOffset,k=l.pointRangePadding):y(g.series,function(a){var b=q?1:A?D(a.options.pointRange,c,0):g.axisPointRange||0;a=a.options.pointPlacement;d=Math.max(d,b);g.single||(m=Math.max(m,J(a)?0:b/2),k=Math.max(k,"on"===a?0:b))}),l=g.ordinalSlope&&c?g.ordinalSlope/c:1,g.minPointOffset=m*=l,g.pointRangePadding=k*=l,g.pointRange=Math.min(d,b),A&&(g.closestPointRange=c);a&&(g.oldTransA=v);g.translationSlope=g.transA=v=g.staticScale||g.len/(b+k||1);g.transB=g.horiz?g.left:g.bottom;g.minPixelPadding=
v*m;h(this,"afterSetAxisTranslation")},minFromRange:function(){return this.max-this.range},setTickInterval:function(g){var b=this,d=b.chart,c=b.options,m=b.isLog,l=b.isDatetimeAxis,q=b.isXAxis,A=b.isLinked,p=c.maxPadding,f=c.minPadding,G=c.tickInterval,B=c.tickPixelInterval,J=b.categories,E=v(b.threshold)?b.threshold:null,N=b.softThreshold,w,t,u,n;l||J||A||this.getTickAmount();u=D(b.userMin,c.min);n=D(b.userMax,c.max);A?(b.linkedParent=d[b.coll][c.linkedTo],d=b.linkedParent.getExtremes(),b.min=D(d.min,
d.dataMin),b.max=D(d.max,d.dataMax),c.type!==b.linkedParent.options.type&&a.error(11,1)):(!N&&x(E)&&(b.dataMin>=E?(w=E,f=0):b.dataMax<=E&&(t=E,p=0)),b.min=D(u,w,b.dataMin),b.max=D(n,t,b.dataMax));m&&(b.positiveValuesOnly&&!g&&0>=Math.min(b.min,D(b.dataMin,b.min))&&a.error(10,1),b.min=e(b.log2lin(b.min),15),b.max=e(b.log2lin(b.max),15));b.range&&x(b.max)&&(b.userMin=b.min=u=Math.max(b.dataMin,b.minFromRange()),b.userMax=n=b.max,b.range=null);h(b,"foundExtremes");b.beforePadding&&b.beforePadding();
b.adjustForMinRange();!(J||b.axisPointRange||b.usePercentage||A)&&x(b.min)&&x(b.max)&&(d=b.max-b.min)&&(!x(u)&&f&&(b.min-=d*f),!x(n)&&p&&(b.max+=d*p));v(c.softMin)&&!v(b.userMin)&&(b.min=Math.min(b.min,c.softMin));v(c.softMax)&&!v(b.userMax)&&(b.max=Math.max(b.max,c.softMax));v(c.floor)&&(b.min=Math.max(b.min,c.floor));v(c.ceiling)&&(b.max=Math.min(b.max,c.ceiling));N&&x(b.dataMin)&&(E=E||0,!x(u)&&b.min<E&&b.dataMin>=E?b.min=E:!x(n)&&b.max>E&&b.dataMax<=E&&(b.max=E));b.tickInterval=b.min===b.max||
void 0===b.min||void 0===b.max?1:A&&!G&&B===b.linkedParent.options.tickPixelInterval?G=b.linkedParent.tickInterval:D(G,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,J?1:(b.max-b.min)*B/Math.max(b.len,B));q&&!g&&y(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!G&&(b.tickInterval=
Math.max(b.pointRange,b.tickInterval));g=D(c.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!G&&b.tickInterval<g&&(b.tickInterval=g);l||m||G||(b.tickInterval=L(b.tickInterval,null,k(b.tickInterval),D(c.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var g=this.options,b,d=g.tickPositions;b=this.getMinorTickInterval();var c=g.tickPositioner,m=
g.startOnTick,k=g.endOnTick;this.tickmarkOffset=this.categories&&"between"===g.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&x(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==g.allowDecimals);this.tickPositions=b=d&&d.slice();!b&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(b=[this.min,this.max],a.error(19)):b=this.isDatetimeAxis?
this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,g.units),this.min,this.max,g.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()],b[0]===b[1]&&(b.length=1)),this.tickPositions=b,c&&(c=c.apply(this,[this.min,this.max])))&&(this.tickPositions=b=c);this.paddedTicks=b.slice(0);this.trimTicks(b,m,k);this.isLinked||
(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),d||c||this.adjustTickAmount());h(this,"afterSetTickPositions")},trimTicks:function(a,b,d){var g=a[0],c=a[a.length-1],m=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==g)this.min=g;else for(;this.min-m>a[0];)a.shift();if(d)this.max=c;else for(;this.max+m<a[a.length-1];)a.pop();0===a.length&&x(g)&&!this.options.tickPositions&&a.push((c+g)/2)}},alignToOthers:function(){var a={},b,d=this.options;!1===this.chart.options.chart.alignTicks||
!1===d.alignTicks||!1===d.startOnTick||!1===d.endOnTick||this.isLog||y(this.chart[this.coll],function(g){var d=g.options,d=[g.horiz?d.left:d.top,d.width,d.height,d.pane].join();g.series.length&&(a[d]?b=!0:a[d]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,d=a.tickPixelInterval;!x(a.tickInterval)&&this.len<d&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/d)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=
b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,d=this.tickAmount,c=this.finalTickAmt,m=b&&b.length,k=D(this.threshold,this.softThreshold?0:null);if(this.hasData()){if(m<d){for(;b.length<d;)b.length%2||this.min===k?b.push(e(b[b.length-1]+a)):b.unshift(e(b[0]-a));this.transA*=(m-1)/(d-1);this.min=b[0];this.max=b[b.length-1]}else m>d&&(this.tickInterval*=2,this.setTickPositions());if(x(c)){for(a=d=b.length;a--;)(3===c&&1===a%2||2>=c&&0<a&&a<d-1)&&b.splice(a,1);this.finalTickAmt=
void 0}}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;y(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=
this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();h(this,"afterSetScale")},setExtremes:function(a,b,d,m,k){var g=this,r=g.chart;d=D(d,!0);y(g.series,function(a){delete a.kdTree});k=c(k,{min:a,max:b});h(g,"setExtremes",k,function(){g.userMin=a;g.userMax=b;g.eventArgs=k;d&&r.redraw(m)})},zoom:function(a,b){var g=this.dataMin,d=this.dataMax,c=this.options,m=Math.min(g,D(c.min,g)),c=Math.max(d,D(c.max,d));if(a!==this.min||
b!==this.max)this.allowZoomOutside||(x(g)&&(a<m&&(a=m),a>c&&(a=c)),x(d)&&(b<m&&(b=m),b>c&&(b=c))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,d=this.options,c=d.offsets||[0,0,0,0],m=this.horiz,k=this.width=Math.round(a.relativeLength(D(d.width,b.plotWidth-c[3]+c[1]),b.plotWidth)),l=this.height=Math.round(a.relativeLength(D(d.height,b.plotHeight-c[0]+c[2]),b.plotHeight)),h=this.top=Math.round(a.relativeLength(D(d.top,
b.plotTop+c[0]),b.plotHeight,b.plotTop)),d=this.left=Math.round(a.relativeLength(D(d.left,b.plotLeft+c[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-l-h;this.right=b.chartWidth-k-d;this.len=Math.max(m?k:l,0);this.pos=m?d:h},getExtremes:function(){var a=this.isLog;return{min:a?e(this.lin2log(this.min)):this.min,max:a?e(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,g=b?this.lin2log(this.min):
this.min,b=b?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=g:Infinity===a?a=b:g>a?a=g:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(D(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,g=b[a+"Length"],d=D(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(d&&g)return"inside"===b[a+"Position"]&&(g=-g),[g,d]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,d=this.tickInterval,c=d,m=this.len/(((this.categories?1:0)+this.max-this.min)/d),k,l=a.rotation,h=this.labelMetrics(),q,v=Number.MAX_VALUE,A,p=function(a){a/=m||1;a=1<a?Math.ceil(a):1;return e(a*d)};b?(A=!a.staggerLines&&!a.step&&(x(l)?[l]:m<D(a.autoRotationLimit,80)&&a.autoRotation))&&y(A,function(a){var b;if(a===l||a&&-90<=a&&90>=a)q=p(Math.abs(h.h/Math.sin(t*a))),b=
q+Math.abs(a/360),b<v&&(v=b,k=a,c=q)}):a.step||(c=p(h.h));this.autoRotation=A;this.labelRotation=D(k,l);return c},getSlotWidth:function(a){var b=this.chart,g=this.horiz,d=this.options.labels,c=Math.max(this.tickPositions.length-(this.categories?0:1),1),m=b.margin[3];return a&&a.slotWidth||g&&2>(d.step||0)&&!d.rotation&&(this.staggerLines||1)*this.len/c||!g&&(d.style&&parseInt(d.style.width,10)||m&&m-b.spacing[3]||.33*b.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,
c=this.ticks,m=this.options.labels,k=m&&m.style||{},l=this.horiz,h=this.getSlotWidth(),q=Math.max(1,Math.round(h-2*(m.padding||5))),v={},A=this.labelMetrics(),e=m.style&&m.style.textOverflow,p,f,G=0,B;J(m.rotation)||(v.rotation=m.rotation||0);y(d,function(a){(a=c[a])&&a.label&&a.label.textPxLength>G&&(G=a.label.textPxLength)});this.maxLabelLength=G;if(this.autoRotation)G>q&&G>A.h?v.rotation=this.labelRotation:this.labelRotation=0;else if(h&&(p=q,!e))for(f="clip",q=d.length;!l&&q--;)if(B=d[q],B=c[B].label)B.styles&&
"ellipsis"===B.styles.textOverflow?B.css({textOverflow:"clip"}):B.textPxLength>h&&B.css({width:h+"px"}),B.getBBox().height>this.len/d.length-(A.h-A.f)&&(B.specificTextOverflow="ellipsis");v.rotation&&(p=G>.5*a.chartHeight?.33*a.chartHeight:G,e||(f="ellipsis"));if(this.labelAlign=m.align||this.autoLabelAlign(this.labelRotation))v.align=this.labelAlign;y(d,function(a){var b=(a=c[a])&&a.label,g=k.width,d={};b&&(b.attr(v),a.shortenLabel?a.shortenLabel():p&&!g&&"nowrap"!==k.whiteSpace&&(p<b.textPxLength||
"SPAN"===b.element.tagName)?(d.width=p,e||(d.textOverflow=b.specificTextOverflow||f),b.css(d)):b.styles&&b.styles.width&&!d.width&&!g&&b.css({width:null}),delete b.specificTextOverflow,a.rotation=v.rotation)},this);this.tickRotCorr=b.rotCorr(A.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||x(this.min)&&x(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var b=this.chart.renderer,g=this.horiz,d=this.opposite,c=this.options.title,
m;this.axisTitle||((m=c.textAlign)||(m=(g?{low:"left",middle:"center",high:"right"}:{low:d?"right":"left",middle:"center",high:d?"left":"right"})[c.align]),this.axisTitle=b.text(c.text,0,0,c.useHTML).attr({zIndex:7,rotation:c.rotation||0,align:m}).addClass("highcharts-axis-title").css(l(c.style)).add(this.axisGroup),this.axisTitle.isNew=!0);c.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():
b[a]=new N(this,a)},getOffset:function(){var a=this,b=a.chart,d=b.renderer,c=a.options,m=a.tickPositions,k=a.ticks,l=a.horiz,q=a.side,v=b.inverted&&!a.isZAxis?[1,0,3,2][q]:q,A,e,p=0,G,f=0,J=c.title,E=c.labels,N=0,w=b.axisOffset,b=b.clipOffset,t=[-1,1,1,-1][q],u=c.className,n=a.axisParent;A=a.hasData();a.showAxis=e=A||D(c.showEmpty,!0);a.staggerLines=a.horiz&&E.staggerLines;a.axisGroup||(a.gridGroup=d.g("grid").attr({zIndex:c.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+
(u||"")).add(n),a.axisGroup=d.g("axis").attr({zIndex:c.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(u||"")).add(n),a.labelGroup=d.g("axis-labels").attr({zIndex:E.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(u||"")).add(n));A||a.isLinked?(y(m,function(b,g){a.generateTick(b,g)}),a.renderUnsquish(),a.reserveSpaceDefault=0===q||2===q||{1:"left",3:"right"}[q]===a.labelAlign,D(E.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&y(m,function(a){N=
Math.max(k[a].getLabelSize(),N)}),a.staggerLines&&(N*=a.staggerLines),a.labelOffset=N*(a.opposite?-1:1)):B(k,function(a,b){a.destroy();delete k[b]});J&&J.text&&!1!==J.enabled&&(a.addTitle(e),e&&!1!==J.reserveSpace&&(a.titleOffset=p=a.axisTitle.getBBox()[l?"height":"width"],G=J.offset,f=x(G)?0:D(J.margin,l?5:10)));a.renderLine();a.offset=t*D(c.offset,w[q]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};d=0===q?-a.labelMetrics().h:2===q?a.tickRotCorr.y:0;f=Math.abs(N)+f;N&&(f=f-d+t*(l?D(E.y,a.tickRotCorr.y+
8*t):E.x));a.axisTitleMargin=D(G,f);a.getMaxLabelDimensions&&(a.maxLabelDimensions=a.getMaxLabelDimensions(k,m));l=this.tickSize("tick");w[q]=Math.max(w[q],a.axisTitleMargin+p+t*a.offset,f,A&&m.length&&l?l[0]+t*a.offset:0);c=c.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[v]=Math.max(b[v],c);h(this,"afterGetOffset")},getLinePath:function(a){var b=this.chart,g=this.opposite,d=this.offset,c=this.horiz,m=this.left+(g?this.width:0)+d,d=b.chartHeight-this.bottom-(g?this.height:0)+d;g&&(a*=-1);return b.renderer.crispLine(["M",
c?this.left:m,c?d:this.top,"L",c?b.chartWidth-this.right:m,c?d:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,d=this.top,c=this.len,m=this.options.title,k=a?b:d,l=this.opposite,h=this.offset,q=m.x||0,v=m.y||0,A=this.axisTitle,e=
this.chart.renderer.fontMetrics(m.style&&m.style.fontSize,A),A=Math.max(A.getBBox(null,0).height-e.h-1,0),c={low:k+(a?0:c),middle:k+c/2,high:k+(a?c:0)}[m.align],b=(a?d+this.height:b)+(a?1:-1)*(l?-1:1)*this.axisTitleMargin+[-A,A,e.f,-A][this.side];return{x:a?c+q:b+(l?this.width:0)+h+q,y:a?b+v-(l?this.height:0)+h:c+v}},renderMinorTick:function(a){var b=this.chart.hasRendered&&v(this.oldMin),d=this.minorTicks;d[a]||(d[a]=new N(this,a,"minor"));b&&d[a].isNew&&d[a].render(null,!0);d[a].render(null,!1,
1)},renderTick:function(a,b){var d=this.isLinked,g=this.ticks,c=this.chart.hasRendered&&v(this.oldMin);if(!d||a>=this.min&&a<=this.max)g[a]||(g[a]=new N(this,a)),c&&g[a].isNew&&g[a].render(b,!0,-1),g[a].render(b)},render:function(){var b=this,d=b.chart,c=b.options,m=b.isLog,k=b.isLinked,l=b.tickPositions,q=b.axisTitle,e=b.ticks,p=b.minorTicks,f=b.alternateBands,G=c.stackLabels,J=c.alternateGridColor,E=b.tickmarkOffset,D=b.axisLine,t=b.showAxis,w=F(d.renderer.globalAnimation),u,n;b.labelEdge.length=
0;b.overlap=!1;y([e,p,f],function(a){B(a,function(a){a.isActive=!1})});if(b.hasData()||k)b.minorTickInterval&&!b.categories&&y(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),l.length&&(y(l,function(a,d){b.renderTick(a,d)}),E&&(0===b.min||b.single)&&(e[-1]||(e[-1]=new N(b,-1,null,!0)),e[-1].render(-1))),J&&y(l,function(c,g){n=void 0!==l[g+1]?l[g+1]+E:b.max-E;0===g%2&&c<b.max&&n<=b.max+(d.polar?-E:E)&&(f[c]||(f[c]=new a.PlotLineOrBand(b)),u=c+E,f[c].options={from:m?b.lin2log(u):u,to:m?
b.lin2log(n):n,color:J},f[c].render(),f[c].isActive=!0)}),b._addedPlotLB||(y((c.plotLines||[]).concat(c.plotBands||[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);y([e,p,f],function(a){var b,c=[],g=w.duration;B(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,c.push(b))});A(function(){for(b=c.length;b--;)a[c[b]]&&!a[c[b]].isActive&&(a[c[b]].destroy(),delete a[c[b]])},a!==f&&d.hasRendered&&g?g:0)});D&&(D[D.isPlaced?"animate":"attr"]({d:this.getLinePath(D.strokeWidth())}),D.isPlaced=
!0,D[t?"show":"hide"](!0));q&&t&&(c=b.getTitlePosition(),v(c.y)?(q[q.isNew?"attr":"animate"](c),q.isNew=!1):(q.attr("y",-9999),q.isNew=!0));G&&G.enabled&&b.renderStackTotals();b.isDirty=!1;h(this,"afterRender")},redraw:function(){this.visible&&(this.render(),y(this.plotLinesAndBands,function(a){a.render()}));y(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,c=b.stacks,g=b.plotLinesAndBands,k;h(this,"destroy",
{keepEvents:a});a||m(b);B(c,function(a,b){w(a);c[b]=null});y([b.ticks,b.minorTicks,b.alternateBands],function(a){w(a)});if(g)for(a=g.length;a--;)g[a].destroy();y("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});for(k in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[k]=b.plotLinesAndBandsGroups[k].destroy();B(b,function(a,c){-1===d(c,b.keepProps)&&delete b[c]})},drawCrosshair:function(a,b){var d,c=this.crosshair,
g=D(c.snap,!0),m,k=this.cross;h(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(x(b)||!g)){g?x(b)&&(m=D(b.crosshairPos,this.isXAxis?b.plotX:this.len-b.plotY)):m=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);x(m)&&(d=this.getPlotLinePath(b&&(this.isXAxis?b.x:D(b.stackY,b.y)),null,null,null,m)||null);if(!x(d)){this.hideCrosshair();return}g=this.categories&&!this.isRadial;k||(this.cross=k=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+
(g?"category ":"thin ")+c.className).attr({zIndex:D(c.zIndex,2)}).add(),k.attr({stroke:c.color||(g?f("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":D(c.width,1)}).css({"pointer-events":"none"}),c.dashStyle&&k.attr({dashstyle:c.dashStyle}));k.show().attr({d:d});g&&!c.width&&k.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();h(this,"afterDrawCrosshair",{e:a,point:b})},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=E}(K);(function(a){var C=
a.Axis,F=a.getMagnitude,I=a.normalizeTickInterval,n=a.timeUnits;C.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};C.prototype.normalizeTimeTickInterval=function(a,e){var f=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];e=f[f.length-1];var x=n[e[0]],t=e[1],w;for(w=0;w<f.length&&!(e=f[w],x=n[e[0]],
t=e[1],f[w+1]&&a<=(x*t[t.length-1]+n[f[w+1][0]])/2);w++);x===n.year&&a<5*x&&(t=[1,2,5]);a=I(a/x,t,"year"===e[0]?Math.max(F(a/x),1):1);return{unitRange:x,count:a,unitName:e[0]}}})(K);(function(a){var C=a.Axis,F=a.getMagnitude,I=a.map,n=a.normalizeTickInterval,f=a.pick;C.prototype.getLogTickPositions=function(a,u,x,t){var e=this.options,y=this.len,c=[];t||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),c=this.getLinearTickPositions(a,u,x);else if(.08<=a)for(var y=Math.floor(u),h,p,k,q,d,e=.3<
a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];y<x+1&&!d;y++)for(p=e.length,h=0;h<p&&!d;h++)k=this.log2lin(this.lin2log(y)*e[h]),k>u&&(!t||q<=x)&&void 0!==q&&c.push(q),q>x&&(d=!0),q=k;else u=this.lin2log(u),x=this.lin2log(x),a=t?this.getMinorTickInterval():e.tickInterval,a=f("auto"===a?null:a,this._minorAutoInterval,e.tickPixelInterval/(t?5:1)*(x-u)/((t?y/this.tickPositions.length:y)||1)),a=n(a,null,F(a)),c=I(this.getLinearTickPositions(a,u,x),this.log2lin),t||(this._minorAutoInterval=a/5);t||(this.tickInterval=
a);return c};C.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};C.prototype.lin2log=function(a){return Math.pow(10,a)}})(K);(function(a,C){var F=a.arrayMax,I=a.arrayMin,n=a.defined,f=a.destroyObjectProperties,e=a.each,u=a.erase,x=a.merge,t=a.pick;a.PlotLineOrBand=function(a,e){this.axis=a;e&&(this.options=e,this.id=e.id)};a.PlotLineOrBand.prototype={render:function(){a.fireEvent(this,"render");var e=this,f=e.axis,c=f.horiz,h=e.options,p=h.label,k=e.label,q=h.to,d=h.from,b=h.value,v=n(d)&&
n(q),J=n(b),l=e.svgElem,u=!l,B=[],D=h.color,m=t(h.zIndex,0),G=h.events,B={"class":"highcharts-plot-"+(v?"band ":"line ")+(h.className||"")},A={},N=f.chart.renderer,E=v?"bands":"lines";f.isLog&&(d=f.log2lin(d),q=f.log2lin(q),b=f.log2lin(b));J?(B.stroke=D,B["stroke-width"]=h.width,h.dashStyle&&(B.dashstyle=h.dashStyle)):v&&(D&&(B.fill=D),h.borderWidth&&(B.stroke=h.borderColor,B["stroke-width"]=h.borderWidth));A.zIndex=m;E+="-"+m;(D=f.plotLinesAndBandsGroups[E])||(f.plotLinesAndBandsGroups[E]=D=N.g("plot-"+
E).attr(A).add());u&&(e.svgElem=l=N.path().attr(B).add(D));if(J)B=f.getPlotLinePath(b,l.strokeWidth());else if(v)B=f.getPlotBandPath(d,q,h);else return;u&&B&&B.length?(l.attr({d:B}),G&&a.objectEach(G,function(a,b){l.on(b,function(a){G[b].apply(e,[a])})})):l&&(B?(l.show(),l.animate({d:B})):(l.hide(),k&&(e.label=k=k.destroy())));p&&n(p.text)&&B&&B.length&&0<f.width&&0<f.height&&!B.isFlat?(p=x({align:c&&v&&"center",x:c?!v&&4:10,verticalAlign:!c&&v&&"middle",y:c?v?16:10:v?6:-4,rotation:c&&!v&&90},p),
this.renderLabel(p,B,v,m)):k&&k.hide();return e},renderLabel:function(a,e,c,h){var p=this.label,k=this.axis.chart.renderer;p||(p={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(c?"band":"line")+"-label "+(a.className||"")},p.zIndex=h,this.label=p=k.text(a.text,0,0,a.useHTML).attr(p).add(),p.css(a.style));h=e.xBounds||[e[1],e[4],c?e[6]:e[1]];e=e.yBounds||[e[2],e[5],c?e[7]:e[2]];c=I(h);k=I(e);p.align(a,!1,{x:c,y:k,width:F(h)-c,height:F(e)-k});p.show()},destroy:function(){u(this.axis.plotLinesAndBands,
this);delete this.axis;f(this)}};a.extend(C.prototype,{getPlotBandPath:function(a,e){var c=this.getPlotLinePath(e,null,null,!0),h=this.getPlotLinePath(a,null,null,!0),p=[],k=this.horiz,q=1,d;a=a<this.min&&e<this.min||a>this.max&&e>this.max;if(h&&c)for(a&&(d=h.toString()===c.toString(),q=0),a=0;a<h.length;a+=6)k&&c[a+1]===h[a+1]?(c[a+1]+=q,c[a+4]+=q):k||c[a+2]!==h[a+2]||(c[a+2]+=q,c[a+5]+=q),p.push("M",h[a+1],h[a+2],"L",h[a+4],h[a+5],c[a+4],c[a+5],c[a+1],c[a+2],"z"),p.isFlat=d;return p},addPlotBand:function(a){return this.addPlotBandOrLine(a,
"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(e,f){var c=(new a.PlotLineOrBand(this,e)).render(),h=this.userOptions;c&&(f&&(h[f]=h[f]||[],h[f].push(e)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var f=this.plotLinesAndBands,c=this.options,h=this.userOptions,p=f.length;p--;)f[p].id===a&&f[p].destroy();e([c.plotLines||[],h.plotLines||[],c.plotBands||[],h.plotBands||[]],function(c){for(p=c.length;p--;)c[p].id===
a&&u(c,c[p])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(K,W);(function(a){var C=a.doc,F=a.each,I=a.extend,n=a.format,f=a.isNumber,e=a.map,u=a.merge,x=a.pick,t=a.splat,w=a.syncTimeout,y=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,h){this.chart=a;this.options=h;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=h.split&&!a.inverted;this.shared=h.shared||
this.split;this.outside=h.outside&&!this.split},cleanSplit:function(a){F(this.chart.series,function(c){var h=c&&c.tt;h&&(!h.isActive||a?c.tt=h.destroy():h.isActive=!1)})},getLabel:function(){var c=this.chart.renderer,h=this.options,e;this.label||(this.outside&&(this.container=e=a.doc.createElement("div"),e.className="highcharts-tooltip-container",a.css(e,{position:"absolute",top:"1px",pointerEvents:h.style&&h.style.pointerEvents}),a.doc.body.appendChild(e),this.renderer=c=new a.Renderer(e,0,0)),this.split?
this.label=c.g("tooltip"):(this.label=c.label("",0,0,h.shape||"callout",null,null,h.useHTML,null,"tooltip").attr({padding:h.padding,r:h.borderRadius}),this.label.attr({fill:h.backgroundColor,"stroke-width":h.borderWidth}).css(h.style).shadow(h.shadow)),this.outside&&(this.label.attr({x:this.distance,y:this.distance}),this.label.xSetter=function(a){e.style.left=a+"px"},this.label.ySetter=function(a){e.style.top=a+"px"}),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();
u(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,u(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),a.discardElement(this.container));a.clearTimeout(this.hideTimer);a.clearTimeout(this.tooltipTimeout)},move:function(c,h,e,k){var q=this,d=q.now,b=!1!==q.options.animation&&!q.isHidden&&(1<Math.abs(c-d.x)||1<Math.abs(h-
d.y)),v=q.followPointer||1<q.len;I(d,{x:b?(2*d.x+c)/3:c,y:b?(d.y+h)/2:h,anchorX:v?void 0:b?(2*d.anchorX+e)/3:e,anchorY:v?void 0:b?(d.anchorY+k)/2:k});q.getLabel().attr(d);b&&(a.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){q&&q.move(c,h,e,k)},32))},hide:function(c){var h=this;a.clearTimeout(this.hideTimer);c=x(c,this.options.hideDelay,500);this.isHidden||(this.hideTimer=w(function(){h.getLabel()[c?"fadeOut":"hide"]();h.isHidden=!0},c))},getAnchor:function(a,h){var c=
this.chart,k=c.pointer,q=c.inverted,d=c.plotTop,b=c.plotLeft,v=0,f=0,l,n;a=t(a);this.followPointer&&h?(void 0===h.chartX&&(h=k.normalize(h)),a=[h.chartX-c.plotLeft,h.chartY-d]):a[0].tooltipPos?a=a[0].tooltipPos:(F(a,function(a){l=a.series.yAxis;n=a.series.xAxis;v+=a.plotX+(!q&&n?n.left-b:0);f+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!q&&l?l.top-d:0)}),v/=a.length,f/=a.length,a=[q?c.plotWidth-f:v,this.shared&&!q&&1<a.length&&h?h.chartY-d:q?c.plotHeight-v:f]);return e(a,Math.round)},getPosition:function(a,
h,e){var c=this.chart,q=this.distance,d={},b=c.inverted&&e.h||0,v,f=this.outside,l=f?C.documentElement.clientWidth-2*q:c.chartWidth,p=f?Math.max(C.body.scrollHeight,C.documentElement.scrollHeight,C.body.offsetHeight,C.documentElement.offsetHeight,C.documentElement.clientHeight):c.chartHeight,B=c.pointer.chartPosition,D=["y",p,h,(f?B.top-q:0)+e.plotY+c.plotTop,f?0:c.plotTop,f?p:c.plotTop+c.plotHeight],m=["x",l,a,(f?B.left-q:0)+e.plotX+c.plotLeft,f?0:c.plotLeft,f?l:c.plotLeft+c.plotWidth],G=!this.followPointer&&
x(e.ttBelow,!c.inverted===!!e.negative),A=function(a,c,g,m,k,l){var h=g<m-q,v=m+q+g<c,A=m-q-g;m+=q;if(G&&v)d[a]=m;else if(!G&&h)d[a]=A;else if(h)d[a]=Math.min(l-g,0>A-b?A:A-b);else if(v)d[a]=Math.max(k,m+b+g>c?m:m+b);else return!1},N=function(a,b,c,g){var m;g<q||g>b-q?m=!1:d[a]=g<c/2?1:g>b-c/2?b-c-2:g-c/2;return m},E=function(a){var b=D;D=m;m=b;v=a},g=function(){!1!==A.apply(0,D)?!1!==N.apply(0,m)||v||(E(!0),g()):v?d.x=d.y=0:(E(!0),g())};(c.inverted||1<this.len)&&E();g();return d},defaultFormatter:function(a){var c=
this.points||t(this),e;e=[a.tooltipFooterHeaderFormatter(c[0])];e=e.concat(a.bodyFormatter(c));e.push(a.tooltipFooterHeaderFormatter(c[0],!0));return e},refresh:function(c,h){var e,k=this.options,q,d=c,b,v={},f=[];e=k.formatter||this.defaultFormatter;var v=this.shared,l;k.enabled&&(a.clearTimeout(this.hideTimer),this.followPointer=t(d)[0].series.tooltipOptions.followPointer,b=this.getAnchor(d,h),h=b[0],q=b[1],!v||d.series&&d.series.noSharedTooltip?v=d.getLabelConfig():(F(d,function(a){a.setState("hover");
f.push(a.getLabelConfig())}),v={x:d[0].category,y:d[0].y},v.points=f,d=d[0]),this.len=f.length,v=e.call(v,this),l=d.series,this.distance=x(l.tooltipOptions.distance,16),!1===v?this.hide():(e=this.getLabel(),this.isHidden&&e.attr({opacity:1}).show(),this.split?this.renderSplit(v,t(c)):(k.style.width||e.css({width:this.chart.spacingBox.width}),e.attr({text:v&&v.join?v.join(""):v}),e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+x(d.colorIndex,l.colorIndex)),e.attr({stroke:k.borderColor||
d.color||l.color||"#666666"}),this.updatePosition({plotX:h,plotY:q,negative:d.negative,ttBelow:d.ttBelow,h:b[2]||0})),this.isHidden=!1))},renderSplit:function(c,h){var e=this,k=[],q=this.chart,d=q.renderer,b=!0,v=this.options,f=0,l,t=this.getLabel(),B=q.plotTop;a.isString(c)&&(c=[!1,c]);F(c.slice(0,h.length+1),function(a,c){if(!1!==a){c=h[c-1]||{isHeader:!0,plotX:h[0].plotX};var m=c.series||e,A=m.tt,p=c.series||{},E="highcharts-color-"+x(c.colorIndex,p.colorIndex,"none");A||(m.tt=A=d.label(null,null,
null,"callout",null,null,v.useHTML).addClass("highcharts-tooltip-box "+E+(c.isHeader?" highcharts-tooltip-header":"")).attr({padding:v.padding,r:v.borderRadius,fill:v.backgroundColor,stroke:v.borderColor||c.color||p.color||"#333333","stroke-width":v.borderWidth}).add(t));A.isActive=!0;A.attr({text:a});A.css(v.style).shadow(v.shadow);a=A.getBBox();p=a.width+A.strokeWidth();c.isHeader?(f=a.height,q.xAxis[0].opposite&&(l=!0,B-=f),p=Math.max(0,Math.min(c.plotX+q.plotLeft-p/2,q.chartWidth+(q.scrollablePixels?
q.scrollablePixels-q.marginRight:0)-p))):p=c.plotX+q.plotLeft-x(v.distance,16)-p;0>p&&(b=!1);a=(c.series&&c.series.yAxis&&c.series.yAxis.pos)+(c.plotY||0);a-=B;c.isHeader&&(a=l?-f:q.plotHeight+f);k.push({target:a,rank:c.isHeader?1:0,size:m.tt.getBBox().height+1,point:c,x:p,tt:A})}});this.cleanSplit();a.distribute(k,q.plotHeight+f);F(k,function(a){var c=a.point,d=c.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:b||c.isHeader?a.x:c.plotX+q.plotLeft+x(v.distance,16),y:a.pos+B,anchorX:c.isHeader?
c.plotX+q.plotLeft:c.plotX+d.xAxis.pos,anchorY:c.isHeader?q.plotTop+q.plotHeight/2:c.plotY+d.yAxis.pos})})},updatePosition:function(a){var c=this.chart,e=this.getLabel(),k=(this.options.positioner||this.getPosition).call(this,e.width,e.height,a),q=a.plotX+c.plotLeft;a=a.plotY+c.plotTop;var d;this.outside&&(d=(this.options.borderWidth||0)+2*this.distance,this.renderer.setSize(e.width+d,e.height+d,!1),q+=c.pointer.chartPosition.left-k.x,a+=c.pointer.chartPosition.top-k.y);this.move(Math.round(k.x),
Math.round(k.y||0),q,a)},getDateFormat:function(a,h,e,k){var c=this.chart.time,d=c.dateFormat("%m-%d %H:%M:%S.%L",h),b,v,f={millisecond:15,second:12,minute:9,hour:6,day:3},l="millisecond";for(v in y){if(a===y.week&&+c.dateFormat("%w",h)===e&&"00:00:00.000"===d.substr(6)){v="week";break}if(y[v]>a){v=l;break}if(f[v]&&d.substr(f[v])!=="01-01 00:00:00.000".substr(f[v]))break;"week"!==v&&(l=v)}v&&(b=c.resolveDTLFormat(k[v]).main);return b},getXDateFormat:function(a,h,e){h=h.dateTimeLabelFormats;var c=
e&&e.closestPointRange;return(c?this.getDateFormat(c,a.x,e.options.startOfWeek,h):h.day)||h.year},tooltipFooterHeaderFormatter:function(a,h){h=h?"footer":"header";var c=a.series,k=c.tooltipOptions,e=k.xDateFormat,d=c.xAxis,b=d&&"datetime"===d.options.type&&f(a.key),v=k[h+"Format"];b&&!e&&(e=this.getXDateFormat(a,k,d));b&&e&&F(a.point&&a.point.tooltipDateKeys||["key"],function(a){v=v.replace("{point."+a+"}","{point."+a+":"+e+"}")});return n(v,{point:a,series:c},this.chart.time)},bodyFormatter:function(a){return e(a,
function(a){var c=a.series.tooltipOptions;return(c[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,c[(a.point.formatPrefix||"point")+"Format"])})}}})(K);(function(a){var C=a.addEvent,F=a.attr,I=a.charts,n=a.color,f=a.css,e=a.defined,u=a.each,x=a.extend,t=a.find,w=a.fireEvent,y=a.isNumber,c=a.isObject,h=a.offset,p=a.pick,k=a.splat,q=a.Tooltip;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,b){this.options=b;this.chart=a;this.runChartClick=
b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};q&&(a.tooltip=new q(a,b.tooltip),this.followTouchMove=p(b.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,d=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(d=p(c.pinchType,d));this.zoomX=a=/x/.test(d);this.zoomY=d=/y/.test(d);this.zoomHor=a&&!b||d&&b;this.zoomVert=d&&!b||a&&b;this.hasZoom=a||d},normalize:function(a,b){var c;c=a.touches?a.touches.length?a.touches.item(0):
a.changedTouches[0]:a;b||(this.chartPosition=b=h(this.chart.container));return x(a,{chartX:Math.round(c.pageX-b.left),chartY:Math.round(c.pageY-b.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};u(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,b,k){var d;u(a,function(a){var l=!(a.noSharedTooltip&&b)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(k,l);if((l=c(a,
!0))&&!(l=!c(d,!0)))var l=d.distX-a.distX,e=d.dist-a.dist,h=(a.series.group&&a.series.group.zIndex)-(d.series.group&&d.series.group.zIndex),l=0<(0!==l&&b?l:0!==e?e:0!==h?h:d.series.index>a.series.index?-1:1);l&&(d=a)});return d},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,b){var c=a.series,d=c.xAxis,c=c.yAxis,k=p(a.clientX,a.plotX),e=a.shapeArgs;if(d&&c)return b?{chartX:d.len+d.pos-k,chartY:c.len+c.pos-a.plotY}:
{chartX:k+d.pos,chartY:a.plotY+c.pos};if(e&&e.x&&e.y)return{chartX:e.x,chartY:e.y}},getHoverData:function(d,b,k,e,l,h,q){var v,m=[],f=q&&q.isBoosting;e=!(!e||!d);q=b&&!b.stickyTracking?[b]:a.grep(k,function(a){return a.visible&&!(!l&&a.directTouch)&&p(a.options.enableMouseTracking,!0)&&a.stickyTracking});b=(v=e?d:this.findNearestKDPoint(q,l,h))&&v.series;v&&(l&&!b.noSharedTooltip?(q=a.grep(k,function(a){return a.visible&&!(!l&&a.directTouch)&&p(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),
u(q,function(a){var b=t(a.points,function(a){return a.x===v.x&&!a.isNull});c(b)&&(f&&(b=a.getPoint(b)),m.push(b))})):m.push(v));return{hoverPoint:v,hoverSeries:b,hoverPoints:m}},runPointActions:function(c,b){var d=this.chart,k=d.tooltip&&d.tooltip.options.enabled?d.tooltip:void 0,l=k?k.shared:!1,e=b||d.hoverPoint,h=e&&e.series||d.hoverSeries,h=this.getHoverData(e,h,d.series,"touchmove"!==c.type&&(!!b||h&&h.directTouch&&this.isDirectTouch),l,c,{isBoosting:d.isBoosting}),q,e=h.hoverPoint;q=h.hoverPoints;
b=(h=h.hoverSeries)&&h.tooltipOptions.followPointer;l=l&&h&&!h.noSharedTooltip;if(e&&(e!==d.hoverPoint||k&&k.isHidden)){u(d.hoverPoints||[],function(b){-1===a.inArray(b,q)&&b.setState()});u(q||[],function(a){a.setState("hover")});if(d.hoverSeries!==h)h.onMouseOver();d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");if(!e.series)return;e.firePointEvent("mouseOver");d.hoverPoints=q;d.hoverPoint=e;k&&k.refresh(l?q:e,c)}else b&&k&&!k.isHidden&&(e=k.getAnchor([{}],c),k.updatePosition({plotX:e[0],plotY:e[1]}));
this.unDocMouseMove||(this.unDocMouseMove=C(d.container.ownerDocument,"mousemove",function(b){var c=I[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));u(d.axes,function(b){var d=p(b.crosshair.snap,!0),m=d?a.find(q,function(a){return a.series[b.coll]===b}):void 0;m||!d?b.drawCrosshair(c,m):b.hideCrosshair()})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,l=c.hoverPoint,e=c.hoverPoints,h=c.tooltip,q=h&&h.shared?e:l;a&&q&&u(k(q),function(b){b.series.isCartesian&&void 0===b.plotX&&
(a=!1)});if(a)h&&q&&(h.refresh(q),h.shared&&e?u(e,function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):l&&(l.setState(l.state,!0),u(c.axes,function(a){a.crosshair&&a.drawCrosshair(null,l)})));else{if(l)l.onMouseOut();e&&u(e,function(a){a.setState()});if(d)d.onMouseOut();h&&h.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());u(c.axes,function(a){a.hideCrosshair()});
this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;u(c.series,function(k){d=a||k.getPlotBox();k.xAxis&&k.xAxis.zoomEnabled&&k.group&&(k.group.attr(d),k.markerGroup&&(k.markerGroup.attr(d),k.markerGroup.clip(b?c.clipRect:null)),k.dataLabelsGroup&&k.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=
this.chart,c=b.options.chart,d=a.chartX,k=a.chartY,e=this.zoomHor,h=this.zoomVert,q=b.plotLeft,m=b.plotTop,f=b.plotWidth,A=b.plotHeight,p,E=this.selectionMarker,g=this.mouseDownX,r=this.mouseDownY,t=c.panKey&&a[c.panKey+"Key"];E&&E.touch||(d<q?d=q:d>q+f&&(d=q+f),k<m?k=m:k>m+A&&(k=m+A),this.hasDragged=Math.sqrt(Math.pow(g-d,2)+Math.pow(r-k,2)),10<this.hasDragged&&(p=b.isInsidePlot(g-q,r-m),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&p&&!t&&!E&&(this.selectionMarker=E=b.renderer.rect(q,m,e?1:f,
h?1:A,0).attr({fill:c.selectionMarkerFill||n("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),E&&e&&(d-=g,E.attr({width:Math.abs(d),x:(0<d?0:d)+g})),E&&h&&(d=k-r,E.attr({height:Math.abs(d),y:(0<d?0:d)+r})),p&&!E&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var k={originalEvent:a,xAxis:[],yAxis:[]},h=this.selectionMarker,q=h.attr?h.attr("x"):h.x,p=h.attr?h.attr("y"):h.y,m=h.attr?h.attr("width"):
h.width,G=h.attr?h.attr("height"):h.height,A;if(this.hasDragged||d)u(c.axes,function(c){if(c.zoomEnabled&&e(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var h=c.horiz,g="touchend"===a.type?c.minPixelPadding:0,l=c.toValue((h?q:p)+g),h=c.toValue((h?q+m:p+G)-g);k[c.coll].push({axis:c,min:Math.min(l,h),max:Math.max(l,h)});A=!0}}),A&&w(c,"selection",k,function(a){c.zoom(x(a,d?{animation:!1}:null))});y(c.index)&&(this.selectionMarker=this.selectionMarker.destroy());d&&this.scaleGroups()}c&&y(c.index)&&
(f(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(c){I[a.hoverChartIndex]&&I[a.hoverChartIndex].pointer.drop(c)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||
b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(c){var b=I[a.hoverChartIndex];b&&(c.relatedTarget||c.toElement)&&(b.pointer.reset(),b.pointer.chartPosition=null)},onContainerMouseMove:function(c){var b=this.chart;e(a.hoverChartIndex)&&I[a.hoverChartIndex]&&I[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=b.index);c=this.normalize(c);c.returnValue=!1;"mousedown"===b.mouseIsDown&&this.drag(c);!this.inClass(c.target,"highcharts-tracker")&&!b.isInsidePlot(c.chartX-
b.plotLeft,c.chartY-b.plotTop)||b.openMenu||this.runPointActions(c)},inClass:function(a,b){for(var c;a;){if(c=F(a,"class")){if(-1!==c.indexOf(b))return!0;if(-1!==c.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},
onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,k=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(w(c.series,"click",x(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(x(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-k)&&w(b,"click",a)))},setDOMEvents:function(){var c=this,b=c.chart.container,k=b.ownerDocument;b.onmousedown=function(a){c.onContainerMouseDown(a)};b.onmousemove=function(a){c.onContainerMouseMove(a)};
b.onclick=function(a){c.onContainerClick(a)};this.unbindContainerMouseLeave=C(b,"mouseleave",c.onContainerMouseLeave);a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=C(k,"mouseup",c.onDocumentMouseUp));a.hasTouch&&(b.ontouchstart=function(a){c.onContainerTouchStart(a)},b.ontouchmove=function(a){c.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=C(k,"touchend",c.onDocumentTouchEnd)))},destroy:function(){var c=this;c.unDocMouseMove&&c.unDocMouseMove();this.unbindContainerMouseLeave();
a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(c.tooltipTimeout);a.objectEach(c,function(a,d){c[d]=null})}}})(K);(function(a){var C=a.charts,F=a.each,I=a.extend,n=a.map,f=a.noop,e=a.pick;I(a.Pointer.prototype,{pinchTranslate:function(a,e,f,n,y,c){this.zoomHor&&this.pinchTranslateDirection(!0,a,e,f,n,y,c);this.zoomVert&&this.pinchTranslateDirection(!1,a,e,f,n,
y,c)},pinchTranslateDirection:function(a,e,f,n,y,c,h,p){var k=this.chart,q=a?"x":"y",d=a?"X":"Y",b="chart"+d,v=a?"width":"height",t=k["plot"+(a?"Left":"Top")],l,u,B=p||1,D=k.inverted,m=k.bounds[a?"h":"v"],G=1===e.length,A=e[0][b],N=f[0][b],E=!G&&e[1][b],g=!G&&f[1][b],r;f=function(){!G&&20<Math.abs(A-E)&&(B=p||Math.abs(N-g)/Math.abs(A-E));u=(t-N)/B+A;l=k["plot"+(a?"Width":"Height")]/B};f();e=u;e<m.min?(e=m.min,r=!0):e+l>m.max&&(e=m.max-l,r=!0);r?(N-=.8*(N-h[q][0]),G||(g-=.8*(g-h[q][1])),f()):h[q]=
[N,g];D||(c[q]=u-t,c[v]=l);c=D?1/B:B;y[v]=l;y[q]=e;n[D?a?"scaleY":"scaleX":"scale"+d]=B;n["translate"+d]=c*t+(N-c*A)},pinch:function(a){var u=this,t=u.chart,w=u.pinchDown,y=a.touches,c=y.length,h=u.lastValidTouch,p=u.hasZoom,k=u.selectionMarker,q={},d=1===c&&(u.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||u.runChartClick),b={};1<c&&(u.initiated=!0);p&&u.initiated&&!d&&a.preventDefault();n(y,function(a){return u.normalize(a)});"touchstart"===a.type?(F(y,function(a,b){w[b]={chartX:a.chartX,
chartY:a.chartY}}),h.x=[w[0].chartX,w[1]&&w[1].chartX],h.y=[w[0].chartY,w[1]&&w[1].chartY],F(t.axes,function(a){if(a.zoomEnabled){var b=t.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(e(a.options.min,a.dataMin)),k=a.toPixels(e(a.options.max,a.dataMax)),h=Math.max(d,k);b.min=Math.min(a.pos,Math.min(d,k)-c);b.max=Math.max(a.pos+a.len,h+c)}}),u.res=!0):u.followTouchMove&&1===c?this.runPointActions(u.normalize(a)):w.length&&(k||(u.selectionMarker=k=I({destroy:f,touch:!0},t.plotBox)),u.pinchTranslate(w,
y,q,k,b,h),u.hasPinched=p,u.scaleGroups(q,b),u.res&&(u.res=!1,this.reset(!1,0)))},touch:function(f,n){var t=this.chart,u,y;if(t.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=t.index;1===f.touches.length?(f=this.normalize(f),(y=t.isInsidePlot(f.chartX-t.plotLeft,f.chartY-t.plotTop))&&!t.openMenu?(n&&this.runPointActions(f),"touchmove"===f.type&&(n=this.pinchDown,u=n[0]?4<=Math.sqrt(Math.pow(n[0].chartX-f.chartX,2)+Math.pow(n[0].chartY-f.chartY,2)):!1),e(u,
!0)&&this.pinch(f)):n&&this.reset()):2===f.touches.length&&this.pinch(f)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(e){C[a.hoverChartIndex]&&C[a.hoverChartIndex].pointer.drop(e)}})})(K);(function(a){var C=a.addEvent,F=a.charts,I=a.css,n=a.doc,f=a.extend,e=a.noop,u=a.Pointer,x=a.removeEvent,t=a.win,w=a.wrap;if(!a.hasTouch&&(t.PointerEvent||t.MSPointerEvent)){var y={},c=!!t.PointerEvent,h=function(){var c=
[];c.item=function(a){return this[a]};a.objectEach(y,function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},p=function(c,q,d,b){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!F[a.hoverChartIndex]||(b(c),b=F[a.hoverChartIndex].pointer,b[q]({type:d,target:c.currentTarget,preventDefault:e,touches:h()}))};f(u.prototype,{onContainerPointerDown:function(a){p(a,"onContainerTouchStart","touchstart",function(a){y[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},
onContainerPointerMove:function(a){p(a,"onContainerTouchMove","touchmove",function(a){y[a.pointerId]={pageX:a.pageX,pageY:a.pageY};y[a.pointerId].target||(y[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){p(a,"onDocumentTouchEnd","touchend",function(a){delete y[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,c?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,c?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(n,c?
"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});w(u.prototype,"init",function(a,c,d){a.call(this,c,d);this.hasZoom&&I(c.container,{"-ms-touch-action":"none","touch-action":"none"})});w(u.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(C)});w(u.prototype,"destroy",function(a){this.batchMSEvents(x);a.call(this)})}})(K);(function(a){var C=a.addEvent,F=a.css,I=a.discardElement,n=a.defined,f=a.each,e=a.fireEvent,u=a.isFirefox,x=a.marginNames,
t=a.merge,w=a.pick,y=a.setAnimation,c=a.stableSort,h=a.win,p=a.wrap;a.Legend=function(a,c){this.init(a,c)};a.Legend.prototype={init:function(a,c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),C(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=C(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())},setOptions:function(a){var c=w(a.padding,8);this.options=
a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=t(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=c;this.initialItemY=c-5;this.symbolWidth=w(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===a.layout&&!this.chart.inverted},update:function(a,c){var d=this.chart;this.setOptions(t(!0,this.options,a));this.destroy();d.isDirtyLegend=d.isDirtyBox=!0;w(c,!0)&&d.redraw();e(this,"afterUpdate")},colorizeItem:function(a,c){a.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");
var d=this.options,b=a.legendItem,k=a.legendLine,h=a.legendSymbol,l=this.itemHiddenStyle.color,d=c?d.itemStyle.color:l,q=c?a.color||l:l,f=a.options&&a.options.marker,p={fill:q};b&&b.css({fill:d,color:d});k&&k.attr({stroke:q});h&&(f&&h.isMarker&&(p=a.pointAttribs(),c||(p.stroke=p.fill=l)),h.attr(p));e(this,"afterColorizeItem",{item:a,visible:c})},positionItems:function(){f(this.allItems,this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()},positionItem:function(a){var c=this.options,
d=c.symbolPadding,c=!c.rtl,b=a._legendItemPos,e=b[0],b=b[1],h=a.checkbox;if((a=a.legendGroup)&&a.element)a[n(a.translateY)?"animate":"attr"]({translateX:c?e:this.legendWidth-e-2*d-4,translateY:b});h&&(h.x=e,h.y=b)},destroyItem:function(a){var c=a.checkbox;f(["legendItem","legendLine","legendSymbol","legendGroup"],function(c){a[c]&&(a[c]=a[c].destroy())});c&&I(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}f(this.getAllItems(),function(c){f(["legendItem","legendGroup"],
a,c)});f("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,c,d=this.clipHeight||this.legendHeight,b=this.titleHeight;a&&(c=a.translateY,f(this.allItems,function(e){var h=e.checkbox,k;h&&(k=c+b+h.y+(this.scrollOffset||0)+3,F(h,{left:a.translateX+e.checkboxOffset+h.x-20+"px",top:k+"px",display:this.proximate||k>c-6&&k<c+d-6?"":"none"}))},this))},renderTitle:function(){var a=this.options,c=this.padding,
d=a.title,b=0;d.text&&(this.title||(this.title=this.chart.renderer.label(d.text,c-3,c-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(d.style).add(this.group)),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b},setText:function(c){var h=this.options;c.legendItem.attr({text:h.labelFormat?a.format(h.labelFormat,c,this.chart.time):h.labelFormatter.call(c)})},renderItem:function(a){var c=this.chart,d=c.renderer,b=
this.options,h=this.symbolWidth,e=b.symbolPadding,l=this.itemStyle,k=this.itemHiddenStyle,f="horizontal"===b.layout?w(b.itemDistance,20):0,p=!b.rtl,m=a.legendItem,G=!a.series,A=!G&&a.series.drawLegendSymbol?a.series:a,n=A.options,n=this.createCheckboxForItem&&n&&n.showCheckbox,f=h+e+f+(n?20:0),E=b.useHTML,g=a.options.className;m||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+A.type+"-series highcharts-color-"+a.colorIndex+(g?" "+g:"")+(G?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),
a.legendItem=m=d.text("",p?h+e:-e,this.baseline||0,E).css(t(a.visible?l:k)).attr({align:p?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(h=l.fontSize,this.fontMetrics=d.fontMetrics(h,m),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,m.attr("y",this.baseline)),this.symbolHeight=b.symbolHeight||this.fontMetrics.f,A.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,m,E),n&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);l.width||m.css({width:(b.itemWidth||
b.width||c.spacingBox.width)-f});this.setText(a);c=m.getBBox();a.itemWidth=a.checkboxOffset=b.itemWidth||a.legendItemWidth||c.width+f;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||c.height||this.symbolHeight)},layoutItem:function(a){var c=this.options,d=this.padding,b="horizontal"===c.layout,h=a.itemHeight,e=c.itemMarginBottom||0,l=this.itemMarginTop,k=b?w(c.itemDistance,20):0,f=c.width,p=f||this.chart.spacingBox.width-
2*d-c.x,c=c.alignColumns&&this.totalItemWidth>p?this.maxItemWidth:a.itemWidth;b&&this.itemX-d+c>p&&(this.itemX=d,this.itemY+=l+this.lastLineHeight+e,this.lastLineHeight=0);this.lastItemY=l+this.itemY+e;this.lastLineHeight=Math.max(h,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];b?this.itemX+=c:(this.itemY+=l+h+e,this.lastLineHeight=h);this.offsetWidth=f||Math.max((b?this.itemX-d-(a.checkbox?0:k):c)+d,this.offsetWidth)},getAllItems:function(){var a=[];f(this.chart.series,function(c){var d=
c&&c.options;c&&w(d.showInLegend,n(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===d.legendType?c.data:c)))});e(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,c){var d=this.chart,b=this.options,h=this.getAlignment();h&&f([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(e,
l){e.test(h)&&!n(a[l])&&(d[x[l]]=Math.max(d[x[l]],d.legend[(l+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][l]*b[l%2?"x":"y"]+w(b.margin,12)+c[l]+(0===l&&void 0!==d.options.title.margin?d.titleOffset+d.options.title.margin:0)))})},proximatePositions:function(){var c=this.chart,h=[],d="left"===this.options.align;f(this.allItems,function(b){var e,k;e=d;b.xAxis&&b.points&&(b.xAxis.options.reversed&&(e=!e),e=a.find(e?b.points:b.points.slice(0).reverse(),function(b){return a.isNumber(b.plotY)}),k=b.legendGroup.getBBox().height,
h.push({target:b.visible?(e?e.plotY:b.xAxis.height)-.3*k:c.plotHeight,size:k,item:b}))},this);a.distribute(h,c.plotHeight);f(h,function(a){a.item._legendItemPos[1]=c.plotTop-c.spacing[0]+a.pos})},render:function(){var a=this.chart,h=a.renderer,d=this.group,b,e,p,l=this.box,n=this.options,B=this.padding;this.itemX=B;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;d||(this.group=d=h.g("legend").attr({zIndex:7}).add(),this.contentGroup=h.g().attr({zIndex:1}).add(d),this.scrollGroup=h.g().add(this.contentGroup));
this.renderTitle();b=this.getAllItems();c(b,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});n.reversed&&b.reverse();this.allItems=b;this.display=e=!!b.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;f(b,this.renderItem,this);f(b,this.layoutItem,this);b=(n.width||this.offsetWidth)+B;p=this.lastItemY+this.lastLineHeight+this.titleHeight;p=this.handleOverflow(p);p+=B;l||(this.box=l=h.rect().addClass("highcharts-legend-box").attr({r:n.borderRadius}).add(d),
l.isNew=!0);l.attr({stroke:n.borderColor,"stroke-width":n.borderWidth||0,fill:n.backgroundColor||"none"}).shadow(n.shadow);0<b&&0<p&&(l[l.isNew?"attr":"animate"](l.crisp.call({},{x:0,y:0,width:b,height:p},l.strokeWidth())),l.isNew=!1);l[e?"show":"hide"]();this.legendWidth=b;this.legendHeight=p;e&&(h=a.spacingBox,/(lth|ct|rth)/.test(this.getAlignment())&&(h=t(h,{y:h.y+a.titleOffset+a.options.title.margin})),d.align(t(n,{width:b,height:p,verticalAlign:this.proximate?"top":n.verticalAlign}),!0,h));this.proximate||
this.positionItems()},handleOverflow:function(a){var c=this,d=this.chart,b=d.renderer,h=this.options,e=h.y,l=this.padding,d=d.spacingBox.height+("top"===h.verticalAlign?-e:e)-l,e=h.maxHeight,k,p=this.clipRect,n=h.navigation,m=w(n.animation,!0),G=n.arrowSize||12,A=this.nav,t=this.pages,E,g=this.allItems,r=function(a){"number"===typeof a?p.attr({height:a}):p&&(c.clipRect=p.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+l+"px,9999px,"+(l+a)+"px,0)":"auto")};
"horizontal"!==h.layout||"middle"===h.verticalAlign||h.floating||(d/=2);e&&(d=Math.min(d,e));t.length=0;a>d&&!1!==n.enabled?(this.clipHeight=k=Math.max(d-20-this.titleHeight-l,0),this.currentPage=w(this.currentPage,1),this.fullHeight=a,f(g,function(a,b){var c=a._legendItemPos[1],d=Math.round(a.legendItem.getBBox().height),m=t.length;if(!m||c-t[m-1]>k&&(E||c)!==t[m-1])t.push(E||c),m++;a.pageIx=m-1;E&&(g[b-1].pageIx=m-1);b===g.length-1&&c+d-t[m-1]>k&&(t.push(c),a.pageIx=m);c!==E&&(E=c)}),p||(p=c.clipRect=
b.clipRect(0,l,9999,0),c.contentGroup.clip(p)),r(k),A||(this.nav=A=b.g().attr({zIndex:1}).add(this.group),this.up=b.symbol("triangle",0,0,G,G).on("click",function(){c.scroll(-1,m)}).add(A),this.pager=b.text("",15,10).addClass("highcharts-legend-navigation").css(n.style).add(A),this.down=b.symbol("triangle-down",0,0,G,G).on("click",function(){c.scroll(1,m)}).add(A)),c.scroll(0),a=d):A&&(r(),this.nav=A.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,c){var d=
this.pages,b=d.length;a=this.currentPage+a;var h=this.clipHeight,e=this.options.navigation,l=this.pager,f=this.padding;a>b&&(a=b);0<a&&(void 0!==c&&y(c,this.chart),this.nav.attr({translateX:f,translateY:h+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),l.attr({text:a+"/"+b}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===b?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),
this.up.attr({fill:1===a?e.inactiveColor:e.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===b?e.inactiveColor:e.activeColor}).css({cursor:a===b?"default":"pointer"}),this.scrollOffset=-d[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes())}};a.LegendSymbolMixin={drawRectangle:function(a,c){var d=a.symbolHeight,b=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(b?(a.symbolWidth-d)/2:
0,a.baseline-d+1,b?d:a.symbolWidth,d,w(a.options.symbolRadius,d/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},drawLineMarker:function(a){var c=this.options,d=c.marker,b=a.symbolWidth,h=a.symbolHeight,e=h/2,l=this.chart.renderer,f=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var k;k={"stroke-width":c.lineWidth||0};c.dashStyle&&(k.dashstyle=c.dashStyle);this.legendLine=l.path(["M",0,a,"L",b,a]).addClass("highcharts-graph").attr(k).add(f);d&&!1!==d.enabled&&b&&
(c=Math.min(w(d.radius,e),e),0===this.symbol.indexOf("url")&&(d=t(d,{width:h,height:h}),c=0),this.legendSymbol=d=l.symbol(this.symbol,b/2-c,a-c,2*c,2*c,d).addClass("highcharts-point").add(f),d.isMarker=!0)}};(/Trident\/7\.0/.test(h.navigator.userAgent)||u)&&p(a.Legend.prototype,"positionItem",function(a,c){var d=this,b=function(){c._legendItemPos&&a.call(d,c)};b();setTimeout(b)})})(K);(function(a){var C=a.addEvent,F=a.animate,I=a.animObject,n=a.attr,f=a.doc,e=a.Axis,u=a.createElement,x=a.defaultOptions,
t=a.discardElement,w=a.charts,y=a.css,c=a.defined,h=a.each,p=a.extend,k=a.find,q=a.fireEvent,d=a.grep,b=a.isNumber,v=a.isObject,J=a.isString,l=a.Legend,L=a.marginNames,B=a.merge,D=a.objectEach,m=a.Pointer,G=a.pick,A=a.pInt,N=a.removeEvent,E=a.seriesTypes,g=a.splat,r=a.syncTimeout,M=a.win,O=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new O(a,b,c)};p(O.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(J(a[0])||a[0].nodeName)this.renderTo=
a.shift();this.init(a[0],a[1])},init:function(b,c){var d,g,m=b.series,h=b.plotOptions||{};q(this,"init",{args:arguments},function(){b.series=null;d=B(x,b);for(g in d.plotOptions)d.plotOptions[g].tooltip=h[g]&&B(h[g].tooltip)||void 0;d.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;d.series=b.series=m;this.userOptions=b;var e=d.chart,l=e.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=
d;this.axes=[];this.series=[];this.time=b.time&&a.keys(b.time).length?new a.Time(b.time):a.time;this.hasCartesianSeries=e.showAxes;var f=this;f.index=w.length;w.push(f);a.chartCount++;l&&D(l,function(a,b){C(f,b,a)});f.xAxis=[];f.yAxis=[];f.pointCount=f.colorCounter=f.symbolCounter=0;q(f,"afterInit");f.firstRender()})},initSeries:function(b){var c=this.options.chart;(c=E[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;
for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){q(this,"beforeRedraw");var c=this.axes,d=this.series,g=this.pointer,m=this.legend,e=this.userOptions.legend,l=this.isDirtyLegend,f,A,k=this.hasCartesianSeries,r=this.isDirtyBox,G,v=this.renderer,H=v.isHidden(),E=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);H&&this.temporaryDisplay();
this.layOutTitles();for(b=d.length;b--;)if(G=d[b],G.options.stacking&&(f=!0,G.isDirty)){A=!0;break}if(A)for(b=d.length;b--;)G=d[b],G.options.stacking&&(G.isDirty=!0);h(d,function(a){a.isDirty&&("point"===a.options.legendType?(a.updateTotals&&a.updateTotals(),l=!0):e&&(e.labelFormatter||e.labelFormat)&&(l=!0));a.isDirtyData&&q(a,"updatedData")});l&&m&&m.options.enabled&&(m.render(),this.isDirtyLegend=!1);f&&this.getStacks();k&&h(c,function(a){a.updateNames();a.updateYNames&&a.updateYNames();a.setScale()});
this.getMargins();k&&(h(c,function(a){a.isDirty&&(r=!0)}),h(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,E.push(function(){q(a,"afterSetExtremes",p(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(r||f)&&a.redraw()}));r&&this.drawChartBox();q(this,"predraw");h(d,function(a){(r||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});g&&g.reset(!0);v.draw();q(this,"redraw");q(this,"render");H&&this.temporaryDisplay(!0);h(E,function(a){a.call()})},get:function(a){function b(b){return b.id===
a||b.options&&b.options.id===a}var c,d=this.series,g;c=k(this.axes,b)||k(this.series,b);for(g=0;!c&&g<d.length;g++)c=k(d[g].points||[],b);return c},getAxes:function(){var a=this,b=this.options,c=b.xAxis=g(b.xAxis||{}),b=b.yAxis=g(b.yAxis||{});q(this,"getAxes");h(c,function(a,b){a.index=b;a.isX=!0});h(b,function(a,b){a.index=b});c=c.concat(b);h(c,function(b){new e(a,b)});q(this,"afterGetAxes")},getSelectedPoints:function(){var a=[];h(this.series,function(b){a=a.concat(d(b.data||[],function(a){return a.selected}))});
return a},getSelectedSeries:function(){return d(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var d=this,g=d.options,m;m=g.title=B({style:{color:"#333333",fontSize:g.isStock?"16px":"18px"}},g.title,a);g=g.subtitle=B({style:{color:"#666666"}},g.subtitle,b);h([["title",a,m],["subtitle",b,g]],function(a,b){var c=a[0],g=d[c],m=a[1];a=a[2];g&&m&&(d[c]=g=g.destroy());a&&!g&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),
d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c,d=this.renderer,g=this.spacingBox;h(["title","subtitle"],function(a){var c=this[a],m=this.options[a];a="title"===a?-3:m.verticalAlign?0:b+2;var h;c&&(h=m.style.fontSize,h=d.fontMetrics(h,c).b,c.css({width:(m.width||g.width+m.widthAdjust)+"px"}).align(p({y:a+h},m),!1,"spacingBox"),m.floating||m.verticalAlign||(b=Math.ceil(b+c.getBBox(m.useHTML).height)))},this);c=this.titleOffset!==
b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=this.isDirtyLegend=c,this.hasRendered&&G(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,d=b.width,b=b.height,g=this.renderTo;c(d)||(this.containerWidth=a.getStyle(g,"width"));c(b)||(this.containerHeight=a.getStyle(g,"height"));this.chartWidth=Math.max(0,d||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},
temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(f.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){f.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,f.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&
(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;if(c===f.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var c,d=this.options,g=d.chart,m,h;c=this.renderTo;var e=a.uniqueKey(),l;c||(this.renderTo=c=g.renderTo);J(c)&&(this.renderTo=c=f.getElementById(c));c||a.error(13,!0);m=A(n(c,"data-highcharts-chart"));b(m)&&w[m]&&w[m].hasRendered&&w[m].destroy();n(c,"data-highcharts-chart",
this.index);c.innerHTML="";g.skipClone||c.offsetWidth||this.temporaryDisplay();this.getChartSize();m=this.chartWidth;h=this.chartHeight;l=p({position:"relative",overflow:"hidden",width:m+"px",height:h+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},g.style);this.container=c=u("div",{id:e},l,c);this._cursor=c.style.cursor;this.renderer=new (a[g.renderer]||a.Renderer)(c,m,h,null,g.forExport,d.exporting&&d.exporting.allowHTML);this.setClassName(g.className);
this.renderer.setStyle(g.style);this.renderer.chartIndex=this.index;q(this,"afterGetContainer")},getMargins:function(a){var b=this.spacing,d=this.margin,g=this.titleOffset;this.resetMargins();g&&!c(d[0])&&(this.plotTop=Math.max(this.plotTop,g+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(d,b);q(this,"getMargins");a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],d=a.margin;a.hasCartesianSeries&&h(a.axes,function(a){a.visible&&
a.getOffset()});h(L,function(g,m){c(d[m])||(a[g]+=b[m])});a.setChartSize()},reflow:function(b){var d=this,g=d.options.chart,m=d.renderTo,h=c(g.width)&&c(g.height),e=g.width||a.getStyle(m,"width"),g=g.height||a.getStyle(m,"height"),m=b?b.target:M;if(!h&&!d.isPrinting&&e&&g&&(m===M||m===f)){if(e!==d.containerWidth||g!==d.containerHeight)a.clearTimeout(d.reflowTimeout),d.reflowTimeout=r(function(){d.container&&d.setSize(void 0,void 0,!1)},b?100:0);d.containerWidth=e;d.containerHeight=g}},setReflow:function(a){var b=
this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=C(M,"resize",function(a){b.reflow(a)}),C(this,"destroy",this.unbindReflow))},setSize:function(b,c,d){var g=this,m=g.renderer;g.isResizing+=1;a.setAnimation(d,g);g.oldChartHeight=g.chartHeight;g.oldChartWidth=g.chartWidth;void 0!==b&&(g.options.chart.width=b);void 0!==c&&(g.options.chart.height=c);g.getChartSize();b=m.globalAnimation;(b?F:y)(g.container,{width:g.chartWidth+"px",height:g.chartHeight+
"px"},b);g.setChartSize(!0);m.setSize(g.chartWidth,g.chartHeight,d);h(g.axes,function(a){a.isDirty=!0;a.setScale()});g.isDirtyLegend=!0;g.isDirtyBox=!0;g.layOutTitles();g.getMargins();g.redraw(d);g.oldChartHeight=null;q(g,"resize");r(function(){g&&q(g,"endResize",null,function(){--g.isResizing})},I(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,g=this.chartWidth,d=this.chartHeight,m=this.options.chart,e=this.spacing,l=this.clipOffset,f,A,k,r;this.plotLeft=f=Math.round(this.plotLeft);
this.plotTop=A=Math.round(this.plotTop);this.plotWidth=k=Math.max(0,Math.round(g-f-this.marginRight));this.plotHeight=r=Math.max(0,Math.round(d-A-this.marginBottom));this.plotSizeX=b?r:k;this.plotSizeY=b?k:r;this.plotBorderWidth=m.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:g-e[3]-e[1],height:d-e[0]-e[2]};this.plotBox=c.plotBox={x:f,y:A,width:k,height:r};g=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(g,l[3])/2);c=Math.ceil(Math.max(g,l[0])/2);this.clipBox={x:b,
y:c,width:Math.floor(this.plotSizeX-Math.max(g,l[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(g,l[2])/2-c))};a||h(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()});q(this,"afterSetChartSize",{skipAxes:a})},resetMargins:function(){var a=this,b=a.options.chart;h(["margin","spacing"],function(c){var g=b[c],d=v(g)?g:[g,g,g,g];h(["Top","Right","Bottom","Left"],function(g,m){a[c][m]=G(b[c+g],d[m])})});h(L,function(b,c){a[b]=G(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,
0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,g=this.chartHeight,d=this.chartBackground,m=this.plotBackground,h=this.plotBorder,e,l=this.plotBGImage,f=a.backgroundColor,A=a.plotBackgroundColor,k=a.plotBackgroundImage,r,p=this.plotLeft,G=this.plotTop,v=this.plotWidth,E=this.plotHeight,n=this.plotBox,B=this.clipRect,t=this.clipBox,u="animate";d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),u="attr");e=a.borderWidth||
0;r=e+(a.shadow?8:0);f={fill:f||"none"};if(e||d["stroke-width"])f.stroke=a.borderColor,f["stroke-width"]=e;d.attr(f).shadow(a.shadow);d[u]({x:r/2,y:r/2,width:c-r-e%2,height:g-r-e%2,r:a.borderRadius});u="animate";m||(u="attr",this.plotBackground=m=b.rect().addClass("highcharts-plot-background").add());m[u](n);m.attr({fill:A||"none"}).shadow(a.plotShadow);k&&(l?l.animate(n):this.plotBGImage=b.image(k,p,G,v,E).add());B?B.animate({width:t.width,height:t.height}):this.clipRect=b.clipRect(t);u="animate";
h||(u="attr",this.plotBorder=h=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());h.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});h[u](h.crisp({x:p,y:G,width:v,height:E},-h.strokeWidth()));this.isDirtyBox=!1;q(this,"afterDrawChartBox")},propFromSeries:function(){var a=this,b=a.options.chart,c,g=a.options.series,d,m;h(["inverted","angular","polar"],function(h){c=E[b.type||b.defaultSeriesType];m=b[h]||c&&c.prototype[h];for(d=g&&g.length;!m&&d--;)(c=
E[g[d].type])&&c.prototype[h]&&(m=!0);a[h]=m})},linkSeries:function(){var a=this,b=a.series;h(b,function(a){a.linkedSeries.length=0});h(b,function(b){var c=b.options.linkedTo;J(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=G(b.options.visible,c.options.visible,b.visible))});q(this,"afterLinkSeries")},renderSeries:function(){h(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;
b.items&&h(b.items,function(c){var g=p(b.style,c.style),d=A(g.left)+a.plotLeft,m=A(g.top)+a.plotTop+12;delete g.left;delete g.top;a.renderer.text(c.html,d,m).attr({zIndex:2}).css(g).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,g,d,m;this.setTitle();this.legend=new l(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;g=this.plotHeight=Math.max(this.plotHeight-21,0);h(a,function(a){a.setScale()});this.getAxisMargins();
d=1.1<c/this.plotWidth;m=1.05<g/this.plotHeight;if(d||m)h(a,function(a){(a.horiz&&d||!a.horiz&&m)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&h(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=B(!0,this.options.credits,a);a.enabled&&
!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(M.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,g=b.series,d=b.container,m,e=d&&d.parentNode;q(b,"destroy");b.renderer.forExport?a.erase(w,b):w[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");
N(b);for(m=c.length;m--;)c[m]=c[m].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(m=g.length;m--;)g[m]=g[m].destroy();h("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",N(d),e&&t(d));D(b,function(a,c){delete b[c]})},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||
a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();h(b.series||[],function(b){a.initSeries(b)});a.linkSeries();q(a,"beforeRender");m&&(a.pointer=new m(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){h([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);q(this,"load");q(this,"render");c(this.index)&&this.setReflow(this.options.chart.reflow);
this.onload=null}})})(K);(function(a){var C=a.addEvent,F=a.Chart,I=a.each;C(F,"afterSetChartSize",function(n){var f=this.options.chart.scrollablePlotArea;(f=f&&f.minWidth)&&!this.renderer.forExport&&(this.scrollablePixels=f=Math.max(0,f-this.chartWidth))&&(this.plotWidth+=f,this.clipBox.width+=f,n.skipAxes||I(this.axes,function(e){1===e.side?e.getPlotLinePath=function(){var f=this.right,n;this.right=f-e.chart.scrollablePixels;n=a.Axis.prototype.getPlotLinePath.apply(this,arguments);this.right=f;return n}:
(e.setAxisSize(),e.setAxisTranslation())}))});C(F,"render",function(){this.scrollablePixels?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});F.prototype.setUpScrolling=function(){this.scrollingContainer=a.createElement("div",{className:"highcharts-scrolling"},{overflowX:"auto",WebkitOverflowScrolling:"touch"},this.renderTo);this.innerContainer=a.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);
this.setUpScrolling=null};F.prototype.applyFixed=function(){var n=this.container,f,e,u=!this.fixedDiv;u&&(this.fixedDiv=a.createElement("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.fixedRenderer=f=new a.Renderer(this.fixedDiv,0,0),this.scrollableMask=f.path().attr({fill:a.color(this.options.chart.backgroundColor||"#fff").setOpacity(.85).get(),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),
a.each([this.inverted?".highcharts-xaxis":".highcharts-yaxis",this.inverted?".highcharts-xaxis-labels":".highcharts-yaxis-labels",".highcharts-contextbutton",".highcharts-credits",".highcharts-legend",".highcharts-subtitle",".highcharts-title",".highcharts-legend-checkbox"],function(e){a.each(n.querySelectorAll(e),function(a){(a.namespaceURI===f.SVG_NS?f.box:f.box.parentNode).appendChild(a);a.style.pointerEvents="auto"})}));this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);e=this.chartWidth+
this.scrollablePixels;a.stop(this.container);this.container.style.width=e+"px";this.renderer.boxWrapper.attr({width:e,height:this.chartHeight,viewBox:[0,0,e,this.chartHeight].join(" ")});this.chartBackground.attr({width:e});u&&(e=this.options.chart.scrollablePlotArea,e.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixels*e.scrollPositionX));u=this.axisOffset;e=this.plotTop-u[0]-1;var u=this.plotTop+this.plotHeight+u[2],x=this.plotLeft+this.plotWidth-this.scrollablePixels;this.scrollableMask.attr({d:this.scrollablePixels?
["M",0,e,"L",this.plotLeft-1,e,"L",this.plotLeft-1,u,"L",0,u,"Z","M",x,e,"L",this.chartWidth,e,"L",this.chartWidth,u,"L",x,u,"Z"]:["M",0,0]})}})(K);(function(a){var C,F=a.each,I=a.extend,n=a.erase,f=a.fireEvent,e=a.format,u=a.isArray,x=a.isNumber,t=a.pick,w=a.uniqueKey,y=a.defined,c=a.removeEvent;a.Point=C=function(){};a.Point.prototype={init:function(a,c,e){this.series=a;this.color=a.color;this.applyOptions(c,e);this.id=y(this.id)?this.id:w();a.options.colorByPoint?(c=a.options.colors||a.chart.options.colors,
this.color=this.color||c[a.colorCounter],c=c.length,e=a.colorCounter,a.colorCounter++,a.colorCounter===c&&(a.colorCounter=0)):e=a.colorIndex;this.colorIndex=t(this.colorIndex,e);a.chart.pointCount++;f(this,"afterInit");return this},applyOptions:function(a,c){var e=this.series,h=e.options.pointValKey||e.pointValKey;a=C.prototype.optionsToObject.call(this,a);I(this,a);this.options=this.options?I(this.options,a):a;a.group&&delete this.group;a.dataLabels&&delete this.dataLabels;h&&(this.y=this[h]);this.isNull=
t(this.isValid&&!this.isValid(),null===this.x||!x(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===c&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));void 0===this.x&&e&&(this.x=void 0===c?e.autoIncrement(this):c);return this},setNestedProperty:function(c,e,f){f=f.split(".");a.reduce(f,function(c,d,b,h){c[d]=h.length-1===b?e:a.isObject(c[d],!0)?c[d]:{};return c[d]},c);return c},optionsToObject:function(c){var e={},h=this.series,f=h.options.keys,d=f||h.pointArrayMap||
["y"],b=d.length,v=0,n=0;if(x(c)||null===c)e[d[0]]=c;else if(u(c))for(!f&&c.length>b&&(h=typeof c[0],"string"===h?e.name=c[0]:"number"===h&&(e.x=c[0]),v++);n<b;)f&&void 0===c[v]||(0<d[n].indexOf(".")?a.Point.prototype.setNestedProperty(e,c[v],d[n]):e[d[n]]=c[v]),v++,n++;else"object"===typeof c&&(e=c,c.dataLabels&&(h._hasPointLabels=!0),c.marker&&(h._hasPointMarkers=!0));return e},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":
"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,c=a.zones,a=a.zoneAxis||"y",e=0,f;for(f=c[e];this[a]>=f.value;)f=c[++e];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=f&&f.color&&!this.options.color?f.color:this.nonZonedColor;return f},
destroy:function(){var a=this.series.chart,e=a.hoverPoints,f;a.pointCount--;e&&(this.setState(),n(e,this),e.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel||this.dataLabels)c(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(f in this)this[f]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],c,e=6;e--;)c=a[e],this[c]&&(this[c]=this[c].destroy());this.dataLabels&&
(F(this.dataLabels,function(a){a.element&&a.destroy()}),delete this.dataLabels);this.connectors&&(F(this.connectors,function(a){a.element&&a.destroy()}),delete this.connectors)},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var c=this.series,h=c.tooltipOptions,f=t(h.valueDecimals,""),d=h.valuePrefix||
"",b=h.valueSuffix||"";F(c.pointArrayMap||["y"],function(c){c="{point."+c;if(d||b)a=a.replace(RegExp(c+"}","g"),d+c+"}"+b);a=a.replace(RegExp(c+"}","g"),c+":,."+f+"f}")});return e(a,{point:this,series:this.series},c.chart.time)},firePointEvent:function(a,c,e){var h=this,d=this.series.options;(d.point.events[a]||h.options&&h.options.events&&h.options.events[a])&&this.importEvents();"click"===a&&d.allowPointSelect&&(e=function(a){h.select&&h.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});f(this,a,
c,e)},visible:!0}})(K);(function(a){var C=a.addEvent,F=a.animObject,I=a.arrayMax,n=a.arrayMin,f=a.correctFloat,e=a.defaultOptions,u=a.defaultPlotOptions,x=a.defined,t=a.each,w=a.erase,y=a.extend,c=a.fireEvent,h=a.grep,p=a.isArray,k=a.isNumber,q=a.isString,d=a.merge,b=a.objectEach,v=a.pick,J=a.removeEvent,l=a.splat,L=a.SVGElement,B=a.syncTimeout,D=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",
enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},
hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,d){var m=this,e,h=a.series,g;m.chart=a;m.options=d=m.setOptions(d);m.linkedSeries=[];m.bindAxes();y(m,{name:d.name,state:"",visible:!1!==d.visible,selected:!0===d.selected});
e=d.events;b(e,function(a,b){C(m,b,a)});if(e&&e.click||d.point&&d.point.events&&d.point.events.click||d.allowPointSelect)a.runTrackerClick=!0;m.getColor();m.getSymbol();t(m.parallelArrays,function(a){m[a+"Data"]=[]});m.setData(d.data,!1);m.isCartesian&&(a.hasCartesianSeries=!0);h.length&&(g=h[h.length-1]);m._i=v(g&&g._i,-1)+1;a.orderSeries(this.insert(h));c(this,"afterInit")},insert:function(a){var b=this.options.index,c;if(k(b)){for(c=a.length;c--;)if(b>=v(a[c].options.index,a[c]._i)){a.splice(c+
1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return v(c,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,e;t(b.axisTypes||[],function(m){t(d[m],function(a){e=a.options;if(c[m]===e.index||void 0!==c[m]&&c[m]===e.id||void 0===c[m]&&0===e.index)b.insert(a.series),b[m]=a,a.isDirty=!0});b[m]||b.optionalAxis===m||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,m=k(b)?function(g){var d="y"===g&&c.toYData?c.toYData(a):a[g];c[g+"Data"][b]=
d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};t(c.parallelArrays,m)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,e=this.chart.time,b=v(b,a.pointStart,0);this.pointInterval=c=v(this.pointInterval,a.pointInterval,1);d&&(a=new e.Date(b),"day"===d?e.set("Date",a,e.get("Date",a)+c):"month"===d?e.set("Month",a,e.get("Month",a)+c):"year"===d&&e.set("FullYear",a,e.get("FullYear",a)+c),c=a.getTime()-b);this.xIncrement=b+c;return b},
setOptions:function(a){var b=this.chart,m=b.options,h=m.plotOptions,f=(b.userOptions||{}).plotOptions||{},g=h[this.type];this.userOptions=a;b=d(g,h.series,a);this.tooltipOptions=d(e.tooltip,e.plotOptions.series&&e.plotOptions.series.tooltip,e.plotOptions[this.type].tooltip,m.tooltip.userOptions,h.series&&h.series.tooltip,h[this.type].tooltip,a.tooltip);this.stickyTracking=v(a.stickyTracking,f[this.type]&&f[this.type].stickyTracking,f.series&&f.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?
!0:b.stickyTracking);null===g.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=(b.zones||[]).slice();!b.negativeColor&&!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&x(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});c(this,"afterSetOptions",{options:b});return b},getName:function(){return this.name||"Series "+(this.index+
1)},getCyclic:function(a,b,c){var d,e=this.chart,g=this.userOptions,m=a+"Index",h=a+"Counter",f=c?c.length:v(e.options.chart[a+"Count"],e[a+"Count"]);b||(d=v(g[m],g["_"+m]),x(d)||(e.series.length||(e[h]=0),g["_"+m]=d=e[h]%f,e[h]+=1),c&&(b=c[d]));void 0!==d&&(this[m]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||u[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,
this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,updateData:function(b){var c=this.options,d=this.points,e=[],m,g,h,f=this.requireSorting;t(b,function(b){var g;g=a.defined(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b).x;k(g)&&(g=a.inArray(g,this.xData,h),-1===g||d[g].touched?e.push(b):b!==c.data[g]?(d[g].update(b,!1,null,!1),d[g].touched=!0,f&&(h=g+1)):d[g]&&(d[g].touched=!0),m=!0)},this);if(m)for(b=d.length;b--;)g=d[b],g.touched||g.remove(!1),
g.touched=!1;else if(b.length===d.length)t(b,function(a,b){d[b].update&&a!==c.data[b]&&d[b].update(a,!1,null,!1)});else return!1;t(e,function(a){this.addPoint(a,!1)},this);return!0},setData:function(b,c,d,e){var m=this,g=m.points,h=g&&g.length||0,f,l=m.options,A=m.chart,G=null,n=m.xAxis,B=l.turboThreshold,u=this.xData,D=this.yData,y=(f=m.pointArrayMap)&&f.length,N;b=b||[];f=b.length;c=v(c,!0);!1!==e&&f&&h&&!m.cropped&&!m.hasGroupedData&&m.visible&&!m.isSeriesBoosting&&(N=this.updateData(b));if(!N){m.xIncrement=
null;m.colorCounter=0;t(this.parallelArrays,function(a){m[a+"Data"].length=0});if(B&&f>B){for(d=0;null===G&&d<f;)G=b[d],d++;if(k(G))for(d=0;d<f;d++)u[d]=this.autoIncrement(),D[d]=b[d];else if(p(G))if(y)for(d=0;d<f;d++)G=b[d],u[d]=G[0],D[d]=G.slice(1,y+1);else for(d=0;d<f;d++)G=b[d],u[d]=G[0],D[d]=G[1];else a.error(12)}else for(d=0;d<f;d++)void 0!==b[d]&&(G={series:m},m.pointClass.prototype.applyOptions.apply(G,[b[d]]),m.updateParallelArrays(G,d));D&&q(D[0])&&a.error(14,!0);m.data=[];m.options.data=
m.userOptions.data=b;for(d=h;d--;)g[d]&&g[d].destroy&&g[d].destroy();n&&(n.minRange=n.userMinRange);m.isDirty=A.isDirtyBox=!0;m.isDirtyData=!!g;d=!1}"point"===l.legendType&&(this.processData(),this.generatePoints());c&&A.redraw(d)},processData:function(b){var c=this.xData,d=this.yData,e=c.length,m;m=0;var g,h,f=this.xAxis,l,k=this.options;l=k.cropThreshold;var p=this.getExtremesFromAll||k.getExtremesFromAll,q=this.isCartesian,k=f&&f.val2lin,v=f&&f.isLog,n=this.requireSorting,B,t;if(q&&!this.isDirty&&
!f.isDirty&&!this.yAxis.isDirty&&!b)return!1;f&&(b=f.getExtremes(),B=b.min,t=b.max);q&&this.sorted&&!p&&(!l||e>l||this.forceCrop)&&(c[e-1]<B||c[0]>t?(c=[],d=[]):this.yData&&(c[0]<B||c[e-1]>t)&&(m=this.cropData(this.xData,this.yData,B,t),c=m.xData,d=m.yData,m=m.start,g=!0));for(l=c.length||1;--l;)e=v?k(c[l])-k(c[l-1]):c[l]-c[l-1],0<e&&(void 0===h||e<h)?h=e:0>e&&n&&(a.error(15),n=!1);this.cropped=g;this.cropStart=m;this.processedXData=c;this.processedYData=d;this.closestPointRange=h},cropData:function(a,
b,c,d,e){var g=a.length,m=0,h=g,f;e=v(e,this.cropShoulder,1);for(f=0;f<g;f++)if(a[f]>=c){m=Math.max(0,f-e);break}for(c=f;c<g;c++)if(a[c]>d){h=c+e;break}return{xData:a.slice(m,h),yData:b.slice(m,h),start:m,end:h}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,d,e=this.processedXData,g=this.processedYData,h=this.pointClass,f=e.length,k=this.cropStart||0,p,q=this.hasGroupedData,a=a.keys,v,n=[],B;c||q||(c=[],c.length=b.length,c=this.data=c);a&&q&&(this.options.keys=!1);for(B=0;B<f;B++)p=
k+B,q?(v=(new h).init(this,[e[B]].concat(l(g[B]))),v.dataGroup=this.groupMap[B],v.dataGroup.options&&(v.options=v.dataGroup.options,y(v,v.dataGroup.options))):(v=c[p])||void 0===b[p]||(c[p]=v=(new h).init(this,b[p],e[B])),v&&(v.index=p,n[B]=v);this.options.keys=a;if(c&&(f!==(d=c.length)||q))for(B=0;B<d;B++)B!==k||q||(B+=f),c[B]&&(c[B].destroyElements(),c[B].plotX=void 0);this.data=c;this.points=n},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],g=0;d=this.xAxis.getExtremes();
var m=d.min,h=d.max,f,l,q=this.requireSorting?1:0,v,B;a=a||this.stackedYData||this.processedYData||[];d=a.length;for(B=0;B<d;B++)if(l=c[B],v=a[B],f=(k(v,!0)||p(v))&&(!b.positiveValuesOnly||v.length||0<v),l=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[B+q]||l)>=m&&(c[B-q]||l)<=h,f&&l)if(f=v.length)for(;f--;)"number"===typeof v[f]&&(e[g++]=v[f]);else e[g++]=v;this.dataMin=n(e);this.dataMax=I(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();
var a=this.options,b=a.stacking,d=this.xAxis,e=d.categories,h=this.yAxis,g=this.points,l=g.length,p=!!this.modifyValue,q=a.pointPlacement,B="between"===q||k(q),n=a.threshold,t=a.startFromThreshold?n:0,u,D,y,w,J=Number.MAX_VALUE;"between"===q&&(q=.5);k(q)&&(q*=v(a.pointRange||d.pointRange));for(a=0;a<l;a++){var L=g[a],C=L.x,F=L.y;D=L.low;var I=b&&h.stacks[(this.negStacks&&F<(t?0:n)?"-":"")+this.stackKey],K;h.positiveValuesOnly&&null!==F&&0>=F&&(L.isNull=!0);L.plotX=u=f(Math.min(Math.max(-1E5,d.translate(C,
0,0,0,1,q,"flags"===this.type)),1E5));b&&this.visible&&!L.isNull&&I&&I[C]&&(w=this.getStackIndicator(w,C,this.index),K=I[C],F=K.points[w.key],D=F[0],F=F[1],D===t&&w.key===I[C].base&&(D=v(k(n)&&n,h.min)),h.positiveValuesOnly&&0>=D&&(D=null),L.total=L.stackTotal=K.total,L.percentage=K.total&&L.y/K.total*100,L.stackY=F,K.setOffset(this.pointXOffset||0,this.barW||0));L.yBottom=x(D)?Math.min(Math.max(-1E5,h.translate(D,0,1,0,1)),1E5):null;p&&(F=this.modifyValue(F,L));L.plotY=D="number"===typeof F&&Infinity!==
F?Math.min(Math.max(-1E5,h.translate(F,0,1,0,1)),1E5):void 0;L.isInside=void 0!==D&&0<=D&&D<=h.len&&0<=u&&u<=d.len;L.clientX=B?f(d.translate(C,0,0,0,1,q)):u;L.negative=L.y<(n||0);L.category=e&&void 0!==e[L.x]?e[L.x]:L.x;L.isNull||(void 0!==y&&(J=Math.min(J,Math.abs(u-y))),y=u);L.zone=this.zones.length&&L.getZone()}this.closestPointRangePx=J;c(this,"afterTranslate")},getValidPoints:function(a,b){var c=this.chart;return h(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?
!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,g=this.clipBox,m=g||b.clipBox,h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,m.height,c.xAxis,c.yAxis].join(),f=b[h],l=b[h+"m"];f||(a&&(m.width=0,e&&(m.x=b.plotSizeX),b[h+"m"]=l=d.clipRect(e?b.plotSizeX+99:-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:b.chartHeight)),b[h]=f=d.clipRect(m),f.count={length:0});a&&!f.count[this.index]&&(f.count[this.index]=!0,f.count.length+=1);!1!==c.clip&&
(this.group.clip(a||g?f:b.clipRect),this.markerGroup.clip(l),this.sharedClipKey=h);a||(f.count[this.index]&&(delete f.count[this.index],--f.count.length),0===f.count.length&&h&&b[h]&&(g||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,c=F(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX,x:0},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null)},afterAnimate:function(){this.setClip();
c(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,d,e,g,h=this.options.marker,f,l,k,p=this[this.specialGroup]||this.markerGroup,q,n=v(h.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=h.enabledThreshold*h.radius);if(!1!==h.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++)d=a[c],g=d.graphic,f=d.marker||{},l=!!d.marker,e=n&&void 0===f.enabled||f.enabled,k=d.isInside,e&&!d.isNull?(e=v(f.symbol,this.symbol),q=this.markerAttribs(d,
d.selected&&"select"),g?g[k?"show":"hide"](!0).animate(q):k&&(0<q.width||d.hasImage)&&(d.graphic=g=b.renderer.symbol(e,q.x,q.y,q.width,q.height,l?f:h).add(p)),g&&g.attr(this.pointAttribs(d,d.selected&&"select")),g&&g.addClass(d.getClassName(),!0)):g&&(d.graphic=g.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},e=d.symbol||c.symbol,g=v(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],g=v(b&&b.radius,c&&c.radius,g+(c&&c.radiusPlus||0)));a.hasImage=e&&0===
e.indexOf("url");a.hasImage&&(g=0);a={x:Math.floor(a.plotX)-g,y:a.plotY-g};g&&(a.width=a.height=2*g);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,e=d&&d.marker||{},g=this.color,h=d&&d.color,m=a&&a.color,d=v(e.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;g=h||a||m||g;a=e.fillColor||c.fillColor||g;g=e.lineColor||c.lineColor||g;b&&(c=c.states[b],b=e.states&&e.states[b]||{},d=v(b.lineWidth,c.lineWidth,d+v(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||
a,g=b.lineColor||c.lineColor||g);return{stroke:g,"stroke-width":d,fill:a}},destroy:function(){var d=this,e=d.chart,h=/AppleWebKit\/533/.test(D.navigator.userAgent),f,l,g=d.data||[],k,p;c(d,"destroy");J(d);t(d.axisTypes||[],function(a){(p=d[a])&&p.series&&(w(p.series,d),p.isDirty=p.forceRedraw=!0)});d.legendItem&&d.chart.legend.destroyItem(d);for(l=g.length;l--;)(k=g[l])&&k.destroy&&k.destroy();d.points=null;a.clearTimeout(d.animationTimeout);b(d,function(a,b){a instanceof L&&!a.survive&&(f=h&&"group"===
b?"hide":"destroy",a[f]())});e.hoverSeries===d&&(e.hoverSeries=null);w(e.series,d);e.orderSeries();b(d,function(a,b){delete d[b]})},getGraphPath:function(a,b,c){var d=this,e=d.options,g=e.step,h,m=[],f=[],l;a=a||d.points;(h=a.reversed)&&a.reverse();(g={right:1,center:2}[g]||g&&3)&&h&&(g=4-g);!e.connectNulls||b||c||(a=this.getValidPoints(a));t(a,function(h,k){var r=h.plotX,p=h.plotY,q=a[k-1];(h.leftCliff||q&&q.rightCliff)&&!c&&(l=!0);h.isNull&&!x(b)&&0<k?l=!e.connectNulls:h.isNull&&!b?l=!0:(0===k||
l?k=["M",h.plotX,h.plotY]:d.getPointSpline?k=d.getPointSpline(a,h,k):g?(k=1===g?["L",q.plotX,p]:2===g?["L",(q.plotX+r)/2,q.plotY,"L",(q.plotX+r)/2,p]:["L",r,q.plotY],k.push("L",r,p)):k=["L",r,p],f.push(h.x),g&&(f.push(h.x),2===g&&f.push(h.x)),m.push.apply(m,k),l=!1)});m.xMap=f;return d.graphPath=m},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]],d=a.getZonesGraphs(d);t(d,function(d,
g){var e=d[0],h=a[e];h?(h.endX=a.preventGraphAnimation?null:c.xMap,h.animate({d:c})):c.length&&(a[e]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),h={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?h.dashstyle=d[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),h=a[e].attr(h).shadow(2>g&&b.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea)})},getZonesGraphs:function(a){t(this.zones,function(b,c){a.push(["zone-graph-"+c,
"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||""),b.color||this.color,b.dashStyle||this.options.dashStyle])},this);return a},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,g,h=this.clips||[],f,l=this.graph,k=this.area,p=Math.max(b.chartWidth,b.chartHeight),q=this[(this.zoneAxis||"y")+"Axis"],n,B,u=b.inverted,D,y,w,x,J=!1;d.length&&(l||k)&&q&&void 0!==q.min&&(B=q.reversed,D=q.horiz,l&&!this.showLine&&l.hide(),k&&k.hide(),n=q.getExtremes(),t(d,function(d,m){e=
B?D?b.plotWidth:0:D?0:q.toPixels(n.min);e=Math.min(Math.max(v(g,e),0),p);g=Math.min(Math.max(Math.round(q.toPixels(v(d.value,n.max),!0)),0),p);J&&(e=g=q.toPixels(n.max));y=Math.abs(e-g);w=Math.min(e,g);x=Math.max(e,g);q.isXAxis?(f={x:u?x:w,y:0,width:y,height:p},D||(f.x=b.plotHeight-f.x)):(f={x:0,y:u?x:w,width:p,height:y},D&&(f.y=b.plotWidth-f.y));u&&c.isVML&&(f=q.isXAxis?{x:0,y:B?w:x,height:f.width,width:b.chartWidth}:{x:f.y-b.plotLeft-b.spacingBox.x,y:0,width:f.height,height:b.chartHeight});h[m]?
h[m].animate(f):(h[m]=c.clipRect(f),l&&a["zone-graph-"+m].clip(h[m]),k&&a["zone-area-"+m].clip(h[m]));J=d.value>n.max;a.resetZones&&0===g&&(g=void 0)}),this.clips=h)},invertGroups:function(a){function b(){t(["group","markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,e;c.xAxis&&(e=C(d,"resize",b),C(c,"destroy",e),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,
e){var g=this[a],h=!g;h&&(this[a]=g=this.chart.renderer.g().attr({zIndex:d||.1}).add(e));g.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(x(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(g.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);g.attr({visibility:c})[h?"attr":"animate"](this.getPlotBox());return g},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);
return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,d,e=a.options,h=!!a.animate&&b.renderer.isSVG&&F(e.animation).duration,g=a.visible?"inherit":"hidden",f=e.zIndex,l=a.hasRendered,k=b.seriesGroup,p=b.inverted;d=a.plotGroup("group","series",g,f,k);a.markerGroup=a.plotGroup("markerGroup","markers",g,f,k);h&&a.animate(!0);d.inverted=a.isCartesian?p:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();
a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(p);!1===e.clip||a.sharedClipKey||l||d.clip(b.clipRect);h&&a.animate();l||(a.animationTimeout=B(function(){a.afterAnimate()},h));a.isDirty=!1;a.hasRendered=!0;c(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:v(d&&d.left,a.plotLeft),
translateY:v(e&&e.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,g){var e,h;if(h=c&&c.length)return e=b.kdAxisArray[d%g],c.sort(function(a,b){return a[e]-b[e]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,
h),d+1,g),right:a(c.slice(h+1),d+1,g)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;B(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,f,l){var m=b.point,k=d.kdAxisArray[f%l],p,q,r=m;q=x(a[e])&&x(m[e])?Math.pow(a[e]-m[e],2):null;p=x(a[g])&&x(m[g])?Math.pow(a[g]-m[g],2):null;p=(q||0)+(p||0);m.dist=x(p)?Math.sqrt(p):Number.MAX_VALUE;m.distX=x(q)?
Math.sqrt(q):Number.MAX_VALUE;k=a[k]-m[k];p=0>k?"left":"right";q=0>k?"right":"left";b[p]&&(p=c(a,b[p],f+1,l),r=p[h]<r[h]?p:m);b[q]&&Math.sqrt(k*k)<r[h]&&(a=c(a,b[q],f+1,l),r=a[h]<r[h]?a:r);return r}var d=this,e=this.kdAxisArray[0],g=this.kdAxisArray[1],h=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(K);(function(a){var C=a.Axis,F=a.Chart,I=a.correctFloat,n=a.defined,f=a.destroyObjectProperties,
e=a.each,u=a.format,x=a.objectEach,t=a.pick,w=a.Series;a.StackItem=function(a,c,e,f,k){var h=a.chart.inverted;this.axis=a;this.isNegative=e;this.options=c;this.x=f;this.total=null;this.points={};this.stack=k;this.rightCliff=this.leftCliff=0;this.alignOptions={align:c.align||(h?e?"left":"right":"center"),verticalAlign:c.verticalAlign||(h?"middle":e?"bottom":"top"),y:t(c.y,h?4:e?14:-6),x:t(c.x,h?e?-6:6:0)};this.textAlign=c.textAlign||(h?e?"right":"left":"center")};a.StackItem.prototype={destroy:function(){f(this,
this.axis)},render:function(a){var c=this.axis.chart,e=this.options,f=e.format,f=f?u(f,this,c.time):e.formatter.call(this);this.label?this.label.attr({text:f,visibility:"hidden"}):this.label=c.renderer.text(f,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,rotation:e.rotation,visibility:"hidden"}).add(a);this.label.labelrank=c.plotHeight},setOffset:function(a,c){var e=this.axis,f=e.chart,k=e.translate(e.usePercentage?100:this.total,0,0,0,1),q=e.translate(0),q=n(k)&&Math.abs(k-q);a=f.xAxis[0].translate(this.x)+
a;e=n(k)&&this.getStackBox(f,this,a,k,c,q,e);(c=this.label)&&e&&(c.align(this.alignOptions,null,e),e=c.alignAttr,c[!1===this.options.crop||f.isInsidePlot(e.x,e.y)?"show":"hide"](!0))},getStackBox:function(a,c,e,f,k,q,d){var b=c.axis.reversed,h=a.inverted;a=d.height+d.pos-(h?a.plotLeft:a.plotTop);c=c.isNegative&&!b||!c.isNegative&&b;return{x:h?c?f:f-q:e,y:h?a-e-k:c?a-f-q:a-f,width:h?q:k,height:h?k:q}}};F.prototype.getStacks=function(){var a=this;e(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&
(a.oldStacks=a.stacks)});e(a.series,function(c){!c.options.stacking||!0!==c.visible&&!1!==a.options.chart.ignoreHiddenSeries||(c.stackKey=c.type+t(c.options.stack,""))})};C.prototype.buildStacks=function(){var a=this.series,c=t(this.options.reversedStacks,!0),e=a.length,f;if(!this.isXAxis){this.usePercentage=!1;for(f=e;f--;)a[c?f:e-f-1].setStackedPoints();for(f=0;f<e;f++)a[f].modifyStacks()}};C.prototype.renderStackTotals=function(){var a=this.chart,c=a.renderer,e=this.stacks,f=this.stackTotalGroup;
f||(this.stackTotalGroup=f=c.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());f.translate(a.plotLeft,a.plotTop);x(e,function(a){x(a,function(a){a.render(f)})})};C.prototype.resetStacks=function(){var a=this,c=a.stacks;a.isXAxis||x(c,function(c){x(c,function(e,h){e.touched<a.stacksTouched?(e.destroy(),delete c[h]):(e.total=null,e.cumulative=null)})})};C.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),x(a,function(a){x(a,function(a){a.cumulative=
a.total})}))};w.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var e=this.processedXData,c=this.processedYData,h=[],f=c.length,k=this.options,q=k.threshold,d=t(k.startFromThreshold&&q,0),b=k.stack,k=k.stacking,v=this.stackKey,u="-"+v,l=this.negStacks,w=this.yAxis,B=w.stacks,D=w.oldStacks,m,G,A,x,E,g,r;w.stacksTouched+=1;for(E=0;E<f;E++)g=e[E],r=c[E],m=this.getStackIndicator(m,g,this.index),x=m.key,A=(G=l&&r<(d?
0:q))?u:v,B[A]||(B[A]={}),B[A][g]||(D[A]&&D[A][g]?(B[A][g]=D[A][g],B[A][g].total=null):B[A][g]=new a.StackItem(w,w.options.stackLabels,G,g,b)),A=B[A][g],null!==r?(A.points[x]=A.points[this.index]=[t(A.cumulative,d)],n(A.cumulative)||(A.base=x),A.touched=w.stacksTouched,0<m.index&&!1===this.singleStacks&&(A.points[x][0]=A.points[this.index+","+g+",0"][0])):A.points[x]=A.points[this.index]=null,"percent"===k?(G=G?v:u,l&&B[G]&&B[G][g]?(G=B[G][g],A.total=G.total=Math.max(G.total,A.total)+Math.abs(r)||
0):A.total=I(A.total+(Math.abs(r)||0))):A.total=I(A.total+(r||0)),A.cumulative=t(A.cumulative,d)+(r||0),null!==r&&(A.points[x].push(A.cumulative),h[E]=A.cumulative);"percent"===k&&(w.usePercentage=!0);this.stackedYData=h;w.oldStacks={}}};w.prototype.modifyStacks=function(){var a=this,c=a.stackKey,h=a.yAxis.stacks,f=a.processedXData,k,q=a.options.stacking;a[q+"Stacker"]&&e([c,"-"+c],function(c){for(var b=f.length,d,e;b--;)if(d=f[b],k=a.getStackIndicator(k,d,a.index,c),e=(d=h[c]&&h[c][d])&&d.points[k.key])a[q+
"Stacker"](e,d,b)})};w.prototype.percentStacker=function(a,c,e){c=c.total?100/c.total:0;a[0]=I(a[0]*c);a[1]=I(a[1]*c);this.stackedYData[e]=a[1]};w.prototype.getStackIndicator=function(a,c,e,f){!n(a)||a.x!==c||f&&a.key!==f?a={x:c,index:0,key:f}:a.index++;a.key=[e,c,a.index].join();return a}})(K);(function(a){var C=a.addEvent,F=a.animate,I=a.Axis,n=a.createElement,f=a.css,e=a.defined,u=a.each,x=a.erase,t=a.extend,w=a.fireEvent,y=a.inArray,c=a.isNumber,h=a.isObject,p=a.isArray,k=a.merge,q=a.objectEach,
d=a.pick,b=a.Point,v=a.Series,J=a.seriesTypes,l=a.setAnimation,L=a.splat;t(a.Chart.prototype,{addSeries:function(a,b,c){var e,h=this;a&&(b=d(b,!0),w(h,"addSeries",{options:a},function(){e=h.initSeries(a);h.isDirtyLegend=!0;h.linkSeries();w(h,"afterAddSeries");b&&h.redraw(c)}));return e},addAxis:function(a,b,c,e){var h=b?"xAxis":"yAxis",f=this.options;a=k(a,{index:this[h].length,isX:b});b=new I(this,a);f[h]=L(f[h]||{});f[h].push(a);d(c,!0)&&this.redraw(e);return b},showLoading:function(a){var b=this,
c=b.options,d=b.loadingDiv,e=c.loading,h=function(){d&&f(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=n("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=n("span",{className:"highcharts-loading-inner"},null,d),C(b,"redraw",h));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;f(d,t(e.style,{zIndex:10}));f(b.loadingSpan,e.labelStyle);b.loadingShown||(f(d,{opacity:0,
display:""}),F(d,{opacity:e.style.opacity||.5},{duration:e.showDuration||0}));b.loadingShown=!0;h()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",F(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){f(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),update:function(a,b,h,f){var l=this,m={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},p=a.chart,g,r,v=[];w(l,"update",{options:a});if(p){k(!0,l.options.chart,p);"className"in p&&l.setClassName(p.className);"reflow"in p&&l.setReflow(p.reflow);if("inverted"in p||"polar"in p||"type"in p)l.propFromSeries(),g=!0;"alignTicks"in p&&(g=!0);q(p,function(a,b){-1!==
y("chart."+b,l.propsRequireUpdateSeries)&&(r=!0);-1!==y(b,l.propsRequireDirtyBox)&&(l.isDirtyBox=!0)});"style"in p&&l.renderer.setStyle(p.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&k(!0,this.options.plotOptions,a.plotOptions);q(a,function(a,b){if(l[b]&&"function"===typeof l[b].update)l[b].update(a,!1);else if("function"===typeof l[m[b]])l[m[b]](a);"chart"!==b&&-1!==y(b,l.propsRequireUpdateSeries)&&(r=!0)});u("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){var c;
a[b]&&("series"===b&&(c=[],u(l[b],function(a,b){a.options.isInternal||c.push(b)})),u(L(a[b]),function(a,d){(d=e(a.id)&&l.get(a.id)||l[b][c?c[d]:d])&&d.coll===b&&(d.update(a,!1),h&&(d.touched=!0));if(!d&&h)if("series"===b)l.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)l.addAxis(a,"xAxis"===b,!1).touched=!0}),h&&u(l[b],function(a){a.touched||a.options.isInternal?delete a.touched:v.push(a)}))});u(v,function(a){a.remove&&a.remove(!1)});g&&u(l.axes,function(a){a.update({},!1)});r&&u(l.series,
function(a){a.update({},!1)});a.loading&&k(!0,l.options.loading,a.loading);g=p&&p.width;p=p&&p.height;c(g)&&g!==l.chartWidth||c(p)&&p!==l.chartHeight?l.setSize(g,p,f):d(b,!0)&&l.redraw(f);w(l,"afterUpdate",{options:a})},setSubtitle:function(a){this.setTitle(void 0,a)}});t(b.prototype,{update:function(a,b,c,e){function f(){l.applyOptions(a);null===l.y&&g&&(l.graphic=g.destroy());h(a,!0)&&(g&&g.element&&a&&a.marker&&void 0!==a.marker.symbol&&(l.graphic=g.destroy()),a&&a.dataLabels&&l.dataLabel&&(l.dataLabel=
l.dataLabel.destroy()),l.connector&&(l.connector=l.connector.destroy()));k=l.index;m.updateParallelArrays(l,k);p.data[k]=h(p.data[k],!0)||h(a,!0)?l.options:d(a,p.data[k]);m.isDirty=m.isDirtyData=!0;!m.fixedBox&&m.hasCartesianSeries&&(q.isDirtyBox=!0);"point"===p.legendType&&(q.isDirtyLegend=!0);b&&q.redraw(c)}var l=this,m=l.series,g=l.graphic,k,q=m.chart,p=m.options;b=d(b,!0);!1===e?f():l.firePointEvent("update",{options:a},f)},remove:function(a,b){this.series.removePoint(y(this,this.series.data),
a,b)}});t(v.prototype,{addPoint:function(a,b,c,e){var h=this.options,f=this.data,l=this.chart,g=this.xAxis,g=g&&g.hasNames&&g.names,m=h.data,k,p,q=this.xData,v,n;b=d(b,!0);k={series:this};this.pointClass.prototype.applyOptions.apply(k,[a]);n=k.x;v=q.length;if(this.requireSorting&&n<q[v-1])for(p=!0;v&&q[v-1]>n;)v--;this.updateParallelArrays(k,"splice",v,0,0);this.updateParallelArrays(k,v);g&&k.name&&(g[n]=k.name);m.splice(v,0,a);p&&(this.data.splice(v,0,null),this.processData());"point"===h.legendType&&
this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(k,"shift"),m.shift()));this.isDirtyData=this.isDirty=!0;b&&l.redraw(e)},removePoint:function(a,b,c){var e=this,h=e.data,f=h[a],m=e.points,g=e.chart,k=function(){m&&m.length===h.length&&m.splice(a,1);h.splice(a,1);e.options.data.splice(a,1);e.updateParallelArrays(f||{series:e},"splice",a,1);f&&f.destroy();e.isDirty=!0;e.isDirtyData=!0;b&&g.redraw()};l(c,g);b=d(b,!0);f?f.firePointEvent("remove",null,k):
k()},remove:function(a,b,c){function e(){h.destroy();h.remove=null;f.isDirtyLegend=f.isDirtyBox=!0;f.linkSeries();d(a,!0)&&f.redraw(b)}var h=this,f=h.chart;!1!==c?w(h,"remove",null,e):e()},update:function(b,c){var e=this,h=e.chart,f=e.userOptions,l=e.oldType||e.type,q=b.type||f.type||h.options.chart.type,g=J[l].prototype,p,v=["group","markerGroup","dataLabelsGroup"],n=["navigatorSeries","baseSeries"],B=e.finishedAnimating&&{animation:!1},D=["data","name","turboThreshold"],x=a.keys(b),L=0<x.length;
u(x,function(a){-1===y(a,D)&&(L=!1)});if(L)b.data&&this.setData(b.data,!1),b.name&&this.setName(b.name,!1);else{n=v.concat(n);u(n,function(a){n[a]=e[a];delete e[a]});b=k(f,B,{index:e.index,pointStart:d(f.pointStart,e.xData[0])},{data:e.options.data},b);e.remove(!1,null,!1);for(p in g)e[p]=void 0;J[q||l]?t(e,J[q||l].prototype):a.error(17,!0);u(n,function(a){e[a]=n[a]});e.init(h,b);b.zIndex!==f.zIndex&&u(v,function(a){e[a]&&e[a].attr({zIndex:b.zIndex})});e.oldType=l;h.linkSeries()}w(this,"afterUpdate");
d(c,!0)&&h.redraw(L?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});t(I.prototype,{update:function(a,b){var c=this.chart,e=a&&a.events||{};a=k(this.userOptions,a);c.options[this.coll].indexOf&&(c.options[this.coll][c.options[this.coll].indexOf(this.userOptions)]=a);q(c.options[this.coll].events,function(a,b){"undefined"===typeof e[b]&&(e[b]=void 0)});this.destroy(!0);this.init(c,t(a,{events:e}));c.isDirtyBox=!0;d(b,!0)&&c.redraw()},
remove:function(a){for(var b=this.chart,c=this.coll,e=this.series,h=e.length;h--;)e[h]&&e[h].remove(!1);x(b.axes,this);x(b[c],this);p(b.options[c])?b.options[c].splice(this.options.index,1):delete b.options[c];u(b[c],function(a,b){a.options.index=a.userOptions.index=b});this.destroy();b.isDirtyBox=!0;d(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var C=a.color,F=a.each,I=a.map,n=a.pick,f=a.Series,
e=a.seriesType;e("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(e){var f=[],t=[],u=this.xAxis,y=this.yAxis,c=y.stacks[this.stackKey],h={},p=this.index,k=y.series,q=k.length,d,b=n(y.options.reversedStacks,!0)?1:-1,v;e=e||this.points;if(this.options.stacking){for(v=0;v<e.length;v++)e[v].leftNull=e[v].rightNull=null,h[e[v].x]=e[v];a.objectEach(c,function(a,b){null!==a.total&&t.push(b)});t.sort(function(a,b){return a-b});d=I(k,function(){return this.visible});F(t,
function(a,e){var l=0,k,n;if(h[a]&&!h[a].isNull)f.push(h[a]),F([-1,1],function(f){var l=1===f?"rightNull":"leftNull",m=0,u=c[t[e+f]];if(u)for(v=p;0<=v&&v<q;)k=u.points[v],k||(v===p?h[a][l]=!0:d[v]&&(n=c[a].points[v])&&(m-=n[1]-n[0])),v+=b;h[a][1===f?"rightCliff":"leftCliff"]=m});else{for(v=p;0<=v&&v<q;){if(k=c[a].points[v]){l=k[1];break}v+=b}l=y.translate(l,0,1,0,1);f.push({isNull:!0,plotX:u.translate(a,0,0,0,1),x:a,plotY:l,yBottom:l})}})}return f},getGraphPath:function(a){var e=f.prototype.getGraphPath,
t=this.options,u=t.stacking,y=this.yAxis,c,h,p=[],k=[],q=this.index,d,b=y.stacks[this.stackKey],v=t.threshold,J=y.getThreshold(t.threshold),l,t=t.connectNulls||"percent"===u,L=function(c,e,h){var f=a[c];c=u&&b[f.x].points[q];var l=f[h+"Null"]||0;h=f[h+"Cliff"]||0;var m,n,f=!0;h||l?(m=(l?c[0]:c[1])+h,n=c[0]+h,f=!!l):!u&&a[e]&&a[e].isNull&&(m=n=v);void 0!==m&&(k.push({plotX:d,plotY:null===m?J:y.getThreshold(m),isNull:f,isCliff:!0}),p.push({plotX:d,plotY:null===n?J:y.getThreshold(n),doCurve:!1}))};a=
a||this.points;u&&(a=this.getStackPoints(a));for(c=0;c<a.length;c++)if(h=a[c].isNull,d=n(a[c].rectPlotX,a[c].plotX),l=n(a[c].yBottom,J),!h||t)t||L(c,c-1,"left"),h&&!u&&t||(k.push(a[c]),p.push({x:c,plotX:d,plotY:l})),t||L(c,c+1,"right");c=e.call(this,k,!0,!0);p.reversed=!0;h=e.call(this,p,!0,!0);h.length&&(h[0]="L");h=c.concat(h);e=e.call(this,k,!1,t);h.xMap=c.xMap;this.areaPath=h;return e},drawGraph:function(){this.areaPath=[];f.prototype.drawGraph.apply(this);var a=this,e=this.areaPath,t=this.options,
w=[["area","highcharts-area",this.color,t.fillColor]];F(this.zones,function(e,c){w.push(["zone-area-"+c,"highcharts-area highcharts-zone-area-"+c+" "+e.className,e.color||a.color,e.fillColor||t.fillColor])});F(w,function(f){var c=f[0],h=a[c];h?(h.endX=a.preventGraphAnimation?null:e.xMap,h.animate({d:e})):(h=a[c]=a.chart.renderer.path(e).addClass(f[1]).attr({fill:n(f[3],C(f[2]).setOpacity(n(t.fillOpacity,.75)).get()),zIndex:0}).add(a.group),h.isArea=!0);h.startX=e.xMap;h.shiftUnit=t.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);
(function(a){var C=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,I,n){var f=I.plotX,e=I.plotY,u=a[n-1];n=a[n+1];var x,t,w,y;if(u&&!u.isNull&&!1!==u.doCurve&&!I.isCliff&&n&&!n.isNull&&!1!==n.doCurve&&!I.isCliff){a=u.plotY;w=n.plotX;n=n.plotY;var c=0;x=(1.5*f+u.plotX)/2.5;t=(1.5*e+a)/2.5;w=(1.5*f+w)/2.5;y=(1.5*e+n)/2.5;w!==x&&(c=(y-t)*(w-f)/(w-x)+e-y);t+=c;y+=c;t>a&&t>e?(t=Math.max(a,e),y=2*e-t):t<a&&t<e&&(t=Math.min(a,e),y=2*e-t);y>n&&y>e?(y=Math.max(n,e),t=2*e-y):y<n&&y<e&&
(y=Math.min(n,e),t=2*e-y);I.rightContX=w;I.rightContY=y}I=["C",C(u.rightContX,u.plotX),C(u.rightContY,u.plotY),C(x,f),C(t,e),f,e];u.rightContX=u.rightContY=null;return I}})})(K);(function(a){var C=a.seriesTypes.area.prototype,F=a.seriesType;F("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:C.getStackPoints,getGraphPath:C.getGraphPath,drawGraph:C.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var C=a.animObject,F=a.color,I=a.each,n=a.extend,f=a.defined,
e=a.isNumber,u=a.merge,x=a.pick,t=a.Series,w=a.seriesType,y=a.svg;w("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group",
"dataLabelsGroup"],negStacks:!0,init:function(){t.prototype.init.apply(this,arguments);var a=this,e=a.chart;e.hasRendered&&I(e.series,function(c){c.type===a.type&&(c.isDirty=!0)})},getColumnMetrics:function(){var a=this,e=a.options,f=a.xAxis,k=a.yAxis,q=f.options.reversedStacks,q=f.reversed&&!q||!f.reversed&&q,d,b={},v=0;!1===e.grouping?v=1:I(a.chart.series,function(c){var e=c.options,f=c.yAxis,h;c.type!==a.type||!c.visible&&a.chart.options.chart.ignoreHiddenSeries||k.len!==f.len||k.pos!==f.pos||
(e.stacking?(d=c.stackKey,void 0===b[d]&&(b[d]=v++),h=b[d]):!1!==e.grouping&&(h=v++),c.columnIndex=h)});var n=Math.min(Math.abs(f.transA)*(f.ordinalSlope||e.pointRange||f.closestPointRange||f.tickInterval||1),f.len),l=n*e.groupPadding,t=(n-2*l)/(v||1),e=Math.min(e.maxPointWidth||f.len,x(e.pointWidth,t*(1-2*e.pointPadding)));a.columnMetrics={width:e,offset:(t-e)/2+(l+((a.columnIndex||0)+(q?1:0))*t-n/2)*(q?-1:1)};return a.columnMetrics},crispCol:function(a,e,f,k){var c=this.chart,d=this.borderWidth,
b=-(d%2?.5:0),d=d%2?.5:1;c.inverted&&c.renderer.isVML&&(d+=1);this.options.crisp&&(f=Math.round(a+f)+b,a=Math.round(a)+b,f-=a);k=Math.round(e+k)+d;b=.5>=Math.abs(e)&&.5<k;e=Math.round(e)+d;k-=e;b&&k&&(--e,k+=1);return{x:a,y:e,width:f,height:k}},translate:function(){var a=this,e=a.chart,p=a.options,k=a.dense=2>a.closestPointRange*a.xAxis.transA,k=a.borderWidth=x(p.borderWidth,k?0:1),q=a.yAxis,d=p.threshold,b=a.translatedThreshold=q.getThreshold(d),v=x(p.minPointLength,5),n=a.getColumnMetrics(),l=n.width,
u=a.barW=Math.max(l,1+2*k),B=a.pointXOffset=n.offset;e.inverted&&(b-=.5);p.pointPadding&&(u=Math.ceil(u));t.prototype.translate.apply(a);I(a.points,function(c){var h=x(c.yBottom,b),k=999+Math.abs(h),p=l,k=Math.min(Math.max(-k,c.plotY),q.len+k),n=c.plotX+B,t=u,g=Math.min(k,h),r,w=Math.max(k,h)-g;v&&Math.abs(w)<v&&(w=v,r=!q.reversed&&!c.negative||q.reversed&&c.negative,c.y===d&&a.dataMax<=d&&q.min<d&&(r=!r),g=Math.abs(g-b)>v?h-v:b-(r?v:0));f(c.options.pointWidth)&&(p=t=Math.ceil(c.options.pointWidth),
n-=Math.round((p-l)/2));c.barX=n;c.pointWidth=p;c.tooltipPos=e.inverted?[q.len+q.pos-e.plotLeft-k,a.xAxis.len-n-t/2,w]:[n+t/2,k+q.pos-e.plotTop,w];c.shapeType="rect";c.shapeArgs=a.crispCol.apply(a,c.isNull?[n,b,t,0]:[n,g,t,w])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,e){var c=this.options,f,h=this.pointAttrToOptions||{};f=h.stroke||"borderColor";var d=
h["stroke-width"]||"borderWidth",b=a&&a.color||this.color,n=a&&a[f]||c[f]||this.color||b,t=a&&a[d]||c[d]||this[d]||0,h=c.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||b&&b.color||this.color);e&&(a=u(c.states[e],a.options.states&&a.options.states[e]||{}),e=a.brightness,b=a.color||void 0!==e&&F(b).brighten(a.brightness).get()||b,n=a[f]||n,t=a[d]||t,h=a.dashStyle||h);f={fill:b,stroke:n,"stroke-width":t};h&&(f.dashstyle=h);return f},drawPoints:function(){var a=this,f=this.chart,p=
a.options,k=f.renderer,q=p.animationLimit||250,d;I(a.points,function(b){var c=b.graphic,h=c&&f.pointCount<q?"animate":"attr";if(e(b.plotY)&&null!==b.y){d=b.shapeArgs;if(c)c[h](u(d));else b.graphic=c=k[b.shapeType](d).add(b.group||a.group);p.borderRadius&&c.attr({r:p.borderRadius});c[h](a.pointAttribs(b,b.selected&&"select")).shadow(p.shadow,null,p.stacking&&!p.borderRadius);c.addClass(b.getClassName(),!0)}else c&&(b.graphic=c.destroy())})},animate:function(a){var c=this,e=this.yAxis,f=c.options,q=
this.chart.inverted,d={},b=q?"translateX":"translateY",v;y&&(a?(d.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(f.threshold))),q?d.translateX=a-e.len:d.translateY=a,c.group.attr(d)):(v=c.group.attr(b),c.group.animate({scaleY:1},n(C(c.options.animation),{step:function(a,f){d[b]=v+f.pos*(e.pos-v);c.group.attr(d)}})),c.animate=null))},remove:function(){var a=this,e=a.chart;e.hasRendered&&I(e.series,function(c){c.type===a.type&&(c.isDirty=!0)});t.prototype.remove.apply(a,arguments)}})})(K);
(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var C=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,
trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&C.prototype.drawGraph.call(this)}})})(K);(function(a){var C=a.deg2rad,F=a.isNumber,I=a.pick,n=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,e=this.chart,u=2*(a.slicedOffset||0),x=e.plotWidth-2*u,e=e.plotHeight-2*u,t=a.center,t=[I(t[0],"50%"),I(t[1],"50%"),a.size||"100%",a.innerSize||0],w=Math.min(x,e),y,c;for(y=0;4>y;++y)c=t[y],a=2>y||2===y&&
/%$/.test(c),t[y]=n(c,[x,e,w,t[2]][y])+(a?u:0);t[3]>t[2]&&(t[3]=t[2]);return t},getStartAndEndRadians:function(a,e){a=F(a)?a:0;e=F(e)&&e>a&&360>e-a?e:a+360;return{start:C*(a+-90),end:C*(e+-90)}}}})(K);(function(a){var C=a.addEvent,F=a.CenteredSeriesMixin,I=a.defined,n=a.each,f=a.extend,e=F.getStartAndEndRadians,u=a.inArray,x=a.noop,t=a.pick,w=a.Point,y=a.Series,c=a.seriesType,h=a.setAnimation;c("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,distance:30,enabled:!0,
formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=this,e=c.points,
d=c.startAngleRad;a||(n(e,function(a){var b=a.graphic,e=a.shapeArgs;b&&(b.attr({r:a.startR||c.center[3]/2,start:d,end:d}),b.animate({r:e.r,start:e.start,end:e.end},c.options.animation))}),c.animate=null)},updateTotals:function(){var a,c=0,e=this.points,d=e.length,b,f=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)b=e[a],c+=f&&!b.visible?0:b.isNull?0:b.y;this.total=c;for(a=0;a<d;a++)b=e[a],b.percentage=0<c&&(b.visible||!f)?b.y/c*100:0,b.total=c},generatePoints:function(){y.prototype.generatePoints.call(this);
this.updateTotals()},translate:function(a){this.generatePoints();var c=0,f=this.options,d=f.slicedOffset,b=d+(f.borderWidth||0),h,n,l,p=e(f.startAngle,f.endAngle),u=this.startAngleRad=p.start,p=(this.endAngleRad=p.end)-u,w=this.points,m,x=f.dataLabels.distance,f=f.ignoreHiddenPoint,A,y=w.length,E;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){l=Math.asin(Math.min((b-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(l)*(a[2]/2+d.labelDistance)};for(A=0;A<y;A++){E=w[A];
E.labelDistance=t(E.options.dataLabels&&E.options.dataLabels.distance,x);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,E.labelDistance);h=u+c*p;if(!f||E.visible)c+=E.percentage/100;n=u+c*p;E.shapeType="arc";E.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*h)/1E3,end:Math.round(1E3*n)/1E3};l=(n+h)/2;l>1.5*Math.PI?l-=2*Math.PI:l<-Math.PI/2&&(l+=2*Math.PI);E.slicedTranslation={translateX:Math.round(Math.cos(l)*d),translateY:Math.round(Math.sin(l)*d)};n=Math.cos(l)*a[2]/
2;m=Math.sin(l)*a[2]/2;E.tooltipPos=[a[0]+.7*n,a[1]+.7*m];E.half=l<-Math.PI/2||l>Math.PI/2?1:0;E.angle=l;h=Math.min(b,E.labelDistance/5);E.labelPos=[a[0]+n+Math.cos(l)*E.labelDistance,a[1]+m+Math.sin(l)*E.labelDistance,a[0]+n+Math.cos(l)*h,a[1]+m+Math.sin(l)*h,a[0]+n,a[1]+m,0>E.labelDistance?"center":E.half?"right":"left",l]}},drawGraph:null,drawPoints:function(){var a=this,c=a.chart.renderer,e,d,b,h,t=a.options.shadow;t&&!a.shadowGroup&&(a.shadowGroup=c.g("shadow").add(a.group));n(a.points,function(l){d=
l.graphic;if(l.isNull)d&&(l.graphic=d.destroy());else{h=l.shapeArgs;e=l.getTranslate();var k=l.shadowGroup;t&&!k&&(k=l.shadowGroup=c.g("shadow").add(a.shadowGroup));k&&k.attr(e);b=a.pointAttribs(l,l.selected&&"select");d?d.setRadialReference(a.center).attr(b).animate(f(h,e)):(l.graphic=d=c[l.shapeType](h).setRadialReference(a.center).attr(e).add(a.group),d.attr(b).attr({"stroke-linejoin":"round"}).shadow(t,k));d.attr({visibility:l.visible?"inherit":"hidden"});d.addClass(l.getClassName())}})},searchPoint:x,
sortByAngle:function(a,c){a.sort(function(a,d){return void 0!==a.angle&&(d.angle-a.angle)*c})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:F.getCenter,getSymbol:x},{init:function(){w.prototype.init.apply(this,arguments);var a=this,c;a.name=t(a.name,"Slice");c=function(c){a.slice("select"===c.type)};C(a,"select",c);C(a,"unselect",c);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,c){var e=this,d=e.series,b=d.chart,f=d.options.ignoreHiddenPoint;
c=t(c,f);a!==e.visible&&(e.visible=e.options.visible=a=void 0===a?!e.visible:a,d.options.data[u(e,d.data)]=e.options,n(["graphic","dataLabel","connector","shadowGroup"],function(b){if(e[b])e[b][a?"show":"hide"](!0)}),e.legendItem&&b.legend.colorizeItem(e,a),a||"hover"!==e.state||e.setState(""),f&&(d.isDirty=!0),c&&b.redraw())},slice:function(a,c,e){var d=this.series;h(e,d.chart);t(c,!0);this.sliced=this.options.sliced=I(a)?a:!this.sliced;d.options.data[u(this,d.data)]=this.options;this.graphic.animate(this.getTranslate());
this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r-1,start:c.start,end:c.end})}})})(K);(function(a){var C=a.addEvent,F=a.arrayMax,I=a.defined,n=a.each,f=a.extend,e=a.format,u=a.map,x=a.merge,t=a.noop,w=a.pick,y=a.relativeLength,c=
a.Series,h=a.seriesTypes,p=a.some,k=a.stableSort,q=a.isArray,d=a.splat;a.distribute=function(b,c,d){function e(a,b){return a.target-b.target}var f,h=!0,q=b,m=[],v;v=0;var t=q.reducedLen||c;for(f=b.length;f--;)v+=b[f].size;if(v>t){k(b,function(a,b){return(b.rank||0)-(a.rank||0)});for(v=f=0;v<=t;)v+=b[f].size,f++;m=b.splice(f-1,b.length)}k(b,e);for(b=u(b,function(a){return{size:a.size,targets:[a.target],align:w(a.align,.5)}});h;){for(f=b.length;f--;)h=b[f],v=(Math.min.apply(0,h.targets)+Math.max.apply(0,
h.targets))/2,h.pos=Math.min(Math.max(0,v-h.size*h.align),c-h.size);f=b.length;for(h=!1;f--;)0<f&&b[f-1].pos+b[f-1].size>b[f].pos&&(b[f-1].size+=b[f].size,b[f-1].targets=b[f-1].targets.concat(b[f].targets),b[f-1].align=.5,b[f-1].pos+b[f-1].size>c&&(b[f-1].pos=c-b[f-1].size),b.splice(f,1),h=!0)}q.push.apply(q,m);f=0;p(b,function(b){var e=0;if(p(b.targets,function(){q[f].pos=b.pos+e;if(Math.abs(q[f].pos-q[f].target)>d)return n(q.slice(0,f+1),function(a){delete a.pos}),q.reducedLen=(q.reducedLen||c)-
.1*c,q.reducedLen>.1*c&&a.distribute(q,c,d),!0;e+=q[f].size;f++}))return!0});k(q,e)};c.prototype.drawDataLabels=function(){function b(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}function c(a,b){var c=[],d;if(q(a)&&!q(b))c=u(a,function(a){return x(a,b)});else if(q(b)&&!q(a))c=u(b,function(b){return x(a,b)});else if(q(a)||q(b))for(d=Math.max(a.length,
b.length);d--;)c[d]=x(a[d],b[d]);else c=x(a,b);return c}var f=this,h=f.chart,k=f.options,p=k.dataLabels,t=f.points,m,y=f.hasRendered||0,A,F=w(p.defer,!!k.animation),E=h.renderer,p=c(c(h.options.plotOptions&&h.options.plotOptions.series&&h.options.plotOptions.series.dataLabels,h.options.plotOptions&&h.options.plotOptions[f.type]&&h.options.plotOptions[f.type].dataLabels),p);if(q(p)||p.enabled||f._hasPointLabels)A=f.plotGroup("dataLabelsGroup","data-labels",F&&!y?"hidden":"visible",p.zIndex||6),F&&
(A.attr({opacity:+y}),y||C(f,"afterAnimate",function(){f.visible&&A.show(!0);A[k.animation?"animate":"attr"]({opacity:1},{duration:200})})),n(t,function(g){m=d(c(p,g.dlOptions||g.options&&g.options.dataLabels));n(m,function(c,d){var l=c.enabled&&!g.isNull&&b(g,c),m,n,q,r,p=g.dataLabels?g.dataLabels[d]:g.dataLabel,v=g.connectors?g.connectors[d]:g.connector,t=!p;l&&(m=g.getLabelConfig(),n=c[g.formatPrefix+"Format"]||c.format,m=I(n)?e(n,m,h.time):(c[g.formatPrefix+"Formatter"]||c.formatter).call(m,c),
n=c.style,q=c.rotation,n.color=w(c.color,n.color,f.color,"#000000"),"contrast"===n.color&&(g.contrastColor=E.getContrast(g.color||f.color),n.color=c.inside||0>w(c.distance,g.labelDistance)||k.stacking?g.contrastColor:"#000000"),k.cursor&&(n.cursor=k.cursor),r={fill:c.backgroundColor,stroke:c.borderColor,"stroke-width":c.borderWidth,r:c.borderRadius||0,rotation:q,padding:c.padding,zIndex:1},a.objectEach(r,function(a,b){void 0===a&&delete r[b]}));!p||l&&I(m)?l&&I(m)&&(p?r.text=m:(g.dataLabels=g.dataLabels||
[],p=g.dataLabels[d]=q?E.text(m,0,-9999).addClass("highcharts-data-label"):E.label(m,0,-9999,c.shape,null,null,c.useHTML,null,"data-label"),d||(g.dataLabel=p),p.addClass(" highcharts-data-label-color-"+g.colorIndex+" "+(c.className||"")+(c.useHTML?" highcharts-tracker":""))),p.options=c,p.attr(r),p.css(n).shadow(c.shadow),p.added||p.add(A),f.alignDataLabel(g,p,c,null,t)):(g.dataLabel=g.dataLabel.destroy(),g.dataLabels&&(1===g.dataLabels.length?delete g.dataLabels:delete g.dataLabels[d]),d||delete g.dataLabel,
v&&(g.connector=g.connector.destroy(),g.connectors&&(1===g.connectors.length?delete g.connectors:delete g.connectors[d])))})});a.fireEvent(this,"afterDrawDataLabels")};c.prototype.alignDataLabel=function(a,c,d,e,h){var b=this.chart,l=b.inverted,m=w(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),k=w(a.plotY,-9999),n=c.getBBox(),q,p=d.rotation,g=d.align,r=this.visible&&(a.series.forceDL||b.isInsidePlot(m,Math.round(k),l)||e&&b.isInsidePlot(m,l?e.x+1:e.y+e.height-1,l)),v="justify"===w(d.overflow,"justify");
if(r&&(q=d.style.fontSize,q=b.renderer.fontMetrics(q,c).b,e=f({x:l?this.yAxis.len-k:m,y:Math.round(l?this.xAxis.len-m:k),width:0,height:0},e),f(d,{width:n.width,height:n.height}),p?(v=!1,m=b.renderer.rotCorr(q,p),m={x:e.x+d.x+e.width/2+m.x,y:e.y+d.y+{top:0,middle:.5,bottom:1}[d.verticalAlign]*e.height},c[h?"attr":"animate"](m).attr({align:g}),k=(p+720)%360,k=180<k&&360>k,"left"===g?m.y-=k?n.height:0:"center"===g?(m.x-=n.width/2,m.y-=n.height/2):"right"===g&&(m.x-=n.width,m.y-=k?0:n.height),c.placed=
!0,c.alignAttr=m):(c.align(d,null,e),m=c.alignAttr),v&&0<=e.height?a.isLabelJustified=this.justifyDataLabel(c,d,m,n,e,h):w(d.crop,!0)&&(r=b.isInsidePlot(m.x,m.y)&&b.isInsidePlot(m.x+n.width,m.y+n.height)),d.shape&&!p))c[h?"attr":"animate"]({anchorX:l?b.plotWidth-a.plotY:a.plotX,anchorY:l?b.plotHeight-a.plotX:a.plotY});r||(c.attr({y:-9999}),c.placed=!1)};c.prototype.justifyDataLabel=function(a,c,d,e,f,h){var b=this.chart,l=c.align,k=c.verticalAlign,n,q,p=a.box?0:a.padding||0;n=d.x+p;0>n&&("right"===
l?c.align="left":c.x=-n,q=!0);n=d.x+e.width-p;n>b.plotWidth&&("left"===l?c.align="right":c.x=b.plotWidth-n,q=!0);n=d.y+p;0>n&&("bottom"===k?c.verticalAlign="top":c.y=-n,q=!0);n=d.y+e.height-p;n>b.plotHeight&&("top"===k?c.verticalAlign="bottom":c.y=b.plotHeight-n,q=!0);q&&(a.placed=!h,a.align(c,null,f));return q};h.pie&&(h.pie.prototype.drawDataLabels=function(){var b=this,d=b.data,e,f=b.chart,h=b.options.dataLabels,k=w(h.connectorPadding,10),q=w(h.connectorWidth,1),m=f.plotWidth,p=f.plotHeight,t=
Math.round(f.chartWidth/3),u,x=b.center,g=x[2]/2,r=x[1],y,C,H,K,Q=[[],[]],z,P,T,S,U=[0,0,0,0];b.visible&&(h.enabled||b._hasPointLabels)&&(n(d,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),c.prototype.drawDataLabels.apply(b),n(d,function(a){a.dataLabel&&(a.visible?(Q[a.half].push(a),a.dataLabel._pos=null,!I(h.style.width)&&!I(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&
a.dataLabel.getBBox().width>t&&(a.dataLabel.css({width:.7*t}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),n(Q,function(c,d){var l,q,t=c.length,v=[],u;if(t)for(b.sortByAngle(c,d-.5),0<b.maxLabelDistance&&(l=Math.max(0,r-g-b.maxLabelDistance),q=Math.min(r+g+b.maxLabelDistance,f.plotHeight),n(c,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,r-g-a.labelDistance),a.bottom=Math.min(r+g+a.labelDistance,f.plotHeight),
u=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPos[1]-a.top+u/2,size:u,rank:a.y},v.push(a.distributeBox))}),l=q+u-l,a.distribute(v,l,l/5)),S=0;S<t;S++)e=c[S],H=e.labelPos,y=e.dataLabel,T=!1===e.visible?"hidden":"inherit",P=l=H[1],v&&I(e.distributeBox)&&(void 0===e.distributeBox.pos?T="hidden":(K=e.distributeBox.size,P=e.top+e.distributeBox.pos)),delete e.positionIndex,z=h.justify?x[0]+(d?-1:1)*(g+e.labelDistance):b.getX(P<e.top+2||P>e.bottom-2?l:P,d,e),y._attr={visibility:T,align:H[6]},
y._pos={x:z+h.x+({left:k,right:-k}[H[6]]||0),y:P+h.y-10},H.x=z,H.y=P,w(h.crop,!0)&&(C=y.getBBox().width,l=null,z-C<k&&1===d?(l=Math.round(C-z+k),U[3]=Math.max(l,U[3])):z+C>m-k&&0===d&&(l=Math.round(z+C-m+k),U[1]=Math.max(l,U[1])),0>P-K/2?U[0]=Math.max(Math.round(-P+K/2),U[0]):P+K/2>p&&(U[2]=Math.max(Math.round(P+K/2-p),U[2])),y.sideOverflow=l)}),0===F(U)||this.verifyDataLabelOverflow(U))&&(this.placeDataLabels(),q&&n(this.points,function(a){var c;u=a.connector;if((y=a.dataLabel)&&y._pos&&a.visible&&
0<a.labelDistance){T=y._attr.visibility;if(c=!u)a.connector=u=f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex+(a.className?" "+a.className:"")).add(b.dataLabelsGroup),u.attr({"stroke-width":q,stroke:h.connectorColor||a.color||"#666666"});u[c?"attr":"animate"]({d:b.connectorPath(a.labelPos)});u.attr("visibility",T)}else u&&(a.connector=u.destroy())}))},h.pie.prototype.connectorPath=function(a){var b=a.x,c=a.y;return w(this.options.dataLabels.softConnector,
!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},h.pie.prototype.placeDataLabels=function(){n(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=
!0):b&&b.attr({y:-9999}))},this)},h.pie.prototype.alignDataLabel=t,h.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c.minSize||80,f,h=null!==c.size;h||(null!==d[0]?f=Math.max(b[2]-Math.max(a[1],a[3]),e):(f=Math.max(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2),null!==d[1]?f=Math.max(Math.min(f,b[2]-Math.max(a[0],a[2])),e):(f=Math.max(Math.min(f,b[2]-a[0]-a[2]),e),b[1]+=(a[0]-a[2])/2),f<b[2]?(b[2]=f,b[3]=Math.min(y(c.innerSize||0,f),f),this.translate(b),this.drawDataLabels&&
this.drawDataLabels()):h=!0);return h});h.column&&(h.column.prototype.alignDataLabel=function(a,d,e,f,h){var b=this.chart.inverted,l=a.series,m=a.dlBox||a.shapeArgs,k=w(a.below,a.plotY>w(this.translatedThreshold,l.yAxis.len)),n=w(e.inside,!!this.options.stacking);m&&(f=x(m),0>f.y&&(f.height+=f.y,f.y=0),m=f.y+f.height-l.yAxis.len,0<m&&(f.height-=m),b&&(f={x:l.yAxis.len-f.y-f.height,y:l.xAxis.len-f.x-f.width,width:f.height,height:f.width}),n||(b?(f.x+=k?0:f.width,f.width=0):(f.y+=k?f.height:0,f.height=
0)));e.align=w(e.align,!b||n?"center":k?"right":"left");e.verticalAlign=w(e.verticalAlign,b||n?"middle":k?"top":"bottom");c.prototype.alignDataLabel.call(this,a,d,e,f,h);a.isLabelJustified&&a.contrastColor&&d.css({color:a.contrastColor})})})(K);(function(a){var C=a.Chart,F=a.each,I=a.isArray,n=a.objectEach,f=a.pick;a=a.addEvent;a(C,"render",function(){var a=[];F(this.labelCollectors||[],function(e){a=a.concat(e())});F(this.yAxis||[],function(e){e.options.stackLabels&&!e.options.stackLabels.allowOverlap&&
n(e.stacks,function(e){n(e,function(e){a.push(e.label)})})});F(this.series||[],function(e){var n=e.options.dataLabels;e.visible&&(!1!==n.enabled||e._hasPointLabels)&&F(e.points,function(e){if(e.visible){var n=I(e.dataLabels)?e.dataLabels:e.dataLabel?[e.dataLabel]:[];F(n,function(n){var c=n.options;n.labelrank=f(c.labelrank,e.labelrank,e.shapeArgs&&e.shapeArgs.height);c.allowOverlap||a.push(n)})}})});this.hideOverlappingLabels(a)});C.prototype.hideOverlappingLabels=function(a){var e=a.length,f=this.renderer,
n,w,y,c,h,p,k=function(a,c,b,e,f,h,k,n){return!(f>a+b||f+k<a||h>c+e||h+n<c)};y=function(a){var c,b,e,h=a.box?0:a.padding||0;e=0;if(a&&(!a.alignAttr||a.placed))return c=a.alignAttr||{x:a.attr("x"),y:a.attr("y")},b=a.parentGroup,a.width||(e=a.getBBox(),a.width=e.width,a.height=e.height,e=f.fontMetrics(null,a.element).h),{x:c.x+(b.translateX||0)+h,y:c.y+(b.translateY||0)+h-e,width:a.width-2*h,height:a.height-2*h}};for(w=0;w<e;w++)if(n=a[w])n.oldOpacity=n.opacity,n.newOpacity=1,n.absoluteBox=y(n);a.sort(function(a,
c){return(c.labelrank||0)-(a.labelrank||0)});for(w=0;w<e;w++)for(p=(y=a[w])&&y.absoluteBox,n=w+1;n<e;++n)if(h=(c=a[n])&&c.absoluteBox,p&&h&&y!==c&&0!==y.newOpacity&&0!==c.newOpacity&&(h=k(p.x,p.y,p.width,p.height,h.x,h.y,h.width,h.height)))(y.labelrank<c.labelrank?y:c).newOpacity=0;F(a,function(a){var c,b;a&&(b=a.newOpacity,a.oldOpacity!==b&&(a.alignAttr&&a.placed?(b?a.show(!0):c=function(){a.hide()},a.alignAttr.opacity=b,a[a.isOld?"animate":"attr"](a.alignAttr,null,c)):a.attr({opacity:b})),a.isOld=
!0)})}})(K);(function(a){var C=a.addEvent,F=a.Chart,I=a.createElement,n=a.css,f=a.defaultOptions,e=a.defaultPlotOptions,u=a.each,x=a.extend,t=a.fireEvent,w=a.hasTouch,y=a.inArray,c=a.isObject,h=a.Legend,p=a.merge,k=a.pick,q=a.Point,d=a.Series,b=a.seriesTypes,v=a.svg,J;J=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};u(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&
(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(u(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(w)a[d].on("touchstart",c);a.options.cursor&&a[d].css(n).css({cursor:a.options.cursor})}}),a._hasTracking=!0);t(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,h=
f.pointer,k=f.renderer,n=f.options.tooltip.snap,g=a.tracker,q,p=function(){if(f.hoverSeries!==a)a.onMouseOver()},x="rgba(192,192,192,"+(v?.0001:.002)+")";if(e&&!c)for(q=e+1;q--;)"M"===d[q]&&d.splice(q+1,0,d[q+1]-n,d[q+2],"L"),(q&&"M"===d[q]||q===e)&&d.splice(q,0,"L",d[q-2]+n,d[q-1]);g?g.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",stroke:x,fill:c?x:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*n),visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":
"highcharts-tracker-line").add(a.group),u([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",p).on("mouseout",function(a){h.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(w)a.on("touchstart",p)}));t(this,"afterDrawTracker")}};b.column&&(b.column.prototype.drawTracker=J.drawTrackerPoint);b.pie&&(b.pie.prototype.drawTracker=J.drawTrackerPoint);b.scatter&&(b.scatter.prototype.drawTracker=J.drawTrackerPoint);f.legend.itemStyle.cursor="pointer";x(h.prototype,
{setItemEvents:function(a,b,c){var d=this,e=d.chart.renderer.boxWrapper,f="highcharts-legend-"+(a instanceof q?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");e.addClass(f);b.css(d.options.itemHoverStyle)}).on("mouseout",function(){b.css(p(a.visible?d.itemStyle:d.itemHiddenStyle));e.removeClass(f);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};e.removeClass(f);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",
b,c):t(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=I("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);C(a.checkbox,"click",function(b){t(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});x(F.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,c=f.lang,d=b.options.chart.resetZoomButton,e=d.theme,h=
e.states,k="chart"===d.relativeTo?null:"plotBox";t(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,e,h&&h.hover).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,k)})},zoomOut:function(){t(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var b,d=this.pointer,e=!1,f;!a||a.resetSelection?(u(this.axes,function(a){b=a.zoom()}),d.initiated=!1):u(a.xAxis.concat(a.yAxis),
function(a){var c=a.axis;d[c.isXAxis?"zoomX":"zoomY"]&&(b=c.zoom(a.min,a.max),c.displayBtn&&(e=!0))});f=this.resetZoomButton;e&&!f?this.showResetZoom():!e&&c(f)&&(this.resetZoomButton=f.destroy());b&&this.redraw(k(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&u(d,function(a){a.setState()});u("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],g=(b.pointRange||
0)/2,l=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,m=b.getExtremes(),k=b.toValue(h-f,!0)+g*l,l=b.toValue(h+b.len-f,!0)-g*l,n=l<k,h=n?l:k,k=n?k:l,l=Math.min(m.dataMin,g?m.min:b.toValue(b.toPixels(m.min)-b.minPixelPadding)),g=Math.max(m.dataMax,g?m.max:b.toValue(b.toPixels(m.max)+b.minPixelPadding)),n=l-h;0<n&&(k+=n,h=l);n=k-g;0<n&&(k=g,h-=n);b.series.length&&h!==m.min&&k!==m.max&&(b.setExtremes(h,k,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);n(c.container,{cursor:"move"})}});x(q.prototype,
{select:function(a,b){var c=this,d=c.series,e=d.chart;a=k(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[y(c,d.data)]=c.options;c.setState(a&&"select");b||u(e.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,d.options.data[y(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,
b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");u(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=p(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){C(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),d=this.plotY,f=this.series,h=f.options.states[a||"normal"]||{},l=
e[f.type].marker&&f.options.marker,n=l&&!1===l.enabled,q=l&&l.states&&l.states[a||"normal"]||{},g=!1===q.enabled,p=f.stateMarkerGraphic,v=this.marker||{},u=f.chart,w=f.halo,y,C=l&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===h.enabled||a&&(g||n&&!1===q.enabled)||a&&v.states&&v.states[a]&&!1===v.states[a].enabled)){C&&(y=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+
a),this.graphic.animate(f.pointAttribs(this,a),k(u.options.chart.animation,h.animation)),y&&this.graphic.animate(y,k(u.options.chart.animation,q.animation,l.animation)),p&&p.hide();else{if(a&&q){l=v.symbol||f.symbol;p&&p.currentSymbol!==l&&(p=p.destroy());if(p)p[b?"animate":"attr"]({x:y.x,y:y.y});else l&&(f.stateMarkerGraphic=p=u.renderer.symbol(l,y.x,y.y,y.width,y.height).add(f.markerGroup),p.currentSymbol=l);p&&p.attr(f.pointAttribs(this,a))}p&&(p[a&&u.isInsidePlot(c,d,u.inverted)?"show":"hide"](),
p.element.point=this)}(c=h.halo)&&c.size?(w||(f.halo=w=u.renderer.path().add((this.graphic||p).parentGroup)),w.show()[b?"animate":"attr"]({d:this.haloPath(c.size)}),w.attr({"class":"highcharts-halo highcharts-color-"+k(this.colorIndex,f.colorIndex)+(this.className?" "+this.className:""),zIndex:-1}),w.point=this,w.attr(x({fill:this.color||f.color,"fill-opacity":c.opacity},c.attributes))):w&&w.point&&w.point.haloPath&&w.animate({d:w.point.haloPath(0)},null,w.hide);this.state=a;t(this,"afterSetState")}},
haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});x(d.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&t(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&t(this,"mouseOut");!c||this.stickyTracking||
c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,c=b.options,d=b.graph,e=c.states,f=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(u([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!e[a]||!1!==e[a].enabled)&&(a&&(f=e[a].lineWidth||f+(e[a].lineWidthPlus||0)),d&&!d.dashstyle))for(f={"stroke-width":f},d.animate(f,k(e[a||"normal"]&&e[a||"normal"].animation,
b.chart.options.chart.animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(f),c+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,h=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";u(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&
u(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});u(c.linkedSeries,function(b){b.setVisible(a,!1)});h&&(d.isDirtyBox=!0);t(c,f);!1!==b&&d.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);t(this,a?"select":"unselect")},drawTracker:J.drawTrackerGraph})})(K);(function(a){var C=a.Chart,F=a.each,I=a.inArray,n=a.isArray,f=a.isObject,e=a.pick,u=a.splat;
C.prototype.setResponsive=function(e){var f=this.options.responsive,n=[],u=this.currentResponsive;f&&f.rules&&F(f.rules,function(c){void 0===c._id&&(c._id=a.uniqueKey());this.matchResponsiveRule(c,n,e)},this);var c=a.merge.apply(0,a.map(n,function(c){return a.find(f.rules,function(a){return a._id===c}).chartOptions})),n=n.toString()||void 0;n!==(u&&u.ruleIds)&&(u&&this.update(u.undoOptions,e),n?(this.currentResponsive={ruleIds:n,mergedOptions:c,undoOptions:this.currentOptions(c)},this.update(c,e)):
this.currentResponsive=void 0)};C.prototype.matchResponsiveRule=function(a,f){var n=a.condition;(n.callback||function(){return this.chartWidth<=e(n.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=e(n.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=e(n.minWidth,0)&&this.chartHeight>=e(n.minHeight,0)}).call(this)&&f.push(a._id)};C.prototype.currentOptions=function(e){function t(e,c,h,p){var k;a.objectEach(e,function(a,d){if(!p&&-1<I(d,["series","xAxis","yAxis"]))for(a=u(a),h[d]=[],k=0;k<a.length;k++)c[d][k]&&
(h[d][k]={},t(a[k],c[d][k],h[d][k],p+1));else f(a)?(h[d]=n(a)?[]:{},t(a,c[d]||{},h[d],p+1)):h[d]=c[d]||null})}var w={};t(e,this.options,w,0);return w}})(K);return K});
//# sourceMappingURL=highcharts.js.map


/***/ }),

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 1054,
	"./af.js": 1054,
	"./ar": 1055,
	"./ar-dz": 1056,
	"./ar-dz.js": 1056,
	"./ar-kw": 1057,
	"./ar-kw.js": 1057,
	"./ar-ly": 1058,
	"./ar-ly.js": 1058,
	"./ar-ma": 1059,
	"./ar-ma.js": 1059,
	"./ar-sa": 1060,
	"./ar-sa.js": 1060,
	"./ar-tn": 1061,
	"./ar-tn.js": 1061,
	"./ar.js": 1055,
	"./az": 1062,
	"./az.js": 1062,
	"./be": 1063,
	"./be.js": 1063,
	"./bg": 1064,
	"./bg.js": 1064,
	"./bm": 1065,
	"./bm.js": 1065,
	"./bn": 1066,
	"./bn.js": 1066,
	"./bo": 1067,
	"./bo.js": 1067,
	"./br": 1068,
	"./br.js": 1068,
	"./bs": 1069,
	"./bs.js": 1069,
	"./ca": 1070,
	"./ca.js": 1070,
	"./cs": 1071,
	"./cs.js": 1071,
	"./cv": 1072,
	"./cv.js": 1072,
	"./cy": 1073,
	"./cy.js": 1073,
	"./da": 1074,
	"./da.js": 1074,
	"./de": 1075,
	"./de-at": 1076,
	"./de-at.js": 1076,
	"./de-ch": 1077,
	"./de-ch.js": 1077,
	"./de.js": 1075,
	"./dv": 1078,
	"./dv.js": 1078,
	"./el": 1079,
	"./el.js": 1079,
	"./en-SG": 1080,
	"./en-SG.js": 1080,
	"./en-au": 1081,
	"./en-au.js": 1081,
	"./en-ca": 1082,
	"./en-ca.js": 1082,
	"./en-gb": 1083,
	"./en-gb.js": 1083,
	"./en-ie": 1084,
	"./en-ie.js": 1084,
	"./en-il": 1085,
	"./en-il.js": 1085,
	"./en-nz": 1086,
	"./en-nz.js": 1086,
	"./eo": 1087,
	"./eo.js": 1087,
	"./es": 1088,
	"./es-do": 1089,
	"./es-do.js": 1089,
	"./es-us": 1090,
	"./es-us.js": 1090,
	"./es.js": 1088,
	"./et": 1091,
	"./et.js": 1091,
	"./eu": 1092,
	"./eu.js": 1092,
	"./fa": 1093,
	"./fa.js": 1093,
	"./fi": 1094,
	"./fi.js": 1094,
	"./fo": 1095,
	"./fo.js": 1095,
	"./fr": 1096,
	"./fr-ca": 1097,
	"./fr-ca.js": 1097,
	"./fr-ch": 1098,
	"./fr-ch.js": 1098,
	"./fr.js": 1096,
	"./fy": 1099,
	"./fy.js": 1099,
	"./ga": 1100,
	"./ga.js": 1100,
	"./gd": 1101,
	"./gd.js": 1101,
	"./gl": 1102,
	"./gl.js": 1102,
	"./gom-latn": 1103,
	"./gom-latn.js": 1103,
	"./gu": 1104,
	"./gu.js": 1104,
	"./he": 1105,
	"./he.js": 1105,
	"./hi": 1106,
	"./hi.js": 1106,
	"./hr": 1107,
	"./hr.js": 1107,
	"./hu": 1108,
	"./hu.js": 1108,
	"./hy-am": 1109,
	"./hy-am.js": 1109,
	"./id": 1110,
	"./id.js": 1110,
	"./is": 1111,
	"./is.js": 1111,
	"./it": 1112,
	"./it-ch": 1113,
	"./it-ch.js": 1113,
	"./it.js": 1112,
	"./ja": 1114,
	"./ja.js": 1114,
	"./jv": 1115,
	"./jv.js": 1115,
	"./ka": 1116,
	"./ka.js": 1116,
	"./kk": 1117,
	"./kk.js": 1117,
	"./km": 1118,
	"./km.js": 1118,
	"./kn": 1119,
	"./kn.js": 1119,
	"./ko": 1120,
	"./ko.js": 1120,
	"./ku": 1121,
	"./ku.js": 1121,
	"./ky": 1122,
	"./ky.js": 1122,
	"./lb": 1123,
	"./lb.js": 1123,
	"./lo": 1124,
	"./lo.js": 1124,
	"./lt": 1125,
	"./lt.js": 1125,
	"./lv": 1126,
	"./lv.js": 1126,
	"./me": 1127,
	"./me.js": 1127,
	"./mi": 1128,
	"./mi.js": 1128,
	"./mk": 1129,
	"./mk.js": 1129,
	"./ml": 1130,
	"./ml.js": 1130,
	"./mn": 1131,
	"./mn.js": 1131,
	"./mr": 1132,
	"./mr.js": 1132,
	"./ms": 1133,
	"./ms-my": 1134,
	"./ms-my.js": 1134,
	"./ms.js": 1133,
	"./mt": 1135,
	"./mt.js": 1135,
	"./my": 1136,
	"./my.js": 1136,
	"./nb": 1137,
	"./nb.js": 1137,
	"./ne": 1138,
	"./ne.js": 1138,
	"./nl": 1139,
	"./nl-be": 1140,
	"./nl-be.js": 1140,
	"./nl.js": 1139,
	"./nn": 1141,
	"./nn.js": 1141,
	"./pa-in": 1142,
	"./pa-in.js": 1142,
	"./pl": 1143,
	"./pl.js": 1143,
	"./pt": 1144,
	"./pt-br": 1145,
	"./pt-br.js": 1145,
	"./pt.js": 1144,
	"./ro": 1146,
	"./ro.js": 1146,
	"./ru": 1147,
	"./ru.js": 1147,
	"./sd": 1148,
	"./sd.js": 1148,
	"./se": 1149,
	"./se.js": 1149,
	"./si": 1150,
	"./si.js": 1150,
	"./sk": 1151,
	"./sk.js": 1151,
	"./sl": 1152,
	"./sl.js": 1152,
	"./sq": 1153,
	"./sq.js": 1153,
	"./sr": 1154,
	"./sr-cyrl": 1155,
	"./sr-cyrl.js": 1155,
	"./sr.js": 1154,
	"./ss": 1156,
	"./ss.js": 1156,
	"./sv": 1157,
	"./sv.js": 1157,
	"./sw": 1158,
	"./sw.js": 1158,
	"./ta": 1159,
	"./ta.js": 1159,
	"./te": 1160,
	"./te.js": 1160,
	"./tet": 1161,
	"./tet.js": 1161,
	"./tg": 1162,
	"./tg.js": 1162,
	"./th": 1163,
	"./th.js": 1163,
	"./tl-ph": 1164,
	"./tl-ph.js": 1164,
	"./tlh": 1165,
	"./tlh.js": 1165,
	"./tr": 1166,
	"./tr.js": 1166,
	"./tzl": 1167,
	"./tzl.js": 1167,
	"./tzm": 1168,
	"./tzm-latn": 1169,
	"./tzm-latn.js": 1169,
	"./tzm.js": 1168,
	"./ug-cn": 1170,
	"./ug-cn.js": 1170,
	"./uk": 1171,
	"./uk.js": 1171,
	"./ur": 1172,
	"./ur.js": 1172,
	"./uz": 1173,
	"./uz-latn": 1174,
	"./uz-latn.js": 1174,
	"./uz.js": 1173,
	"./vi": 1175,
	"./vi.js": 1175,
	"./x-pseudo": 1176,
	"./x-pseudo.js": 1176,
	"./yo": 1177,
	"./yo.js": 1177,
	"./zh-cn": 1178,
	"./zh-cn.js": 1178,
	"./zh-hk": 1179,
	"./zh-hk.js": 1179,
	"./zh-tw": 1180,
	"./zh-tw.js": 1180
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1184;

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _CircularProgress = __webpack_require__(1186);

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CircularProgress2.default;

/***/ }),

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(17);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(18);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(14);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autoPrefix = __webpack_require__(113);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(22);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  return clampedValue / (max - min);
}

function getArcLength(fraction, props) {
  return fraction * Math.PI * (props.size - props.thickness);
}

function getStyles(props, context) {
  var max = props.max,
      min = props.min,
      size = props.size,
      value = props.value;
  var palette = context.muiTheme.baseTheme.palette;


  var styles = {
    root: {
      position: 'relative',
      display: 'inline-block',
      width: size,
      height: size
    },
    wrapper: {
      width: size,
      height: size,
      display: 'inline-block',
      transition: _transitions2.default.create('transform', '20s', null, 'linear'),
      transitionTimingFunction: 'linear'
    },
    svg: {
      width: size,
      height: size,
      position: 'relative'
    },
    path: {
      stroke: props.color || palette.primary1Color,
      strokeLinecap: 'round',
      transition: _transitions2.default.create('all', '1.5s', null, 'ease-in-out')
    }
  };

  if (props.mode === 'determinate') {
    var relVal = getRelativeValue(value, min, max);
    styles.path.transition = _transitions2.default.create('all', '0.3s', null, 'linear');
    styles.path.strokeDasharray = getArcLength(relVal, props) + ', ' + getArcLength(1, props);
  }

  return styles;
}

var CircularProgress = function (_Component) {
  (0, _inherits3.default)(CircularProgress, _Component);

  function CircularProgress() {
    (0, _classCallCheck3.default)(this, CircularProgress);
    return (0, _possibleConstructorReturn3.default)(this, (CircularProgress.__proto__ || (0, _getPrototypeOf2.default)(CircularProgress)).apply(this, arguments));
  }

  (0, _createClass3.default)(CircularProgress, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scalePath(this.refs.path);
      this.rotateWrapper(this.refs.wrapper);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.scalePathTimer);
      clearTimeout(this.rotateWrapperTimer);
    }
  }, {
    key: 'scalePath',
    value: function scalePath(path) {
      var _this2 = this;

      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.props.mode !== 'indeterminate') return;

      step %= 3;

      if (step === 0) {
        path.style.strokeDasharray = getArcLength(0, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = 0;
        path.style.transitionDuration = '0ms';
      } else if (step === 1) {
        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = getArcLength(-0.3, this.props);
        path.style.transitionDuration = '750ms';
      } else {
        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = getArcLength(-1, this.props);
        path.style.transitionDuration = '850ms';
      }

      this.scalePathTimer = setTimeout(function () {
        return _this2.scalePath(path, step + 1);
      }, step ? 750 : 250);
    }
  }, {
    key: 'rotateWrapper',
    value: function rotateWrapper(wrapper) {
      var _this3 = this;

      if (this.props.mode !== 'indeterminate') return;

      _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(0deg)');
      _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '0ms');

      setTimeout(function () {
        _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(1800deg)');
        _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '10s');
        _autoPrefix2.default.set(wrapper.style, 'transitionTimingFunction', 'linear');
      }, 50);

      this.rotateWrapperTimer = setTimeout(function () {
        return _this3.rotateWrapper(wrapper);
      }, 10050);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          innerStyle = _props.innerStyle,
          size = _props.size,
          thickness = _props.thickness,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'innerStyle', 'size', 'thickness']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        _react2.default.createElement(
          'div',
          { ref: 'wrapper', style: prepareStyles((0, _simpleAssign2.default)(styles.wrapper, innerStyle)) },
          _react2.default.createElement(
            'svg',
            {
              viewBox: '0 0 ' + size + ' ' + size,
              style: prepareStyles(styles.svg)
            },
            _react2.default.createElement('circle', {
              ref: 'path',
              style: prepareStyles(styles.path),
              cx: size / 2,
              cy: size / 2,
              r: (size - thickness) / 2,
              fill: 'none',
              strokeWidth: thickness,
              strokeMiterlimit: '20'
            })
          )
        )
      );
    }
  }]);
  return CircularProgress;
}(_react.Component);

CircularProgress.defaultProps = {
  mode: 'indeterminate',
  value: 0,
  min: 0,
  max: 100,
  size: 40,
  thickness: 3.5
};
CircularProgress.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
CircularProgress.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Override the progress's color.
   */
  color: _propTypes2.default.string,
  /**
   * Style for inner wrapper div.
   */
  innerStyle: _propTypes2.default.object,
  /**
   * The max value of progress, only works in determinate mode.
   */
  max: _propTypes2.default.number,
  /**
   * The min value of progress, only works in determinate mode.
   */
  min: _propTypes2.default.number,
  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
  /**
   * The diameter of the progress in pixels.
   */
  size: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Stroke width in pixels.
   */
  thickness: _propTypes2.default.number,
  /**
   * The value of progress, only works in determinate mode.
   */
  value: _propTypes2.default.number
} : {};
exports.default = CircularProgress;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(43);

var _axios = __webpack_require__(378);

var _axios2 = _interopRequireDefault(_axios);

var _host = __webpack_require__(231);

var _Avatar = __webpack_require__(1188);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _List = __webpack_require__(232);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(379);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _face = __webpack_require__(1190);

var _face2 = _interopRequireDefault(_face);

var _fingerprint = __webpack_require__(1191);

var _fingerprint2 = _interopRequireDefault(_fingerprint);

var _attachMoney = __webpack_require__(1192);

var _attachMoney2 = _interopRequireDefault(_attachMoney);

var _Paper = __webpack_require__(114);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MemberDetails = function (_PureComponent) {
    _inherits(MemberDetails, _PureComponent);

    function MemberDetails(props) {
        _classCallCheck(this, MemberDetails);

        var _this = _possibleConstructorReturn(this, (MemberDetails.__proto__ || Object.getPrototypeOf(MemberDetails)).call(this, props));

        _this.state = {
            memberDetails: {}
        };
        return _this;
    }

    _createClass(MemberDetails, [{
        key: 'fetchUser',
        value: function fetchUser(props) {
            var _this2 = this;

            _axios2.default.get(_host.HOST + '/api/members/' + props.selectedMember).then(function (member) {
                if (!member.err) {
                    _this2.setState({ memberDetails: member.data });
                } else {
                    console.log('err fetching member', member.err);
                }
            }).catch(function (err) {
                console.log('err fetching member', err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchUser(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.fetchUser(nextProps);
        }
    }, {
        key: 'fmtPreferredCoin',
        value: function fmtPreferredCoin() {
            if (this.state.memberDetails.preferredCoin) {
                var capFirstL = this.state.memberDetails.preferredCoin[0].toUpperCase();
                var rest = this.state.memberDetails.preferredCoin.slice(1);
                return capFirstL + rest;
            } else {
                return '';
            }
        }
    }, {
        key: 'renderDetails',
        value: function renderDetails() {
            return _react2.default.createElement(
                _List2.default,
                null,
                _react2.default.createElement(
                    _ListItem2.default,
                    { disabled: true,
                        style: { color: 'rgb(255,255,255)' },
                        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_face2.default, { style: { fill: 'rgb(255,255,255)' } }),
                            backgroundColor: 'rgb(0, 218, 179)' }) },
                    _react2.default.createElement(
                        'h4',
                        { className: 'inline' },
                        'Member Name:'
                    ),
                    '\xA0',
                    _react2.default.createElement(
                        'h4',
                        { className: 'inline mint-text' },
                        this.state.memberDetails.name
                    )
                ),
                _react2.default.createElement(
                    _ListItem2.default,
                    { disabled: true,
                        style: { color: 'rgb(255,255,255)' },
                        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_attachMoney2.default, { style: { fill: 'rgb(255,255,255)' } }),
                            backgroundColor: 'rgb(0, 218, 179)' }) },
                    _react2.default.createElement(
                        'h4',
                        { className: 'inline' },
                        'Preferred Coin:'
                    ),
                    '\xA0',
                    _react2.default.createElement(
                        'h4',
                        { className: 'inline mint-text' },
                        this.fmtPreferredCoin()
                    )
                ),
                _react2.default.createElement(
                    _ListItem2.default,
                    { disabled: true,
                        style: { color: 'rgb(255,255,255)' },
                        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_fingerprint2.default, { style: { fill: 'rgb(255,255,255)' } }),
                            backgroundColor: 'rgb(0, 218, 179)' }) },
                    _react2.default.createElement(
                        'h4',
                        { className: 'inline' },
                        'BTC Wallet:'
                    ),
                    '\xA0',
                    _react2.default.createElement(
                        'h4',
                        { className: 'inline mint-text' },
                        this.state.memberDetails.btcWalletAddress
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var style = { margin: 5 };

            return _react2.default.createElement(
                'div',
                { className: 'member-details-container' },
                _react2.default.createElement(
                    _Paper2.default,
                    { zDepth: 3, className: 'member-details-paper' },
                    this.renderDetails()
                )
            );
        }
    }]);

    return MemberDetails;
}(_react.PureComponent);

function mapStateToProps(state) {
    return {
        selectedMember: state.members.selectedMember
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MemberDetails);

/***/ }),

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Avatar = __webpack_require__(1189);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Avatar2.default;

/***/ }),

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(17);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(18);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(14);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var backgroundColor = props.backgroundColor,
      color = props.color,
      size = props.size;
  var avatar = context.muiTheme.avatar;


  var styles = {
    root: {
      color: color || avatar.color,
      backgroundColor: backgroundColor || avatar.backgroundColor,
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size / 2,
      borderRadius: '50%',
      height: size,
      width: size
    },
    icon: {
      color: color || avatar.color,
      width: size * 0.6,
      height: size * 0.6,
      fontSize: size * 0.6,
      margin: size * 0.2
    }
  };

  return styles;
}

var Avatar = function (_Component) {
  (0, _inherits3.default)(Avatar, _Component);

  function Avatar() {
    (0, _classCallCheck3.default)(this, Avatar);
    return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Avatar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          icon = _props.icon,
          src = _props.src,
          style = _props.style,
          className = _props.className,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'icon', 'src', 'style', 'className']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      if (src) {
        return _react2.default.createElement('img', (0, _extends3.default)({
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, other, {
          src: src,
          className: className
        }));
      } else {
        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, {
            style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)),
            className: className
          }),
          icon && _react2.default.cloneElement(icon, {
            color: styles.icon.color,
            style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
          }),
          this.props.children
        );
      }
    }
  }]);
  return Avatar;
}(_react.Component);

Avatar.muiName = 'Avatar';
Avatar.defaultProps = {
  size: 40
};
Avatar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The backgroundColor of the avatar. Does not apply to image avatars.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root `div` or `img` element.
   */
  className: _propTypes2.default.string,
  /**
   * The icon or letter's color.
   */
  color: _propTypes2.default.string,
  /**
   * This is the SvgIcon or FontIcon to be used inside the avatar.
   */
  icon: _propTypes2.default.element,
  /**
   * This is the size of the avatar in pixels.
   */
  size: _propTypes2.default.number,
  /**
   * If passed in, this component will render an img element. Otherwise, a div will be rendered.
   */
  src: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = Avatar;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 1190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(77);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(78);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionFace = function ActionFace(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z' })
  );
};
ActionFace = (0, _pure2.default)(ActionFace);
ActionFace.displayName = 'ActionFace';
ActionFace.muiName = 'SvgIcon';

exports.default = ActionFace;

/***/ }),

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(77);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(78);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionFingerprint = function ActionFingerprint(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z' })
  );
};
ActionFingerprint = (0, _pure2.default)(ActionFingerprint);
ActionFingerprint.displayName = 'ActionFingerprint';
ActionFingerprint.muiName = 'SvgIcon';

exports.default = ActionFingerprint;

/***/ }),

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(77);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(78);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorAttachMoney = function EditorAttachMoney(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' })
  );
};
EditorAttachMoney = (0, _pure2.default)(EditorAttachMoney);
EditorAttachMoney.displayName = 'EditorAttachMoney';
EditorAttachMoney.muiName = 'SvgIcon';

exports.default = EditorAttachMoney;

/***/ })

});