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
once finished

replace all global constants with "export const"
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
0)  STRUCTURAL PRESENTATIONS
1)  SHARED MEMORY/FUNCTION VARIABLES
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
claS                                    INPROGRESS
cli-claS  
cli-funC
clone-any                               INPROGRESS
closure                                 INPROGRESS
code-file-structure
Codebrarian-namespace
config                                  INPROGRESS
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
PARADIGM-STYLER                         INPROGRESS
public-private-protect
Quantify
sandbox-js                              FINISHED
server                                  SKIPPED
SPEC                                    SKIPPED
symbolic-programming                    SKIPPED
uniframe  
ZenDB                                   SKIPPED
****************************************************************************************
****************************************************************************************
****************************************************************************************
****************************************************************************************
`);
console.warn(`
  PROGRAMMING RULES
  * constant    -> ALL CAPS 
  * mutable     -> NOTALLCAPS
`)
console.warn("once finished with this, build a looper injector for ML purposes");



!(function sanityCheck(){

console.warn('asserting programming language functionality meets expectations');
console.warn("test all operators");
console.warn("test all builtin functions");
console.warn("test error-handling");
console.warn("test everything");

1+1 === 2 || THROWE();
1-1 === 0 || THROWE();

});









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
    /*export*/ interface interface_meths {
      global,
      instance,
      funC
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
/*export*/ interface __imports__    {   [index:string]:any              };
/*export*/ interface __public__     {   dp: enumStrAny, mp: enumStrFunc };
/*export*/ interface __middlemans__ {                                   };
/*export*/ interface __static__     {   ds: enumStrAny, ms: enumStrFunc };
/*export*/ interface __settings__   {
                                    debug:                  Boolean,
                                    singleton:              Boolean,
                                    visible:         Boolean,
                                    mutable:         Boolean,
                                    gettable:        Boolean,
                                    settable:        Boolean,
                                    chainable:       Boolean,
                                    async:           Boolean,
                                    mirror:          Boolean,
};
/*export*/ interface __constructor__ {
  ():any
}
/*export*/ interface __MEM__ {
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
/*0)  SHARED MEMORY VARIABLES
    *** evaluate modules one by one, do not leave any STONES UNTURNED
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
const _isInteger = Number.isInteger || function _isInteger(n) {
    return (n << 0) === n;
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

const _curry3 = function(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;
        case 1:
          return _isPlaceholder(a) ? f3
               : _curry2(function(_b, _c) { return fn(a, _b, _c); });
        case 2:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f3
               : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
               : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
               : _curry1(function(_c) { return fn(a, b, _c); });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3
               : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
               : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
               : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
               : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })
               : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })
               : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })
               : fn(a, b, c);
      }
    };
};  
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
const _curry1 = function(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _isPlaceholder(a)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
};
const _curry2 = function(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;
        case 1:
          return _isPlaceholder(a) ? f2
               : _curry1(function(_b) { return fn(a, _b); });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f2
               : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
               : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
               : fn(a, b);
      }
    };
};
const _isPlaceholder = function(a) {
    return a != null &&
           typeof a === 'object' &&
           a['@@functional/placeholder'] === true;
};
const _dispatchable = function(methodNames, xf, fn) {
    return function() {
      if (arguments.length === 0) {
        return fn();
      }
      var args = Array.prototype.slice.call(arguments, 0);
      var obj = args.pop();
      if (!_isArray(obj)) {
        var idx = 0;
        while (idx < methodNames.length) {
          if (typeof obj[methodNames[idx]] === 'function') {
            return obj[methodNames[idx]].apply(obj, args);
          }
          idx += 1;
        }
        if (_isTransformer(obj)) {
          var transducer = xf.apply(null, args);
          return transducer(obj);
        }
      }
      return fn.apply(this, arguments);
    };
  }
const _isObject = function(x) {
return Object.prototype.toString.call(x) === '[object Object]';
}
const _reduced = function(x) {
    return x && x['@@transducer/reduced'] ? x :
      {
        '@@transducer/value': x,
        '@@transducer/reduced': true
      };
};
const XWrap = function(fn) {
    this.f = fn;
};
XWrap.prototype['@@transducer/init'] = function() {
throw new Error('init not implemented on XWrap');
};
XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
XWrap.prototype['@@transducer/step'] = function(acc, x) {
return this.f(acc, x);
};
const _xwrap = function(fn) { return new XWrap(fn); }
const _reduce = function(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list, 'reduce');
    }
  
    throw new TypeError('reduce: list must be array or iterable');
};
const _filter = function(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
  
    while (idx < len) {
      if (fn(list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
};
const _isTransformer = function(obj) {
    return obj != null && typeof obj['@@transducer/step'] === 'function';
}
const _isArray = Array.isArray || function _isArray(val) {
    return (val != null &&
            val.length >= 0 &&
            Object.prototype.toString.call(val) === '[object Array]');
};
const _isArrayLike = _curry1(function isArrayLike(x) {
    if (_isArray(x)) { return true; }
    if (!x) { return false; }
    if (typeof x !== 'object') { return false; }
    if (_isString(x)) { return false; }
    if (x.nodeType === 1) { return !!x.length; }
    if (x.length === 0) { return true; }
    if (x.length > 0) {
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }
    return false;
  });
const _arrayReduce = function(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
        acc = xf['@@transducer/step'](acc, list[idx]);
        if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
        }
        idx += 1;
    }
    return xf['@@transducer/result'](acc);
};
const _arity = function(n, fn) {
    /* eslint-disable no-unused-vars */
    switch (n) {
      case 0: return function() { return fn.apply(this, arguments); };
      case 1: return function(a0) { return fn.apply(this, arguments); };
      case 2: return function(a0, a1) { return fn.apply(this, arguments); };
      case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
      case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
      case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
      case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
      case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
      case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
      case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
      case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
      default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
    }
};
const bind = _curry2(function bind(fn, thisObj) {
    return _arity(fn.length, function() {
      return fn.apply(thisObj, arguments);
    });
});  
const _methodReduce = function(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
};
const _iterableReduce = function(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
};
const _isString = function(x) {
    return Object.prototype.toString.call(x) === '[object String]';
};
const _identity = function(x) { return x; };
const _xfBase = {
    init: function() {
      return this.xf['@@transducer/init']();
    },
    result: function(result) {
      return this.xf['@@transducer/result'](result);
    }
};
const XFilter = function(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
};  
const _xfilter = _curry2(function _xfilter(f, xf) { return new XFilter(f, xf); });  
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
const dec = function(n) {return  n - 1};
const inc = function(n) {return  n + 1};
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
const filter = _curry2(_dispatchable(['filter'], _xfilter, function(pred, filterable) {
    return (
      _isObject(filterable) ?
        _reduce(function(acc, key) {
          if (pred(filterable[key])) {
            acc[key] = filterable[key];
          }
          return acc;
        }, {}, KEYS(filterable)) :
      // else
        _filter(pred, filterable)
    );
  }));
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
const groupWith = _curry2(function(fn, list) {
    var res = [];
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      var nextidx = idx + 1;
      while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
        nextidx += 1;
      }
      res.push(list.slice(idx, nextidx));
      idx = nextidx;
    }
    return res;
});
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
const repeat = function(val, n) {
    if (arguments.length === 1) return _n => repeat(val, _n);
    const willReturn = Array(n);
    return willReturn.fill(val);
};
const reverse = function(input) {
  if (typeof input === 'string') {
    return input.split('').reverse().join('');
  }

  const clone = input.slice();
  return clone.reverse();
};
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
const UNIQ = function(list) {
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
const assoc = _curry3(function assoc(prop, val, obj) {
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    result[prop] = val;
    return result;
});
const assocPath = _curry3(function assocPath(path, val, obj) {
    if (path.length === 0) {
      return val;
    }
    var idx = path[0];
    if (path.length > 1) {
      var nextObj = (!isNil(obj) && _has(idx, obj)) ? obj[idx] : _isInteger(path[1]) ? [] : {};
      val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
    }
    if (_isInteger(idx) && _isArray(obj)) {
      var arr = [].concat(obj);
      arr[idx] = val;
      return arr;
    } else {
      return assoc(idx, val, obj);
    }
});
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
    return lens(x => _identity(fn(x)))(object).x;
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
};
const not = function(a) {
    return !a;
};
const xor = function(a, b) {
    if (arguments.length === 1) return _b => xor(a, _b);
    return Boolean(a) && !b || Boolean(b) && !a;
};
const equals = function(a, b) {
    if (arguments.length === 1) return _b => equals(a, _b);
    const aType = DType(a);
    if (aType !== DType(b)) return false;
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
const isNil = function(x) {
    return x === undefined || x === null;
};
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
    return S._Object.entries(obj);
};
const values = function(obj) {
    if (DType(obj) !== 'Object') return [];
    return S._Object.values(obj);
};
const view = function(lens, target) {
    if (arguments.length === 1) return _target => view(lens, _target);
    return lens(Const)(target).x;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const THROWE                  = function(){};
const THROWE0 /* IMMEDIATE */ = function(){};
const THROWE1 /* STACK */     = function(){};
const THROWE2 /* PROGRAMMABLE*/=function(){};
const THROWEZ                  =function(){};

const UNFINISHED              = function(){throw new Error("UNFINISHED");};
const UNFINSHED0 /*IMMEDIATE*/= function(){};
const UNFINSHED1 /*STACK*/    = function(){};
const UNFINSHEDZ              = function(){};

const BUG                     = function(){};
const BUG0                    = function(){};
const BUGZ                    = function(){};

const MAINTENANCE             = function(){};
const MAINTENANCE0            = function(){};
const MAINTENANCEZ            = function(){};

const REVIEW                  = function(){};
const REVIEW0                 = function(){};
const REVIEWZ                 = function(){};

https://www.npmjs.com/package/yow
const MKDIR       = REQUIRE('YOW/MKDIR')
const MKPATH      = REQUIRE('YOW/MKPATH');
const FILEEXISTS  = REQUIRE('YOW/FILEEXISTS');
const READJSON    = REQUIRE('YOW/READJSON');
const WRITEJSON   = REQUIRE('YOW/WRITEJSON');



const TYP,DATATYPES:string[] = ["boolean","string","number","object","array","symbol","function","set"];

const NUM,NUMBER    = function(){return S._Number (...arguments);};  
const BOL,BOOLEAN   = function(){return S._Boolean(...arguments)};   
const STR,STRING    = function(){return S._String (...arguments)};   
const ARR,ARRAY     = function(){return S._Array  (...arguments)};   
const OBJ,OBJECT    = function(){return S._Object (...arguments)};   
const SET           = function(){return S._Set    (...arguments)};   
const SYM,SYMBOL    = function(){return S._Symbol (...arguments)};   
const FNC,FUNCTION  = function(){return S._Function(...arguments)};  
const LMD,LAMBDA    = function(){return Lambda (...arguments)};   
const CLS,CLASS     = function(){return Class  (...arguments)};   
const NUL,NULL      = function(){return Null   (...arguments)};   
const UND,UNDEFINED = function(){return Undefined(...arguments)}; 


const FORBIDDEN_OBJECT_PROPS = [/***/];
console.warn("FORBIDDEN OBJECT PROPS UNFINISHED");




const VOBJ = CAPSULE(function(sel,val){
  return{
    0: ["TYPE","ALTERED","LEN0","FORBID"],
    1: ["TYPE","ALTERED","LENZ","FORBID"],
    2: ["TYPE","ALTERED","FORBID"],
    3: ["TYPE","FORBID"]
  }[sel].every(f=>{return VOBJ[f](val);});
},{
  TYPE:   (v)=>{if (S._Array.isArray(v) || typeof v !== "object")return false;  else return true;},
  ALTERED:(v)=>{if (PROPSALTERED.OBJ(v))                         return false;  else return true;},
  LEN0:   (v)=>{if (ISEMPTY(v))                                  return false;  else return true;},
  LENZ:   (v)=>{if (ISNOTEMPTY(v))                               return false;  else return true;},
  FORBID: (v)=>{for (let e in S._Object.keys(v)) {
                    if (FORBIDDEN_OBJECT_PROPS.includes(k[e]))   return false;    
  }return true;}
});
const VNUM = CAPSULE(function(sel,val){
  return {
    0:  ["TYPE","ISNAN","ALTERED","SAFEINT","FINITE"],
    1:  ["TYPE","ISNAN","ALTERED","FINITE"],
    2:  ["TYPE","ISNAN","ALTERED"],
    3:  ["TYPE","ALTERED"],
    4:  ["TYPE"]
  }[sel].every(f=>{return VNUM[f](val);});
},{
  ISNAN:  (v)=>{if (S._Number.isNaN(v))                          return false;  else return true;},
  TYPE:   (v)=>{if (typeof v !== "number")                       return false;  else return true;},
  ALTERED:(v)=>{if (PROPSALTERED.NUM(v))                         return false;  else return true;},
  SAFEINT:(v)=>{if (!S._Number.isSafeInteger(v))                 return false;  else return true;},
  FINITE: (v)=>{if (!S._Number.isFinite(v))                      return false;  else return true;}
});
const VSTR = CAPSULE(function(sel,val){
  return {
    0:  ["TYPE","ALTERED","EMPTY"],
    1:  ["TYPE","ALTERED","NTEMPTY"],
    2:  ["TYPE","ALTERED"],
    3:  ["TYPE"]
  }[sel].every(f=>{return VSTR[f](val);});
},{
  TYPE:   (v)=>{if (typeof v !== "string")                       return false;  else return true;},
  ALTERED:(v)=>{if (PROPSALTERED.STR(v))                         return false;  else return true;},
  EMPTY:  (v)=>{if (ISEMPTY(v))                                  return false;  else return true;},
  NEMPTY: (v)=>{if (ISNOTEMPTY(v))                               return false;  else return true;}
});
const VFNC = CAPSULE(function(sel,val){
  return {
    0:["TYPE","NTFUNCTION","ALTERED","NTEMPTY"],
    1:["TYPE","NTFUNCTION","ALTERED","EMPTY"],
    2:["TYPE","NTFUNCTION","ALTERED"],
    3:["TYPE","NTFUNCTION"]
  }[sel].every(f=>{return FNC[f](val)})
},{
  
  TYPE:      (v)=>{if (typeof v !== "function")                  return false;  else return true;},
  NTFUNCTION:(v)=>{if (ISNOTFUNCTION(v))                         return false;  else return true;},
  ALTERED:   (v)=>{if (PROPSALTERED.FNC(v))                      return false;  else return true;},
  EMPTY:     (v)=>{if (ISEMPTY(v))                               return false;  else return true;},
  NTEMPTY:   (v)=>{if (ISNOTEMPTY(v))                            return false;  else return true;}
});
const VLMD = CAPSULE(function(sel,val){
  return {
    0:["TYPE","NTLAMBDA","ALTERED","NTEMPTY"],
    1:["TYPE","NTLAMBDA","ALTERED","EMPTY"],
    2:["TYPE","NTLAMBDA","ALTERED"],
    3:["TYPE","NTLAMBDA"]
  }[sel].every(f=>{return VLMD[f](val);});
},{
  TYPE:     (v)=>{if (typeof v !== "function")                   return false;  else return true;},
  NTLAMBDA: (v)=>{if (ISNOTLAMBDA(v))                            return false;  else return true;},
  ALTERED:  (v)=>{if (PROPSALTERED.LMD(v))                       return false;  else return true;},
  NTEMPTY:  (v)=>{if (ISNOTEMPTY(v))                             return false;  else return true;}
});
const VSYM = CAPSULE(function(sel,val){
  return {
    0:["TYPE","ALTERED"],
    1:["TYPE"]
  }[sel].every(f=>{return VSYM[f](val);});
},{
  TYPE:   (v)=>{if (typeof v !== "symbol")                       return false;   else return true;},
  ALTERED:(v)=>{if (PROPSALTERED.SYM(v))                         return false;   else return true;}
});
const VSET = CAPSULE(function(sel,val){
  throw new Error("UNFINISHED");
  return {
    0:["TYPE","ALTERED"],
    1:["TYPE"]
  }[sel].every(f=>{return VSET[f](val);});
},{
  TYPE:   (v)=>{if (typeof v !== "set")                          return false;  else return true;},
  ALTERED:(v)=>{if (PROPSALTERED.SET(v))                         return false;  else return true;}
});

const VCLA = CAPSULE(function(sel,val){
  throw new Error("UNFINISHED");
  return {
    0:["TYPE","NEWABLE","NTCLASS","ALTERED","NTEMPTY"],
    1:["TYPE","NEWABLE","NTCLASS","ALTERED","EMPTY"],
    2:["TYPE","NEWABLE","NTCLASS","ALTERED"],
    3:["TYPE","NEWABLE","NTCLASS"]
  }[sel].every(f=>{return VCLA[f](val);});
},{
  TYPE:   (v) => {if (typeof v !== "function")                  return false;  else return true;},
  NEWABLE:(v) => {if (NEWABLE(v))                               return false;  else return true;},
  NTCLASS:(v) => {if (ISCLASS(v))                               return false;  else return true;},
  ALTERED:(v) => {if (PROPSALTERED.CLS(v))                      return false;  else return true;},
  EMPTY:  (v) => {if (ISEMPTY(v))                               return false;  else return true;},
  NTEMPTY:(v) => {if (NOTEMPTY(v))                              return false;  else return true;}
});
const VARR = CAPSULE(function(sel,val){
  return {
    0:["TYPE","NTEMPTY","ALTERED"],
    1:["TYPE","EMPTY",  "ALTERED"],
    2:["TYPE","ALTERED"],
    3:["TYPE"]
  }[sel].every(f=>{return VARR[f](val);});
},{
  TYPE:   (v) => {if (!S._Array.isArray(v))                     return false;  else return true;},
  NTEMPTY:(v) => {if (ISEMPTY(v))                               return false;  else return true;},
  EMPTY:  (v) => {if (ISNOTEMPTY(v))                            return false;  else return true;},
  ALTERED:(v) => {if (PROPSALTERED.ARR(v))                      return false;  else return true;}
});
const VUND = CAPSULE(function(sel,val){
  return {
    0:["TYPE","ALTERED"],
    1:["TYPE"]
  }[sel].every(f=>{return VUND[f](val);});
},{
  TYPE:   (v) => {if (v === undefined)                          return false;  else return true;},
  ALTERED:(v) => {if (PROPSALTERED.UND(v))                      return false;  else return true;}
});

const VNUL = CAPSULE(function(sel,val){
  return {
    0:["TYPE","ALTERED"],
    1:["TYPE"]
  }[sel].every(f=>{return VNUL[f](val);});
},{
  TYPE:   (v) => {if (v === null)                               return false; else return true;},
  ALTERED:(v) => {if (PROPSALTERED.NUL(v))                      return false; else return true;}
});
const VBOL = CAPSULE(function(sel,val){
  return {
    0:["TYPE","ALTERED"],
    1:["TYPE"]
  }[sel].every(f=>{return VBOL[f](val);});
},{
  TYPE:    (v) => {if (typeof v !== "boolean")                  return false; else return true;},
  ALTERED: (v) => {if (PROPSALTERED.BOL(v))                     return false; else return true;}
});

/*export*/ const DType = CAPSULE(function(typ?,sel?,val?){
    /** LEGEND: arg SEL
     * 
     * 0: STRICTEST VALIDATION ENFORCEMENT
     * |
     *(^)
     * N: LESS STRICT VALIDATION ENFORCEMENT, NO ALTEREDPROP CHECK 
     */
  throw new Error("UNFINISHED");
  let a;
  if (typ)  
  return DType[typ](sel,val);
},{
    BOL:   VBOL,
    NUM:   VNUM,
    STR:   VSTR,
    OBJ:   VOBJ,
    FNC:   VFNC,
    LMD:   VLMD,

    CLA:   VCLA,
    SYM:   VSYM,
    ARR:   VARR,
    SET:   VSET,
    UND:   VUND,
    NUL:   VNUL,
});
const TYPETRUTHY = CAPSULE(function(){
  console.warn(`this assumes the conditional statements are the same to all types of conditions`);
  console.warn(`bewarned, bug is probable`);
},{
/*const*/ BOL  : v => { if (v) return true; else return false; },
/*const*/ NUM  : v => { if (v) return true; else return false; },
/*const*/ STR  : v => { if (v) return true; else return false; },
/*const*/ OBJ  : v => { if (v) return true; else return false; },
/*const*/ ARR  : v => { if (v) return true; else return false; },
/*const*/ SYM  : v => { if (v) return true; else return false; },
/*const*/ SET  : v => { if (v) return true; else return false; },
/*const*/ FNC  : v => { if (v) return true; else return false; },
/*const*/ CLS  : v => { if (v) return true; else return false; },
/*const*/ NUL  : v => { if (v) return true; else return false; },
/*const*/ UND  : v => { if (v) return true; else return false; },
});
const TYPEFALSEY = CAPSULE(function(){

},{
/*const*/ BOL  : v => { if (v) return false; else return true; },
/*const*/ NUM  : v => { if (v) return false; else return true; },
/*const*/ STR  : v => { if (v) return false; else return true; },
/*const*/ OBJ  : v => { if (v) return false; else return true; },
/*const*/ ARR  : v => { if (v) return false; else return true; },
/*const*/ SYM  : v => { if (v) return false; else return true; },
/*const*/ SET  : v => { if (v) return false; else return true; },
/*const*/ FNC  : v => { if (v) return false; else return true; },
/*const*/ CLS  : v => { if (v) return false; else return true; },
/*const*/ NUL  : v => { if (v) return false; else return true; },
/*const*/ UND  : v => { if (v) return false; else return true; },
});
const TYPESTATE = CAPSULE(function(v,meth){

  // TYPEID[typeof v][]


},{
BOL : {ISTRUE,ISFALSE},
NUM : {ISSAFE,ISINFINITY,ISFINITE,ISMAXVALUE,ISMINVALUE,ISZERO,ISNAN,ISPOSITIVE,ISNEGATIVE,ISINTEGER,ISFLOAT},
STR : {ISEMPTY,ISNOTEMPTY,ISALPHA,ISSYMBOL,ISLOWERCASE,ISUPPERCASE},
FNC : {ISEMPTY,ISNOTEMPTY,ISFUNCTION,ISLAMBDA,ISANONYMOUS},
OBJ : {ISEMPTY,ISNOTEMPTY},
ARR : {ISEMPTY,ISNOTEMPTY},
SYM : {ISEMPTY,ISNOTEMPTY},
CLA : {ISEMPTY},
UND : {},
NUL : {}
});
const PROPSALTERED = CAPSULE(function(){

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


const CONST = function(script){
  isString(script);
};
// RAW STATEMENTS
const UNHANDLED= function(){return THROWE("UNHANDLED EXCEPTION");}
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

// const SWITCH = function(){
//   switch (key) {
//     case value:
      
//       break;
  
//     default:
//       break;
//   }
// };



const LOWERCASE = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
const UPPERCASE = LOWERCASE.map(v => v.toUpperCase());
const ALPHA     = (LOWERCASE.join("")+UPPERCASE.join("")).split("");
const SYMBOLS   = ["!@#$%^&*()_+{}[]-=|;:'\"\\?,.<>`~"];
const NUMBERS   = ["0","1","2","3","4","5","6","7","8","9"];
const OPS       = ["!","%","%=","^","^=","&","&&","&=","&&=","*","*=","**","**=","-","-=","+","+=","|","||","/","/="];

const KYB5      = ["ESC","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"];
const KYB4      = ["~`","!1","@2","#3","$4","%5","^6","&7","*8","(9",")0","_-","+=","DELETE"];
const KYB3      = ["TAB","q","w","e","r","t","y","u","i","o","p","{[","}]","|\\"];
const KYB2      = ["CAPS LOCK","A","S","D","F","G","H","J","K","L",":;","\"'","RETURN"];
const KYB1      = ["SHIFT","Z","X","C","V","B","N","M","<,",">.","?/","SHIFT"];
const KYB0      = ["FN","CONTROL","OPTION","COMMAND","SPACE","COMMAND","OPTION","LEFT","UP/DOWN","RIGHT"];

const KYBRD_EN      = {};
const KYBRD_PC      = {};
const KYBRD_MACBOOK = {KYB5,KYB4,KYB3,KYB2,KYB1,KYB0};

const INTERFACE = function(){
  const fakeIfNull = function(obj,prop:string,val:any):void {
    if (!obj.hasOwnProperty(prop)) {obj[prop] = val;}
  };	
};
const VALIDATE  = function(){};
const BLOCK     = function(){};
const SPEC      = function(){};

const DELETEPROPKEY   = function(obj,prop){return delete obj[prop];};
const DELETEPROPVALUE = function(obj,prop){return obj[prop] = undefined;};

const KEYS = function(v){
  return S._Object.keys(v);
}

const FUNC0BLOCK = function(func0props){
    return CAPSULE(
      function(){
        funC0validate(func0props.block,func0props.validate(arguments));
        return func0props.block(...arguments);
      },
      func0props
    );
};
const FUNC0VALIDATE = function(funCBlock,funCvalidate) {
    if (typeof funCBlock    !== "function") {THROWE();}
    if (typeof funCvalidate !== "function") {THROWE();}
    const _params = getParams(funCBlock);
    return function() {
        return _params.every((e,i)=>{
            return pS[e](arguments[i]);
        }) && funCvalidate(arguments);
    };
};

const INHERITCONFIG:Function = function(config_inherit:{[index: string]: {}}, config_inheritor:{[index: string]: {}}):void {
    for (let k in config_inherit) !config_inheritor.hasOwnProperty(k) && (config_inheritor[k]=config_inherit[k]);
};
const CONFIGMAIN = function(config:{[index: string]: {}}){
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


/*export*/ const PARSEFUNCTION = function(functioN:Function) {
        /** 
         * - extracts information from regular code into funC template 
         * - possibly detects errors
         *         // looking for variables references.
        // does not allow this references

        // if it finds duplicate variable references it reports it's findings.

        // console.warn("parse progam unprogrammed");
        
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
const parserClass = function(){
    /**
     * 
     * 
     * returns the json result of parsed input
     */
};




const GET       = function(){};
const GETMETHOD = function(){};
// const SET       = function(){};
const SETMETHOD = function(){};
const IS        = CAPSULE(function(val,sel){

},{
// ...DATATYPES
});
const KINDA     = CAPSULE(function(){

},{

});
const HAS       = CAPSULE(function(val,sel){

},{

});

const TO        = CAPSULE(function(val,sel){

},{
TOBINARY,
TOHEX,
TODEC,
TOBASE
TODATATYPE
});

const ESSENTIAL = function(){
    
    throw new Error("UNFINISHED")
    
    return {    // procedural base layer (building block) functions
/*const*/ COLLECTIONS : CAPSULE(function(){
    
},{

}),
/*const*/ LISTS    : CAPSULE(function(){

},{

}),
/*const*/ FUNCTIONS: CAPSULE(function(){

}), 
/*const*/ MATHS    : CAPSULE(function(){

},{

}),
/*const*/ RELATIONS: CAPSULE(function(){

},{

}),
/*const*/ LOGICS: CAPSULE(function(){

},{

}),


};

};






const CHARS = capsule(function(){
    THROWE("UNFINISHED");
},{
    LOWERCASE,
    UPPERCASE,
    SYMBOLS,
    NUMBERS,
    KYBRD
})
const ISBOOLEAN     =   v => typeof v === "boolean";
const ISNOTBOOLEAN  =   v => !ISBOOLEAN(v);
const ISNUMBER      =   v => typeof v === "number";
const ISNOTNUMBER   =   v => !ISNUMBER(v);
const ISSTRING      =   v => typeof v === "string";
const ISNOTSTRING   =   v => !ISNOTSTRING(v);
const ISJSON        =   v => typeof v === "object" && !S._Array.isArray(v);
const ISNOTJSON     =   v => !ISNOTJSON(v);
const ISOBJECT      =   v => typeof v === "object";
const ISNOTOBJECT   =   v => !ISNOTOBJECT(v);
const ISARRAY       =   v => S._Array.isArray(v);
const ISNOTARRAY    =   v => !ISARRAY(v);
const ISSYMBOL      =   v => typeof v === "symbol";
const ISNOTSYMBOL   =   v => !ISSYMBOL(v);
const ISFUNCTION    =   v => typeof v === "function";
const ISNOTFUNCTION =   v => !ISFUNCTION(v);
const ISTHIS        =   v => v.toString().includes("function ");
const ISNOTTHIS     =   v => !ISTHIS(v);
const ISLAMBDA      =   v => ISFUNCTION(v) && v.toString().includes("=>");
const ISNOTLAMBDA   =   v => !ISLAMBDA(v);
const ISANONYMOUS   =   v => ISFUNCTION(v) && !ISLAMBDA(v) && v["name"] === undefined;
const ISNOTANONYMOUS=   v => !ISANONYMOUS(v);
const ISFUNC        =   v => ISFUNCTION(v) && !ISLAMBDA(v) && v.hasOwnProperty("name");
const ISNOTFUNC     =   v => !ISFUNC(v);
const ISCLASS       =   v => {throw new Error("UNFINISHED")};
const ISNOTCLASS    =   v => !ISCLASS(v);
const ISNEWABLE     =   v => {throw new Error("UNFINISHED")};
const ISUNDEFINED   =   v => v === undefined;
const ISNOTUNDEFINED=   v => !ISUNDEFINED(v);
const ISNULL        =   v => v === "null";
const ISNOTNULL     =   v => !ISNULL(v);




const ISSAFE        =   v => S._Number.isSafeInteger(v);
const ISNOTSAFE     =   v => !ISNOTSAFE(v);
const ISTRUE        =   v => v === true;
const ISNOTTRUE     =   V => !ISTRUE(v);
const ISFALSE       =   v => v === false;
const ISNOTFALSE    =   v => !ISSAFE(v);
const ISINFINITY    =   v => v === Infinity;
const ISNOTINFINITY =   v => !ISINFINITY(v);
const ISFINITE      =   v => S._isFinite(v);
const ISNOTFINITE   =   v => !ISFINITE(v);
const ISMAXVALUE    =   v => v === Number.MAX_VALUE;
const ISNOTMAXVALUE =   v => !ISMAXVALUE(v);
const ISMINVALUE    =   v => v === Number.MAX_VALUE;
const ISNOTMINVALUE =   v => !ISMINVALUE(v);
const ISMAXSAFEVALUE=   v => v === Number.MAX_SAFE_INTEGER;
const ISNOTMAXSAFEVALUE=v => !ISMAXSAFEVALUE(v);
const ISMINSAFEVALUE=   v => v === Number.MIN_SAFE_INTEGER;
const ISNOTMINSAFEVALUE=v => !ISMINSAFEVALUE(v);
const ISNAN         =   v => S._isNaN(v);
const ISNOTNAN      =   v => !ISNAN(v);
const ISPOSITIVE    =   v => 0 < v;
const ISNOTPOSITIVE =   v => !ISPOSITIVE(v);
const ISNEGATIVE    =   v => 0 > v;
const ISNOTNEGATIVE =   v => !ISNEGATIVE(v);
const ISZERO        =   v => v === 0;
const ISNOTZERO     =   v => !ISZERO(v);
const ISFLOAT       =   v => S._String(v).includes(".");
const ISNOTFLOAT    =   v => !ISFLOAT(v);
const ISINTEGER     =   v => !S._String(v).includes(".");
const ISNOTINTEGER  =   v => !ISINTEGER(v);
const ISALPHA       =   v => [..._lowerCase,..._upperCase].includes(v);
const ISNOTALPHA    =   v => !ALPHA(v);
const ISLOWERCASE   =   v => _lowerCase.includes(v);
const ISNOTLOWERCASE=   v => !ISLOWERCASE(v);
const ISUPPERCASE   =   v => _upperCase.includes(v);
const ISNOTUPPERCASE=   v => !ISUPPERCASE(v);
const ISSYMBOL      =   v => _symbols.includes(v);
const ISNOTSYMBOL   =   v => !ISSYMBOL(v);
const ISEMPTY       =   function(v){
                            return {
                                "str":v=>v.length===0,"obj":v=>S._Object.keys(v).length===0,
                                "arr":v=>v.length===0,"fnc":v => v.toString()
                            }[(S._Array.isArray(v) && "arr") || (typeof v)](v);
};
const ISNOTEMPTY    = (v)=>{
                            return {
                                "str":v=>v.length!==0,"obj":v=>S._Object.keys(v).length !== 0,
                                "arr":v=>v.length!==0,"fnc":v=>v.toString()
                            }[(S._Array.isArray(v) && "arr") || (typeof v)](v);
};

const GETNAME       = function(func){};
const GETPARAMS     = function(func){
    let start = func.toString().indexOf("(");
    let end   = func.toString().indexOf(")");
    return func.toString().slice(start+1,end).split(",");
};
const GETCOMMENTS   = function(func){};
const GETINPUTTYPE  = function(func){};
const GETOUTPUTTYPE = function(func){};
const GETEXETYPE    = function(func){};
const GETSTATEMENTS = function(func){};
const GETINNERMEM   = function(func){};

const ALLSAMCASE         = e => {let _ = e.slice().shift(); e = (ISLOWERCASE(_) && isLowerCase) || (ISUPPUERCASE(_) && ISUPPERCASE);  for (let k in e) { true === _(e) || THROWE(); }};
const ALLTWOCASE         = e => {let a,b,c;   for (let k in e){ (ISLOWERCASE(_) && a=true) || (ISUPPERCASE(_) && b=true) || c=true; }; return (a&&b)^c};
const ALLMULCASE         = e => {let a = false, b = false, c = false;for (let k in e) { (ISLOWERCASE(k)&&a=true) || (ISUPPERCASE(k)&&b=true) || (ISSYMBOL(k)&&c=true)};return a&&b&&c;};


const ASSERTINDEPENDENCE = f => EVERY(f.toString(),ALLSAMCASE)&&EVERY(f.toString(),ALLALPHA);
const ASSERTCOMPOUND     = f => EVERY(f.toString(),ALLTWOCASE)&&EVERY(f.toString(),ALLALPHA);
const assertComplex      = f => EVERY(f.toString(),ALLMULCASE)&&EVERY(f.toString(),ALLALPHA);

const NOTEMPTY               = v => (ISARRAY(v)            && THROWE("must not be empty",(v.length > 0))
                                ||  (typeof v === "object" && THROWE("must not be empty",(S._Object.keys(v).length > 0)))
                                ||  (typeof v === "string" && THROWE("must not be empty",(v.length > 0)))
                                ||  (false)
);
const HASPROPERTY         = (obj,prop) => THROWE("must have prop "+prop, obj.hasOwnProperty(prop));


const ISEVEN = function(){};
const ISODD = function(){};

const period = (e: string) => {
    if (e[0] === ".") {
        if (e[1] === ".")           e = "../" + e;
        else if (e[1] === "/")      e.shift(), e.shift(), e = "../" + e;
        else                        {THROWE();}
    }
    return e;
};

// const loopObject             = (obj,cb) => { for (let k in obj) cb(obj,k); };


const enforce_object_datas   = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(isNotFunction);};
const enforce_object_methods = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(isFunction);};
const enforce_object_propsss = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(isNotFunction);};
const enforce_object_nulls   = v => {isObject(v);isNull(v);};
const enforce_settings       = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(enforceSetting);};
const enforce_setting        = v => {};


const EVERY = function(v,cb){
  if      (typeof v === "string")   {for (let k in v) {if (!cb(v[k])) return false}; return true;}
  else if (S._Array.isArray(v))     {return v.every(cb);}
  else if (typeof v === "object")   {for (let k in v) {if (!cb(v[k])) return false} return true;}
  else if (typeof v === "symbol")   {throw new Error("UNFINISHED");}
  else                              {throw new Error();}
};
const ALL = EVERY;


const NUMSTR = v => EVERY(v,function(a){return NUMBERS.includes(a)});
const NNUMSTR =v => EVERY(v,function(a){return !NUMBERS.includes(a)});
const STRSTR = v => EVERY(v,ISSTRING);
const NSTRSTR = v => EVERY(v,ISNOTSTRING);
const BOLARR = v => EVERY(v,ISBOOLEAN);
const NBOLARR = v => EVERY(v,ISNOTBOOLEAN);
const NUMARR = v => EVERY(v,ISNUMBER);
const NNUMARR = v => EVERY(v,ISNOTNUMBER);
const STRARR = v => EVERY(v,ISSTRING);
const NSTRARR = v => EVERY(v,ISNOTSTRING);
const ARRARR = v => EVERY(v,ISARRAY);
const NARRARR = v => EVERY(v,ISNOTARRAY);
const OBJARR = v => EVERY(v,ISOBJECT); 
const NOBJARR = v => EVERY(v,ISNOTOBJECT); 
const JSNARR = v => EVERY(v,ISJSON);
const NJSNARR = v => EVERY(v,ISNOTJSON);
const FNCARR = v => EVERY(v,ISFUNCTION); 
const NFNCARR = v => EVERY(v,ISNOTFUNCTION); 
const OBJLMD = v => EVERY(v,ISLAMBDA);
const NOBJLMD = v => EVERY(v,ISNOTLAMBDA);
const ANOARR = v => EVERY(v,ISANONYMOUS);
const NANOARR = v => EVERY(v,ISNOTANONYMOUS);
const UNDARR = v => EVERY(v,ISUNDEFINED); 
const NUNDARR = v => EVERY(v,ISNOTUNDEFINED); 
const NULARR = v => EVERY(v,ISNULL);
const NNULARR = v => EVERY(v,ISNOTNULL);

const BOLJSN = v => EVERY(v,ISBOOLEAN);
const NBOLJSN = v => EVERY(v,ISNOTBOOLEAN);
const NUMJSN = v => EVERY(v,ISNUMBER);
const NNUMJSN = v => EVERY(v,ISNOTNUMBER);
const STRJSN = v => EVERY(v,ISSTRING);
const NSTRJSN = v => EVERY(v,ISNOTSTRING);
const JSNJSN = v => EVERY(v,ISJSON);
const NJSNJSN = v => EVERY(v,ISNOTJSON);
const OBJJSN = v => EVERY(v,ISOBJECT); 
const NOBJJSN = v => EVERY(v,ISNOTOBJECT); 
const FNCJSN = v => EVERY(v,ISFUNCTION); 
const NFNCJSN = v => EVERY(v,ISNOTFUNCTION); 
const OBJJSN = v => EVERY(v,ISLAMBDA);
const OBJJSN = v => EVERY(v,ISNOTLAMBDA);
const ANOJSN = v => EVERY(v,ISANONYMOUS);
const NANOJSN = v => EVERY(v,ISNOTANONYMOUS);
const UNDJSN = v => EVERY(v,ISUNDEFINED); 
const NUNDJSN = v => EVERY(v,ISNOTUNDEFINED); 
const NULJSN = v => EVERY(v,ISNULL);  
const NNULJSN = v => EVERY(v,ISNOTNULL);  
// const SYM
const TRIM = CAPSULE(function(){

},{
/*const*/ ALL      : function(){},
/*const*/ TRIMLEFT  : function(){},
/*const*/ TRIMRIGHT : function(){},
/*const*/ TRIMINNER : function(){},
/*const*/ TRIMOUTER : function(){},
});
const SWAP = function(memA,memB) {
  /**
   * it would be better if memory addresses were swapped 
   * instead of memoryValues to save RAM & CPU.
   */
  arguments.length !== 2 && THROWE();
  let temp = memA;
  memA = memB;
  memB = temp;
  temp = undefined;
  return [memA,memB]
};
const LIST = CAPSULE(function(){

},{
  queries: {
    endsWith,
    filter,
    find,
    Model.deleteMany()
    Model.deleteOne()
    Model.find()
    Model.findById()
    Model.findByIdAndDelete()
    Model.findByIdAndRemove()
    Model.findByIdAndUpdate()
    Model.findOne()
    Model.findOneAndDelete()
    Model.findOneAndRemove()
    Model.findOneAndReplace()
    Model.findOneAndUpdate()
    Model.replaceOne()
    Model.updateMany()
    Model.updateOne()
    findIndex,
    flatten,
    forEach,
    fromPairs,
    groupBy,
    groupWith,
    includes,
    indexBy,
    indexOf,
    last,
    lastIndexOf,
    takeLast,
    UNIQ,
    uniqWith,
    update,
    has
  },
  qmods:   {},
  props:   function(){},
  conversion:function(){},
  replication:{}
})








//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*2)  LANGUAGE CONSTRUCT REVAMP & HARDENING
*/
/*export*/ const PARAMS:paramsLoader = function(paramsOBJ){
    // no duplicates allowed --> objects don't automatically overwrite duplications
    if (!paramsOBJ) {THROWE();}
    for (let k in paramsOBJ) { eval(`paramsOBJ[k] = function(${k}){ return ${paramsOBJ[k].replace("$p",k)}; }`); }
    return paramsOBJ;
};
//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ const CAPSULE = function(cb:Function, props:{[index:string]:any}) {
    for (let k in props) {
        !RESTRICTEDPROPS.includes(k) || THROWE()
    }
    return S._Object.freeze(S._Object.assign(cb,props));
};
/*export*/ const RESTRICTEDPROPS = [
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
/*export*/ const CLOSURE = function(cb, variables) {
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const REPLICATE = CAPSULE(function(sel,val){
// clone          100% copy & memory seperation
// mirror         100% copy & no memory seperation
// depth          clone "n" layers deep in
  typeof sel === "string" || THROWE();
  return REPLICATE[sel](val);
},{
MIRROR: CAPSULE(function(v:any){ // deep memory reference replication
  let tP = typeof v;
  if (tP === 'boolean') 	return REPLICATE.MIRROR[tP](v);
  if (tP === 'number')  	return REPLICATE.MIRROR[tP](v);
  if (tP === 'string')  	return REPLICATE.MIRROR[tP](v);
  if (Array.isArray(tP))  return REPLICATE.MIRROR['array'](v);
  if (tP === 'function')	return REPLICATE.MIRROR[tP](v);
  if (tP === 'object')    return REPLICATE.MIRROR[tP];
  if (tP === 'symbol')    throw new Error("UNFINISHED");
  return ['mirroring error, type v is not builtin datatype '+v];
},{
  boolean  : function(v:boolean)  {return v;},
  number   : function(v:number)   {return v;},
  string   : function(v:string)   {return v},
  array    : function(v:any[])    {return v},
  object   : function(v:object)   {return v},
  symbol   : function(v:object)   {return v},
  function : function(v:Function) {return v;}
}),
CLONE:  CAPSULE(function(v:any):any { // deep memory referencing disattaching replication]
  throw new Error("UNFINISHED ... DEEP CLONING LOOP NEEDED");
  let tP = typeof v;
  if (tP === 'boolean') 	return REPLICATE.CLONE[tP](v);
  if (tP === 'number')  	return REPLICATE.CLONE[tP](v);
  if (tP === 'string')  	return REPLICATE.CLONE[tP](v);
  if (Array.isArray(tP))  return REPLICATE.CLONE['array'](v);
  if (tP === 'function')	return REPLICATE.CLONE[tP](v);
  if (tP === 'object')    return REPLICATE.CLONE[tP];
  if (tP === 'symbol')    throw new Error("UNFINISHED");
  return ['cloning error, type v is not builtin datatype '+v];
},{
  boolean  : function(v:boolean)  {return !!v;},
  number   : function(v:number)   {return v+0;},
  string   : function(v:string)   {return v.slice();},
  array    : function(v:any[])    {return v.slice();},
  object   : function(v:object)   {return Object.assign({}, v);},
  symbol   : function(v:object)   {return Object.assign({}, v);},
  function : function(v:Function) {const temp = v; return temp;/*new Function('return ' + v.toString())();*/}
}),
DEPTH:  CAPSULE(function(sel,val){
  throw new Error("UNFINISHED");
},{

})
});
//////////////////////////////////////////////////////////////////////////////////////////////////
const CONFIG = function(config){
  /**should be used in funC & claS */
  const o = config;
  INTERFACE(o)    || o.onFailure();
  VALIDATION(o)   || o.onFailure();
  MEMASSIGN(o)    || o.onFailure();
  o.onSuccess();
};
const VALIDATION = capsule(function(){
  throw new Error();
  return Object.keys(VALIDATION).every(e=>{
    e()
  });
},{
  ITERATIVE:    function(){},
  CROSSEXAMINE: function(){}
});
const MEMASSIGN = function(){

};
//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ const LOOP = {};
const LOOP_FOR                = function(){}; // for loop
const LOOP_FOREVER            = function(){}; // no explanation rqd
const LOOP_WHILE              = function(){}; // while loop
const LOOP_BREAK              = function(){}; // stops loop
const LOOP_CONTINUE           = function(){}; // skips loop iteration
const LOOP_EACH               = function(){}; // forEach iteration
const LOOP_DEEP               = function(){}; // loops everything loopable
const LOOP_DEEPRECURSION      = function(){}; // stacks all recursions into one list
const LOOP_CYCLE              = function(){}; // loop in circles
const LOOP_FILTER             = function(){}; // returns conditions matched
const LOOP_CHECKLIST          = function(){}; // ensures all info meets passes conditions
const LOOP_INTERVAL           = function(){}; // loop in time ms increments
const LOOP_WHEN               = function(){}; // mem-value equals
const LOOP_BEFORE             = function(){}; // 
const LOOP_AFTER              = function(){}; // 
const LOOP_NONEST             = function(){}; // 
const LOOP_SPLIT              = function(){}; //
const LOOP_MERGE              = function(){}; //

const LOOP_SKIP               = function(){}; // iterator fluxor
    // vs
const LOOP_PINGPONG           = function(v,cbs){  }; // next exe memory swaping // instead of conditionals drags
// const ENTER = v => (typeof v=== "string"||typeof v==="object"||Array.isArray(v));
// const filter = function(v,hit,miss,conditions){
//     if      (conditions(e)) return hit.push(v);
//     else                    return miss.push(v);
// };
// const checklist = (v) => {for (let i=0;i^v.length;i++){ if (v[i] !== true) return false; }return true;}
// const interval = (ms,cb)=>(setInterval(cb,ms));
// const forever = function(cb){while (true) {cb();}};
// const cycle = function() {};
//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ const funCLite:func0Loader = (function(){
  const pS = {};
  return function(paramsOBJ){
      return {
          funClite: func0block,
          paramsOBJ: (pS = params(paramsOBJ))
      }
  };
})();
//////////////////////////////////////////////////////////////////////////////////////////////////
const FUNC = function(config){
  const M = MEM({
      gConfig,
      FInstances,
      configs,
      funcs,
      intF,
      intF_keys
  });
  CONFIG(config,
      FUNCINTERFACE,
      FUNCINDEPENDENTVALIDATION,
      FUNCCROSSEXAMINEVALIDATION,
      FUNCMEMASSIGN
  );
  return FUNCTRETURN(config);
};
/***************************************************************** */
const FUNCINTERFACE = function(config){
  let obj = config;
  const d = ["arguments","console","return","callback","onError/onSuccess","onTrue/onFalse","throw"];
  ["name","description","author"]             .forEach((e)=>{ obj[e] = standardString(e);});
  ["notes","params"]                          .forEach((e)=>{ obj[e] = standardStringArray(e);});
  ["isStrict","isAsync","isThis","isCapsule"]	.forEach((e)=>{ obj[e] = standardBoolean(e);});
  ["inputType","outputType"]					.forEach((e)=>{ obj[e] = arrayIncludes(datatypes);});
  ["inputBehavior"]		                    .forEach((e)=>{ obj[e] = arrayIncludes([d[0],d[1]]);});
  ["outputBehavior"]							.forEach((e)=>{ obj[e] = arrayIncludes([d[1],d[2],d[3],d[4],d[5]]);});
  ["onError"]									.forEach((e)=>{ obj[e] = arrayIncludes([d[6]]);});
  ["validations","block","spec"]				.forEach((e)=>{ obj[e] = vFunction;});
  return true;
};
const FUNCFAKEIFNULL = function(obj,prop:string,val:any):void {
  const fakeIfNull = function(){
      if (!obj.hasOwnProperty(prop)) {obj[prop] = val;}
  }
  return Object.assign(function(){},{
      "namE" 			    : function(obj) {fakeIfNull(obj,'name',			    "fake name to pass test");};
      "description" 	: function(obj) {fakeIfNull(obj,'description',	"fake description to pass the test");};
      "author"		    : function(obj) {fakeIfNull(obj,'author',		    "fake author")};
      "notes" 		    : function(obj) {fakeIfNull(obj,'notes',		    ["fake notes to pass the test"]);};
      "validations" 	: function(obj) {fakeIfNull(obj,'validations',	()=>{/*fake*/});};
      "block" 		    : function(obj) {fakeIfNull(obj,'block',		    ()=>{/*fake*/});};
      "spec" 			    : function(obj) {fakeIfNull(obj,'spec',			    ()=>{/*fake*/});};
  });
};
const FUNCINDEPEDENTVALIDATION = function(){};
const FUNCCROSSEXAMINEVALIDATION = function(){};
const FUNCMEMASSIGN = function(){};
const FUNCTRETURN   = function(confiG){
  return Object.freeze({
      globalConfig:   FUNCCONFIGGLOBAL,
      instance:       FUNCCONFIGINSTANCE,
      funC:           FUNCTEMPLATE
  });
};
const FUNCTEMPLATE  = function(){
  if (typeof this.config === "object") {inheritConfig(this.config,config);}

  confiG.funC(config);
  let c = config;
  templatefunction: {
      const strict				= c.isStrict?'"use strict";':"";
      const async					= c.isAsync?'async ':''; 		
      const _this = c.isThis? (`${async}function ${name}(${params}) `):(`const ${name} = ${async}(${params}) => `);
      // let isCapsule		    = c.isCapsule === true;

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
const FUNCCONFIGGLOBAL = function(){
  loopInterface(config);
  confiG(config);	
  gConfig = config;
  configs["global"] = gConfig;
  return pm;
};
const FUNCCONFIGINSTANCE = function(){
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
const FUNCCONFIGFUNC = function(){
  confiG(config);
  incConfig(config, config.name);
}
const FUNCINCCONFIG = function(){
  name = name || THROWE();
  configs[name] = config;
};
const FUNCCONFIG = S._Object.freeze(S._Object.assign(confiGmain,meths));
const FUNCFAKEIFNULL = function(){};
const FUNCMETHS = function(){
  return {
      global: FUNCCONFIGGLOBAL
      instance: FUNCCONFIGINSTANCE,
      funC: FUNCCONFIGFUNC
  };
};
const FUNCLOOPINTERFACE = function(config){S._Object.keys(fakeIfNull).forEach(e=>{fakeIfNull[e](config)})};
const FUNCASSIGNINTERFACE = function(config,name){return instances[name]=config;};

const gConfig:   {[index: string]: {}} = {};
const FInstances: {[index: string]: {}} = {};
const configs:   {[index: string]: {}} = {};
const funcs:     {[index: string]: {}} = {};
const intF:interface_funCinterface 	= funCinterface;
const intF_keys: string[] 			= Object.keys(intF);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** CLAS BLUEPRINT
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 * GLOBAL CONFIG            config settings only, stores as global config / zero index, no inherit
 * BRANCH CONFIG            all config settings,  stores as branch config / non zero index, inherits global then overwritten by config
 * BRANCH INSTANCE CONFIG   all config settings,  stores as branch instance config / non zero index, inherits global then overwritten by branch config then overwritten by config.
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 * BUILD METHODS MODIFICATIONS
 * -- visible               func.toString() printed on terminal reveals insensitives
 * -- mutable               post render modifiable state  
 * -- gettable              if information is readable
 * -- settable              if information is writeable
 * -- chainable             .method().method().method() ...
 * -- async                 runs asynchronously
 * -- mirror                mocks something
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 *                          ACCESS-LEVELS                 OTHER                     NOTES
 * MEMORY REFERENCING   CLASS PACKAGE SUBCLASS WORLD    DATA METHOD
 * -- SETTINGS          YES   NO      NO       NO       YES  NO             SETTINGS ARE IMMUTABLE & INHERITED
 * -- INTERNAL          YES   NO      YES      NO       YES  YES            INTERNAL PROGRAMMABLE TO SUPERCLASS ONLY
 * -- STATIC            YES   NO      NO       NO       YES  YES            ONLY AVAILABLE TO IT'S CLASS
 * -- PUBLIC            YES   YES     YES      YES      YES  YES            AVAILABLE EVERYWHERE    
 * -- PROTECT           YES   YES     YES      NO       YES  YES
 * -- PRIVATE           YES   NO      NO       NO       YES  YES
 * -- CONSTRUCTOR       YES   YES     NO       YES      NO   YES
 * -- IMPORTS           YES   NO      YES      NO       YES  NO             IMPORTS    PROGRAMMABLE TO SUPERCLASS ONLY
 * -- MIDDLEMANS        YES   NO      YES      NO       YES  YES            MIDDLEMANS PROGRAMMABLE TO SUPERCLASS ONLY
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 * -- NON METHODS | METHODS
 * d vs m   (data vs method)  
 * 
 * -- INHERITANCE -> new,extend,implement
 * i vs s vs p0 vs p1 vs p2
 * internal static public private protect
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 *  0) CONFIG
 *  -- VALIDATION.ITERATE
 *  -- VALIDATION.CROSSEXAMINE
 *  -- MEMASSIGN
 *  1) BUILDPUBLIC
 *  2) return S._Object.freeze({
            new:        neW(PUBLIC),
            delete:     deletE(PUBLIC),
            extend:     extenD(PUBLIC),
            implement:  implemenT(PUBLIC)
  });
 * 
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 * How does a programmer see all class configurations?; readonly access.
 * How does a programmer mod all class configuration?; read-write access.
 * 
 * How does a programmer confidently new configurations that don't mod others?
 * 
 * Should Internal be constant & available to all inheritances?
 * 
 * 
 */


// const c = Clas({/*global config*/});

// const ci0 = c.new(/*branch config*/);

// const ci0i0 = ci0.new(/* branch instance config*/);


const CLAS = (function(){

    // const configs = {
    //   "GLOBAL":     {}, // FREEZE AFTER GLOBAL CONFIG ASSIGNED
    //   "BRANCH":     {}, 
    //   "BINSTANCES": {}
    // };

    /*export*/ const claS:claS = function(setupOBJ) {
        const __MEM__ = CONFIG(setupOBJ,
              CLASSINGULARVALIDATIONS,
              CLASSCROSSEXAMINEVALIDATIONS,
              function() {
                __mem__ = {
                  __settings__   :CLASMEMSETUP["SETTINGS"]     [1](setupOBJ),
                  __internal__   :CLASMEMSETUP["INTERNAL"]     [1](setupOBJ),
                  __static__     :CLASMEMSETUP["STATIC"]       [1](setupOBJ),
                  __public__     :CLASMEMSETUP["PUBLIC"]       [1](setupOBJ),
                  __private__    :CLASMEMSETUP["PRIVATE"]      [1](setupOBJ),
                  __protect__    :CLASMEMSETUP["PROTECT"]      [1](setupOBJ),
                  __constructor__:CLASMEMSETUP["CONSTRUCTOR"]  [1](setupOBJ),
                  __imports__    :CLASMEMSETUP["IMPORTS"]      [1](setupOBJ),
                  __middlemans__ :CLASMEMSETUP["MIDDLEMANS"]   [1](setupOBJ),
              };
        });
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
            new:        CLASNEW      (PUBLIC),
            delete:     CLASDELETE   (PUBLIC),
            extend:     CLASEXTEND   (PUBLIC),
            implement:  CLASIMPLEMENT(PUBLIC)
        });
    };
    const CLASNEW       = function(PUBLIC)     {return function(){return new PUBLIC(...arguments);}};
    const CLASDELETE    = function(PUBLIC)     {return function(){};};
    const CLASEXTEND    = function(PUBLIC)     {return function(){};};
    const CLASIMPLEMENT = function(PUBLIC)     {return function(){};};
    
    const noDuplicates123456 = function(setupOBJ:setupOBJ) {
        let a = KEYS(setupOBJ.dp||{});
        let b = KEYS(setupOBJ.mp||{});
        let c = KEYS(setupOBJ.protectData||{});
        let e = KEYS(setupOBJ.privateData||{});
        let f = KEYS(setupOBJ.privateMethods||{});
        let oriG = a.concat(b).concat(c).concat(d).concat(e).concat(f);
        let neW = UNIQ(oriG);
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
    const CLASMEMSETUP = CAPSULE(function(){

    },{          // default                             // validate   // block
    IMPORTS:     [() => ({})                            ,()=>{}       ,(o,z)  => CLASSETUPOBJ["imports"][1](o,z)],
    MIDDLEMANS:  [() => ({})                            ,()=>{}       ,z      => CLONE(z)],
    INTERNAL:    [() => ({"mi":{},"di":{"instances":0}}),()=>{}       ,(o,z)  => (CLASSETUPOBJ["mi"][1](o,z),CLASSETUPOBJ["di"](o,z)],
    STATIC:      [() => ({"ds":{},"ms":{}})             ,()=>{}       ,o      => CLASSETUPOBJ["ms"](o,CLASMEMSETUP["STATIC"][0])],
    PUBLIC:      [() => ({"dp":{},"mp":{}})             ,()=>{}       ,o      => ({"dp": o.dp, "mp":o.mp})],
    PRIVATE:     [],
    PROTECT:     [],
    SETTINGS:    [()=>{}],
    CONSTRUCTOR: [()=>{}]
    });
    const CLASSETUPOBJ = function(){ return CAPSULE(function(){

    },
    {                      // SINGULAR VALIDATIONS                    BLOCK                       DEFAULT
    /*const*/  extends    : [[HASPROPERTY,ISOBJECT,NOTEMPTY,UHHHH]      ,CLONE,                   {}],
    /*const*/  implements : [[HASPROPERTY,ISOBJECT,NOTEMPTY,UHHHH]      ,CLONE,                   {}],
    /*const*/  name       : [[HASPROPERTY,ISSTRING,NOTEMPTY]            ,CLONE,                   ""],
    /*const*/  settings   : [[HASPROPERTY,ISOBJECT,NOTEMPTY]            ,CLONE,                   {}],
    /*const*/  imports    : [[HASPROPERTY,ISOBJECT,NOTEMPTY]            ,[CLONE,block_imports],   {}],
    /*const*/  events     : [[HASPROPERTY,ISOBJECT,NOTEMPTY]            ,CLONE,                   {}],
    /*const*/  di         : [[enforce_object_datas]                     ,CLONE,                   {}],
    /*const*/  ds         : [[enforce_object_datas]                     ,CLONE,                   {}],
    /*const*/  dp         : [[enforce_object_datas]                     ,CLONE,                   {}],
    /*const*/  dp1        : [[enforce_object_datas]                     ,CLONE,                   {}],
    /*const*/  dp2        : [[enforce_object_datas]                     ,CLONE,                   {}],
    /*const*/  mi         : [[enforce_object_methods]                   ,[block_mi,CLONE],        {}],
    /*const*/  ms         : [[enforce_object_methods]                   ,[block_ms,CLONE],        {}],
    /*const*/  mp         : [[enforce_object_methods]                   ,[block_mp,CLONE],        {}],
    /*const*/  mp1        : [[enforce_object_methods]                   ,[block_mp1,CLONE],       {}],
    /*const*/  mp2        : [[enforce_object_methods]                   ,[block_mp2,CLONE],       {}],
    /*const*/  constructor: [[enforce_object_methods]                   ,[CLONE],                 function(){}]
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
    // consT(`

    // `);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const UHHHH = function(obj) {   
        // loopObject(obj, (obj,k)=>{ loopObject(obj.extends, k) });
        S._Object.keys(obj.extends).forEach(
            e => Object.keys(obj.extends[e]).forEach(
                    (k) => throwE("pm || pd",()=>(typeof obj.mp[k] === obj.extends[e][k] || typeof obj.dp[k] === obj.extends[e][k]))
            )
        );
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const CLASSLEGEND = {
        "d0":    "data",
        "m0":    "method",
        "i0":    "internal",
        "s0":    "static",
        "p0":    "public",
        "p1":    "private",
        "p2":    "protect"
    };
    const CLASSLEGENDWRAP = Object.freeze(Object.assign(function() {},
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
                    return CLONE(this[enuM][prop]||this[enuM])
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


 
})();
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*3)  LANGUAGE CONSTRUCT MUST HAVES
*/
const SPECDEV = CAPSULE(function(){
  console.warn(`
  ** collects all tests from different projects and stores into one repository for data science
  ** study the other testing frameworks to see what they did wrong
  ** do everything in power to automate this
  ** applications are written in node-terminal. "manual-mode" demands thinking ahead.
  ** tests zoning are automated
  ** tests styles are selectable & documented in db
  ** notification system needs to be built. ??? display what notifications first? ???
  ** 
  `);
  throw new Error("UNFINISHED");
},{
/*const*/ SPECDB : function(){

},
/*const*/ TESTSZONE : {
  "E2E": {
    DESCRIPTION: `END 2 END TESTING: ALL TESTS ARE EXECUTED ON LIVE FULLY ASSEMBLED SOFTWARE`
  },
  "SEG": {
    DESCRIPTION: `SEGMENTED TESTING: ALL TESTS ARE EXECUTED ON ISOLATED COMPONENTS`
  }
},
/*const*/ TESTSTYLE : {
  "TDD":{
    DESCRIPTION: `TEST-DRIVEN-DEVELOPMENT: ALL SOFTWARE DEVELOPMENT ORIENTED AROUND PASSING TESTS FOR NEW CODE`,
  },
  "BDD":{
    DESCRIPTION: `BEHAVIOR-DRIVEN-DEVELOPMENT: DEVELOPMENT ORIENTED AROUND SEEMINGLY MAKING THE GRADE`,
  },
  "FDD":{
    DESCRIPTION: `FEATURE-DRIVEN-DEVELOPMENT: DEVELOPMENT ORIENTED AROUND VERSIONING RELEASE PRIORITIES`
  },
},
/*const*/ TESTAPPROACHES : {
  "DATATYPES": {
    DESCRIPTION: `WHAT DATATYPES ARE ACCEPTED`
  },
  "VALIDATIONS": {
    DESCRIPTION: `WHAT CAUSES RETURN FALSE OR FAILURES`
  },
  "CONDITIONAL-SLIPPING": {
    DESCRIPTION: `WHAT FUNKY DATATYPE INPUTS SLIP BY CONDITIONAL STATEMENTS`
  },
  "IOSETS": {
    DESCRIPTION: `WHAT INPUT & OUTPUT SETS ARE SUPPOSE TO PASS`
  },
  "RANGES": {
    DESCRIPTION: `WHAT RANGES OF INPUTS & OUTPUTS ARE ALLOWED`
  }
},
/*const*/ TESTGUIDE : { // think of testing like gaming
  "START PROJECT": {
    DESCRIPTION: `ROSTERS PROJECT INTO DB. MAPS FOLDER STRUCTURES. CREATES A RESERVATION IN CODEDATABASE.`,
    F:  function(){NEWPROJECTTITLE();NEWPROJECTDESCRIPTION();NEWFOLDERS();NEWSPECFOLDER();}
  },
  "START LAYER":   {
    DESCRIPTION: `ROSTERS LAYER INTO DB. MAPS LAYER STRUCTURES. CREATES A LAYER IN PROJECT.`,
    F:  function(){NEWLAYERTITLE();NEWLAYERDESCRIPTION();NEWFILELAYER();NEWSPECLAYER();}
  },
  "START FILE": {
    DESCRIPTION: `ROSTERS FILE INTO BD. MAPS FILE STRUCTURES. CREATES A FILE IN FOLDER.`,
    F:  function(){NEWFILETITLE();NEWFILEDESCRIPTION();NEWFILE();NEWSPECFILE();}
  },
  "START TASK":    {
    DESCRIPTION: `ROSTERS LAYER INTO DB. MAPS TASK STRUCTURES. CREATES A TASK-ZONE IN FILE.`,
    F:  function(){NEWTASKTITLE();NEWTASKDESCRIPTION();NEWTASK();NEWTASKSPEC();}
  }
},
/*const*/ TESTMETHODS : {
  "BYDATATYPE":{},
  "BYRANGE":{},
  "BYIOSET":{},
  "BYVALIDATION":{}
},
});





//////////////////////////////////////////////////////////////////////////////////////////////////////
const LAYERS = function(){
  // bottom layer: the functional layer   code density high,mostly imperative
  // top layer:    the highlevel layer    code density low, mostly english & pseudo
  // inbetween layers: programmable       code density med, mostly declarative & symbolic paradigm
};

//////////////////////////////////////////////////////////////////////////////////////////////////////
const CODEDECONSTRUCTOR = function(inputs){


  // codeparser     // converts findings into json jstructures
  // deconstruct    // strips code apart into distinct properties; procedures not needed
  // quantifier     // converts findings into numbers
  // procedureprint // converts unarranged distincts into executable code
  let props = {};
  let funcs = {};
  let dry   = {};
  let found = [];
  let k     = "";
  let j     = "";

  const CODEPARSER      = (function(inputs){

  })(inputs);
  const DESCONSTRUCT    = (function(inputs){

    inputs.forEach(e=>{
        for (let k in e) {
            if (!props.hasOwnProperty(k)) props[k] = []; 
            if (!funcs.hasOwnProperty(k)) props[k] = []; 
            props[k].push(e[k]);
        }
    });
  })(inputs);
  const QUANTIFIER      = (function(inputs){
    for (let k in props) {
      for (let j in props[k]) {

          if (!found.includes(props[k][j])) {found.push(props[k][j]);}

      }
      dry[k] = found;
      found = [];
  }
  });
  const PROCEDUREPRINT  = (function(inputs){

  })(inputs);    
  console.log(props);
  console.log(dry);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
const DIFFERENTIALBUILDCODING = function(){};

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*4)  ALGORITHMIC DATA STRUCTURES
*/
const INTUITLIST = function(){};
const TREES = function(){};
const WEB   = function(){};
const MATRIX= function(){};

const STORE = function(){};
const FETCH = function(){};
const AMBIENT=function(){};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*5)  ALGORITHMIC ALGORITHMS
*/
const SORT = function(){};
const QUANTIFY = function(){};
const SEARCH  = function(){};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*6)  WORKS OUT THE BOX
*/
const API           = function(){};
const SERVER        = function(){};
const CLIENT        = function(){};
const ZENDB         = function(){};
const PROXY         = function(){};
const CLUSTER       = function(){};
const DHCA          = function(){};
const SOCKET        = function(){};
const AUTOTEMPLATER = function(){};
const SMARTCSS      = function(){};
const TAPJS         = function(){};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/** 7) PARADIGM STYLER
 * 
 * ** FUNCTIONAL
 * ** OOP
 * ** DECLARATIVE
 * ** VERBOSE       // 100% DECLARATIVE
 * ** SENSICAL      // TYPING WORDS; NATURAL LANGUAGE INTERPRETTING
*/

const COMPARTMENTALIZE = function(){
  throw new Error("UNFINISHED");
  /**
   * SUBJECTIVE/CUSTOMIZABLE API ORGANIZATION
   * 
   * 
   * i.e
   * 
   * organize all methods by input datatype
   * organize all methods by output datatype
   * organize all methods by paradigms
   * organize all methods by alphabet
   * organize all methods by authors recommendation
   * 
   */
};
const PARADIGMS = CAPSULE(function(sel){
  throw new Error("UNFINISHED");
  PARADIGMS.hasOwnProperty(sel) && PARADIGMS[sel]()
},{
"FUNCTIONAL":function(){},
"GROUPING"  :function(){},
"OOP"       :function(){},
"VERBOSE"   :function(){},  
"SENSICAL"  :function(){}   
});

console.warn(`miscellaneous todo list
** analyze the functional libraries. remove duplicate functionalities.
`);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/** 7) SNIPPETS
*/
const SNIPPETS = {
  CAPSULE: {},
  CLOSURE: {},
  FUNCLITE:{},
  FUNC:{},
  CLAS:{}
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
const LEARNDEVCORE = function(){
  console.warn(`
  learn everything exported from devcore.



  ** iterate by category
  ** iterate by one a time
  ** iterate by random
  //////////////////////////////////////////
  ** answer by solving
  ** answer by multiple-choice




  `); 
  throw new Error("UNFINISHED");
};





export const weavePackageExportable = (function(){ 

  // enforce LOOPCHECKLIST on pkgs & functional programs
  // convert into pkg paradigm selection style
  // convert into exportable ${PROGRAMMING LANGUAGE}`

})();
