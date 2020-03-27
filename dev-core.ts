console.warn(`
After completing the merger.
Write a module that ensures
only the absolute minimum of functions are dependended.
no idling software. noting should take up any space.
`);
console.warn(`
* need to convert all javascript buitlin methods to global
`);
console.warn(`
core.ts is a one file merge of all the build structs files.
Why merge them all together?
core.ts mission is to be the leanest, fastet, core development tool
`);
console.warn(`
sanitize the variable naming and parameter ordering
across the entire file.
`);
console.warn(`

`);
console.warn(`
*** ORGANIZE THE MODULES TO BE GROUPED TOGETHER

    //// ????
    - SANDBOX-JS
    - CODE-FILE-STRUCTURE

    /// MERGED FUNCTIONAL LIBRARIES
    *** RAMBDA      FUNCTIONAL LIBRARY
    *** UNDERSCORE  FUNCTIONAL LIBRARY
    *** AUTHORS     FUNCTIONAL LIBRARY

    //// LANGUAGE CONSTRUCT REVAMP & HARDENING
    - PARADIGM-STYLER
    - PARAMS
    - CAPSULE
    - CLOSURE
    - CLONE-ANY
    - JS-DATATYPE-VALIDATIONS
    - SPEC
    - LOOP
    - FUNCLITE
    - FUNC
    - CLAS
    - CLI-FUNC
    - CLI-CLAS
    - GOF4

    //// LANGUAGE CONSTRUCT MUST HAVES

    - INSTRUCTIONS
    - CONFIG
    - MODULES
    - DIM
    - APPLICATION
    - UNIFRAME

    //// ALGORITHMIC DATA STRUCTURES

    - LIST

    //// ALGORITHMIC ALGORITHMS

    //// WORKS OUT OF THE BOX
    - DISTRIBUTED APPLICATION
    - SERVER
    - ZENDB

*** DEV-CORE FILE STRUCTURE


0)  SHARED MEMORY/FUNCTION VARIABLES
1)  STRUCTURAL PRESENTATIONS
2)  LANGUAGE CONSTRUCT REVAMP & HARDENING
3)  LANGUAGE CONSTRUCT MUST HAVES
4)  ALGORITHMIC DATA STRUCTURES
5)  ALGORITHMIC ALGORITHMS
6)  WORKS OUT THE BOX SOFTWARE





CHECKLIST: merging all code into oe file checklist

STATUSES:   [INPROGRESS, HELP, COMPLET]

___NAME____________________________________STATUS__________NOTES____
APPLICATION
auditor
bootstrap
capsule                                 INPROGRESS
claS
cli-claS
cli-funC
clone-any                               INPROGRESS
closure                                 INPROGRESS
code-file-structure
Codebrarian-namespace
config
CRUDS-JS
Dependency-Injection-Management
distributed-application
funC                                    INPROGRESS
funClite                                INPROGRESS
GOF4
instructions
js-builtins
js-datatype-validations                 FINISHED
JSHackbot
List
LOOP                                    INPROGRESS
memory-scoping
modules
PARAMS                                  INPROGRESS
PARADIGM-STYLER
public-private-protect
Quantify
sandbox-js
server
SPEC                                    SKIPPED
symbolic-programming
uniframe
ZenDB
****************************************************************************************
****************************************************************************************
****************************************************************************************
****************************************************************************************
`);
console.warn("once finished with this, build a looper injector for ML purposes");
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*0)  SHARED MEMORY VARIABLES

    *** evaluate modules one by one, do not leave any
    *** anything global non related to module gets bumped to SHARED MEMORY VARIABLES

    *** sandbox-js must be the first to execute

*/
/*export*/ const SANDBOX = (function SANDBOX() {
    let instances = 0;

    if (instances++ !== 0) {
        THROWE();
    }
    /*export*/ const clone = Object.freeze(Object.assign(function(v:any):any {
        let tP = typeof v;
        if (tP === 'boolean') 	return clone[tP](v);
        if (tP === 'number')  	return clone[tP](v);
        if (tP === 'string')  	return clone[tP](v);
        if (Array.isArray(tP))  return clone['array'](v);
        if (tP === 'function')	return clone[tP](v);
        if (tP === 'object')    return clone[tP];
        return ['cloning error, type v is not builtin datatype '+v];
    },{
        boolean  : function(v:boolean) {return !!v;},
        number   : function(v:number) {return v+0;},
        string   : function(v:string) {return v.slice();},
        array    : function(v:any[]) {return v.slice();},
        object   : function(v:object) {return Object.assign({}, v);},
        function : function(v:Function) {const temp = v; return temp;/*new Function('return ' + v.toString())();*/}
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
    console.warn(` 
        !!! BUG !!!

        TopLevel Object properties are frozen,

        buttttt,

        there properties properties ...

        are not frozen.
    `);
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

    const _eval = Object.freeze(clone(/*jsB"*/eval/*"]*/));
    const _isFinite = Object.freeze(clone(/*jsB"*/isFinite/*"]*/));
    const _isNaN = Object.freeze(clone(/*jsB"*/isNaN/*"]*/));
    const _parseFloat = Object.freeze(clone(/*jsB"*/parseFloat/*"]*/));
    const _parseInt = Object.freeze(clone(/*jsB"*/parseInt/*"]*/));
    const _decodeURI = Object.freeze(clone(/*jsB"*/decodeURI/*"]*/));
    const _decodeURIComponent = Object.freeze(clone(/*jsB"*/decodeURIComponent/*"]*/));
    const _encodeURI = Object.freeze(clone(/*jsB"*/encodeURI/*"]*/));
    const _encodeURIComponent = Object.freeze(clone(/*jsB"*/encodeURIComponent/*"]*/));
    const _escape = Object.freeze(clone(/*jsB"*/escape/*"]*/));
    const _unescape = Object.freeze(clone(/*jsB"*/unescape/*"]*/));
    const _Object = Object.freeze(clone(/*jsB"*/Object/*"]*/));
    const _Function = Object.freeze(clone(/*jsB"*/Function/*"]*/));
    const _Boolean = Object.freeze(clone(/*jsB"*/Boolean/*"]*/));
    const _Symbol = Object.freeze(clone(/*jsB"*/Symbol/*"]*/));
    const _Error = Object.freeze(clone(/*jsB"*/Error/*"]*/));
    const _EvalError = Object.freeze(clone(/*jsB"*/EvalError/*"]*/));
    const _RangeError = Object.freeze(clone(/*jsB"*/RangeError/*"]*/));
    const _ReferenceError = Object.freeze(clone(/*jsB"*/ReferenceError/*"]*/));
    const _SyntaxError = Object.freeze(clone(/*jsB"*/SyntaxError/*"]*/));
    const _TypeError = Object.freeze(clone(/*jsB"*/TypeError/*"]*/));
    const _URIError = Object.freeze(clone(/*jsB"*/URIError/*"]*/));
    const _Number = Object.freeze(clone(/*jsB"*/Number/*"]*/));
    const _BigInt = Object.freeze(clone(/*jsB"*/BigInt/*"]*/));
    const _Math = Object.freeze(clone(/*jsB"*/Math/*"]*/));
    const _Date = Object.freeze(clone(/*jsB"*/Date/*"]*/));
    const _String = Object.freeze(clone(/*jsB"*/String/*"]*/));
    const _RegExp = Object.freeze(clone(/*jsB"*/RegExp/*"]*/));
    const _Array = Object.freeze(clone(/*jsB"*/Array/*"]*/));
    const _Int8Array = Object.freeze(clone(/*jsB"*/Int8Array/*"]*/));
    const _Uint8Array = Object.freeze(clone(/*jsB"*/Uint8Array/*"]*/));
    const _Uint8ClampedArray = Object.freeze(clone(/*jsB"*/Uint8ClampedArray/*"]*/));
    const _Int16Array = Object.freeze(clone(/*jsB"*/Int16Array/*"]*/));
    const _Uint16Array = Object.freeze(clone(/*jsB"*/Uint16Array/*"]*/));
    const _Int32Array = Object.freeze(clone(/*jsB"*/Int32Array/*"]*/));
    const _Uint32Array = Object.freeze(clone(/*jsB"*/Uint32Array/*"]*/));
    const _Float32Array = Object.freeze(clone(/*jsB"*/Float32Array/*"]*/));
    const _Float64Array = Object.freeze(clone(/*jsB"*/Float64Array/*/*"]*/));
    const _BigInt64Array = Object.freeze(clone(/*jsB"*/BigInt64Array/*/*"]*/));
    const _BigUint64Array = Object.freeze(clone(/*jsB"*/BigUint64Array/*/*"]*/));
    const _Map = Object.freeze(clone(/*jsB"*/Map/*/*"]*/));
    const _Set = Object.freeze(clone(/*jsB"*/Set/*/*"]*/));
    const _WeakMap = Object.freeze(clone(/*jsB"*/WeakMap/*/*"]*/));
    const _WeakSet = Object.freeze(clone(/*jsB"*/WeakSet/*/*"]*/));
    const _ArrayBuffer = Object.freeze(clone(/*jsB"*/ArrayBuffer/*/*"]*/));
    const _SharedArrayBuffer = Object.freeze(clone(/*jsB"*/SharedArrayBuffer/*/*"]*/));
    const _Atomics = Object.freeze(clone(/*jsB"*/Atomics/*/*"]*/));
    const _DataView = Object.freeze(clone(/*jsB"*/DataView/*/*"]*/));
    const _JSON = Object.freeze(clone(/*jsB"*/JSON/*/*"]*/));
    const _Promise = Object.freeze(clone(/*jsB"*/Promise/*/*"]*/));
    const _Reflect = Object.freeze(clone(/*jsB"*/Reflect/*/*"]*/));
    const _Proxy = Object.freeze(clone(/*jsB"*/Proxy/*/*"]*/));
    const _Intl = Object.freeze(clone(/*jsB"*/Intl/*/*"]*/));
    const _WebAssembly = Object.freeze(clone(/*jsB"*/WebAssembly/*/*"]*/));

    // clone = {}; // delete jsB;
    // jsb = {};   // delete clone;
    // return 


    return Object.freeze({
    /* const */ _eval , // Object.freeze(clone(/*jsB"*/eval/*"]*/));
    /* const */ _isFinite , // Object.freeze(clone(/*jsB"*/isFinite/*"]*/));
    /* const */ _isNaN , // Object.freeze(clone(/*jsB"*/isNaN/*"]*/));
    /* const */ _parseFloat , // Object.freeze(clone(/*jsB"*/parseFloat/*"]*/));
    /* const */ _parseInt , // Object.freeze(clone(/*jsB"*/parseInt/*"]*/));
    /* const */ _decodeURI , // Object.freeze(clone(/*jsB"*/decodeURI/*"]*/));
    /* const */ _decodeURIComponent , // Object.freeze(clone(/*jsB"*/decodeURIComponent/*"]*/));
    /* const */ _encodeURI , // Object.freeze(clone(/*jsB"*/encodeURI/*"]*/));
    /* const */ _encodeURIComponent , // Object.freeze(clone(/*jsB"*/encodeURIComponent/*"]*/));
    /* const */ _escape , // Object.freeze(clone(/*jsB"*/escape/*"]*/));
    /* const */ _unescape , // Object.freeze(clone(/*jsB"*/unescape/*"]*/));
    /* const */ _Object , // Object.freeze(clone(/*jsB"*/Object/*"]*/));
    /* const */ _Function , // Object.freeze(clone(/*jsB"*/Function/*"]*/));
    /* const */ _Boolean , // Object.freeze(clone(/*jsB"*/Boolean/*"]*/));
    /* const */ _Symbol , // Object.freeze(clone(/*jsB"*/Symbol/*"]*/));
    /* const */ _Error , // Object.freeze(clone(/*jsB"*/Error/*"]*/));
    /* const */ _EvalError , // Object.freeze(clone(/*jsB"*/EvalError/*"]*/));
    /* const */ _RangeError , // Object.freeze(clone(/*jsB"*/RangeError/*"]*/));
    /* const */ _ReferenceError , // Object.freeze(clone(/*jsB"*/ReferenceError/*"]*/));
    /* const */ _SyntaxError , // Object.freeze(clone(/*jsB"*/SyntaxError/*"]*/));
    /* const */ _TypeError , // Object.freeze(clone(/*jsB"*/TypeError/*"]*/));
    /* const */ _URIError , // Object.freeze(clone(/*jsB"*/URIError/*"]*/));
    /* const */ _Number , // Object.freeze(clone(/*jsB"*/Number/*"]*/));
    /* const */ _BigInt , // Object.freeze(clone(/*jsB"*/BigInt/*"]*/));
    /* const */ _Math , // Object.freeze(clone(/*jsB"*/Math/*"]*/));
    /* const */ _Date , // Object.freeze(clone(/*jsB"*/Date/*"]*/));
    /* const */ _String , // Object.freeze(clone(/*jsB"*/String/*"]*/));
    /* const */ _RegExp , // Object.freeze(clone(/*jsB"*/RegExp/*"]*/));
    /* const */ _Array , // Object.freeze(clone(/*jsB"*/Array/*"]*/));
    /* const */ _Int8Array , // Object.freeze(clone(/*jsB"*/Int8Array/*"]*/));
    /* const */ _Uint8Array , // Object.freeze(clone(/*jsB"*/Uint8Array/*"]*/));
    /* const */ _Uint8ClampedArray , // Object.freeze(clone(/*jsB"*/Uint8ClampedArray/*"]*/));
    /* const */ _Int16Array , // Object.freeze(clone(/*jsB"*/Int16Array/*"]*/));
    /* const */ _Uint16Array , // Object.freeze(clone(/*jsB"*/Uint16Array/*"]*/));
    /* const */ _Int32Array , // Object.freeze(clone(/*jsB"*/Int32Array/*"]*/));
    /* const */ _Uint32Array , // Object.freeze(clone(/*jsB"*/Uint32Array/*"]*/));
    /* const */ _Float32Array , // Object.freeze(clone(/*jsB"*/Float32Array/*"]*/));
    /* const */ _Float64Array , // Object.freeze(clone(/*jsB"*/Float64Array/*"]*/));
    /* const */ _BigInt64Array , // Object.freeze(clone(/*jsB"*/BigInt64Array/*"]*/));
    /* const */ _BigUint64Array , // Object.freeze(clone(/*jsB"*/BigUint64Array/*"]*/));
    /* const */ _Map , // Object.freeze(clone(/*jsB"*/Map/*"]*/));
    /* const */ _Set , // Object.freeze(clone(/*jsB"*/Set/*"]*/));
    /* const */ _WeakMap , // Object.freeze(clone(/*jsB"*/WeakMap/*"]*/));
    /* const */ _WeakSet , // Object.freeze(clone(/*jsB"*/WeakSet/*"]*/));
    /* const */ _ArrayBuffer , // Object.freeze(clone(/*jsB"*/ArrayBuffer/*"]*/));
    /* const */ _SharedArrayBuffer , // Object.freeze(clone(/*jsB"*/SharedArrayBuffer/*"]*/));
    /* const */ _Atomics , // Object.freeze(clone(/*jsB"*/Atomics/*"]*/));
    /* const */ _DataView , // Object.freeze(clone(/*jsB"*/DataView/*"]*/));
    /* const */ _JSON , // Object.freeze(clone(/*jsB"*/JSON/*"]*/));
    /* const */ _Promise , // Object.freeze(clone(/*jsB"*/Promise/*"]*/));
    /* const */ _Reflect , // Object.freeze(clone(/*jsB"*/Reflect/*"]*/));
    /* const */ _Proxy , // Object.freeze(clone(/*jsB"*/Proxy/*"]*/));
    /* const */ _Intl , // Object.freeze(clone(/*jsB"*/Intl/*"]*/));
    /* const */ _WebAssembly , // Object.freeze(clone(/*jsB"*/WebAssembly/*"]*/));
    });
})();

const S = SANDBOX;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const __findHighestArity = function(spec, max = 0) {
    for (const key in spec) {
      if (spec.hasOwnProperty(key) === false || key === 'constructor') continue;
  
      if (typeof spec[key] === 'object') {
        max = Math.max(max, __findHighestArity(spec[key]));
      }
  
      if (typeof spec[key] === 'function') {
        max = Math.max(max, spec[key].length);
      }
    }
  
    return max;
};


const __applySpecWithArity = function(spec, arity, cache) {
    const remaining = arity - cache.length;
    if (remaining === 1) return x => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x));
    if (remaining === 2) return (x, y) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x, y));
    if (remaining === 3) return (x, y, z) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x, y, z));
    if (remaining === 4) return (x, y, z, a) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x, y, z, a));
    if (remaining > 4) return (...args) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, ...args));
  
    if (Array.isArray(spec)) {
      const ret = [];
      let i = 0;
      const l = spec.length;
  
      for (; i < l; i++) {
        if (typeof spec[i] === 'object' || Array.isArray(spec[i])) {
          ret[i] = __applySpecWithArity(spec[i], arity, cache);
        }
  
        if (typeof spec[i] === 'function') {
          ret[i] = spec[i](...cache);
        }
      }
  
      return ret;
}
const __filterUndefined = function() {
    const defined = [];
    let i = 0;
    const l = arguments.length;
  
    while (i < l) {
      if (typeof arguments[i] === 'undefined') break;
      defined[i] = arguments[i];
      i++;
    }
  
    return defined;
};
const flipExport = function(fn) {
    return (...input) => {
      if (input.length === 1) {
        return holder => fn(holder, input[0]);
      } else if (input.length === 2) {
        return fn(input[1], input[0]);
      }
  
      return undefined;
    };
};
const _isInteger$1 = Number.isInteger || _isInteger;
const indexByPath = function(pathInput, list) {
  const toReturn = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    toReturn[path(pathInput, item)] = item;
  }

  return toReturn;
};
const baseSlice = function(array, start, end) {
  let index = -1;
  let {
    length
  } = array;
  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  const result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
};
const mapObject = function(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    willReturn[prop] = fn(obj[prop], prop, obj);
  }

  return willReturn;
}
const reduce = curry(reduceFn);
const parseRegex = function(maybeRegex) {
  if (maybeRegex.constructor !== RegExp) return [false];
  return [true, maybeRegex.toString()];
};
const parseDate = function(maybeDate) {
  if (!maybeDate.toDateString) return [false];
  return [true, maybeDate.getTime()];
};
const parseError = function(maybeError) {
  const typeofError = maybeError.__proto__.toString();

  if (!['Error', 'TypeError'].includes(typeofError)) return [];
  return [typeofError, maybeError.message];
};
const _objectIs = function(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }

  return a !== a && b !== b;
};
const _objectIs$1 = Object.is || _objectIs;
const defaultTo = function(defaultArgument, ...inputArguments) {
  if (arguments.length === 1) {
    return _inputArguments => defaultTo(defaultArgument, _inputArguments);
  } else if (arguments.length === 2) {
    return flagIs(inputArguments[0]) ? defaultArgument : inputArguments[0];
  }

  const limit = inputArguments.length - 1;
  let len = limit + 1;
  let ready = false;
  let holder;

  while (!ready) {
    const instance = inputArguments[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (flagIs(instance)) {
      len -= 1;
    } else {
      holder = instance;
      ready = true;
    }
  }

  return holder === undefined ? defaultArgument : holder;
};
const Const = x => ({
  x,
  map: fn => Const(x)
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const always = function(x) {
    return () => x;
};
const applySpec = function(spec, ...args) {
    const arity = __findHighestArity(spec);
  
    if (arity === 0) {
      return () => ({});
    }
  
    const toReturn = __applySpecWithArity(spec, arity, args);
  
    return toReturn;
};
const compose = function(...fns) {
    if (fns.length === 0) {
      throw new Error('compose requires at least one argument');
    }
  
    return (...args) => {
      const list = fns.slice();
  
      if (list.length > 0) {
        const fn = list.pop();
        let result = fn(...args);
  
        while (list.length > 0) {
          result = list.pop()(result);
        }
  
        return result;
      }
    };
};
const curry = function(fn, args = []) {
    return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
};
const F = function() {
    return false;
};
const flip = function(fn) {
    return flipExport(fn);
};
const identity = function(x) {
    return x;
};
const negate = function(n) {
    return -n;
};
const partial = function(fn, ...args) {
    const len = fn.length;
    return (...rest) => {
      if (args.length + rest.length >= len) {
        return fn(...args, ...rest);
      }
  
      return partial(fn, ...[...args, ...rest]);
    };
};
const pipe = function(...fns) {
    if (fns.length === 0) throw new Error('pipe requires at least one argument');
    return compose(...fns.reverse());
};
const T = function() {
    return true;
};
const tap = function(fn, x) {
    if (arguments.length === 1) return _x => tap(fn, _x);
    fn(x);
    return x;
};
const add = function(a, b) {
    if (arguments.length === 1) return _b => add(a, _b);
    return Number(a) + Number(b);
};
//   function dec(n) {return  n - 1},
//   function inc(n) {return  n + 1},
const mathMod = function(m, p) {
    if (arguments.length === 1) return _p => mathMod(m, _p);
    if (!_isInteger$1(m) || !_isInteger$1(p) || p < 1) return NaN;
    return (m % p + p) % p;
};
const mean = function(list) {
    return sum(list) / list.length;
};
const median = function(list) {
    const len = list.length;
    if (len === 0) return NaN;
    const width = 2 - len % 2;
    const idx = (len - width) / 2;
    return mean(Array.prototype.slice.call(list, 0).sort((a, b) => {
      if (a === b) return 0;
      return a < b ? -1 : 1;
    }).slice(idx, idx + width));
};
const modulo = function(a, b) {
    if (arguments.length === 1) return _b => modulo(a, _b);
    return a % b;
};
const multiply = function(a, b) {
    if (arguments.length === 1) return _b => multiply(a, _b);
    return a * b;
};
// const RESTARGS = function(..._args)  {return (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function subtract(a, b) {
//     if (arguments.length === 1) return _b => subtract(a, _b);
//     return a - b;
// };
  
const sum = function(list) {
    return list.reduce((prev, current) => prev + current, 0);
};
const all = function(fn, list) {
    if (arguments.length === 1) return _list => all(fn, _list);
  
    for (let i = 0; i < list.length; i++) {
      if (!fn(list[i], i)) return false;
    }
  
    return true;
};
const any = function(fn, list) {
    if (arguments.length === 1) return _list => any(fn, _list);
    let counter = 0;
  
    while (counter < list.length) {
      if (fn(list[counter], counter)) {
        return true;
      }
  
      counter++;
    }
  
    return false;
};
const append = function(el, list) {
    if (arguments.length === 1) return _list => append(el, _list);
    if (typeof list === 'string') return `${list}${el}`;
    const clone = list.slice();
    clone.push(el);
    return clone;
};
const concat = function(left, right) {
    if (arguments.length === 1) return _right => concat(left, _right);
    return typeof left === 'string' ? `${left}${right}` : [...left, ...right];
};
const difference = function(list1, list2) {
    if (arguments.length === 1) return _list => difference(list1, _list);
    return uniq(list1).filter(x1 => !includes(x1, list2));
};
const drop = function(n, listOrString) {
    if (arguments.length === 1) return _list => drop(n, _list);
    return listOrString.slice(n > 0 ? n : 0);
};
const dropLast = function(n, list) {
    if (arguments.length === 1) return _list => dropLast(n, _list);
    return n > 0 ? list.slice(0, -n) : list.slice();
};
const endsWith = function(suffix, list) {
    if (arguments.length === 1) return _list => endsWith(suffix, _list);
    return list.endsWith(suffix);
};
const filter = function(fn, list) {
    if (arguments.length === 1) return _list => filter(fn, _list);
    if (!list) return [];
  
    if (!Array.isArray(list)) {
      return filterObject(fn, list);
    }
  
    let index = -1;
    let resIndex = 0;
    const len = list.length;
    const willReturn = [];
  
    while (++index < len) {
      const value = list[index];
  
      if (fn(value, index)) {
        willReturn[resIndex++] = value;
      }
    }
  
    return willReturn;
};
const find = function(fn, list) {
    if (arguments.length === 1) return _list => find(fn, _list);
    return list.find(fn);
};
const findIndex = function(fn, list) {
    if (arguments.length === 1) return _list => findIndex(fn, _list);
    const len = list.length;
    let index = -1;
  
    while (++index < len) {
      if (fn(list[index], index)) {
        return index;
      }
    }
  
    return -1;
};
const flatten = function(list, input) {
    const willReturn = input === undefined ? [] : input;
  
    for (let i = 0; i < list.length; i++) {
      if (Array.isArray(list[i])) {
        flatten(list[i], willReturn);
      } else {
        willReturn.push(list[i]);
      }
    }
  
    return willReturn;
};
const forEach = function(fn, list) {
    if (arguments.length === 1) return _list => forEach(fn, _list);
    map(fn, list);
    return list;
};
const fromPairs = function(list) {
    const toReturn = {};
    list.forEach(([prop, value]) => toReturn[prop] = value);
    return toReturn;
};
const groupBy = function(fn, list) {
    if (arguments.length === 1) return _list => groupBy(fn, _list);
    const result = {};
  
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const key = fn(item);
  
      if (!result[key]) {
        result[key] = [];
      }
  
      result[key].push(item);
    }
  
    return result;
};
// const groupWith = function(predicate, list) {
//     const toReturn = [];
//     let holder = [];
//     list.reduce((prev, current, i) => {
//       if (i > 0 && predicate(prev, current)) {
//         if (holder.length === 0) {
//           holder.push(prev);
//           holder.push(current);
//         } else {
//           holder.push(current);
//         }
//       } else if (i > 0) {
//         if (holder.length === 0) {
//           toReturn.push([prev]);
//           if (i === list.length - 1) holder.push(current);
//         } else {
//           toReturn.push(holder);
//           holder = [];
//         }
//       }
  
//       return current;
//     }
     
//     undefined: return holder.length === 0 ? toReturn : [...toReturn, holder];
  
// };
// //  undefined);
// //     return holder.length === 0 ? toReturn : [...toReturn, holder];
// //   },
const head = function(list) {
    if (typeof list === 'string') return list[0] || '';
    return list[0];
};
const includes = function(target, list) {
    if (arguments.length === 1) return _input => includes(target, _input);
  
    if (typeof list === 'string') {
      return list.includes(target);
    }
  
    if (!Array.isArray(list)) return false;
    let index = -1;
  
    while (++index < list.length) {
      if (equals(list[index], target)) {
        return true;
      }
    }
  
    return false;
};
const indexBy = function(fnOrPath, list) {
    if (arguments.length === 1) {
      return _list => indexBy(fnOrPath, _list);
    }
  
    if (typeof fnOrPath === 'string') {
      return indexByPath(fnOrPath, list);
    }
  
    const toReturn = {};
  
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      toReturn[fnOrPath(item)] = item;
    }
  
    return toReturn;
};
const indexOf = function(target, list) {
    if (arguments.length === 1) return _list => indexOf(target, _list);
    let index = -1;
    const {
      length
    } = list;
  
    while (++index < length) {
      if (list[index] === target) {
        return index;
      }
    }
  
    return -1;
};
const init = function(list) {
    if (typeof list === 'string') return list.slice(0, -1);
    return list.length ? baseSlice(list, 0, -1) : [];
};
const intersection = function(list1, list2) {
    if (arguments.length === 1) return _list => intersection(list1, _list);
    return filter(value => includes(value, list2), list1);
};
const intersperse = function(separator, list) {
    if (arguments.length === 1) return _list => intersperse(separator, _list);
    let index = -1;
    const len = list.length;
    const willReturn = [];
  
    while (++index < len) {
      if (index === len - 1) {
        willReturn.push(list[index]);
      } else {
        willReturn.push(list[index], separator);
      }
    }
  
    return willReturn;
};
const join = function(separator, list) {
    if (arguments.length === 1) return _list => join(separator, _list);
    return list.join(separator);
};
const last = function(list) {
    if (typeof list === 'string') return list[list.length - 1] || '';
    return list[list.length - 1];
};
const lastIndexOf = function(target, list) {
    if (arguments.length === 1) return _list => lastIndexOf(target, _list);
    let index = list.length;
  
    while (--index > 0) {
      if (equals(list[index], target)) {
        return index;
      }
    }
  
    return -1;
};
const length = function(list) {
    if (!list || list.length === undefined) {
      return NaN;
    }
  
    return list.length;
};
const map = function(fn, list) {
    if (arguments.length === 1) return _list => map(fn, _list);
  
    if (list === undefined) {
      return [];
    }
  
    if (!Array.isArray(list)) {
      return mapObject(fn, list);
    }
  
    let index = -1;
    const len = list.length;
    const willReturn = Array(len);
  
    while (++index < len) {
      willReturn[index] = fn(list[index], index);
    }
  
    return willReturn;
};
const none = function(fn, list) {
    if (arguments.length === 1) return _list => none(fn, _list);
    return list.filter(fn).length === 0;
};
const nth = function(offset, list) {
    if (arguments.length === 1) return _list => nth(offset, _list);
    const idx = offset < 0 ? list.length + offset : offset;
    return Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
};
const pluck = function(key, list) {
    if (arguments.length === 1) return _list => pluck(key, _list);
    const willReturn = [];
    map(val => {
      if (val[key] !== undefined) {
        willReturn.push(val[key]);
      }
    }, list);
    return willReturn;
};
const prepend = function(el, list) {
    if (arguments.length === 1) return _list => prepend(el, _list);
    if (typeof list === 'string') return `${el}${list}`;
    const clone = [el].concat(list);
    return clone;
};
const range = function(from, to) {
    if (arguments.length === 1) return _to => range(from, _to);
  
    if (Number.isNaN(Number(from)) || Number.isNaN(Number(to))) {
      throw new TypeError('Both arguments to range must be numbers');
    }
  
    if (to < from) return [];
    const len = to - from;
    const willReturn = Array(len);
  
    for (let i = 0; i < len; i++) {
      willReturn[i] = from + i;
    }
  
    return willReturn;
};
// (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function reject(fn, list) {
//     if (arguments.length === 1) return _list => reject(fn, _list);
//     return filter((x, i) => !fn(x, i), list);
//   },function repeat(val, n) {
//     if (arguments.length === 1) return _n => repeat(val, _n);
//     const willReturn = Array(n);
//     return willReturn.fill(val);
  // },
const reverse = function(input) {
  if (typeof input === 'string') {
    return input.split('').reverse().join('');
  }

  const clone = input.slice();
  return clone.reverse();
};
// (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function sort(fn, list) {
//     if (arguments.length === 1) return _list => sort(fn, _list);
//     const arrClone = list.slice();
//     return arrClone.sort(fn);
//   },
const splitEvery = function(n, list) {
    if (arguments.length === 1) return _list => splitEvery(n, _list);
    if (n < 1) throw new Error('First argument to splitEvery must be a positive integer');
    const willReturn = [];
    let counter = 0;
  
    while (counter < list.length) {
      willReturn.push(list.slice(counter, counter += n));
    }
  
    return willReturn;
};
const startsWith = function(prefix, list) {
    if (arguments.length === 1) return _list => startsWith(prefix, _list);
    return list.startsWith(prefix);
};
const tail = function(list) {
    return drop(1, list);
};
const take = function(n, list) {
    if (arguments.length === 1) return _list => take(n, _list);
    if (n < 0) return list.slice();
    if (typeof list === 'string') return list.slice(0, n);
    return baseSlice(list, 0, n);
};
const takeLast = function(n, list) {
    if (arguments.length === 1) return _list => takeLast(n, _list);
    const len = list.length;
    if (n < 0) return list.slice();
    let numValue = n > len ? len : n;
    if (typeof list === 'string') return list.slice(len - numValue);
    numValue = len - numValue;
    return baseSlice(list, numValue, len);
};
const times = function(fn, n) {
    if (arguments.length === 1) return _n => times(fn, _n);
    if (!Number.isInteger(n) || n < 0) throw new RangeError('n must be an integer');
    return map(fn, range(0, n));
};
const uniq = function(list) {
    let index = -1;
    const willReturn = [];
  
    while (++index < list.length) {
      const value = list[index];
  
      if (!includes(value, willReturn)) {
        willReturn.push(value);
      }
    }
  
    return willReturn;
};
const uniqWith = function(fn, list) {
    if (arguments.length === 1) return _list => uniqWith(fn, _list);
    let index = -1;
    const len = list.length;
    const willReturn = [];
  
    while (++index < len) {
      const value = list[index];
      const flag = any(willReturnInstance => fn(value, willReturnInstance), willReturn);
  
      if (!flag) {
        willReturn.push(value);
      }
    }
  
    return willReturn;
};
const update = function(idx, val, list) {
    if (val === undefined) {
      return (_val, _list) => update(idx, _val, _list);
    } else if (list === undefined) {
      return _list => update(idx, val, _list);
    }
  
    const arrClone = list.slice();
    return arrClone.fill(val, idx, idx + 1);
};
const without = function(left, right) {
    if (right === undefined) {
      return _right => without(left, _right);
    }
  
    return reduce((accum, item) => includes(item, left) ? accum : accum.concat(item), [], right);
};
const zip = function(left, right) {
    if (arguments.length === 1) return _right => zip(left, _right);
    const result = [];
    const length = Math.min(left.length, right.length);
  
    for (let i = 0; i < length; i++) {
      result[i] = [left[i], right[i]];
    }
  
    return result;
};
const zipObj = function(keys, values) {
    if (arguments.length === 1) return yHolder => zipObj(keys, yHolder);
    return take(values.length, keys).reduce((prev, xInstance, i) => {
      prev[xInstance] = values[i];
      return prev;
    }, {});
};
// (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function clone(val) {
//     const out = Array.isArray(val) ? Array(val.length) : {};
//     if (val && val.getTime) return new Date(val.getTime());
  
//     for (const key in val) {
//       const v = val[key];
//       out[key] = typeof v === 'object' && v !== null ? v.getTime ? new Date(v.getTime()) : clone(v) : v;
//     }
  
//     return out;
//   };
const dissoc = function(prop, obj) {
    if (arguments.length === 1) return _obj => dissoc(prop, _obj);
    if (obj === null || obj === undefined) return {};
    const willReturn = {};
  
    for (const p in obj) {
      willReturn[p] = obj[p];
    }
  
    delete willReturn[prop];
    return willReturn;
};
const has = function(prop, obj) {
    if (arguments.length === 1) return _obj => has(prop, _obj);
    if (!obj) return false;
    return obj[prop] !== undefined;
};
const isEmpty = function(input) {
    const inputType = type(input);
    if (['Undefined', 'NaN', 'Number', 'Null'].includes(inputType)) return false;
    if (!input) return true;
  
    if (inputType === 'Object') {
      return Object.keys(input).length === 0;
    }
  
    if (inputType === 'Array') {
      return input.length === 0;
    }
  
    return false;
};
const keys = function(obj) {
    return Object.keys(obj);
};
const lens = function(getter, setter) {
    if (arguments.length === 1) return _setter => lens(getter, _setter);
    return function (functor) {
      return function (target) {
        return functor(getter(target)).map(focus => setter(focus, target));
      };
    };
};
const lensIndex = function(i) {
    return lens(nth(i), update(i));
};
const lensPath = function(key) {
    return lens(path(key), assocPath(key));
};
const lensProp = function(key) {
    return lens(prop(key), assoc(key));
};
const merge = function(obj, props) {
    if (arguments.length === 1) return _props => merge(obj, _props);
    return Object.assign({}, obj || {}, props || {});
};
const omit = function(keys, obj) {
    if (arguments.length === 1) return _obj => omit(keys, _obj);
  
    if (obj === null || obj === undefined) {
      return undefined;
    }
  
    const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
    const willReturn = {};
  
    for (const key in obj) {
      if (!keysValue.includes(key)) {
        willReturn[key] = obj[key];
      }
    }
  
    return willReturn;
}; 
const over = function(lens, fn, object) {
    if (arguments.length === 1) return (_fn, _object) => over(lens, _fn, _object);
    if (arguments.length === 2) return _object => over(lens, fn, _object);
    return lens(x => Identity(fn(x)))(object).x;
};
const path = function(list, obj) {
    if (arguments.length === 1) return _obj => path(list, _obj);
  
    if (obj === null || obj === undefined) {
      return undefined;
    }
  
    let willReturn = obj;
    let counter = 0;
    const pathArrValue = typeof list === 'string' ? list.split('.') : list;
  
    while (counter < pathArrValue.length) {
      if (willReturn === null || willReturn === undefined) {
        return undefined;
      }
  
      willReturn = willReturn[pathArrValue[counter]];
      counter++;
    }
  
    return willReturn;
};
// (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function paths(pathsInput, obj) {
//     return pathsInput.map(singlePath => path(singlePath, obj));
// };
const allPass = function(predicates) {
    return input => {
      let counter = 0;
  
      while (counter < predicates.length) {
        if (!predicates[counter](input)) {
          return false;
        }
  
        counter++;
      }
  
      return true;
    };
};
const and = function(a, b) {
    if (arguments.length === 1) return _b => and(a, _b);
    return a && b;
};
const anyPass = function(predicates) {
    return input => {
      let counter = 0;
  
      while (counter < predicates.length) {
        if (predicates[counter](input)) {
          return true;
        }
  
        counter++;
      }
  
      return false;
    };
};
const both = function(f, g) {
    if (arguments.length === 1) return _g => both(f, _g);
    return (...input) => f(...input) && g(...input);
};
const complement = function(fn) {
    return (...input) => !fn(...input);
};
const cond = function(conditions) {
    return input => {
      let done = false;
      let toReturn;
      conditions.forEach(([predicate, resultClosure]) => {
        if (!done && predicate(input)) {
          done = true;
          toReturn = resultClosure(input);
        }
      });
      return toReturn;
    };
};
const either = function(f, g) {
    if (arguments.length === 1) return _g => either(f, _g);
    return (...input) => f(...input) || g(...input);
  },(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function isEmpty(input) {
    const inputType = type(input);
    if (['Undefined', 'NaN', 'Number', 'Null'].includes(inputType)) return false;
    if (!input) return true;
  
    if (inputType === 'Object') {
      return Object.keys(input).length === 0;
    }
  
    if (inputType === 'Array') {
      return input.length === 0;
    }
  
    return false;
};
const not = function(a) {
    return !a;
};
const xor = function(a, b) {
    if (arguments.length === 1) return _b => xor(a, _b);
    return Boolean(a) && !b || Boolean(b) && !a;
};
(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function difference(list1, list2) {
    if (arguments.length === 1) return _list => difference(list1, _list);
    return uniq(list1).filter(x1 => !includes(x1, list2));
};
const equals = function(a, b) {
    if (arguments.length === 1) return _b => equals(a, _b);
    const aType = type(a);
    if (aType !== type(b)) return false;
    if (['NaN', 'Undefined', 'Null'].includes(aType)) return true;
    if (['Boolean', 'Number', 'String'].includes(aType)) return a.toString() === b.toString();
  
    if (aType === 'Array') {
      const aClone = Array.from(a);
      const bClone = Array.from(b);
  
      if (aClone.toString() !== bClone.toString()) {
        return false;
      }
  
      let loopArrayFlag = true;
      aClone.forEach((aCloneInstance, aCloneIndex) => {
        if (loopArrayFlag) {
          if (aCloneInstance !== bClone[aCloneIndex] && !equals(aCloneInstance, bClone[aCloneIndex])) {
            loopArrayFlag = false;
          }
        }
      });
      return loopArrayFlag;
    }
  
    const aRegex = parseRegex(a);
    const bRegex = parseRegex(b);
  
    if (aRegex[0]) {
      return bRegex[0] ? aRegex[1] === bRegex[1] : false;
    } else if (bRegex[0]) return false;
  
    const aDate = parseDate(a);
    const bDate = parseDate(b);
  
    if (aDate[0]) {
      return bDate[0] ? aDate[1] === bDate[1] : false;
    } else if (bDate[0]) return false;
  
    const aError = parseError(a);
    const bError = parseError(b);
  
    if (aError[0]) {
      return bError[0] ? aError[0] === bError[0] && aError[1] === bError[1] : false;
    }
  
    if (aType === 'Object') {
      const aKeys = Object.keys(a);
  
      if (aKeys.length !== Object.keys(b).length) {
        return false;
      }
  
      let loopObjectFlag = true;
      aKeys.forEach(aKeyInstance => {
        if (loopObjectFlag) {
          const aValue = a[aKeyInstance];
          const bValue = b[aKeyInstance];
  
          if (aValue !== bValue && !equals(aValue, bValue)) {
            loopObjectFlag = false;
          }
        }
      });
      return loopObjectFlag;
    }
  
    return false;
};
const identical = function(a, b) {
    if (arguments.length === 1) return _b => identical(a, _b);
    return _objectIs$1(a, b);
};
const max = function(a, b) {
    if (arguments.length === 1) return _b => max(a, _b);
    return b > a ? b : a;
};
const maxBy = function(fn, a, b) {
    if (arguments.length === 2) {
      return _b => maxBy(fn, a, _b);
    } else if (arguments.length === 1) {
      return (_a, _b) => maxBy(fn, _a, _b);
    }
  
    return fn(b) > fn(a) ? b : a;
};
const min = function(a, b) {
    if (arguments.length === 1) return _b => min(a, _b);
    return b < a ? b : a;
};
const minBy = function(fn, a, b) {
    if (arguments.length === 2) {
      return _b => minBy(fn, a, _b);
    } else if (arguments.length === 1) {
      return (_a, _b) => minBy(fn, _a, _b);
    }
  
    return fn(b) < fn(a) ? b : a;
};
// (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function sortBy(fn, list) {
//     if (arguments.length === 1) return _list => sortBy(fn, _list);
//     const arrClone = list.slice();
//     return arrClone.sort((a, b) => {
//       const fnA = fn(a);
//       const fnB = fn(b);
//       if (fnA === fnB) return 0;
//       return fnA < fnB ? -1 : 1;
//     });
//   },

const isNil = function(x) {
    return x === undefined || x === null;
};
// (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function type(input) {
//     const typeOf = typeof input;
  
//     if (input === null) {
//       return 'Null';
//     } else if (input === undefined) {
//       return 'Undefined';
//     } else if (typeOf === 'boolean') {
//       return 'Boolean';
//     } else if (typeOf === 'number') {
//       return Number.isNaN(input) ? 'NaN' : 'Number';
//     } else if (typeOf === 'string') {
//       return 'String';
//     } else if (Array.isArray(input)) {
//       return 'Array';
//     } else if (input instanceof RegExp) {
//       return 'RegExp';
//     }
  
//     const asStr = input && input.toString ? input.toString() : '';
//     if (['true', 'false'].includes(asStr)) return 'Boolean';
//     if (!Number.isNaN(Number(asStr))) return 'Number';
//     if (asStr.startsWith('async')) return 'Async';
//     if (asStr === '[object Promise]') return 'Promise';
//     if (typeOf === 'function') return 'Function';
//     if (input instanceof String) return 'String';
//     return 'Object';
// };
// (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function clone(val) {
//     const out = Array.isArray(val) ? Array(val.length) : {};
//     if (val && val.getTime) return new Date(val.getTime());
  
//     for (const key in val) {
//       const v = val[key];
//       out[key] = typeof v === 'object' && v !== null ? v.getTime ? new Date(v.getTime()) : clone(v) : v;
//     }
  
//     return out;
// };
// (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function paths(pathsInput, obj) {
//     return pathsInput.map(singlePath => path(singlePath, obj));
//   },
const pick = function(keys, obj) {
    if (arguments.length === 1) return _obj => pick(keys, _obj);
  
    if (obj === null || obj === undefined) {
      return undefined;
    }
  
    const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
    const willReturn = {};
    let counter = 0;
  
    while (counter < keysValue.length) {
      if (keysValue[counter] in obj) {
        willReturn[keysValue[counter]] = obj[keysValue[counter]];
      }
  
      counter++;
    }
  
    return willReturn;
};
const pickAll = function(keys, obj) {
    if (arguments.length === 1) return _obj => pickAll(keys, _obj);
  
    if (obj === null || obj === undefined) {
      return undefined;
    }
  
    const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
    const willReturn = {};
    let counter = 0;
  
    while (counter < keysValue.length) {
      if (keysValue[counter] in obj) {
        willReturn[keysValue[counter]] = obj[keysValue[counter]];
      } else {
        willReturn[keysValue[counter]] = undefined;
      }
  
      counter++;
    }
  
    return willReturn;
};
const prop = function(key, obj) {
    if (arguments.length === 1) return _obj => prop(key, _obj);
    if (!obj) return undefined;
    return obj[key];
};
const propOr = function(defaultValue, p, obj) {
    if (arguments.length === 2) return _obj => propOr(defaultValue, p, _obj);
    if (arguments.length === 1) return (_p, _obj) => propOr(defaultValue, _p, _obj);
    if (!obj) return defaultValue;
    return defaultTo(defaultValue, obj[p]);
};
const set = function(lens, v, x) {
    if (arguments.length === 1) return (_v, _x) => set(lens, _v, _x);
    if (arguments.length === 2) return _x => set(lens, v, _x);
    return over(lens, always(v), x);
};
const toPairs = function(obj) {
    return Object.entries(obj);
};
const values = function(obj) {
    if (type(obj) !== 'Object') return [];
    return Object.values(obj);
};
const view = function(lens, target) {
    if (arguments.length === 1) return _target => view(lens, _target);
    return lens(Const)(target).x;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const PARADIGM_STLYER = function(sel){

};
const PARADIGMS = {
  "FUNCTIONAL":{},
  "OOP"       :{}
};
const OOP_PARADIGM_STYLER = function(instance,obj){
    // var chainResult = function(instance, obj) {
        return instance._chain ? _(obj).chain() : obj;
    //   };
};


const THROWE = function(){THROWE();};
const datatypes:string[] = ["boolean","string","number","object","array","symbol","function"];
const _lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
const _upperCase = _lowerCase.map(v => v.toUpperCase());
const _symbols   = ["!@#$%^&*()_+{}[]-=|;:'\"\\?,.<>`~"];
const isSafe        =   v => S._Number.isSafeInteger(v);
const isTrue        =   v => v === true;
const isFalse       =   v => v === false;
const isInfinity    =   v => v === Infinity;
const isFinite      =   v => S._isFinite(v);
const isMaxValue    =   v => v === Number.MAX_VALUE;
const isMinValue    =   v => v === Number.MAX_VALUE;
const isMaxSafeValue=   v => v === Number.MAX_SAFE_INTEGER;
const isMinSafeValue=   v => v === Number.MIN_SAFE_INTEGER;
const isNaN         =   v => S._isNaN(v);
const isPositive    =   v => 0 < v;
const isNegative    =   v => 0 > v;
const isZero        =   v => v === 0;
const isFloat       =   v => S._String(v).includes(".");
const isInteger     =   v => !S._String(v).includes(".");
const isAlpha       =   v => [..._lowerCase,..._upperCase].includes(v);
const isLowerCase   =   v => _lowerCase.includes(v);
const isUpperCase   =   v => _upperCase.includes(v);
const isSymbol      =   v => _symbols.includes(v);
const isThis        =   v => v.toString().includes("function ");
const isAnon        =   v => v.toString().includes("function(");
const isLambda      =   v => v.toString().includes("=>");
const isEmpty       =   function(v){
                            return {
                                "str":v=>v.length===0,"obj":v=>S._Object.keys(v).length===0,
                                "arr":v=>v.length===0,"fnc":v => v.toString()
                            }[(S._Array.isArray(v) && "arr") || (typeof v)](v);
};
const isNotEmpty    = (v)=>{
                            return {
                                "str":v=>v.length!==0,"obj":v=>S._Object.keys(v).length !== 0,
                                "arr":v=>v.length!==0,"fnc":v=>v.toString()
                            }[(S._Array.isArray(v) && "arr") || (typeof v)](v);
};
const getParams = function(func){
    const start = func.toString().indexOf("(");
    const end   = func.toString().indexOf(")");
    return func.toString().slice(start+1,end).split(",");
};
const assertIndependence = f => name(f.toString()).is(allSamCase)&&name(f.toString()).is(allAlpha);
const assertCompound     = f => name(f.toString()).is(allTwoCase)&&name(f.toString()).is(allAlpha);
const assertComplex      = f => name(f.toString()).is(allMulCase)&&name(f.toString()).is(allAlpha);

// const allSamCase         = e => {let _ = e.slice().shift(); e = (isLowerCase(_) && isLowerCase) || (isUpperCase(_) && isUpperCase);  for (let k in e) { true === _(e) || THROWE(); }};
// const allTwoCase         = e => {let a,b,c;   for (let k in e){ (isLowerCase(_) && a=true) || (isUpperCase(_) && b=true) || c=true; }; return (a&&b)^c};
// const allMulCase         = e => {let a = false, b = false, c = false;for (let k in e) { (isLowerCase(k)&&a=true) || (isUpperCase(k)&&b=true) || (isSymbol(k)&&c=true)};return a&&b&&c;};
const allAlpha           = e => {e.forEach(isAlpha); return true};
const isAlpha            = e => {return e >= "a" && e <= "Z";};
const isSymbol           = e => {return "`~!@#$%^&*()_+-=[]{};':\",.<>/?".includes(e);};
const isLowerCase        = e => {return e >= "a" && e <= "z";};
const isUpperCase        = e => {return e => "A" && e <= "Z";};


const notEmpty               = v => (isArray(v)            && throwE("must not be empty",(v.length > 0))
                                ||  (typeof v === "object" && throwE("must not be empty",(S._Object.keys(v).length > 0)))
                                ||  (typeof v === "string" && throwE("must not be empty",(v.length > 0)))
                                ||  (false)
);
const hasOwnProperty         = (obj,prop) => throwE("must have prop "+prop, obj.hasOwnProperty(prop));



const standardString		:Function = (val:string):void    => {typeof val === "string"   || throwE("string required"); val.length > 0 || throwE("len must be gt 0");};
const standardStringArray	:Function = (val:string[]):void  => {Array.isArray(val) 	   || throwE("array required");val.forEach(standardString);};
const arrayIncludes			:Function = (arr:any[]):Function => {return (val:any):void=>{arr.includes(val) || throwE("unexpected value");}};

const period = (e: string) => {
    if (e[0] === ".") {
        if (e[1] === ".")           e = "../" + e;
        else if (e[1] === "/")      e.shift(), e.shift(), e = "../" + e;
        else                        {THROWE();}
    }
    return e;
};

const loopObject             = (obj,cb) => { for (let k in obj) cb(obj,k); };


const enforce_object_datas   = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(isNotFunction);};
const enforce_object_methods = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(isFunction);};
const enforce_object_propsss = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(isNotFunction);};
const enforce_object_nulls   = v => {isObject(v);isNull(v);};
const enforce_settings       = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(enforceSetting);};
const enforce_setting        = v => {};


const removeDuplicateUsingSet = function(arr){
    let unique_array = S._Array.from(new Set(arr))
    return unique_array;
};
const is                 = v => {};
// const name               = e => {for (let k in e) {}return {};};

const TYPESTATE = Object.freeze(Object.assign(function(v,meth){

  // TYPEID[typeof v][]


},{
bol : {isTrue,isFalse},
num : {isSafe,isInfinity,isFinite,isMaxValue,isMinValue,isZero,isNaN,isPositive,isNegative,isInteger,isFloat},
str : {isEmpty,isNotEmpty,isAlpha,isSymbol,isLowerCase,isUpperCase},
fnc : {isEmpty,isNotEmpty,isThis,isLambda,isAnon},
obj : {isEmpty,isNotEmpty},
arr : {isEmpty,isNotEmpty},
sym : {isEmpty,isNotEmpty},
cla : {isEmpty},
und : {},
nul : {}
}));
const PROPSALTERED = Object.freeze(Object.assign(function(){

},{
/*const*/ BOL  : v => {},
/*const*/ NUM  : v => {},
/*const*/ STR  : v => {},
/*const*/ OBJ  : v => {},
/*const*/ ARR  : v => {return Object.assign([],v).length !== 0},
/*const*/ SYM  : v => {},
/*const*/ SET  : v => {},
/*const*/ FNC  : v => {},
/*const*/ CLS  : v => {},
/*const*/ NUL  : v => {},
/*const*/ UND  : v => {},
}));

const consT = function(script){
    isString(script);
};


// RAW STATEMENTS
const IF0      = function(){if(c0) return cb0()};
const IF1      = function(){if(c0) return cb0(); else return cb1();};
const IF2      = function(){if(c0) return cb0(); else if (c1) return cb1(); else return cb2();};
const IFZ      = function(){
  if (c0) return cb0();
  else {
    for (let k in arr) if (arr[k][0]) return arr[k][1]();
  }  
};

// CUSTOMIZED STATEMENTS

console.warn(`
  An example
  *** else statement triggered ... throw new Error("unaacounted input");
`);




/*1)  STRUCTURAL PRESENTATIONS


    * TYPES
    * INTERACES
    * ABSTRACTIONS


*/
/*export*/ interface paramsLoader {
    (paramsOBJ:paramsOBJ): {paramsOBJ} | {create,read,update,delete}
};
/*export*/ interface paramsOBJ {
    [index: string]: string
    // let pS = { // params_obj
        // name: function as string
        // func: `$DTypes.function($p)`,
        // prop: `$DTypes.string($p)`,
        // obj:  `$DTypes.object($p)`,
        // cb:   `$Dtypes.function($p)`,
        // prop: `$Dtypes.string($p)`,
        // val:  `$Dtypes.undefined($p)`
    // };
};
/*export*/ interface func0props {
    validate: Function,
    block: Function
}
/*export*/ interface func0loaderobj {
    funClite: Function,
    paramsOBJ:paramsOBJ
}
/*export*/ interface func0Loader {
    (paramsOBJ:paramsOBJ): func0loaderobj
}
/*export*/ interface interface_pm {
	globalConfig,
	instance,
	funC
};
/*export*/ interface interface_funCinterface {
	name, description, author,
	notes,
	isStrict,isAsync,isThis,isCapsule,
	inputType,outputType,
	params,
	inputBehavior,outputBehavior,
	onError,
	validations,block,spec
};


type validate = Function;
type block    = Function;
type neW      = Function;
type deletE   = Function;
type extend = Function;
type implement = Function;

type debug = Boolean;   
type public_reflects_imports = Boolean; 
type public_async = Boolean;  
type public_reflects_static = Boolean;
type singleton = Boolean;
type public_reflects_internal = Boolean;
type public_visible = Boolean;  
type public_methods_auth = Boolean;
type public_mutable = Boolean;  
type public_expires = Boolean;
type public_gettable = Boolean;  
type public_auth = Boolean;
type public_settable = Boolean;  
type public_chainable = Boolean;
type public_input_interface = Object;   
type sessionable_requests = Boolean;
type public_output_interface = Object;   
type maximum_requests_concurrently = Boolean | Number;                              
type public_output = String;  
type hot_reload = Boolean;     
type name = String;
type extendS = Array<object>;
type implementS = Array<object>;
type constructor = Function;
type imports = string[];

type di  = enumStrAny;  type mi  = enumStrFunc;
type ds  = enumStrAny;  type ms  = enumStrFunc;
type dp  = enumStrAny;  type mp  = enumStrFunc;
type dp1 = enumStrAny;  type mp1 = enumStrFunc;
type dp2 = enumStrAny;  type mp2 = enumStrFunc;

/*export*/ interface funClite                   {   
    validate:   validate,   block:  block    
};
/*export*/ interface claS {
    (setupOBJ:setupOBJ):__claS__public
}
/*export*/ interface __claS__public             {};
/*export*/ interface __claS__instance_public    {
    new:        neW,        extend:     extend,
    delete:     deletE,     implement:  implement
};
/*export*/ interface enumStrFunc    {   [index: string]: Function   };
/*export*/ interface enumStrAny     {   [index: string]: any        };
/*export*/ interface settings {
    debug:                       debug,             public_reflects_imports:         public_reflects_imports,
    public_async:                public_async,      public_reflects_static:          public_reflects_static,
    singleton:                   singleton,         public_reflects_internal:        public_reflects_internal,
                                        
    public_visible:              public_visible,    public_methods_auth:             public_methods_auth,
    public_mutable:              public_mutable,    public_expires:                  public_expires,
    public_gettable:             public_gettable,   public_auth:                     public_auth,
    public_settable:             public_settable,   public_chainable:                public_chainable,

    public_input_interface:      public_input_interface,    sessionable_requests:            sessionable_requests,
    public_output_interface:     public_output_interface,   maximum_requests_concurrently:   maximum_requests_concurrently,                              
    public_output:               public_output,             hot_reload:                      hot_reload     
};
/*export*/ interface setupOBJ {
    name:String, extends:Array<object>, implements:Array<object>,
    constructor:    constructor,
    settings:       settings,
    imports:        imports,
    events:         events,
    di:di,ds:ds,dp:dp,dp1:dp1,dp2:dp2,
    mi:mi,ms:ms,mp:mp,mp1:mp1,mp2:mp2
};
/*export*/ interface events         {   

};
/*export*/ interface __this__       {   [index:string]:any              };

/*export*/ interface __internal__   {   di: enumStrAny, mi: enumStrFunc };
// /*export*/ interface __imports__    {                                   };
/*export*/ interface __public__     {   dp: enumStrAny, mp: enumStrFunc };
/*export*/ interface __middlemans__ {                                   };
/*export*/ interface __static__     {   ds: enumStrAny, ms: enumStrFunc };
// /*export*/ interface __settings__   {
//                                     debug:                  Boolean,
//                                     singleton:              Boolean,
//                                     public_visible:         Boolean,
//                                     public_mutable:         Boolean,
//                                     public_gettable:        Boolean,
//                                     public_settable:        Boolean,
//                                     public_methods_auth:    Boolean,
//                                     public_reflects_static: Boolean,
//                                     sessionable_requests:   Boolean,
//                                     public_output:          String       
// };
/*export*/ interface __mem__ {
    (setupOBJ:setupOBJ):{
        __settings__    :__settings__,
        __imports__     :__imports__,
        __middlemans__  :__middlemans__,
        __internal__    :__internal__,
        __static__      :__static__,
        __public__      :__public__,
        __constructor__ :__constructor__
    }
};
/*export*/ interface buildPublic {
    (
        __internal__    :__internal__,
        __static__      :__static__,
        __public__      :__public__,
        __settings__    :__settings__,
        __imports__     :__imports__,
        __middlemans__  :__middlemans__,
        constructorBlock:Function
    ):Function
};
/*export*/ interface publicConstruction {
    (
        __this__        :__this__,
        __internal__    :__internal__,
        __static__      :__static__,
        __public__      :__public__,
        __settings__    :__settings__,
        __imports__     :__imports__,
        __middlemans__  :__middlemans__,
        constructorBlock:Function
    ):void
};
/*export*/ interface constructionComplete {
    (
        __settings__    :__settings__,
        __this__        :__this__,
        __internal__    :__internal__
    ):void
};









//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*2)  LANGUAGE CONSTRUCT REVAMP & HARDENING




*/
/*export*/ const params:paramsLoader = function(paramsOBJ){
    // no duplicates allowed --> objects don't automatically overwrite duplications
    if (!paramsOBJ) {THROWE();}
    for (let k in paramsOBJ) { eval(`paramsOBJ[k] = function(${k}){ return ${paramsOBJ[k].replace("$p",k)}; }`); }
    return paramsOBJ;
};
//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ const capsule = function(cb:Function, props:{[index:string]:any}) {
    for (let k in props) {
        !restrictedProps.includes(k) || THROWE()
    }
    return S._Object.freeze(S._Object.assign(cb,props));
};
/*export*/ const restrictedProps = [
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
/*export*/ const closure = function(cb, variables) {
    /** Mock Representation ... real version needs to parse cb and variables,
     * 
     * then replace real values in placheholders.
     * 
     *  
    */
    const v = variables;
    const f = cb.bind({
        sd: v.sd,
        pd: v.pd,
        sm: v.sm,
        pm: v.pm
    });
    return f;
};
//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ const clone = capsule(function(v:any):any {
        let tP = typeof v;
        if (tP === 'boolean') 	return clone[tP](v);
        if (tP === 'number')  	return clone[tP](v);
        if (tP === 'string')  	return clone[tP](v);
        if (Array.isArray(tP))  return clone['array'](v);
        if (tP === 'function')	return clone[tP](v);
        if (tP === 'object')    return clone[tP];
        return ['cloning error, type v is not builtin datatype '+v];
    },{
        boolean  : function(v:boolean) {return !!v;},
        number   : function(v:number) {return v+0;},
        string   : function(v:string) {return v.slice();},
        array    : function(v:any[]) {return v.slice();},
        object   : function(v:object) {return Object.assign({}, v);},
        function : function(v:Function) {const temp = v; return temp;/*new Function('return ' + v.toString())();*/}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
const Vobj0 = function(v:any){   // strictest object validation
    if (S._Array.isArray(v) || typeof v !== "object")  return false;
    let k = S._Object.keys(v);
    if (k.len === 0)                                return false;
    for (let e in k) {
        if (FORBIDDEN_OBJECT_PROPS.includes(k[e]))  return false;    
    }
                                                    return true;
};
const Vobj1 = function(v:any){   // loosest object validation
    if (S._Array.isArray(v) || typeof v !== "object")  return false;
    let k = S._Object.keys(v);
    if (k.len !== 0)                                return false;
    for (let e in k) {
        if (FORBIDDEN_OBJECT_PROPS.includes(k[e]))  return false;    
    }
                                                    return true;
};
const Vobj2 = function(v:any){   // loosest object validation
    if (S._Array.isArray(v) || typeof v !== "object")  return false;
    let k = S._Object.keys(v);
    for (let e in k) {
        if (FORBIDDEN_OBJECT_PROPS.includes(k[e]))  return false;    
    }
                                                    return true;
};

const Vnum0 = function(v:any){  // strictest number validation
    if (S._Number.isNaN(v))                            return false;
    if (typeof v !== "number")                      return false;
    if (!S._Number.isSafeInteger(v))                   return false;
    if (!S._Number.isFinite(v))                        return false;
    /*passed*/                                      return true;
};
const Vnum1 = function(v:any){ // second strictest number validation
    if (S._Number.isNaN(v))                            return false;
    if (typeof v !== "number")                      return false;
    if (!S._Number.isFinite(v))                        return false;
    /*passed*/                                      return true;
};
const Vnum2 = function(v:any){ // 3rd strictest number validation
    if (S._Number.isNaN(v))                            return false;
    if (typeof v !== "number")                      return false;
    /*passed*/                                      return true;
};

const Vstr0 = function(v:any){ // strictest string validation
    if (typeof v !== "string")                      return false;
    if (v.length === 0)                             return false;
    /*passed*/                                      return true;
};
const Vstr1 = function(v:any){ // 2nd strictest string validation
    if (typeof v !== "string")                      return false;
    if (v.length !== 0)                             return false;
    /*passed*/                                      return true;
};
const Vstr2 = function(v:any){ // 2nd strictest string validation
    if (typeof v !== "string")                      return false;
    /*passed*/                                      return true;
};

const Vfnc0 = function(v:any){ // strictest function validation
    if (typeof v !== "function")                    return false;
    if (!isFunction(v))                             return false;
    if (isEmpty(v))                                 return false;
    /*passed*/                                      return true;  
};
const Vfnc1 = function(v:any){ // 2nd strictest function validation
    if (typeof v !== "function")                    return false;
    if (!isFunction(v))                             return false;
    if (isNotEmpty(v))                              return false;
    /*passed*/                                      return true;  
};
const Vfnc2 = function(v:any){ // 2nd strictest function validation
    if (typeof v !== "function")                    return false;
    if (!isFunction(v))                             return false;
    /*passed*/                                      return true;  
};
const Vlmd0 = function(v:any){ // strictest lambda validation
    if (typeof v !== "function")                    return false;
    if (!isLambda(v))                               return false;
    if (isNotEmpty(v))                              return false;
    /*passed*/                                      return true;  
};
const Vlmd1 = function(v:any){ // strictest lambda validation
    if (typeof v !== "function")                    return false;
    if (!isLambda(v))                               return false;
    if (isEmpty(v))                                 return false;
    /*passed*/                                      return true;  
};
const Vlmd2 = function(v:any){ // strictest lambda validation
    if (typeof v !== "function")                    return false;
    if (!isLambda(v))                               return false;
    /*passed*/                                      return true;  
};
const Vsym0 = function(v:any){ // strictest symbol validation
    if (typeof v !== "symbol")                      return false;
    THROWE("UNFINISHED");
    /*passed*/                                      return true;
};
const Vsym1 = function(v:any){ // strictest symbol validation
    if (typeof v !== "symbol")                      return false;
    THROWE("UNFINISHED");
    /*passed*/                                      return true;
};

const Vcls0 = function(v:any){ // strictests class validation
    if (typeof v !== "function")                    return false;
    if (!newable(v))                                return false;
    if (isEmpty(v))                                 return false;
    if (!isClas(v))                                 return false;
    /*passed*/                                      return true;
};
const Vcls1 = function(v:any){ // loosest class validation
    if (typeof v !== "function")                    return false;
    if (!newable(v))                                return false;
    if (!isEmpty(v))                                return false;
    if (!isClas(v))                                 return false;
    /*passed*/                                      return true;
};
const Varr0 = function(v:any){ // strictest array validation
    /** 
     * surprisingly the length can be messed with
     * 
     * *** all the array properties can be messed with
    */
    if (!S._Array.isArray(v))                          return false;
    if (isEmpty(v))                                 return false;
    if (ARRPROPSALTERED(v))                         return false;                
    /*passed*/                                      return true;
};
const Varr1 = function(v:any){ // 2nd strictest array validation
    if (!S._Array.isArray(v))                          return false;
    if (!isEmpty(v))                                return false;
    if (ARRPROPSALTERED(v))                         return false;                
    /*passed*/                                      return true;
};
const Varr2 = function(v:any){ // loosest array validation
    if (!S._Array.isArray(v))                          return false;
    if (ARRPROPSALTERED(v))                         return false;                
    /*passed*/                                      return true;
};
const Vund0 = function(v:any){ // strictest undefined validation
    if (v === undefined)                            return true;
    else                                            return false;
};
const Vund1 = function(v:any){ // strictest undefined validation
    if (v ==  undefined)                            return true;
    else                                            return false;
};
const Vnul0 = function(v:any){ // strictest null validation
    if (v === null)                                 return true;
    else                                            return false;
};
const Vnul1 = function(v:any){ // loosest null validation
    if (v == null)                                  return true; 
    else                                            return false;
};
const Vbol0 = function(v:any){ // strictest boolean validation
    if (typeof v === "boolean")                     return true;
    else                                            return false;
};

/*export*/ const DType = capsule(function(){
    THROWE("NOTFINISHED");
},{
    bol:   [Vbol0],
    num:   [Vnum0,Vnum1,Vnum2],       
    str:   [Vstr0,Vstr1,Vstr2],
    obj:   [Vobj0,Vobj1,Vobj2],
    fnc:   [Vfnc0,Vfnc1,Vfnc2],
    cla:   [Vcls0,Vcls1],
    sym:   [Vsym0,Vsym1],
    arr:   [Varr0,Varr1,Varr2],
    und:   [Vund0,Vund1],
    nul:   [Vnul0,Vnul1]
});
//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ const LOOP = {};
const Loop_for                = function(){}; // for loop
const Loop_forever            = function(){}; // no explanation rqd
const Loop_while              = function(){}; // while loop
const Loop_break              = function(){}; // stops loop
const Loop_continue           = function(){}; // skips loop iteration
const Loop_each               = function(){}; // forEach iteration
const Loop_deep               = function(){}; // loops everything loopable
const Loop_deepNoRecursion    = function(){}; // stacks all recursions into one list
const Loop_cycle              = function(){}; // loop in circles
const Loop_filter             = function(){}; // returns conditions matched
const Loop_checklist          = function(){}; // ensures all info meets passes conditions
const Loop_interval           = function(){}; // loop in time ms increments
const Loop_when               = function(){}; // mem-value equals
const Loop_before             = function(){}; // 
const Loop_after              = function(){}; // 
const Loop_noNest             = function(){}; // 
const Loop_split              = function(){}; //
const Loop_merge              = function(){}; //

const Loop_skip               = function(){}; // iterator fluxor
    // vs
const Loop_pingpong           = function(v,cbs){  }; // next exe memory swaping // instead of conditionals drags
const ENTER = v => (typeof v=== "string"||typeof v==="object"||Array.isArray(v));
const filter = function(v,hit,miss,conditions){
    if      (conditions(e)) return hit.push(v);
    else                    return miss.push(v);
};
const checklist = (v) => {for (let i=0;i^v.length;i++){ if (v[i] !== true) return false; }return true;}
const interval = (ms,cb)=>(setInterval(cb,ms));
const forever = function(cb){while (true) {cb();}};
const cycle = function() {};
//////////////////////////////////////////////////////////////////////////////////////////////////


import { params,paramsOBJ } from "../params/main";
let pS = {};
////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// INTERNAL CODE
////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ const funCLite:func0Loader = function(paramsOBJ){
    return {
        funClite: func0,
        paramsOBJ: (pS = params(paramsOBJ))
    }
};
const func0 = function(func0props){
    return capsule(
      function(){
        funC0validate(func0props.block,func0props.validate(arguments));
        return func0props.block(...arguments);
      },
      func0props
    );
};
const funC0validate = function(funCBlock,funCvalidate) {
    if (typeof funCBlock    !== "function") {THROWE();}
    if (typeof funCvalidate !== "function") {THROWE();}
    const _params = getParams(funCBlock);
    return function() {
        return _params.every((e,i)=>{
            return pS[e](arguments[i]);
        }) && funCvalidate(arguments);
    };
};

//////////////////////////////////////////////////////////////////////////////////////////////////

let gConfig:   {[index: string]: {}} = {};
let instances: {[index: string]: {}} = {};
let configs:   {[index: string]: {}} = {};
let funcs:     {[index: string]: {}} = {};

// /*export*/ const funC = function(){}

const intF:interface_funCinterface 	= funCinterface;
const itf_keys: string[] 			= Object.keys(intF);

const incConfig:Function = function(config:{[index: string]: {}},name:string):void {
	name = name || THROWE();
	configs[name] = config;
};
const inheritConfig:Function = function(config_inherit:{[index: string]: {}}, config_inheritor:{[index: string]: {}}):void {
	for (let k in config_inherit) !config_inheritor.hasOwnProperty(k) && (config_inheritor[k]=config_inherit[k]);
};
let confiGmain = function(config:{[index: string]: {}}){
		allPropsRequired:for (let k in itf_keys) {
			k = itf_keys[k];
			// console.log(k, config[k]);
			if (!config.hasOwnProperty(k)) {THROWE(k);}
		}
		allPropsValidated:for (let k in itf_keys) {
			k = itf_keys[k];
			// console.log(k, config[k]);
			intF[k](config[k]);
		}
};
/*export*/ const parseFunction = (function(func:Function) {
    
    // looking for variables references.
    // does not allow this references

    // if it finds duplicate variable references it reports it's findings.

    // console.warn("parse progam unprogrammed");
    
    

});
/*export*/ const parser = function(functioN:Function) {
    /** 
     * - extracts information from regular code into funC template 
     * - possibly detects errors
    */
	return ()=>({
		validate: ()=>({}),
		block:	  ()=>({})
	});
},({
hasName         	:() =>  ,
hasDescription      :() =>  ,
hasAuthor         	:() =>  ,
hasNotes         	:() => f.toString().includes("//"),
hasAsync         	:() => f.toString().indexOf("async") < 3,
hasThis         	:f =>  f.toString().indexOf("function") < 2,
hasCapsule         	:f =>  f.toString().slice(0,1) === "(",
hasInputType        :() =>  ,
hasOutputType       :() =>  ,
hasInputBehavior    :() =>  ,
hasOutputBehavior   :() =>  ,
hasOnError         	:() =>  f.toString().includes("throw"),
hasValidations      :() =>  /**memntioned 2x or more */,
hasBlock         	:() =>  /**mentioned once */,
hasSpec         	:() =>  /**recognized lib or console.assert */,
});
const fakeIfNull = function(obj,prop:string,val:any):void {
	if (!obj.hasOwnProperty(prop)) {obj[prop] = val;}
};	
let obj = {};
const d = ["arguments","console","return","callback","onError/onSuccess","onTrue/onFalse","throw"];
["name","description","author"]				.forEach((e)=>{ obj[e] = standardString;});
["notes","params"]					   		.forEach((e)=>{ obj[e] = standardStringArray;});
["isStrict","isAsync","isThis","isCapsule"]	.forEach((e)=>{ obj[e] = standardBoolean;});
["inputType","outputType"]					.forEach((e)=>{ obj[e] = arrayIncludes(datatypes);});
["inputBehavior"]							.forEach((e)=>{ obj[e] = arrayIncludes([d[0],d[1]]);});
["outputBehavior"]							.forEach((e)=>{ obj[e] = arrayIncludes([d[1],d[2],d[3],d[4],d[5]]);});
["onError"]									.forEach((e)=>{ obj[e] = arrayIncludes([d[6]]);});
["validations","block","spec"]				.forEach((e)=>{ obj[e] = vFunction;});
/*export*/ const funCinterface:interface_funCinterface = obj;
const fakeIfNull = Object.assign(function(){},{
"namE" 			: function(obj) {fakeIfNull(obj,'name',			"fake name to pass test");};
"description" 	: function(obj) {fakeIfNull(obj,'description',	"fake description to pass the test");};
"author"		: function(obj) {fakeIfNull(obj,'author',		"fake author")};
"notes" 		: function(obj) {fakeIfNull(obj,'notes',		["fake notes to pass the test"]);};
"validations" 	: function(obj) {fakeIfNull(obj,'validations',	()=>{/*fake*/});};
"block" 		: function(obj) {fakeIfNull(obj,'block',		()=>{/*fake*/});};
"spec" 			: function(obj) {fakeIfNull(obj,'spec',			()=>{/*fake*/});};
});

const loopInterface = function(config){S._Object.keys(fakeIfNull).forEach(e=>{fakeIfNull[e](config)})};
const assignInstance = function(config,name){return instances[name]=config;};
const confiGglobal:Function = function(config:{[index: string]: {}}):interface_pm{
	loopInterface(config);
	confiG(config);	
	gConfig = config;
	configs["global"] = gConfig;
	return pm;
};
const confiGinstance:Function = function(name:string,config:{[index: string]: {}}) {
	if (!name) 				 {THROWE();}
	if (name&&config) {
		if (instances[name]) {THROWE("no duplicates allowed")}
		gConfig = S._Object.assign({},gConfig);
		inheritConfig(gConfig, config);
		loopInterface(config);
		confiG(config);	
		assignInstance(config,name);
		incConfig(config,name);
	} 
	else if (name) 		   {	assignInstance(config,name) || (()=>{THROWE();})();} 
	else 				   {	THROWE();	s}
	return {funC:func.bind({config:config})};
};
const confiGfunC:Function = function(config):void {
	confiG(config);
	incConfig(config, config.name);
};
/*export*/ interface interface_meths {
	global,
	instance,
	funC
};
const meths = {
	global:confiGglobal,
	instance: confiGinstance,
	funC: confiGfunC
};
const confiG = S._Object.freeze(S._Object.assign(confiGmain,meths));
const func:Function = function(config):Function {

	if (typeof this.config === "object") {inheritConfig(this.config,config);}

	confiG.funC(config);
	let c = config;
	templatefunction: {
		const name 					= c.name;
		const description 			= c.description; 
		const author				= c.author;
		const notes					= c.notes;
		const params				= c.params;
		const strict				= c.isStrict?'"use strict";':"";
		const async					= c.isAsync?'async ':''; 		
		const _this = c.isThis? (`${async}function ${name}(${params}) `):(`const ${name} = ${async}(${params}) => `);
		// let isCapsule		    = c.isCapsule === true;
		const inputType				= c.inputType;
		const outputType			= c.outputType;
		const inputBehavior			= c.inputBehavior;
		const outputBehavior      	= c.outputBehavior;
		const onError 				= c.onError;

		const validations			= c.validations;
		const block					= c.block;
		const spec					= c.spec;

		const cb = `/*
		* author: ${author}
		* description: ${description}
		* notes: ${notes}
		*/
		return (${validations})(${params}) && (${block})(${params});
		/* spec
			${spec}
		*/`;
		console.log(cb); 
		return new Function(params, `${cb}`);
	}
};
const pm000:interface_pm = Object.freeze({
	globalConfig: confiG.global,
	instance: confiG.instance,
	funC: func
});
// /*export*/ const funC:interface_pm = pm;

/*export*/ const funC = pm000;

//////////////////////////////////////////////////////////////////////////////////////////////////











let claS_roster = [];

/*export*/ const claS:claS = function(setupOBJ) {

    independent_validations:    for (let k in setup) {setup[k].validate(setupOBJ);}
    crossexamine_validations:   {noDuplicates123456(setupOBJ);}
    
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



const __clas__public = function(){};
const __clas__public__instance = function(PUBLIC){
    return S._Object.freeze({
        new:        neW(PUBLIC),
        delete:     deletE(PUBLIC),
        extend:     extenD(PUBLIC),
        implement:  implemenT(PUBLIC)
    });
};
const neW = function(PUBLIC)        {return function(){return new PUBLIC(...arguments);}};
const deletE = function(PUBLIC)     {return function(){};};
const extenD = function(PUBLIC)     {return function(){};};
const implemenT = function(PUBLIC)  {return function(){};};
 
const noDuplicates123456 = function(setupOBJ:setupOBJ) {
    let a = S._Object.keys(setupOBJ.dp||{});
    let b = S._Object.keys(setupOBJ.mp||{});
    let c = S._Object.keys(setupOBJ.protectData||{});
    let e = S._Object.keys(setupOBJ.privateData||{});
    let f = S._Object.keys(setupOBJ.privateMethods||{});
    let oriG = a.concat(b).concat(c).concat(d).concat(e).concat(f);
    let neW = removeDuplicateUsingSet(oriG);
    neW.length === oriG.length || (()=>{THROWE()})()
};

/*export*/ const parseClass = (function(){
    
});

let list_mem = ["__settings__","__imports__","__middlemans__","__internal__","__static__","__public__","__constructor__"];
const __mem__ = S._Object.assign(list_mem,list_mem.map((e,i)=>{
    let obj;
    eval(`
        obj={
            default:    props[${i}][0],
            validate:   props[${i}][1],
            block:      props[${1}][2]
        };
    `);
    return obj;
}));
const default__settings__   = () => ({
    debug:                          false,
    singleton:                      false,
    public_visible:                 false,
    public_mutable:                 false,
    public_gettable:                false,
    public_settable:                false,
    public_methods_auth:            false,
    public_reflects_static:         false,
    public_chainable:               false,
    public_async:                   false,
    // public_output:          "",  
    public_expires:                 false,
    public_auth:                    false,
    public_input_interface:         false,
    public_output_interface:        false,
    sessionable_requests:           false,
    maximum_requests_concurrently:  false,
    hot_reload:                     false
});
const props = [    // validates can be empty for now since file setupOBJ does all the heavy lifting.`
/**             default                                validate      block                                          */
// /*imports*/     [() => ({})                            ,()=>{}       ,(o,z)  => iP.block(o,z)],
// /*middlemans*/  [() => ({})                            ,()=>{}       ,z      => clone(z)],
/*intenal*/     [() => ({"mi":{},"di":{"instances":0}}),()=>{}       ,(o,z)  => (mi.block(o,z),di.block(o,z)],
/*static*/      [() => ({"ds":{},"ms":{}})             ,()=>{}       ,o      => ms.block(o,statiC.default())],
/*public*/      [() => ({"dp":{},"mp":{}})             ,()=>{}       ,o      => ({"dp": o.dp, "mp":o.mp})],
                [() => ({})],
/*settings*/    [()=>{}],
/*constructor*/ [()=>{}]
//  block__constructor__   = 
];

// console.warn(`A distinction needs to be made between internal, static, public`);
// console.warn(`A distinction needs to be made between method & data`);
const setupobJ = function(){ return capsule(function(){

},
{                      // validations                              // block                    
/*const*/  extends    : [[hasOwnProperty,isObject,notEmpty,uhhhh]   ,clone],
/*const*/  implements : [[hasOwnProperty,isObject,notEmpty,uhhhh]   ,clone],
/*const*/  name       : [[hasOwnProperty,isString,notEmpty]         ,clone],
/*const*/  settings   : [[hasOwnProperty,isObject,notEmpty]         ,clone],
/*const*/  imports    : [[hasOwnProperty,isObject,notEmpty]         ,clone&&block_imports],
/*const*/  events     : [[hasOwnProperty,isObject,notEmpty]         ,clone],
/*const*/  di         : [[enforce_object_datas]                     ,clone],
/*const*/  ds         : [[enforce_object_datas]                     ,clone],
/*const*/  dp         : [[enforce_object_datas]                     ,clone],
/*const*/  dp1        : [[enforce_object_datas]                     ,clone],
/*const*/  dp2        : [[enforce_object_datas]                     ,clone],
/*const*/  mi         : [[enforce_object_methods]                   ,[block_mi,clone]],
/*const*/  ms         : [[enforce_object_methods]                   ,[block_ms,clone]],
/*const*/  mp         : [[enforce_object_methods]                   ,[block_mp,clone]],
/*const*/  mp1        : [[enforce_object_methods]                   ,[block_mp1,clone]],
/*const*/  mp2        : [[enforce_object_methods]                   ,[block_mp2,clone]],
/*const*/  constructor: [[enforce_object_methods]                   ,[clone]]
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
consT(`
debug:                          false,
singleton:                      false,
public_visible:                 false,
public_mutable:                 false,
public_gettable:                false,
public_settable:                false,
public_methods_auth:            false,
public_reflects_static:         false,
public_chainable:               false,
public_async:                   false,
// public_output:          "",  
public_expires:                 false,
public_auth:                    false,
public_input_interface:         false,
public_output_interface:        false,
sessionable_requests:           false,
maximum_requests_concurrently:  false,
hot_reload:                     false
`);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const uhhhh = function(obj) {   
    // loopObject(obj, (obj,k)=>{ loopObject(obj.extends, k) });
    S._Object.keys(obj.extends).forEach(e => Object.keys(obj.extends[e]).forEach((k) => 
            throwE("pm || pd",()=>(typeof obj.mp[k] === obj.extends[e][k] || typeof obj.dp[k] === obj.extends[e][k])));
        });
    });
};
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const keys = {
    "d":    "data",
    "m":    "method",
    "i":    "internal",
    "s":    "static",
    "p":    "public",
    "p1":   "private",
    "p2":   "protect"
};
const wrap = Object.freeze(Object.assign(function() {},
{
/*const*/ method    : (v,f)=> {  },
/*const*/ data      : v => {},
/*const*/ internal  : v => {},  
/*const*/ static    : v => {},
/*const*/ public    : v => {},
/*const*/ private   : v => {},
/*const*/ protect   : v => {}
}));
/** 
 *      internal 
 *      static
 *      public
*/
const block_imports     :Function = obj => {
    obj.imports.forEach((e:string)=>{
        e = period(e);
        let r = require(e);
        __imports__[e.toLowerCase()] = [()=>(new r()),()=>(r),()=>{THROWE();}]  [(isClas(r)&&1) || (isFunC(r)||isFunction(r)||isObj(r) && 2) || 0];

        });
};
// Object.keys(obj.ms).forEach(e => {const tempFunc = obj.ms[e];__static__.ms[e] = function () {return tempFunc.call(obj, ...arguments);};}); 
// getMethod.validate(pm);getMethod.block(__this__,__settings__,"dp");
// setMethod.validate(pm);setMethod.block(__this__,__settings__,"dp");
// for (let k in pm) {__this__[k] = pubM(pm[k].bind({dp: pd,mp: __this__,ms: __static__.ms,ds: __static__.ds,_: __middlemans__}),__this__);}
const block_mi          :Function = obj => { loopObject(obj.mi,  (obj,k)=>{__internal__["mi"] [k] = wrap.method("internal",obj["mi"] [k]); });
const block_ms          :Function = obj => { loopObject(obj.ms,  (obj,k)=>{__static__  ["ms"] [k] = wrap.method("static",  obj["ms"] [k]); });
const block_mp          :Function = obj => { loopObject(obj.mp,  (obj,k)=>{__public__  ["mp"] [k] = wrap.method("public",  obj["mp"] [k]); });
const block_mp1         :Function = obj => { loopObject(obj.mp1, (obj,k)=>{__private__ ["mp1"][k] = wrap.method("private", obj["mp1"][k]); });
const block_mp2         :Function = obj => { loopObject(obj.mp2, (obj,k)=>{__protect__ ["mp2"][k] = wrap.method("protect", obj["mp2"][k]); });


const getMethod:funClite = {
    validate:function(methods){
        if ("get" in methods) {THROWE();} 
    },
    block:function(__this__,__settings__:interface_settings,enuM:string){
        if (__settings__.public_gettable === true) {
            
            let obj = S._JSON.parse(`{"${enuM}:{}"}`); obj[enuM] = __this__[enuM];

            __this__["get"] = function(prop:string) {
                return clone(this[enuM][prop]||this[enuM])
            }.bind(obj);
        }
    }
};
const setMethod:funClite = {
    validate:function(methods):void{
        if ("set" in methods) {THROWE();}
    },
    block:function(__this__,__settings__:interface_settings,enuM:string):void{
        if (__settings__.public_settable === true) {

            let obj = S._JSON.parse(`{"${enuM}:{}"}`); obj[enuM] = __this__[enuM];

            __this__["set"] = function(prop:string, val:any):void {
                this[enuM][prop] = val;
            }.bind(obj);
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












console.warn(`miscellaneous todo list

** analyze the functional libraries. remove duplicate functionalities.



`);