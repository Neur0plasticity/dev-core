"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.warn("\nAfter completing the merger.\nWrite a module that ensures\nonly the absolute minimum of functions are dependended.\nno idling software. noting should take up any space.\n");
console.warn("\n* need to convert all javascript buitlin methods to global\n");
console.warn("\ncore.ts is a one file merge of all the build structs files.\nWhy merge them all together?\ncore.ts mission is to be the leanest, fastet, core development tool\n");
console.warn("\n\n\n*** ORGANIZE THE MODULES TO GROUPED TOGETHER\n\n    //// ????\n    - SANDBOX-JS\n    - code-file-structure\n    //// LANGUAGE CONSTRUCT REVAMP & HARDENING\n    - PARAMS\n    - CAPSULE\n    - CLOSURE\n    - CLONE-ANY\n    - JS-DATATYPE-VALIDATIONS\n    - SPEC\n    - LOOP\n    - FUNCLITE\n    - FUNC\n    - CLAS\n    - CLI-FUNC\n    - CLI-CLAS\n    - GOF4\n\n    //// LANGUAGE CONSTRUCT MUST HAVES\n\n    - INSTRUCTIONS\n    - CONFIG\n    - MODULES\n    - DIM\n    - APPLICATION\n    - UNIFRAME\n\n    //// ALGORITHMIC DATA STRUCTURES\n\n    - LIST\n\n    //// ALGORITHMIC ALGORITHMS\n\n    //// WORKS OUT OF THE BOX\n    - DISTRIBUTED APPLICATION\n    - SERVER\n    - ZENDB\n\n*** DEV-CORE FILE STRUCTURE\n\n\n0)  SHARED MEMORY VARIABLES\n1)  STRUCTURAL PRESENTATIONS\n2)  LANGUAGE CONSTRUCT REVAMP & HARDENING\n3)  LANGUAGE CONSTRUCT MUST HAVES\n4)  ALGORITHMIC DATA STRUCTURES\n5)  ALGORITHMIC ALGORITHMS\n6)  WORKS OUT THE BOX\n\n\n\n\n\nCHECKLIST: merging all code into oe file checklist\n\nSTATUSES:   [INPROGRESS, HELP, COMPLET]\n\n___NAME____________________________________STATUS__________NOTES____\nAPPLICATION\nauditor\nbootstrap\ncapsule                                 INPROGRESS\nclaS\ncli-claS\ncli-funC\nclone-any                               INPROGRESS\nclosure                                 INPROGRESS\ncode-file-structure\nCodebrarian-namespace\nconfig\nCRUDS-JS\nDependency-Injection-Management\ndistributed-application\nfunC                                    INPROGRESS\nfunClite                                INPROGRESS\nGOF4\ninstructions\njs-builtins\njs-datatype-validations                 FINISHED\nJSHackbot\nList\nLOOP                                    INPROGRESS\nmemory-scoping\nmodules\nPARAMS                                  INPROGRESS\npublic-private-protect\nQuantify\nsandbox-js\nserver\nSPEC                                    SKIPPED\nsymbolic-programming\nuniframe\nZenDB\n****************************************************************************************\n****************************************************************************************\n****************************************************************************************\n****************************************************************************************\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*0)  SHARED MEMORY VARIABLES

    *** evaluate modules one by one, do not leave any
    *** anything global non related to module gets bumped to SHARED MEMORY VARIABLES

    *** sandbox-js must be the first to execute

*/
/*export*/ var SANDBOX = (function SANDBOX() {
    var instances = 0;
    if (instances++ !== 0) {
        THROWE();
    }
    /*export*/ var clone = Object.freeze(Object.assign(function (v) {
        var tP = typeof v;
        if (tP === 'boolean')
            return clone[tP](v);
        if (tP === 'number')
            return clone[tP](v);
        if (tP === 'string')
            return clone[tP](v);
        if (Array.isArray(tP))
            return clone['array'](v);
        if (tP === 'function')
            return clone[tP](v);
        if (tP === 'object')
            return clone[tP];
        return ['cloning error, type v is not builtin datatype ' + v];
    }, {
        boolean: function (v) { return !!v; },
        number: function (v) { return v + 0; },
        string: function (v) { return v.slice(); },
        array: function (v) { return v.slice(); },
        object: function (v) { return Object.assign({}, v); },
        function: function (v) { var temp = v; return temp; /*new Function('return ' + v.toString())();*/ }
    }));
    // deep freeze require
    /** ALERT
     *
     * regex parsers scanning for requires and relocating to a central dependency management may be the best option.
     * options freezing require properly
     *
     * option 1)
     *
     *  require("<directory path>/<file>.<ext>")
     *  Object.freeze(require.cache[<directory path>/<file>.<ext>].exports)
     *
     * option 2)
     *
     *  *** migrate all requires to one page
     *  *** declare with const
     *  *** distributed dependency injection
    */
    // freeze builtins
    console.warn(" \n        !!! BUG !!!\n\n        TopLevel Object properties are frozen,\n\n        buttttt,\n\n        there properties properties ...\n\n        are not frozen.\n    ");
    Object.freeze(eval); // Object.freeze(jsB["eval/*"]*/)
    Object.freeze(isFinite); // Object.freeze(jsB["isFinite/*"]*/)
    Object.freeze(isNaN); // Object.freeze(jsB["isNaN/*"]*/)
    Object.freeze(parseFloat); // Object.freeze(jsB["parseFloat/*"]*/)
    Object.freeze(parseInt); // Object.freeze(jsB["parseInt/*"]*/)
    Object.freeze(decodeURI); // Object.freeze(jsB["decodeURI/*"]*/)
    Object.freeze(decodeURIComponent); // Object.freeze(jsB["decodeURIComponent/*"]*/)
    Object.freeze(encodeURI); // Object.freeze(jsB["encodeURI/*"]*/)
    Object.freeze(encodeURIComponent); // Object.freeze(jsB["encodeURIComponent/*"]*/)
    Object.freeze(escape); // Object.freeze(jsB["escape/*"]*/)
    Object.freeze(unescape); // Object.freeze(jsB["unescape/*"]*/)
    Object.freeze(Object); // Object.freeze(jsB["Object/*"]*/)
    Object.freeze(Function); // Object.freeze(jsB["Function/*"]*/)
    Object.freeze(Boolean); // Object.freeze(jsB["Boolean/*"]*/)
    Object.freeze(Symbol); // Object.freeze(jsB["Symbol/*"]*/)
    Object.freeze(Error); // Object.freeze(jsB["Error/*"]*/)
    Object.freeze(EvalError); // Object.freeze(jsB["EvalError/*"]*/)
    Object.freeze(RangeError); // Object.freeze(jsB["RangeError/*"]*/)
    Object.freeze(ReferenceError); // Object.freeze(jsB["ReferenceError/*"]*/)
    Object.freeze(SyntaxError); // Object.freeze(jsB["SyntaxError/*"]*/)
    Object.freeze(TypeError); // Object.freeze(jsB["TypeError/*"]*/)
    Object.freeze(URIError); // Object.freeze(jsB["URIError/*"]*/)
    Object.freeze(Number); // Object.freeze(jsB["Number/*"]*/)
    Object.freeze(BigInt); // Object.freeze(jsB["BigInt/*"]*/)
    Object.freeze(Math); // Object.freeze(jsB["Math/*"]*/)
    Object.freeze(Date); // Object.freeze(jsB["Date/*"]*/)
    Object.freeze(String); // Object.freeze(jsB["String/*"]*/)
    Object.freeze(RegExp); // Object.freeze(jsB["RegExp/*"]*/)
    Object.freeze(Array); // Object.freeze(jsB["Array/*"]*/)
    Object.freeze(Int8Array); // Object.freeze(jsB["Int8Array/*"]*/)
    Object.freeze(Uint8Array); // Object.freeze(jsB["Uint8Array/*"]*/)
    Object.freeze(Uint8ClampedArray); // Object.freeze(jsB["Uint8ClampedArray/*"]*/)
    Object.freeze(Int16Array); // Object.freeze(jsB["Int16Array/*"]*/)
    Object.freeze(Uint16Array); // Object.freeze(jsB["Uint16Array/*"]*/)
    Object.freeze(Int32Array); // Object.freeze(jsB["Int32Array/*"]*/)
    Object.freeze(Uint32Array); // Object.freeze(jsB["Uint32Array/*"]*/)
    Object.freeze(Float32Array); // Object.freeze(jsB["Float32Array/*"]*/)
    Object.freeze(Float64Array); // Object.freeze(jsB["Float64Array/*"]*/)
    Object.freeze(BigInt64Array); // Object.freeze(jsB["BigInt64Array/*"]*/)
    Object.freeze(BigUint64Array); // Object.freeze(jsB["BigUint64Array/*"]*/)
    Object.freeze(Map); // Object.freeze(jsB["Map/*"]*/)
    Object.freeze(Set); // Object.freeze(jsB["Set/*"]*/)
    Object.freeze(WeakMap); // Object.freeze(jsB["WeakMap/*"]*/)
    Object.freeze(WeakSet); // Object.freeze(jsB["WeakSet/*"]*/)
    Object.freeze(ArrayBuffer); // Object.freeze(jsB["ArrayBuffer/*"]*/)
    Object.freeze(SharedArrayBuffer); // Object.freeze(jsB["SharedArrayBuffer/*"]*/)
    Object.freeze(Atomics); // Object.freeze(jsB["Atomics/*"]*/)
    Object.freeze(DataView); // Object.freeze(jsB["DataView/*"]*/)
    Object.freeze(JSON); // Object.freeze(jsB["JSON/*"]*/)
    Object.freeze(Promise); // Object.freeze(jsB["Promise/*"]*/)
    Object.freeze(Reflect); // Object.freeze(jsB["Reflect/*"]*/)
    Object.freeze(Proxy); // Object.freeze(jsB["Proxy/*"]*/)
    Object.freeze(Intl); // Object.freeze(jsB["Intl/*"]*/)
    Object.freeze(WebAssembly); // Object.freeze(jsB["WebAssembly/*"]*/)
    // let jsB = require('js-builtins')
    var _eval = Object.freeze(clone(/*jsB"*/ eval /*"]*/));
    var _isFinite = Object.freeze(clone(/*jsB"*/ isFinite /*"]*/));
    var _isNaN = Object.freeze(clone(/*jsB"*/ isNaN /*"]*/));
    var _parseFloat = Object.freeze(clone(/*jsB"*/ parseFloat /*"]*/));
    var _parseInt = Object.freeze(clone(/*jsB"*/ parseInt /*"]*/));
    var _decodeURI = Object.freeze(clone(/*jsB"*/ decodeURI /*"]*/));
    var _decodeURIComponent = Object.freeze(clone(/*jsB"*/ decodeURIComponent /*"]*/));
    var _encodeURI = Object.freeze(clone(/*jsB"*/ encodeURI /*"]*/));
    var _encodeURIComponent = Object.freeze(clone(/*jsB"*/ encodeURIComponent /*"]*/));
    var _escape = Object.freeze(clone(/*jsB"*/ escape /*"]*/));
    var _unescape = Object.freeze(clone(/*jsB"*/ unescape /*"]*/));
    var _Object = Object.freeze(clone(/*jsB"*/ Object /*"]*/));
    var _Function = Object.freeze(clone(/*jsB"*/ Function /*"]*/));
    var _Boolean = Object.freeze(clone(/*jsB"*/ Boolean /*"]*/));
    var _Symbol = Object.freeze(clone(/*jsB"*/ Symbol /*"]*/));
    var _Error = Object.freeze(clone(/*jsB"*/ Error /*"]*/));
    var _EvalError = Object.freeze(clone(/*jsB"*/ EvalError /*"]*/));
    var _RangeError = Object.freeze(clone(/*jsB"*/ RangeError /*"]*/));
    var _ReferenceError = Object.freeze(clone(/*jsB"*/ ReferenceError /*"]*/));
    var _SyntaxError = Object.freeze(clone(/*jsB"*/ SyntaxError /*"]*/));
    var _TypeError = Object.freeze(clone(/*jsB"*/ TypeError /*"]*/));
    var _URIError = Object.freeze(clone(/*jsB"*/ URIError /*"]*/));
    var _Number = Object.freeze(clone(/*jsB"*/ Number /*"]*/));
    var _BigInt = Object.freeze(clone(/*jsB"*/ BigInt /*"]*/));
    var _Math = Object.freeze(clone(/*jsB"*/ Math /*"]*/));
    var _Date = Object.freeze(clone(/*jsB"*/ Date /*"]*/));
    var _String = Object.freeze(clone(/*jsB"*/ String /*"]*/));
    var _RegExp = Object.freeze(clone(/*jsB"*/ RegExp /*"]*/));
    var _Array = Object.freeze(clone(/*jsB"*/ Array /*"]*/));
    var _Int8Array = Object.freeze(clone(/*jsB"*/ Int8Array /*"]*/));
    var _Uint8Array = Object.freeze(clone(/*jsB"*/ Uint8Array /*"]*/));
    var _Uint8ClampedArray = Object.freeze(clone(/*jsB"*/ Uint8ClampedArray /*"]*/));
    var _Int16Array = Object.freeze(clone(/*jsB"*/ Int16Array /*"]*/));
    var _Uint16Array = Object.freeze(clone(/*jsB"*/ Uint16Array /*"]*/));
    var _Int32Array = Object.freeze(clone(/*jsB"*/ Int32Array /*"]*/));
    var _Uint32Array = Object.freeze(clone(/*jsB"*/ Uint32Array /*"]*/));
    var _Float32Array = Object.freeze(clone(/*jsB"*/ Float32Array /*"]*/));
    var _Float64Array = Object.freeze(clone(/*jsB"*/ Float64Array /*/*"]*/));
    var _BigInt64Array = Object.freeze(clone(/*jsB"*/ BigInt64Array /*/*"]*/));
    var _BigUint64Array = Object.freeze(clone(/*jsB"*/ BigUint64Array /*/*"]*/));
    var _Map = Object.freeze(clone(/*jsB"*/ Map /*/*"]*/));
    var _Set = Object.freeze(clone(/*jsB"*/ Set /*/*"]*/));
    var _WeakMap = Object.freeze(clone(/*jsB"*/ WeakMap /*/*"]*/));
    var _WeakSet = Object.freeze(clone(/*jsB"*/ WeakSet /*/*"]*/));
    var _ArrayBuffer = Object.freeze(clone(/*jsB"*/ ArrayBuffer /*/*"]*/));
    var _SharedArrayBuffer = Object.freeze(clone(/*jsB"*/ SharedArrayBuffer /*/*"]*/));
    var _Atomics = Object.freeze(clone(/*jsB"*/ Atomics /*/*"]*/));
    var _DataView = Object.freeze(clone(/*jsB"*/ DataView /*/*"]*/));
    var _JSON = Object.freeze(clone(/*jsB"*/ JSON /*/*"]*/));
    var _Promise = Object.freeze(clone(/*jsB"*/ Promise /*/*"]*/));
    var _Reflect = Object.freeze(clone(/*jsB"*/ Reflect /*/*"]*/));
    var _Proxy = Object.freeze(clone(/*jsB"*/ Proxy /*/*"]*/));
    var _Intl = Object.freeze(clone(/*jsB"*/ Intl /*/*"]*/));
    var _WebAssembly = Object.freeze(clone(/*jsB"*/ WebAssembly /*/*"]*/));
    // clone = {}; // delete jsB;
    // jsb = {};   // delete clone;
    // return 
    return Object.freeze({
        /* const */ _eval: _eval,
        /* const */ _isFinite: _isFinite,
        /* const */ _isNaN: _isNaN,
        /* const */ _parseFloat: _parseFloat,
        /* const */ _parseInt: _parseInt,
        /* const */ _decodeURI: _decodeURI,
        /* const */ _decodeURIComponent: _decodeURIComponent,
        /* const */ _encodeURI: _encodeURI,
        /* const */ _encodeURIComponent: _encodeURIComponent,
        /* const */ _escape: _escape,
        /* const */ _unescape: _unescape,
        /* const */ _Object: _Object,
        /* const */ _Function: _Function,
        /* const */ _Boolean: _Boolean,
        /* const */ _Symbol: _Symbol,
        /* const */ _Error: _Error,
        /* const */ _EvalError: _EvalError,
        /* const */ _RangeError: _RangeError,
        /* const */ _ReferenceError: _ReferenceError,
        /* const */ _SyntaxError: _SyntaxError,
        /* const */ _TypeError: _TypeError,
        /* const */ _URIError: _URIError,
        /* const */ _Number: _Number,
        /* const */ _BigInt: _BigInt,
        /* const */ _Math: _Math,
        /* const */ _Date: _Date,
        /* const */ _String: _String,
        /* const */ _RegExp: _RegExp,
        /* const */ _Array: _Array,
        /* const */ _Int8Array: _Int8Array,
        /* const */ _Uint8Array: _Uint8Array,
        /* const */ _Uint8ClampedArray: _Uint8ClampedArray,
        /* const */ _Int16Array: _Int16Array,
        /* const */ _Uint16Array: _Uint16Array,
        /* const */ _Int32Array: _Int32Array,
        /* const */ _Uint32Array: _Uint32Array,
        /* const */ _Float32Array: _Float32Array,
        /* const */ _Float64Array: _Float64Array,
        /* const */ _BigInt64Array: _BigInt64Array,
        /* const */ _BigUint64Array: _BigUint64Array,
        /* const */ _Map: _Map,
        /* const */ _Set: _Set,
        /* const */ _WeakMap: _WeakMap,
        /* const */ _WeakSet: _WeakSet,
        /* const */ _ArrayBuffer: _ArrayBuffer,
        /* const */ _SharedArrayBuffer: _SharedArrayBuffer,
        /* const */ _Atomics: _Atomics,
        /* const */ _DataView: _DataView,
        /* const */ _JSON: _JSON,
        /* const */ _Promise: _Promise,
        /* const */ _Reflect: _Reflect,
        /* const */ _Proxy: _Proxy,
        /* const */ _Intl: _Intl,
        /* const */ _WebAssembly: _WebAssembly,
    });
})();
var S = SANDBOX;
var THROWE = function () { THROWE(); };
var datatypes = ["boolean", "string", "number", "object", "array", "symbol", "function"];
var _lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];
var _upperCase = _lowerCase.map(function (v) { return v.toUpperCase(); });
var _symbols = ["!@#$%^&*()_+{}[]-=|;:'\"\\?,.<>`~"];
var isSafe = function (v) { return S._Number.isSafeInteger(v); };
var isTrue = function (v) { return v === true; };
var isFalse = function (v) { return v === false; };
var isInfinity = function (v) { return v === Infinity; };
var isFinite = function (v) { return S._isFinite(v); };
var isMaxValue = function (v) { return v === Number.MAX_VALUE; };
var isMinValue = function (v) { return v === Number.MAX_VALUE; };
var isMaxSafeValue = function (v) { return v === Number.MAX_SAFE_INTEGER; };
var isMinSafeValue = function (v) { return v === Number.MIN_SAFE_INTEGER; };
var isNaN = function (v) { return S._isNaN(v); };
var isPositive = function (v) { return 0 < v; };
var isNegative = function (v) { return 0 > v; };
var isZero = function (v) { return v === 0; };
var isFloat = function (v) { return S._String(v).includes("."); };
var isInteger = function (v) { return !S._String(v).includes("."); };
var isAlpha = function (v) { return __spreadArrays(_lowerCase, _upperCase).includes(v); };
var isLowerCase = function (v) { return _lowerCase.includes(v); };
var isUpperCase = function (v) { return _upperCase.includes(v); };
var isSymbol = function (v) { return _symbols.includes(v); };
var isThis = function (v) { return v.toString().includes("function "); };
var isAnon = function (v) { return v.toString().includes("function("); };
var isLambda = function (v) { return v.toString().includes("=>"); };
var isEmpty = function (v) {
    return {
        "str": function (v) { return v.length === 0; }, "obj": function (v) { return S._Object.keys(v).length === 0; },
        "arr": function (v) { return v.length === 0; }, "fnc": function (v) { return v.toString(); }
    }[(S._Array.isArray(v) && "arr") || (typeof v)](v);
};
var isNotEmpty = function (v) {
    return {
        "str": function (v) { return v.length !== 0; }, "obj": function (v) { return S._Object.keys(v).length !== 0; },
        "arr": function (v) { return v.length !== 0; }, "fnc": function (v) { return v.toString(); }
    }[(S._Array.isArray(v) && "arr") || (typeof v)](v);
};
var getParams = function (func) {
    var start = func.toString().indexOf("(");
    var end = func.toString().indexOf(")");
    return func.toString().slice(start + 1, end).split(",");
};
var assertIndependence = function (f) { return name(f.toString()).is(allSamCase) && name(f.toString()).is(allAlpha); };
var assertCompound = function (f) { return name(f.toString()).is(allTwoCase) && name(f.toString()).is(allAlpha); };
var assertComplex = function (f) { return name(f.toString()).is(allMulCase) && name(f.toString()).is(allAlpha); };
// const allSamCase         = e => {let _ = e.slice().shift(); e = (isLowerCase(_) && isLowerCase) || (isUpperCase(_) && isUpperCase);  for (let k in e) { true === _(e) || THROWE(); }};
// const allTwoCase         = e => {let a,b,c;   for (let k in e){ (isLowerCase(_) && a=true) || (isUpperCase(_) && b=true) || c=true; }; return (a&&b)^c};
// const allMulCase         = e => {let a = false, b = false, c = false;for (let k in e) { (isLowerCase(k)&&a=true) || (isUpperCase(k)&&b=true) || (isSymbol(k)&&c=true)};return a&&b&&c;};
var allAlpha = function (e) { e.forEach(isAlpha); return true; };
var isAlpha = function (e) { return e >= "a" && e <= "Z"; };
var isSymbol = function (e) { return "`~!@#$%^&*()_+-=[]{};':\",.<>/?".includes(e); };
var isLowerCase = function (e) { return e >= "a" && e <= "z"; };
var isUpperCase = function (e) { return function (e) { return "A" && e <= "Z"; }; };
var notEmpty = function (v) { return (isArray(v) && throwE("must not be empty", (v.length > 0))
    || (typeof v === "object" && throwE("must not be empty", (S._Object.keys(v).length > 0)))
    || (typeof v === "string" && throwE("must not be empty", (v.length > 0)))
    || (false)); };
var hasOwnProperty = function (obj, prop) { return throwE("must have prop " + prop, obj.hasOwnProperty(prop)); };
var standardString = function (val) { typeof val === "string" || throwE("string required"); val.length > 0 || throwE("len must be gt 0"); };
var standardStringArray = function (val) { Array.isArray(val) || throwE("array required"); val.forEach(standardString); };
var arrayIncludes = function (arr) { return function (val) { arr.includes(val) || throwE("unexpected value"); }; };
var period = function (e) {
    if (e[0] === ".") {
        if (e[1] === ".")
            e = "../" + e;
        else if (e[1] === "/")
            e.shift(), e.shift(), e = "../" + e;
        else {
            THROWE();
        }
    }
    return e;
};
var loopObject = function (obj, cb) { for (var k in obj)
    cb(obj, k); };
var enforce_object_datas = function (v) { isObject(v); notEmpty(v); S._Object.keys(v).forEach(isNotFunction); };
var enforce_object_methods = function (v) { isObject(v); notEmpty(v); S._Object.keys(v).forEach(isFunction); };
var enforce_object_propsss = function (v) { isObject(v); notEmpty(v); S._Object.keys(v).forEach(isNotFunction); };
var enforce_object_nulls = function (v) { isObject(v); isNull(v); };
var enforce_settings = function (v) { isObject(v); notEmpty(v); S._Object.keys(v).forEach(enforceSetting); };
var enforce_setting = function (v) { };
var removeDuplicateUsingSet = function (arr) {
    var unique_array = S._Array.from(new Set(arr));
    return unique_array;
};
// const _bol = [type("bol"),{isTrue,isFalse}];
// const _num = [type("num"),{isSafe,isInfinity,isFinite,isMaxValue,isMinValue,isZero,isNaN,isPositive,isNegative,isInteger,isFloat}];
// const _str = [type("str"),{isEmpty,isNotEmpty,isAlpha,isSymbol,isLowerCase,isUpperCase}];
// const _fnc = [type("fnc"),{isEmpty,isNotEmpty,isThis,isLambda,isAnon}];
// const _obj = [type("obj"),{isEmpty,isNotEmpty}];
// const _arr = [type("arr"),{isEmpty,isNotEmpty}];
// const _sym = [type("sym"),{isEmpty,isNotEmpty}];
// const _cla = [type("cla"),{isEmpty}];
// const _und = [type("und")];
// const _nul = [type("nul")];
var is = function (v) { };
// const name               = e => {for (let k in e) {}return {};};
var ARRPROPSALTERED = function (v) { return Object.assign([], v).length !== 0; };
var consT = function (script) {
    isString(script);
};
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*2)  LANGUAGE CONSTRUCT REVAMP & HARDENING




*/
/*export*/ var params = function (paramsOBJ) {
    // no duplicates allowed --> objects don't automatically overwrite duplications
    if (!paramsOBJ) {
        THROWE();
    }
    for (var k in paramsOBJ) {
        eval("paramsOBJ[k] = function(" + k + "){ return " + paramsOBJ[k].replace("$p", k) + "; }");
    }
    return paramsOBJ;
};
//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ var capsule = function (cb, props) {
    for (var k in props) {
        !restrictedProps.includes(k) || THROWE();
    }
    return S._Object.freeze(S._Object.assign(cb, props));
};
/*export*/ var restrictedProps = [
    "__defineGetter__",
    "__defineSetter__",
    "__lookupGetter__",
    "__lookupSetter__",
    "__proto__",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "valueOf",
    "apply",
    "bind",
    "call",
    "constructor",
    "toString",
    "arguments",
    "caller",
    "length",
    "name",
    "prototype"
];
//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ var closure = function (cb, variables) {
    /** Mock Representation ... real version needs to parse cb and variables,
     *
     * then replace real values in placheholders.
     *
     *
    */
    var v = variables;
    var f = cb.bind({
        sd: v.sd,
        pd: v.pd,
        sm: v.sm,
        pm: v.pm
    });
    return f;
};
//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ var clone = capsule(function (v) {
    var tP = typeof v;
    if (tP === 'boolean')
        return clone[tP](v);
    if (tP === 'number')
        return clone[tP](v);
    if (tP === 'string')
        return clone[tP](v);
    if (Array.isArray(tP))
        return clone['array'](v);
    if (tP === 'function')
        return clone[tP](v);
    if (tP === 'object')
        return clone[tP];
    return ['cloning error, type v is not builtin datatype ' + v];
}, {
    boolean: function (v) { return !!v; },
    number: function (v) { return v + 0; },
    string: function (v) { return v.slice(); },
    array: function (v) { return v.slice(); },
    object: function (v) { return Object.assign({}, v); },
    function: function (v) { var temp = v; return temp; /*new Function('return ' + v.toString())();*/ }
});
//////////////////////////////////////////////////////////////////////////////////////////////////
var Vobj0 = function (v) {
    if (S._Array.isArray(v) || typeof v !== "object")
        return false;
    var k = S._Object.keys(v);
    if (k.len === 0)
        return false;
    for (var e in k) {
        if (FORBIDDEN_OBJECT_PROPS.includes(k[e]))
            return false;
    }
    return true;
};
var Vobj1 = function (v) {
    if (S._Array.isArray(v) || typeof v !== "object")
        return false;
    var k = S._Object.keys(v);
    if (k.len !== 0)
        return false;
    for (var e in k) {
        if (FORBIDDEN_OBJECT_PROPS.includes(k[e]))
            return false;
    }
    return true;
};
var Vobj2 = function (v) {
    if (S._Array.isArray(v) || typeof v !== "object")
        return false;
    var k = S._Object.keys(v);
    for (var e in k) {
        if (FORBIDDEN_OBJECT_PROPS.includes(k[e]))
            return false;
    }
    return true;
};
var Vnum0 = function (v) {
    if (S._Number.isNaN(v))
        return false;
    if (typeof v !== "number")
        return false;
    if (!S._Number.isSafeInteger(v))
        return false;
    if (!S._Number.isFinite(v))
        return false;
    /*passed*/ return true;
};
var Vnum1 = function (v) {
    if (S._Number.isNaN(v))
        return false;
    if (typeof v !== "number")
        return false;
    if (!S._Number.isFinite(v))
        return false;
    /*passed*/ return true;
};
var Vnum2 = function (v) {
    if (S._Number.isNaN(v))
        return false;
    if (typeof v !== "number")
        return false;
    /*passed*/ return true;
};
var Vstr0 = function (v) {
    if (typeof v !== "string")
        return false;
    if (v.length === 0)
        return false;
    /*passed*/ return true;
};
var Vstr1 = function (v) {
    if (typeof v !== "string")
        return false;
    if (v.length !== 0)
        return false;
    /*passed*/ return true;
};
var Vstr2 = function (v) {
    if (typeof v !== "string")
        return false;
    /*passed*/ return true;
};
var Vfnc0 = function (v) {
    if (typeof v !== "function")
        return false;
    if (!isFunction(v))
        return false;
    if (isEmpty(v))
        return false;
    /*passed*/ return true;
};
var Vfnc1 = function (v) {
    if (typeof v !== "function")
        return false;
    if (!isFunction(v))
        return false;
    if (isNotEmpty(v))
        return false;
    /*passed*/ return true;
};
var Vfnc2 = function (v) {
    if (typeof v !== "function")
        return false;
    if (!isFunction(v))
        return false;
    /*passed*/ return true;
};
var Vlmd0 = function (v) {
    if (typeof v !== "function")
        return false;
    if (!isLambda(v))
        return false;
    if (isNotEmpty(v))
        return false;
    /*passed*/ return true;
};
var Vlmd1 = function (v) {
    if (typeof v !== "function")
        return false;
    if (!isLambda(v))
        return false;
    if (isEmpty(v))
        return false;
    /*passed*/ return true;
};
var Vlmd2 = function (v) {
    if (typeof v !== "function")
        return false;
    if (!isLambda(v))
        return false;
    /*passed*/ return true;
};
var Vsym0 = function (v) {
    if (typeof v !== "symbol")
        return false;
    THROWE("UNFINISHED");
    /*passed*/ return true;
};
var Vsym1 = function (v) {
    if (typeof v !== "symbol")
        return false;
    THROWE("UNFINISHED");
    /*passed*/ return true;
};
var Vcls0 = function (v) {
    if (typeof v !== "function")
        return false;
    if (!newable(v))
        return false;
    if (isEmpty(v))
        return false;
    if (!isClas(v))
        return false;
    /*passed*/ return true;
};
var Vcls1 = function (v) {
    if (typeof v !== "function")
        return false;
    if (!newable(v))
        return false;
    if (!isEmpty(v))
        return false;
    if (!isClas(v))
        return false;
    /*passed*/ return true;
};
var Varr0 = function (v) {
    /**
     * surprisingly the length can be messed with
     *
     * *** all the array properties can be messed with
    */
    if (!S._Array.isArray(v))
        return false;
    if (isEmpty(v))
        return false;
    if (ARRPROPSALTERED(v))
        return false;
    /*passed*/ return true;
};
var Varr1 = function (v) {
    if (!S._Array.isArray(v))
        return false;
    if (!isEmpty(v))
        return false;
    if (ARRPROPSALTERED(v))
        return false;
    /*passed*/ return true;
};
var Varr2 = function (v) {
    if (!S._Array.isArray(v))
        return false;
    if (ARRPROPSALTERED(v))
        return false;
    /*passed*/ return true;
};
var Vund0 = function (v) {
    if (v === undefined)
        return true;
    else
        return false;
};
var Vund1 = function (v) {
    if (v == undefined)
        return true;
    else
        return false;
};
var Vnul0 = function (v) {
    if (v === null)
        return true;
    else
        return false;
};
var Vnul1 = function (v) {
    if (v == null)
        return true;
    else
        return false;
};
var Vbol0 = function (v) {
    if (typeof v === "boolean")
        return true;
    else
        return false;
};
/*export*/ var DType = capsule(function () {
    THROWE("NOTFINISHED");
}, {
    bol: [Vbol0],
    num: [Vnum0, Vnum1, Vnum2],
    str: [Vstr0, Vstr1, Vstr2],
    obj: [Vobj0, Vobj1, Vobj2],
    fnc: [Vfnc0, Vfnc1, Vfnc2],
    cla: [Vcls0, Vcls1],
    sym: [Vsym0, Vsym1],
    arr: [Varr0, Varr1, Varr2],
    und: [Vund0, Vund1],
    nul: [Vnul0, Vnul1]
});
//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ var LOOP = {};
var Loop_for = function () { }; // for loop
var Loop_forever = function () { }; // no explanation rqd
var Loop_while = function () { }; // while loop
var Loop_break = function () { }; // stops loop
var Loop_continue = function () { }; // skips loop iteration
var Loop_each = function () { }; // forEach iteration
var Loop_deep = function () { }; // loops everything loopable
var Loop_deepNoRecursion = function () { }; // stacks all recursions into one list
var Loop_cycle = function () { }; // loop in circles
var Loop_filter = function () { }; // returns conditions matched
var Loop_checklist = function () { }; // ensures all info meets passes conditions
var Loop_interval = function () { }; // loop in time ms increments
var Loop_when = function () { }; // mem-value equals
var Loop_before = function () { }; // 
var Loop_after = function () { }; // 
var Loop_noNest = function () { }; // 
var Loop_split = function () { }; //
var Loop_merge = function () { }; //
var Loop_skip = function () { }; // iterator fluxor
// vs
var Loop_pingpong = function (v, cbs) { }; // next exe memory swaping // instead of conditionals drags
var ENTER = function (v) { return (typeof v === "string" || typeof v === "object" || Array.isArray(v)); };
var filter = function (v, hit, miss, conditions) {
    if (conditions(e))
        return hit.push(v);
    else
        return miss.push(v);
};
var checklist = function (v) { for (var i = 0; i ^ v.length; i++) {
    if (v[i] !== true)
        return false;
} return true; };
var interval = function (ms, cb) { return (setInterval(cb, ms)); };
var forever = function (cb) { while (true) {
    cb();
} };
var cycle = function () { };
var pS = {};
////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// INTERNAL CODE
////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ var funCLite = function (paramsOBJ) {
    return {
        funClite: func0,
        paramsOBJ: (pS = params(paramsOBJ))
    };
};
var func0 = function (func0props) {
    return capsule(function () {
        funC0validate(func0props.block, func0props.validate(arguments));
        return func0props.block.apply(func0props, arguments);
    }, func0props);
};
var funC0validate = function (funCBlock, funCvalidate) {
    if (typeof funCBlock !== "function") {
        THROWE();
    }
    if (typeof funCvalidate !== "function") {
        THROWE();
    }
    var _params = getParams(funCBlock);
    return function () {
        return _params.every(function (e, i) {
            return pS[e](arguments[i]);
        }) && funCvalidate(arguments);
    };
};
//////////////////////////////////////////////////////////////////////////////////////////////////
var gConfig = {};
var instances = {};
var configs = {};
var funcs = {};
var intF = funCinterface;
var itf_keys = Object.keys(intF);
var incConfig = function (config, name) {
    name = name || THROWE();
    configs[name] = config;
};
var inheritConfig = function (config_inherit, config_inheritor) {
    for (var k in config_inherit)
        !config_inheritor.hasOwnProperty(k) && (config_inheritor[k] = config_inherit[k]);
};
var confiGmain = function (config) {
    allPropsRequired: for (var k in itf_keys) {
        k = itf_keys[k];
        // console.log(k, config[k]);
        if (!config.hasOwnProperty(k)) {
            THROWE(k);
        }
    }
    allPropsValidated: for (var k in itf_keys) {
        k = itf_keys[k];
        // console.log(k, config[k]);
        intF[k](config[k]);
    }
};
/*export*/ var parseFunction = (function (func) {
    // looking for variables references.
    // does not allow this references
    // if it finds duplicate variable references it reports it's findings.
    // console.warn("parse progam unprogrammed");
});
/*export*/ var parser = function (functioN) {
    /**
     * - extracts information from regular code into funC template
     * - possibly detects errors
    */
    return function () { return ({
        validate: function () { return ({}); },
        block: function () { return ({}); }
    }); };
};
({
    hasName: function () { return ; },
    hasDescription: function () { return ; },
    hasAuthor: function () { return ; },
    hasNotes: function () { return f.toString().includes("//"); },
    hasAsync: function () { return f.toString().indexOf("async") < 3; },
    hasThis: function (f) { return f.toString().indexOf("function") < 2; },
    hasCapsule: function (f) { return f.toString().slice(0, 1) === "("; },
    hasInputType: function () { return ; },
    hasOutputType: function () { return ; },
    hasInputBehavior: function () { return ; },
    hasOutputBehavior: function () { return ; },
    hasOnError: function () { return f.toString().includes("throw"); },
    hasValidations: function () { return ; } /**memntioned 2x or more */,
    hasBlock: function () { return ; } /**mentioned once */,
    hasSpec: function () { return ; } /**recognized lib or console.assert */,
});
var fakeIfNull = function (obj, prop, val) {
    if (!obj.hasOwnProperty(prop)) {
        obj[prop] = val;
    }
};
var obj = {};
var d = ["arguments", "console", "return", "callback", "onError/onSuccess", "onTrue/onFalse", "throw"];
["name", "description", "author"].forEach(function (e) { obj[e] = standardString; });
["notes", "params"].forEach(function (e) { obj[e] = standardStringArray; });
["isStrict", "isAsync", "isThis", "isCapsule"].forEach(function (e) { obj[e] = standardBoolean; });
["inputType", "outputType"].forEach(function (e) { obj[e] = arrayIncludes(datatypes); });
["inputBehavior"].forEach(function (e) { obj[e] = arrayIncludes([d[0], d[1]]); });
["outputBehavior"].forEach(function (e) { obj[e] = arrayIncludes([d[1], d[2], d[3], d[4], d[5]]); });
["onError"].forEach(function (e) { obj[e] = arrayIncludes([d[6]]); });
["validations", "block", "spec"].forEach(function (e) { obj[e] = vFunction; });
/*export*/ var funCinterface = obj;
var fakeIfNull = Object.assign(function () { }, {
    "namE": function (obj) { fakeIfNull(obj, 'name', "fake name to pass test"); },
    "description": function (obj) { fakeIfNull(obj, 'description', "fake description to pass the test"); },
    "author": function (obj) { fakeIfNull(obj, 'author', "fake author"); },
    "notes": function (obj) { fakeIfNull(obj, 'notes', ["fake notes to pass the test"]); },
    "validations": function (obj) { fakeIfNull(obj, 'validations', function () { }); },
    "block": function (obj) { fakeIfNull(obj, 'block', function () { }); },
    "spec": function (obj) { fakeIfNull(obj, 'spec', function () { }); }
});
var loopInterface = function (config) { S._Object.keys(fakeIfNull).forEach(function (e) { fakeIfNull[e](config); }); };
var assignInstance = function (config, name) { return instances[name] = config; };
var confiGglobal = function (config) {
    loopInterface(config);
    confiG(config);
    gConfig = config;
    configs["global"] = gConfig;
    return pm;
};
var confiGinstance = function (name, config) {
    if (!name) {
        THROWE();
    }
    if (name && config) {
        if (instances[name]) {
            THROWE("no duplicates allowed");
        }
        gConfig = S._Object.assign({}, gConfig);
        inheritConfig(gConfig, config);
        loopInterface(config);
        confiG(config);
        assignInstance(config, name);
        incConfig(config, name);
    }
    else if (name) {
        assignInstance(config, name) || (function () { THROWE(); })();
    }
    else {
        THROWE();
        s;
    }
    return { funC: func.bind({ config: config }) };
};
var confiGfunC = function (config) {
    confiG(config);
    incConfig(config, config.name);
};
;
var meths = {
    global: confiGglobal,
    instance: confiGinstance,
    funC: confiGfunC
};
var confiG = S._Object.freeze(S._Object.assign(confiGmain, meths));
var func = function (config) {
    if (typeof this.config === "object") {
        inheritConfig(this.config, config);
    }
    confiG.funC(config);
    var c = config;
    templatefunction: {
        var name_1 = c.name;
        var description = c.description;
        var author = c.author;
        var notes = c.notes;
        var params_1 = c.params;
        var strict = c.isStrict ? '"use strict";' : "";
        var async = c.isAsync ? 'async ' : '';
        var _this = c.isThis ? (async + "function " + name_1 + "(" + params_1 + ") ") : ("const " + name_1 + " = " + async + "(" + params_1 + ") => ");
        // let isCapsule		    = c.isCapsule === true;
        var inputType = c.inputType;
        var outputType = c.outputType;
        var inputBehavior = c.inputBehavior;
        var outputBehavior = c.outputBehavior;
        var onError = c.onError;
        var validations = c.validations;
        var block = c.block;
        var spec = c.spec;
        var cb = "/*\n\t\t* author: " + author + "\n\t\t* description: " + description + "\n\t\t* notes: " + notes + "\n\t\t*/\n\t\treturn (" + validations + ")(" + params_1 + ") && (" + block + ")(" + params_1 + ");\n\t\t/* spec\n\t\t\t" + spec + "\n\t\t*/";
        console.log(cb);
        return new Function(params_1, "" + cb);
    }
};
var pm000 = Object.freeze({
    globalConfig: confiG.global,
    instance: confiG.instance,
    funC: func
});
// /*export*/ const funC:interface_pm = pm;
/*export*/ var funC = pm000;
//////////////////////////////////////////////////////////////////////////////////////////////////
var claS_roster = [];
/*export*/ var claS = function (setupOBJ) {
    independent_validations: for (var k in setup) {
        setup[k].validate(setupOBJ);
    }
    crossexamine_validations: {
        noDuplicates123456(setupOBJ);
    }
    // const __MEM__ = {
    //     __settings__   :settings     .block(setupOBJ),
    //     __internal__   :internal     .block(setupOBJ),
    //     __static__     :statiC       .block(setupOBJ),
    //     __public__     :publiC       .block(setupOBJ),
    //     __constructor__:constructor  .block(setupOBJ),
    //     __imports__    :imports      .block(setupOBJ),
    //     __middlemans__ :{}
    // };
    // __MEM__.__middlemans__    = middlemans.block(__MEM__.__imports__);
    // claS_roster.push(__MEM__);        
    // setupOBJ = undefined;
    // let PUBLIC;
    // return __clas__public__instance(PUBLIC = function(__mem__) {
    //     const buildPublic:buildPublic = function(__mem__) { return class c { constructor() {
    //         constructMethods:   publicConstruction       (this,__mem__);
    //         invokeConstructor:  constructorBlock    .bind(this)(...arguments);
    //         onFinish:           constructionComplete     (this,__mem__);
    //     }   }   };
    //     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //     const publicConstruction:publicConstruction = (function ww(__this__,__mem__) {
    //         const pm = clone(__mem__.__public__.mp), pd = clone(JSON.parse(JSON.stringify(__mem__.__public__.dp)));
    //         const sm = clone(__mem__.__static__.ms), sd = clone(JSON.parse(JSON.stringify(__mem__.__static__.ds)));
    //         if (__mem__.__settings__.singleton===true) __mem__.__internal__.di.instances < 1 || (()=>{THROWE();})();
    //         if (__mem__.__settings__.public_reflects_static === true) {
    //             __mem__.getMethod.validate(__this__,__mem__.__settings__,"ds");__mem__.getMethod.block(__this__,__mem__.__settings__,"ds");
    //             __mem__.setMethod.validate(__this__,__mem__.__settings__,"ds");__mem__.setMethod.block(__this__,__mem__.__settings__,"ds");
    //             for (let k in sm) {__this__[k] = function() {return clone(sm[k](...arguments));}}
    //         } else mp.block(__this__,pm,pd,__mem__);
    //     });
    //     const constructionComplete:constructionComplete = (__this__,__mem__)=>__settings__.public_mutable === false && Object.freeze(__this__),++__mem__.__internal__.di.instances;
    //     return buildPublic(__mem__);
    // }(__MEM__));
};
var __clas__public = function () { };
var __clas__public__instance = function (PUBLIC) {
    return S._Object.freeze({
        new: neW(PUBLIC),
        delete: deletE(PUBLIC),
        extend: extenD(PUBLIC),
        implement: implemenT(PUBLIC)
    });
};
var neW = function (PUBLIC) { return function () { return new (PUBLIC.bind.apply(PUBLIC, __spreadArrays([void 0], arguments)))(); }; };
var deletE = function (PUBLIC) { return function () { }; };
var extenD = function (PUBLIC) { return function () { }; };
var implemenT = function (PUBLIC) { return function () { }; };
var noDuplicates123456 = function (setupOBJ) {
    var a = S._Object.keys(setupOBJ.dp || {});
    var b = S._Object.keys(setupOBJ.mp || {});
    var c = S._Object.keys(setupOBJ.protectData || {});
    var e = S._Object.keys(setupOBJ.privateData || {});
    var f = S._Object.keys(setupOBJ.privateMethods || {});
    var oriG = a.concat(b).concat(c).concat(d).concat(e).concat(f);
    var neW = removeDuplicateUsingSet(oriG);
    neW.length === oriG.length || (function () { THROWE(); })();
};
/*export*/ var parseClass = (function () {
});
var list_mem = ["__settings__", "__imports__", "__middlemans__", "__internal__", "__static__", "__public__", "__constructor__"];
var __mem__ = S._Object.assign(list_mem, list_mem.map(function (e, i) {
    var obj;
    eval("\n        obj={\n            default:    props[" + i + "][0],\n            validate:   props[" + i + "][1],\n            block:      props[" + 1 + "][2]\n        };\n    ");
    return obj;
}));
var default__settings__ = function () { return ({
    debug: false,
    singleton: false,
    public_visible: false,
    public_mutable: false,
    public_gettable: false,
    public_settable: false,
    public_methods_auth: false,
    public_reflects_static: false,
    public_chainable: false,
    public_async: false,
    // public_output:          "",  
    public_expires: false,
    public_auth: false,
    public_input_interface: false,
    public_output_interface: false,
    sessionable_requests: false,
    maximum_requests_concurrently: false,
    hot_reload: false
}); };
var props = [
    /**             default                                validate      block                                          */
    // /*imports*/     [() => ({})                            ,()=>{}       ,(o,z)  => iP.block(o,z)],
    // /*middlemans*/  [() => ({})                            ,()=>{}       ,z      => clone(z)],
    /*intenal*/ [function () { return ({ "mi": {}, "di": { "instances": 0 } }); }, function () { }, function (o, z) { return (mi.block(o, z), di.block(o, z)); }],
    /*static*/ [function () { return ({ "ds": {}, "ms": {} }); }, function () { }, function (o) { return ms.block(o, statiC.default()); }],
    /*public*/ [function () { return ({ "dp": {}, "mp": {} }); }, function () { }, function (o) { return ({ "dp": o.dp, "mp": o.mp }); }],
    [function () { return ({}); }],
    /*settings*/ [function () { }],
    /*constructor*/ [function () { }]
    //  block__constructor__   = 
];
// console.warn(`A distinction needs to be made between internal, static, public`);
// console.warn(`A distinction needs to be made between method & data`);
var setupobJ = function () {
    return capsule(function () {
    }, {
        /*const*/ extends: [[hasOwnProperty, isObject, notEmpty, uhhhh], clone],
        /*const*/ implements: [[hasOwnProperty, isObject, notEmpty, uhhhh], clone],
        /*const*/ name: [[hasOwnProperty, isString, notEmpty], clone],
        /*const*/ settings: [[hasOwnProperty, isObject, notEmpty], clone],
        /*const*/ imports: [[hasOwnProperty, isObject, notEmpty], clone && block_imports],
        /*const*/ events: [[hasOwnProperty, isObject, notEmpty], clone],
        /*const*/ di: [[enforce_object_datas], clone],
        /*const*/ ds: [[enforce_object_datas], clone],
        /*const*/ dp: [[enforce_object_datas], clone],
        /*const*/ dp1: [[enforce_object_datas], clone],
        /*const*/ dp2: [[enforce_object_datas], clone],
        /*const*/ mi: [[enforce_object_methods], [block_mi, clone]],
        /*const*/ ms: [[enforce_object_methods], [block_ms, clone]],
        /*const*/ mp: [[enforce_object_methods], [block_mp, clone]],
        /*const*/ mp1: [[enforce_object_methods], [block_mp1, clone]],
        /*const*/ mp2: [[enforce_object_methods], [block_mp2, clone]],
        /*const*/ constructor: [[enforce_object_methods], [clone]]
    });
    // const methods = ["mi","ms","mp","mp1","mp2","constructor"];
    // const datas   = ["di","ds","dp","dp1","dp2"];
    // const properties = [
    //     "name","extends","implements",/*"constructor"*/, "settings","imports","events",
    //      ...datas,
    //      ...methods
    // ];
    // let tempOBJ = {};
    // properties.forEach((e,i)=>{
    //     console.log(i);
    //     tempOBJ[e] = {
    //         default:  closure_default (e),
    //         validate: closure_validate(e),
    //         block:    closure_block   (e)
    //     };
    // });
    // /*export*/ const setupOBJ = tempOBJ;
    // //////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////
    // const closure_default   = function(){ return function(){THROWE("unfinished");}; };
    // const closure_validate  = function(sel){
    //     let opts:any = {
    //         "datas":    enforce_object_datas,
    //         "methods":  enforce_object_methods,
    //         "propsss":  enforce_object_propsss,
    //         "nulls":    enforce_object_nulls,
    //     };
    //     if      (datas     .includes(sel)) opts = opts["datas"];
    //     else if (methods   .includes(sel)) opts = opts["methods"];
    //     else if (properties.includes(sel)) opts = opts["propsss"];
    //     else    (nulls     .includes(sel)) opts = opts["nulls"];
    //     return function(obj,val){
    //         hasOwnProperty(obj,val);
    //         opts(val);
    //         return true;
    //     };
    // };
    // const closure_block     = function(){return function(){THROWE("unfinished");}};
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    consT("\ndebug:                          false,\nsingleton:                      false,\npublic_visible:                 false,\npublic_mutable:                 false,\npublic_gettable:                false,\npublic_settable:                false,\npublic_methods_auth:            false,\npublic_reflects_static:         false,\npublic_chainable:               false,\npublic_async:                   false,\n// public_output:          \"\",  \npublic_expires:                 false,\npublic_auth:                    false,\npublic_input_interface:         false,\npublic_output_interface:        false,\nsessionable_requests:           false,\nmaximum_requests_concurrently:  false,\nhot_reload:                     false\n");
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var uhhhh = function (obj) {
        // loopObject(obj, (obj,k)=>{ loopObject(obj.extends, k) });
        S._Object.keys(obj.extends).forEach(function (e) { return Object.keys(obj.extends[e]).forEach(function (k) {
            return throwE("pm || pd", function () { return (typeof obj.mp[k] === obj.extends[e][k] || typeof obj.dp[k] === obj.extends[e][k]); });
        }); });
    };
};
;
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
var keys = {
    "d": "data",
    "m": "method",
    "i": "internal",
    "s": "static",
    "p": "public",
    "p1": "private",
    "p2": "protect"
};
var wrap = Object.freeze(Object.assign(function () { }, {
    /*const*/ method: function (v, f) { },
    /*const*/ data: function (v) { },
    /*const*/ internal: function (v) { },
    /*const*/ static: function (v) { },
    /*const*/ public: function (v) { },
    /*const*/ private: function (v) { },
    /*const*/ protect: function (v) { }
}));
/**
 *      internal
 *      static
 *      public
*/
var block_imports = function (obj) {
    obj.imports.forEach(function (e) {
        e = period(e);
        var r = require(e);
        __imports__[e.toLowerCase()] = [function () { return (new r()); }, function () { return (r); }, function () { THROWE(); }][(isClas(r) && 1) || (isFunC(r) || isFunction(r) || isObj(r) && 2) || 0];
    });
};
// Object.keys(obj.ms).forEach(e => {const tempFunc = obj.ms[e];__static__.ms[e] = function () {return tempFunc.call(obj, ...arguments);};}); 
// getMethod.validate(pm);getMethod.block(__this__,__settings__,"dp");
// setMethod.validate(pm);setMethod.block(__this__,__settings__,"dp");
// for (let k in pm) {__this__[k] = pubM(pm[k].bind({dp: pd,mp: __this__,ms: __static__.ms,ds: __static__.ds,_: __middlemans__}),__this__);}
var block_mi = function (obj) {
    loopObject(obj.mi, function (obj, k) { __internal__["mi"][k] = wrap.method("internal", obj["mi"][k]); });
    var block_ms = function (obj) {
        loopObject(obj.ms, function (obj, k) { __static__["ms"][k] = wrap.method("static", obj["ms"][k]); });
        var block_mp = function (obj) {
            loopObject(obj.mp, function (obj, k) { __public__["mp"][k] = wrap.method("public", obj["mp"][k]); });
            var block_mp1 = function (obj) {
                loopObject(obj.mp1, function (obj, k) { __private__["mp1"][k] = wrap.method("private", obj["mp1"][k]); });
                var block_mp2 = function (obj) {
                    loopObject(obj.mp2, function (obj, k) { __protect__["mp2"][k] = wrap.method("protect", obj["mp2"][k]); });
                    var getMethod = {
                        validate: function (methods) {
                            if ("get" in methods) {
                                THROWE();
                            }
                        },
                        block: function (__this__, __settings__, enuM) {
                            if (__settings__.public_gettable === true) {
                                var obj_1 = S._JSON.parse("{\"" + enuM + ":{}\"}");
                                obj_1[enuM] = __this__[enuM];
                                __this__["get"] = function (prop) {
                                    return clone(this[enuM][prop] || this[enuM]);
                                }.bind(obj_1);
                            }
                        }
                    };
                    var setMethod = {
                        validate: function (methods) {
                            if ("set" in methods) {
                                THROWE();
                            }
                        },
                        block: function (__this__, __settings__, enuM) {
                            if (__settings__.public_settable === true) {
                                var obj_2 = S._JSON.parse("{\"" + enuM + ":{}\"}");
                                obj_2[enuM] = __this__[enuM];
                                __this__["set"] = function (prop, val) {
                                    this[enuM][prop] = val;
                                }.bind(obj_2);
                            }
                        }
                    };
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    /*3)  LANGUAGE CONSTRUCT MUST HAVES
                    
                    
                    
                    */
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    /*4)  ALGORITHMIC DATA STRUCTURES
                    
                    
                    */
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    /*5)  ALGORITHMIC ALGORITHMS
                    
                    
                    
                    */
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    /*6)  WORKS OUT THE BOX
                    
                    
                    
                    
                    */
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////
                };
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                /*3)  LANGUAGE CONSTRUCT MUST HAVES
                
                
                
                */
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                /*4)  ALGORITHMIC DATA STRUCTURES
                
                
                */
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                /*5)  ALGORITHMIC ALGORITHMS
                
                
                
                */
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                /*6)  WORKS OUT THE BOX
                
                
                
                
                */
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////////
            };
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            /*3)  LANGUAGE CONSTRUCT MUST HAVES
            
            
            
            */
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            /*4)  ALGORITHMIC DATA STRUCTURES
            
            
            */
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            /*5)  ALGORITHMIC ALGORITHMS
            
            
            
            */
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            /*6)  WORKS OUT THE BOX
            
            
            
            
            */
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////
        };
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        /*3)  LANGUAGE CONSTRUCT MUST HAVES
        
        
        
        */
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        /*4)  ALGORITHMIC DATA STRUCTURES
        
        
        */
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        /*5)  ALGORITHMIC ALGORITHMS
        
        
        
        */
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        /*6)  WORKS OUT THE BOX
        
        
        
        
        */
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    /*3)  LANGUAGE CONSTRUCT MUST HAVES
    
    
    
    */
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    /*4)  ALGORITHMIC DATA STRUCTURES
    
    
    */
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    /*5)  ALGORITHMIC ALGORITHMS
    
    
    
    */
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    /*6)  WORKS OUT THE BOX
    
    
    
    
    */
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*3)  LANGUAGE CONSTRUCT MUST HAVES



*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*4)  ALGORITHMIC DATA STRUCTURES


*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*5)  ALGORITHMIC ALGORITHMS



*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*6)  WORKS OUT THE BOX




*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
