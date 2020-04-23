/**
 * 
 * 
 * WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
 * WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING  
 * WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
 * WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING  
 * WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING  
 * 
 * 
 * SELF MODIFYING DOCUMENT ON EVERY EXECUTION
 * 
 * * 
 * 
 *  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
 *  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
 *  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
 *  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
 * 
 */
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
/*export*/ export const SANDBOX = (function SANDBOX() {
    let instances = 0;

    if (instances++ !== 0) {
        THROWE();
    }
    const clone = Object.freeze(Object.assign(function(v:any):any {
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

export const S = SANDBOX;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// lambdas                // returns true or false or value. no validations. barebones
// GROUPED LAMBDAS        // OOP STYLE
// FUNC WRAPPED LAMBDAS   // SPECIAL INPUT / OUTPUT BEHAVIOR


/*// LAMBDAS //
  * returns a value
  * no validations
  * does not handle errors
  * does not use callbacks as an information return
*/
export const ISBOOLEAN     =   v => typeof v === "boolean";
export const ISNOTBOOLEAN  =   v => !ISBOOLEAN(v);
export const ISNUMBER      =   v => typeof v === "number";
export const ISNOTNUMBER   =   v => !ISNUMBER(v);
export const ISSTRING      =   v => typeof v === "string";
export const ISNOTSTRING   =   v => !ISNOTSTRING(v);
export const ISJSON        =   v => typeof v === "object" && !S._Array.isArray(v);
export const ISNOTJSON     =   v => !ISNOTJSON(v);
export const ISOBJECT      =   v => typeof v === "object";
export const ISNOTOBJECT   =   v => !ISNOTOBJECT(v);
export const ISARRAY       =   v => S._Array.isArray(v);
export const ISNOTARRAY    =   v => !ISARRAY(v);
export const ISSYMBOL      =   v => typeof v === "symbol";
export const ISNOTSYMBOL   =   v => !ISSYMBOL(v);
export const ISFUNCTION    =   v => typeof v === "function";
export const ISNOTFUNCTION =   v => !ISFUNCTION(v);
export const ISTHIS        =   v => v.toString().includes("function ");
export const ISNOTTHIS     =   v => !ISTHIS(v);
export const ISLAMBDA      =   v => ISFUNCTION(v) && v.toString().includes("=>");
export const ISNOTLAMBDA   =   v => !ISLAMBDA(v);
export const ISANONYMOUS   =   v => ISFUNCTION(v) && !ISLAMBDA(v) && v["name"] === undefined;
export const ISNOTANONYMOUS=   v => !ISANONYMOUS(v);
export const ISFUNC        =   v => ISFUNCTION(v) && !ISLAMBDA(v) && v.hasOwnProperty("name");
export const ISNOTFUNC     =   v => !ISFUNC(v);
export const ISCLASS       =   v => {throw new Error("UNFINISHED")};
export const ISNOTCLASS    =   v => !ISCLASS(v);
export const ISNEWABLE     =   v => {throw new Error("UNFINISHED")};
export const ISUNDEFINED   =   v => v === undefined;
export const ISNOTUNDEFINED=   v => !ISUNDEFINED(v);
export const ISNULL        =   v => v === "null";
export const ISNOTNULL     =   v => !ISNULL(v);




export const ISSAFE        =   v => S._Number.isSafeInteger(v);
export const ISNOTSAFE     =   v => !ISSAFE(v);
export const ISTRUE        =   v => v === true;
export const ISNOTTRUE     =   V => !ISTRUE(v);
export const ISFALSE       =   v => v === false;
export const ISNOTFALSE    =   v => !ISSAFE(v);
export const ISINFINITY    =   v => v === Infinity;
export const ISNOTINFINITY =   v => !ISINFINITY(v);
export const ISFINITE      =   v => S._isFinite(v);
export const ISNOTFINITE   =   v => !ISFINITE(v);
export const ISMAXVALUE    =   v => v === S._Number.MAX_VALUE;
export const ISNOTMAXVALUE =   v => !ISMAXVALUE(v);
export const ISMINVALUE    =   v => v === S._Number.MAX_VALUE;
export const ISNOTMINVALUE =   v => !ISMINVALUE(v);
export const ISMAXSAFEVALUE=   v => v === S._Number.MAX_SAFE_INTEGER;
export const ISNOTMAXSAFEVALUE=v => !ISMAXSAFEVALUE(v);
export const ISMINSAFEVALUE=   v => v === S._Number.MIN_SAFE_INTEGER;
export const ISNOTMINSAFEVALUE=v => !ISMINSAFEVALUE(v);
export const ISNAN         =   v => S._isNaN(v);
export const ISNOTNAN      =   v => !ISNAN(v);
export const ISPOSITIVE    =   v => 0 < v;
export const ISNOTPOSITIVE =   v => !ISPOSITIVE(v);
export const ISNEGATIVE    =   v => 0 > v;
export const ISNOTNEGATIVE =   v => !ISNEGATIVE(v);
export const ISZERO        =   v => v === 0;
export const ISNOTZERO     =   v => !ISZERO(v);
export const ISFLOAT       =   v => S._String(v).includes(".");
export const ISNOTFLOAT    =   v => !ISFLOAT(v);
export const ISINTEGER     =   v => (V << 0) === V;
export const ISNOTINTEGER  =   v => !ISINTEGER(v);
export const ISALPHA       =   v => [..._lowerCase,..._upperCase].includes(v);
export const ISNOTALPHA    =   v => !ALPHA(v);
export const ISLOWERCASE   =   v => _lowerCase.includes(v);
export const ISNOTLOWERCASE=   v => !ISLOWERCASE(v);
export const ISUPPERCASE   =   v => _upperCase.includes(v);
export const ISNOTUPPERCASE=   v => !ISUPPERCASE(v);
export const ISSYMBOL      =   v => _symbols.includes(v);
export const ISNOTSYMBOL   =   v => !ISSYMBOL(v);
export const ISEMPTY       =   function(v){
                            return {
                                "str":v=>v.length===0,"obj":v=>S._Object.keys(v).length===0,
                                "arr":v=>v.length===0,"fnc":v => v.toString()
                            }[(S._Array.isArray(v) && "arr") || (typeof v)](v);
};
export const ISNOTEMPTY    = (v)=>{
                            return {
                                "str":v=>v.length!==0,"obj":v=>S._Object.keys(v).length !== 0,
                                "arr":v=>v.length!==0,"fnc":v=>v.toString()
                            }[(S._Array.isArray(v) && "arr") || (typeof v)](v);
};

export const GETNAME       = function(func){};
export const GETPARAMS     = function(func){
    let start = 0;
    let end = 0;

    if (func.toString().includes("function")) {
        start = func.toString().indexOf("(");
        end   = func.toString().indexOf(")");
    } else if (func.toString().includes("=>")) {
      return [];
    }
    return func.toString().slice(start+1,end).split(",") || [];
};
export const GETCOMMENTS   = function(func){};
export const GETINPUTTYPE  = function(func){};
export const GETOUTPUTTYPE = function(func){};
export const GETEXETYPE    = function(func){};
export const GETSTATEMENTS = function(func){};
export const GETINNERMEM   = function(func){};

// export const ALLSAMCASE         = e => {let _ = e.slice().shift(); e = (ISLOWERCASE(_) && isLowerCase) || (ISUPPUERCASE(_) && ISUPPERCASE);  for (let k in e) { true === _(e) || THROWE(); }};
// export const ALLTWOCASE         = e => {let a,b,c;   for (let k in e){ (ISLOWERCASE(_) && (a=true)) || (ISUPPERCASE(_) && (b=true)) || (c=true); }; return (a&&b)^c};
// export const ALLMULCASE         = e => {let a = false, b = false, c = false;for (let k in e) { (ISLOWERCASE(k)&&a=true) || (ISUPPERCASE(k)&&b=true) || (ISSYMBOL(k)&&c=true)};return a&&b&&c;};


export const ASSERTINDEPENDENCE = f => EVERY(f.toString(),ALLSAMCASE)&&EVERY(f.toString(),ALLALPHA);
export const ASSERTCOMPOUND     = f => EVERY(f.toString(),ALLTWOCASE)&&EVERY(f.toString(),ALLALPHA);
export const assertComplex      = f => EVERY(f.toString(),ALLMULCASE)&&EVERY(f.toString(),ALLALPHA);

export const NOTEMPTY               = v => (ISARRAY(v)            && THROWE("must not be empty",(v.length > 0))
                                ||  (typeof v === "object" && THROWE("must not be empty",(S._Object.keys(v).length > 0)))
                                ||  (typeof v === "string" && THROWE("must not be empty",(v.length > 0)))
                                ||  (false)
);
export const HASPROPERTY         = (obj,prop) => THROWE("must have prop "+prop, obj.hasOwnProperty(prop));


export const ISEVEN = function(){};
export const ISODD = function(){};

export const PERIOD = (e: string) => {
    if (e[0] === ".") {
        if (e[1] === ".")           e = "../" + e;
        else if (e[1] === "/")      e.shift(), e.shift(), e = "../" + e;
        else                        {THROWE();}
    }
    return e;
};

// export const loopObject             = (obj,cb) => { for (let k in obj) cb(obj,k); };


export const enforce_object_datas   = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(isNotFunction);};
export const enforce_object_methods = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(isFunction);};
export const enforce_object_propsss = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(isNotFunction);};
export const enforce_object_nulls   = v => {isObject(v);isNull(v);};
export const enforce_settings       = v => {isObject(v);notEmpty(v);S._Object.keys(v).forEach(enforceSetting);};
export const enforce_setting        = v => {};


export const EVERY = function(v,cb){
  if      (typeof v === "string")   {for (let k in v) {if (!cb(v[k])) return false}; return true;}
  else if (S._Array.isArray(v))     {return v.every(cb);}
  else if (typeof v === "object")   {for (let k in v) {if (!cb(v[k])) return false} return true;}
  else if (typeof v === "symbol")   {throw new Error("UNFINISHED");}
  else                              {throw new Error();}
};
export const ALL = EVERY;


export const NUMSTR = v => EVERY(v,function(a){return NUMBERS.includes(a)});
export const NNUMSTR =v => EVERY(v,function(a){return !NUMBERS.includes(a)});
export const STRSTR = v => EVERY(v,ISSTRING);
export const NSTRSTR = v => EVERY(v,ISNOTSTRING);
export const BOLARR = v => EVERY(v,ISBOOLEAN);
export const NBOLARR = v => EVERY(v,ISNOTBOOLEAN);
export const NUMARR = v => EVERY(v,ISNUMBER);
export const NNUMARR = v => EVERY(v,ISNOTNUMBER);
export const STRARR = v => EVERY(v,ISSTRING);
export const NSTRARR = v => EVERY(v,ISNOTSTRING);
export const ARRARR = v => EVERY(v,ISARRAY);
export const NARRARR = v => EVERY(v,ISNOTARRAY);
export const OBJARR = v => EVERY(v,ISOBJECT); 
export const NOBJARR = v => EVERY(v,ISNOTOBJECT); 
export const JSNARR = v => EVERY(v,ISJSON);
export const NJSNARR = v => EVERY(v,ISNOTJSON);
export const FNCARR = v => EVERY(v,ISFUNCTION); 
export const NFNCARR = v => EVERY(v,ISNOTFUNCTION); 
export const OBJLMD = v => EVERY(v,ISLAMBDA);
export const NOBJLMD = v => EVERY(v,ISNOTLAMBDA);
export const ANOARR = v => EVERY(v,ISANONYMOUS);
export const NANOARR = v => EVERY(v,ISNOTANONYMOUS);
export const UNDARR = v => EVERY(v,ISUNDEFINED); 
export const NUNDARR = v => EVERY(v,ISNOTUNDEFINED); 
export const NULARR = v => EVERY(v,ISNULL);
export const NNULARR = v => EVERY(v,ISNOTNULL);

export const BOLJSN = v => EVERY(v,ISBOOLEAN);
export const NBOLJSN = v => EVERY(v,ISNOTBOOLEAN);
export const NUMJSN = v => EVERY(v,ISNUMBER);
export const NNUMJSN = v => EVERY(v,ISNOTNUMBER);
export const STRJSN = v => EVERY(v,ISSTRING);
export const NSTRJSN = v => EVERY(v,ISNOTSTRING);
export const JSNJSN = v => EVERY(v,ISJSON);
export const NJSNJSN = v => EVERY(v,ISNOTJSON);
export const OBJJSN = v => EVERY(v,ISOBJECT); 
export const NOBJJSN = v => EVERY(v,ISNOTOBJECT); 
export const FNCJSN = v => EVERY(v,ISFUNCTION); 
export const NFNCJSN = v => EVERY(v,ISNOTFUNCTION); 
export const OBJJSN = v => EVERY(v,ISLAMBDA);
export const OBJJSN = v => EVERY(v,ISNOTLAMBDA);
export const ANOJSN = v => EVERY(v,ISANONYMOUS);
export const NANOJSN = v => EVERY(v,ISNOTANONYMOUS);
export const UNDJSN = v => EVERY(v,ISUNDEFINED); 
export const NUNDJSN = v => EVERY(v,ISNOTUNDEFINED); 
export const NULJSN = v => EVERY(v,ISNULL);  
export const NNULJSN = v => EVERY(v,ISNOTNULL);  






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const __FINDHIGHESTARITY = function(spec, max) {

    if (max === "undefined") max = 0;

    for (const key in spec) {
      if (HASPROPERTY(spec,key) === false || key === 'constructor') continue;
  
      if (typeof spec[key] === 'object') {
        max = S._Math.max(max, __FINDHIGHESTARITY(spec[key]));
      }
  
      if (typeof spec[key] === 'function') {
        max = S._Math.max(max, spec[key].length);
      }
    }
    return max;
};

export const __APPLYSPECWITHARITY = function(spec, arity, cache) {
    const remaining = arity - cache.length;
    if (remaining === 1) return x => __APPLYSPECWITHARITY(spec, arity, __FILTERUNDEFINED(...cache, x));
    if (remaining === 2) return (x, y) => __APPLYSPECWITHARITY(spec, arity, __FILTERUNDEFINED(...cache, x, y));
    if (remaining === 3) return (x, y, z) => __APPLYSPECWITHARITY(spec, arity, __FILTERUNDEFINED(...cache, x, y, z));
    if (remaining === 4) return (x, y, z, a) => __APPLYSPECWITHARITY(spec, arity, __FILTERUNDEFINED(...cache, x, y, z, a));
    if (remaining > 4) return   (args) => __APPLYSPECWITHARITY(spec, arity, __FILTERUNDEFINED(...cache, ...args));
  
    if (S._Array.isArray(spec)) {
      const ret = [];
      let i = 0;
      const l = LEN(spec);
  
      for (; i < l; i++) {
        if (typeof spec[i] === 'object' || S._Array.isArray(spec[i])) {
          ret[i] = __APPLYSPECWITHARITY(spec[i], arity, cache);
        }
  
        if (typeof spec[i] === 'function') {
          ret[i] = spec[i](...cache);
        }
      }
      return ret;
  }
};
export const __FILTERUNDEFINED = function() {
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
export const FLIPEXPORT = function(fn) {
    return (input) => {
      if (input.length === 1) {
        return holder => fn(holder, input[0]);
      } else if (input.length === 2) {
        return fn(input[1], input[0]);
      }
  
      return undefined;
    };
};
export const ISINTEGER$1 = Number.isInteger || ISINTEGER;
export const INDEXBYPATH = function(pathInput, list) {
  const toReturn = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    toReturn[PATH(pathInput, item)] = item;
  }

  return toReturn;
};
export const BASESLICE = function(array, start, end) {
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
export const MAPOBJECT = function(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    willReturn[prop] = fn(obj[prop], prop, obj);
  }

  return willReturn;
}
// export const REDUCE = CURRY(reduceFn);

export const _CURRY3 = function(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;
        case 1:
          return _ISPLACEHOLDER(a) ? f3
               : _curry2(function(_b, _c) { return fn(a, _b, _c); });
        case 2:
          return _ISPLACEHOLDER(a) && _ISPLACEHOLDER(b) ? f3
               : _ISPLACEHOLDER(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
               : _ISPLACEHOLDER(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
               : _CURRY1(function(_c) { return fn(a, b, _c); });
        default:
          return _ISPLACEHOLDER(a) && _ISPLACEHOLDER(b) && _ISPLACEHOLDER(c) ? f3
               : _ISPLACEHOLDER(a) && _ISPLACEHOLDER(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
               : _ISPLACEHOLDER(a) && _ISPLACEHOLDER(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
               : _ISPLACEHOLDER(b) && _ISPLACEHOLDER(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
               : _ISPLACEHOLDER(a) ? _CURRY1(function(_a) { return fn(_a, b, c); })
               : _ISPLACEHOLDER(b) ? _CURRY1(function(_b) { return fn(a, _b, c); })
               : _ISPLACEHOLDER(c) ? _CURRY1(function(_c) { return fn(a, b, _c); })
               : fn(a, b, c);
      }
    };
};  
export const PARSEREGEX = function(maybeRegex) {
  if (maybeRegex.constructor !== S._RegExp) return [false];
  return [true, maybeRegex.toString()];
};
export const PARSEDATE = function(maybeDate) {
  if (!maybeDate.toDateString) return [false];
  return [true, maybeDate.getTime()];
};
export const PARSEERROR = function(maybeError) {
  const typeofError = maybeError.__proto__.toString();

  if (!['Error', 'TypeError'].includes(typeofError)) return [];
  return [typeofError, maybeError.message];
};
export const _OBJECTIS = function(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }

  return a !== a && b !== b;
};
export const _OBJECTIS$1 = S._Object.is || _objectIs;
export const DEFAULTTO = function(defaultArgument, inputArguments) {
  if (arguments.length === 1) {
    return _inputArguments => DEFAULTTO(defaultArgument, _inputArguments);
  } else if (arguments.length === 2) {
    return FLAGIS(inputArguments[0]) ? defaultArgument : inputArguments[0];
  }

  const limit = inputArguments.length - 1;
  let len = limit + 1;
  let ready = false;
  let holder;

  while (!ready) {
    const instance = inputArguments[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (FLAGIS(instance)) {
      len -= 1;
    } else {
      holder = instance;
      ready = true;
    }
  }

  return holder === undefined ? defaultArgument : holder;
};
export const Const = x => ({
  x,
  map: fn => Const(x)
});
export const _CURRY1 = function(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _ISPLACEHOLDER(a)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
};
export const _CURRY2 = function(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;
        case 1:
          return _ISPLACEHOLDER(a) ? f2
               : _CURRY1(function(_b) { return fn(a, _b); });
        default:
          return _ISPLACEHOLDER(a) && _ISPLACEHOLDER(b) ? f2
               : _ISPLACEHOLDER(a) ? _CURRY1(function(_a) { return fn(_a, b); })
               : _ISPLACEHOLDER(b) ? _CURRY1(function(_b) { return fn(a, _b); })
               : fn(a, b);
      }
    };
};
export const _ISPLACEHOLDER = function(a) {
    return a != null &&
           typeof a === 'object' &&
           a['@@functional/placeholder'] === true;
};
export const _DISPATCHABLE = function(methodNames, xf, fn) {
    return function() {
      if (arguments.length === 0) {
        return fn();
      }
      var args = S._Array.prototype.slice.call(arguments, 0);
      var obj = args.pop();
      if (!_ISARRAY(obj)) {
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
  };
export const _ISOBJECT = function(x) {
  return S._Object.prototype.toString.call(x) === '[object Object]';
};
export const _REDUCED = function(x) {
    return x && x['@@transducer/reduced'] ? x :
      {
        '@@transducer/value': x,
        '@@transducer/reduced': true
      };
};
export const XWRAP = function(fn) {
    this.f = fn;
};
XWRAP.prototype['@@transducer/init'] = function() {
  throw new Error('init not implemented on XWrap');
};
XWRAP.prototype['@@transducer/result'] = function(acc) { return acc; };
XWRAP.prototype['@@transducer/step'] = function(acc, x) {
  return this.f(acc, x);
};
export const _XWRAP = function(fn) { return new XWRAP(fn); }
export const _REDUCE = function(fn, acc, list) {
if (typeof fn === 'function') {
      fn = _XWRAP(fn);
    }
    if (_ISARRAYLIKE(list)) {
      return _ARRAYREDUCE(fn, acc, list);
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _METHODREDUCE(fn, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
      return _ITERABLEREDUCE(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list, 'reduce');
    }
    throw new TypeError('reduce: list must be array or iterable');
};
export const _FILTER = function(fn, list) {
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
export const _ISTRANSFORMER = function(obj) {
    return obj != null && typeof obj['@@transducer/step'] === 'function';
};
export const _ISARRAY = S._Array.isArray || function _ISARRAY(val) {
    return (val != null &&
            val.length >= 0 &&
            S._Object.prototype.toString.call(val) === '[object Array]');
};
export const _ISARRAYLIKE = _CURRY1(function ISARRAYLIKE(x) {
    if (_isArray(x)) { return true; }
    if (!x) { return false; }
    if (typeof x !== 'object') { return false; }
    if (_isString(x)) { return false; }
    if (x.nodeType === 1) { return !!x.length; }
    if (x.length === 0) { return true; }
    if (x.length > 0) {
      return HASPROPERTY(X,0) && HASPROPERTY(x,x.length - 1);
    }
    return false;
  });
export const _ARRAYREDUCE = function(xf, acc, list) {
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
export const _ARITY = function(n, fn) {
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
export const BIND = _CURRY2(function BIND(fn, thisObj) {
    return _ARITY(fn.length, function() {
      return fn.apply(thisObj, arguments);
    });
});  
export const _METHODREDUCE = function(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](BIND(xf['@@transducer/step'], xf), acc));
};
export const _ITERABLEREDUCE = function(xf, acc, iter) {
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
export const _ISSTRING = function(x) {
    return Object.prototype.toString.call(x) === '[object String]';
};
export const _IDENTITY = function(x) { return x; };
export const _XFBASE = {
    init: function() {
      return this.xf['@@transducer/init']();
    },
    result: function(result) {
      return this.xf['@@transducer/result'](result);
    }
};
export const XFILTER = function(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFILTER.prototype['@@transducer/init'] = _XFBASE.init;
  XFILTER.prototype['@@transducer/result'] = _XFBASE.result;
  XFILTER.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
};  
// export const _XFILTER = _curry2(function _xfilter(f, xf) { return new XFilter(f, xf); });  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const ALWAYS = function(x) {
    return () => x;
};
export const APPLYSPEC = function(spec, args) {
    const arity = __FINDHIGHESTARITY(spec);
  
    if (arity === 0) {
      return () => ({});
    }
  
    const toReturn = __APPLYSPECWITHARITY(spec, arity, args);
  
    return toReturn;
};
export const COMPOSE = function(fns) {
    if (fns.length === 0) {
      throw new Error('compose requires at least one argument');
    }
  
    return (args) => {
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
export const CURRY = function(fn, args) {

    if (!args) args = [];

    return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : CURRY(fn, rest))([...args, ..._args]);
};
export const F = function() {
    return false;
};
export const FLIP = function(fn) {
    return FLIPEXPORT(fn);
};
export const IDENTITY = function(x) {
    return x;
};
export const NEGATE = function(n) {
    return -n;
};
export const PARTIAL = function(fn, args) {
    const len = fn.length;
    return (...rest) => {
      if (args.length + rest.length >= len) {
        return fn(...args, ...rest);
      }
  
      return partial(fn, ...[...args, ...rest]);
    };
};
export const PIPE = function(fns) {
    if (fns.length === 0) throw new Error('pipe requires at least one argument');
    return COMPOSE(...fns.reverse());
};
export const T = function() {
    return true;
};
export const TAP = function(fn, x) {
    if (arguments.length === 1) return _x => TAP(fn, _x);
    fn(x);
    return x;
};
export const ADD = function(a, b) {
    if (arguments.length === 1) return _b => add(a, _b);
    return S._Number(a) + S._Number(b);
};
export const DEC = function(n) {return  n - 1};
export const INC = function(n) {return  n + 1};
export const MATHMOD = function(m, p) {
    if (arguments.length === 1) return _p => MATHMOD(m, _p);
    if (!ISINTEGER$1(m) || !ISINTEGER$1(p) || p < 1) return NaN;
    return (m % p + p) % p;
};
export const MEAN = function(list) {
    return SUM(list) / list.length;
};
export const MEDIAN = function(list) {
    const len = list.length;
    if (len === 0) return NaN;
    const width = 2 - len % 2;
    const idx = (len - width) / 2;
    return MEAN(S._Array.prototype.slice.call(list, 0).sort((a, b) => {
      if (a === b) return 0;
      return a < b ? -1 : 1;
    }).slice(idx, idx + width));
};
export const MODULO = function(a, b) {
    if (arguments.length === 1) return _b => MODULO(a, _b);
    return a % b;
};
export const MULTIPLY = function(a, b) {
    if (arguments.length === 1) return _b => MULTIPLY(a, _b);
    return a * b;
};
export const SUM = function(list) {
    return list.reduce((prev, current) => prev + current, 0);
};
export const ALL = function(fn, list) {
    if (arguments.length === 1) return _list => ALL(fn, _list);
    for (let i = 0; i < list.length; i++) {
      if (!fn(list[i], i)) return false;
    }
    return true;
};
export const ANY = function(fn, list) {
    if (arguments.length === 1) return _list => ANY(fn, _list);
    let counter = 0;
  
    while (counter < list.length) {
      if (fn(list[counter], counter)) {
        return true;
      }
  
      counter++;
    }
  
    return false;
};
export const APPEND = function(el, list) {
    if (arguments.length === 1) return _list => APPEND(el, _list);
    if (typeof list === 'string') return `${list}${el}`;
    const clone = list.slice();
    clone.push(el);
    return clone;
};
export const CONCAT = function(left, right) {
    if (arguments.length === 1) return _right => CONCAT(left, _right);
    return typeof left === 'string' ? `${left}${right}` : [...left, ...right];
};
export const DIFFERENCE = function(list1, list2) {
    if (arguments.length === 1) return _list => DIFFERENCE(list1, _list);
    return UNIQ(list1).filter(x1 => !INCLUDES(x1, list2));
};
export const DROP = function(n, listOrString) {
    if (arguments.length === 1) return _list => DROP(n, _list);
    return listOrString.slice(n > 0 ? n : 0);
};
export const DROPLAST = function(n, list) {
    if (arguments.length === 1) return _list => DROPLAST(n, _list);
    return n > 0 ? list.slice(0, -n) : list.slice();
};
export const ENDSWITH = function(suffix, list) {
    if (arguments.length === 1) return _list => ENDSWITH(suffix, _list);
    return list.endsWith(suffix);
};
export const FILTER = function(){_CURRY2(_DISPATCHABLE(['filter'], _XFILTER, function(pred, filterable) {
    return (
      _ISOBJECT(filterable) ?
        _REDUCE(function(acc, key) {
          if (PRED(filterable[key])) {
            acc[key] = filterable[key];
          }
          return acc;
        }, {}, KEYS(filterable)) :
      // else
        _FILTER(pred, filterable)
    );
  }));
};
export const FIND = function(fn, list) {
    if (arguments.length === 1) return _list => FIND(fn, _list);
    return list.find(fn);
};
export const FINDINDEX = function(fn, list) {
    if (arguments.length === 1) return _list => FINDINDEX(fn, _list);
    const len = list.length;
    let index = -1;
  
    while (++index < len) {
      if (fn(list[index], index)) {
        return index;
      }
    }
  
    return -1;
};
export const FLATTEN = function(list, input) {
    const willReturn = input === undefined ? [] : input;
  
    for (let i = 0; i < list.length; i++) {
      if (S._Array.isArray(list[i])) {
        FLATTEN(list[i], willReturn);
      } else {
        willReturn.push(list[i]);
      }
    }
  
    return willReturn;
};
export const FOREACH = function(fn, list) {
    if (arguments.length === 1) return _list => FOREACH(fn, _list);
    map(fn, list);
    return list;
};
export const FROMPAIRS = function(list) {
    const toReturn = {};
    list.forEach(([prop, value]) => toReturn[prop] = value);
    return toReturn;
};
export const GROUPBY = function(fn, list) {
    if (arguments.length === 1) return _list => GROUPBY(fn, _list);
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
export const GROUPWITH = _CURRY2(function(fn, list) {
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
export const HEAD = function(list) {
    if (typeof list === 'string') return list[0] || '';
    return list[0];
};
export const INCLUDES = function(target, list) {
    if (arguments.length === 1) return _input => INCLUDES(target, _input);
  
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
export const INDEXBY = function(fnOrPath, list) {
    if (arguments.length === 1) {
      return _list => INDEXBY(fnOrPath, _list);
    }
  
    if (typeof fnOrPath === 'string') {
      return INDEXBYPATH(fnOrPath, list);
    }
  
    const toReturn = {};
  
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      toReturn[fnOrPath(item)] = item;
    }
    return toReturn;
};
export const INDEXOF = function(target, list) {
    if (arguments.length === 1) return _list => INDEXOF(target, _list);
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
export const INIT = function(list) {
    if (typeof list === 'string') return list.slice(0, -1);
    return list.length ? BASESLICE(list, 0, -1) : [];
};
export const INTERSECTION = function(list1, list2) {
    if (arguments.length === 1) return _list => INTERSECTION(list1, _list);
    return FILTER(value => INCLUDES(value, list2), list1);
};
export const INTERSPERSE = function(separator, list) {
    if (arguments.length === 1) return _list => INTERSPERSE(separator, _list);
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
export const JOIN = function(separator, list) {
    if (arguments.length === 1) return _list => JOIN(separator, _list);
    return list.join(separator);
};
export const LAST = function(list) {
    if (typeof list === 'string') return list[list.length - 1] || '';
    return list[list.length - 1];
};
export const LASTINDEXOF = function(target, list) {
    if (arguments.length === 1) return _list => LASTINDEXOF(target, _list);
    let index = list.length;
  
    while (--index > 0) {
      if (EQUALS(list[index], target)) {
        return index;
      }
    }
  
    return -1;
};
export const MAP = function(fn, list) {
    if (arguments.length === 1) return _list => MAP(fn, _list);
  
    if (list === undefined) {
      return [];
    }
  
    if (!S._Array.isArray(list)) {
      return MAPOBJECT(fn, list);
    }
  
    let index = -1;
    const len = list.length;
    const willReturn = S._Array(len);
  
    while (++index < len) {
      willReturn[index] = fn(list[index], index);
    }
  
    return willReturn;
};
export const NONE = function(fn, list) {
    if (arguments.length === 1) return _list => NONE(fn, _list);
    return list.filter(fn).length === 0;
};
export const NTH = function(offset, list) {
    if (arguments.length === 1) return _list => NTH(offset, _list);
    const idx = offset < 0 ? list.length + offset : offset;
    return S._Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
};
export const PLUCK = function(key, list) {
    if (arguments.length === 1) return _list => PLUCK(key, _list);
    const willReturn = [];
    MAP(val => {
      if (val[key] !== undefined) {
        willReturn.push(val[key]);
      }
    }, list);
    return willReturn;
};
export const PREPEND = function(el, list) {
    if (arguments.length === 1) return _list => PREPEND(el, _list);
    if (typeof list === 'string') return `${el}${list}`;
    const clone = [el].concat(list);
    return clone;
};
export const RANGE = function(from, to) {
    if (arguments.length === 1) return _to => RANGE(from, _to);
  
    if(S._Number.isNaN(S._Number(from)) || S._Number.isNaN(S._Number(to))) {
      throw new TypeError('Both arguments to range must be numbers');
    }
  
    if (to < from) return [];
    const len = to - from;
    const willReturn = S._Array(len);
  
    for (let i = 0; i < len; i++) {
      willReturn[i] = from + i;
    }
  
    return willReturn;
};
export const REPEAT = function(val, n) {
    if (arguments.length === 1) return _n => REPEAT(val, _n);
    const willReturn = S._Array(n);
    return willReturn.fill(val);
};
export const REVERSE = function(input) {
  if (typeof input === 'string') {
    return input.split('').reverse().join('');
  }

  const clone = input.slice();
  return clone.reverse();
};
export const SPLITEVERY = function(n, list) {
    if (arguments.length === 1) return _list => SPLITEVERY(n, _list);
    if (n < 1) throw new Error('First argument to splitEvery must be a positive integer');
    const willReturn = [];
    let counter = 0;
  
    while (counter < list.length) {
      willReturn.push(list.slice(counter, counter += n));
    }
  
    return willReturn;
};
export const STARTSWITH = function(prefix, list) {
    if (arguments.length === 1) return _list => STARTSWITH(prefix, _list);
    return list.startsWith(prefix);
};
const TAIL = function(list) {
    return DROP(1, list);
};
export const TAKE = function(n, list) {
    if (arguments.length === 1) return _list => TAKE(n, _list);
    if (n < 0) return list.slice();
    if (typeof list === 'string') return list.slice(0, n);
    return BASESLICE(list, 0, n);
};
export const TAKELAST = function(n, list) {
    if (arguments.length === 1) return _list => TAKELAST(n, _list);
    const len = list.length;
    if (n < 0) return list.slice();
    let numValue = n > len ? len : n;
    if (typeof list === 'string') return list.slice(len - numValue);
    numValue = len - numValue;
    return BASESLICE(list, numValue, len);
};
export const TIMES = function(fn, n) {
    if (arguments.length === 1) return _n => TIMES(fn, _n);
    if (!S._Number.isInteger(n) || n < 0) throw new RangeError('n must be an integer');
    return map(fn, range(0, n));
};
export const UNIQ = function(list) {
    let index = -1;
    const willReturn = [];
  
    while (++index < list.length) {
      const value = list[index];
  
      if (!INCLUDES(value, willReturn)) {
        willReturn.push(value);
      }
    }
  
    return willReturn;
};
export const UNIQWITH = function(fn, list) {
    if (arguments.length === 1) return _list => UNIQWITH(fn, _list);
    let index = -1;
    const len = list.length;
    const willReturn = [];
  
    while (++index < len) {
      const value = list[index];
      const flag = ANY(willReturnInstance => fn(value, willReturnInstance), willReturn);
  
      if (!flag) {
        willReturn.push(value);
      }
    }
  
    return willReturn;
};
export const UPDATE = function(idx, val, list) {
    if (val === undefined) {
      return (_val, _list) => UPDATE(idx, _val, _list);
    } else if (list === undefined) {
      return _list => UPDATE(idx, val, _list);
    }
  
    const arrClone = list.slice();
    return arrClone.fill(val, idx, idx + 1);
};
export const WITHOUT = function(left, right) {
    if (right === undefined) {
      return _right => without(left, _right);
    }
  
    return reduce((accum, item) => includes(item, left) ? accum : accum.concat(item), [], right);
};
export const ZIP = function(left, right) {
    if (arguments.length === 1) return _right => ZIP(left, _right);
    const result = [];
    const length = S._Math.min(left.length, right.length);
  
    for (let i = 0; i < length; i++) {
      result[i] = [left[i], right[i]];
    }
  
    return result;
};
export const ZIPOBJ = function(keys, values) {
    if (arguments.length === 1) return yHolder => ZIPOBJ(keys, yHolder);
    return TAKE(values.length, keys).reduce((prev, xInstance, i) => {
      prev[xInstance] = values[i];
      return prev;
    }, {});
};
export const DISSOC = function(prop, obj) {
    if (arguments.length === 1) return _obj => DISSOC(prop, _obj);
    if (obj === null || obj === undefined) return {};
    const willReturn = {};
  
    for (const p in obj) {
      willReturn[p] = obj[p];
    }
  
    delete willReturn[prop];
    return willReturn;
};
export const HAS = function(prop, obj) {
    if (arguments.length === 1) return _obj => has(prop, _obj);
    if (!obj) return false;
    return obj[prop] !== undefined;
};
export const LENS = function(getter, setter) {
    if (arguments.length === 1) return _setter => lens(getter, _setter);
    return function (functor) {
      return function (target) {
        return FUNCTO(GETTER(target)).map(focus => SETTER(focus, target));
      };
    };
};
export const LENSINDEX = function(i) {
    return LENS(nth(i), UPDATE(i));
};
export const LENSPATH = function(key) {
    return lens(path(key), assocPath(key));
};
export const ASSOC = function(){_curry3(function assoc(prop, val, obj) {
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    result[prop] = val;
    return result;
})};
export const ASSOCPATH = function(){_CURRY3(function ASSOCPATH(path, val, obj) {
    if (path.length === 0) {
      return val;
    }
    var idx = path[0];
    if (path.length > 1) {
      var nextObj = (!ISNIL(obj) && _HAS(idx, obj)) ? obj[idx] : ISINTEGER(path[1]) ? [] : {};
      val = ASSOCPATH(S._Array.prototype.slice.call(path, 1), val, nextObj);
    }
    if (ISINTEGER(idx) && _ISARRAY(obj)) {
      var arr = [].concat(obj);
      arr[idx] = val;
      return arr;
    } else {
      return ASSOC(idx, val, obj);
    }
})};
export const LENSPROP = function(key) {
    return LENS(prop(key), ASSOC(key));
};
export const MERGE = function(obj, props) {
    if (arguments.length === 1) return _props => MERGE(obj, _props);
    return S._Object.assign({}, obj || {}, props || {});
};
export const OMIT = function(keys, obj) {
    if (arguments.length === 1) return _obj => OMIT(keys, _obj);
  
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
export const OVER = function(lens, fn, object) {
    if (arguments.length === 1) return (_fn, _object) => OVER(lens, _fn, _object);
    if (arguments.length === 2) return _object => OVER(lens, fn, _object);
    return LENS(x => _identity(fn(x)))(object).x;
};
export const PATH = function(list, obj) {
    if (arguments.length === 1) return _obj => PATH(list, _obj);
  
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
export const ALLPASS = function(predicates) {
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
export const AND = function(a, b) {
    if (arguments.length === 1) return _b => AND(a, _b);
    return a && b;
};
export const ANYPASS = function(predicates) {
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
export const BOTH = function(f, g) {
    if (arguments.length === 1) return _g => BOTH(f, _g);
    return (input) => f(...input) && g(...input);
};
export const COMPLEMENT = function(fn) {
    return (input) => !fn(...input);
};
export const COND = function(conditions) {
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
export const EITHER = function(f, g) {
    if (arguments.length === 1) return _g => EITHER(f, _g);
    return (input) => f(...input) || g(...input);
};
export const NOT = function(a) {
    return !a;
};
export const XOR = function(a, b) {
    if (arguments.length === 1) return _b => XOR(a, _b);
    return S._Boolean(a) && !b || S._Boolean(b) && !a;
};
export const EQUALS = function(a, b) {
    if (arguments.length === 1) return _b => EQUALS(a, _b);
    const aType = DTYPE(a);
    if (aType !== DTYPE(b)) return false;
    if (['NaN', 'Undefined', 'Null'].includes(aType)) return true;
    if (['Boolean', 'Number', 'String'].includes(aType)) return a.toString() === b.toString();
  
    if (aType === 'Array') {
      const aClone = S._Array.from(a);
      const bClone = S._Array.from(b);
  
      if (aClone.toString() !== bClone.toString()) {
        return false;
      }
  
      let loopArrayFlag = true;
      aClone.forEach((aCloneInstance, aCloneIndex) => {
        if (loopArrayFlag) {
          if (aCloneInstance !== bClone[aCloneIndex] && !EQUALS(aCloneInstance, bClone[aCloneIndex])) {
            loopArrayFlag = false;
          }
        }
      });
      return loopArrayFlag;
    }
  
    const aRegex = PARSEREGEX(a);
    const bRegex = PARSEREGEX(b);
  
    if (aRegex[0]) {
      return bRegex[0] ? aRegex[1] === bRegex[1] : false;
    } else if (bRegex[0]) return false;
  
    const aDate = PARSEDATE(a);
    const bDate = PARSEDATE(b);
  
    if (aDate[0]) {
      return bDate[0] ? aDate[1] === bDate[1] : false;
    } else if (bDate[0]) return false;
  
    const aError = parseError(a);
    const bError = parseError(b);
  
    if (aError[0]) {
      return bError[0] ? aError[0] === bError[0] && aError[1] === bError[1] : false;
    }
  
    if (aType === 'Object') {
      const aKeys = S._Object.keys(a);
  
      if (aKeys.length !== S._Object.keys(b).length) {
        return false;
      }
  
      let loopObjectFlag = true;
      aKeys.forEach(aKeyInstance => {
        if (loopObjectFlag) {
          const aValue = a[aKeyInstance];
          const bValue = b[aKeyInstance];
  
          if (aValue !== bValue && !EQUALS(aValue, bValue)) {
            loopObjectFlag = false;
          }
        }
      });
      return loopObjectFlag;
    }
  
    return false;
};
export const IDENTICAL = function(a, b) {
    if (arguments.length === 1) return _b => IDENTICAL(a, _b);
    return _OBJECTIS$1(a, b);
};
export const MAX = function(a, b) {
    if (arguments.length === 1) return _b => MAX(a, _b);
    return b > a ? b : a;
};
export const MAXBy = function(fn, a, b) {
    if (arguments.length === 2) {
      return _b => MAXBy(fn, a, _b);
    } else if (arguments.length === 1) {
      return (_a, _b) => MAXBy(fn, _a, _b);
    }
  
    return fn(b) > fn(a) ? b : a;
};
export const MIN = function(a, b) {
    if (arguments.length === 1) return _b => MIN(a, _b);
    return b < a ? b : a;
};
export const MINBY = function(fn, a, b) {
    if (arguments.length === 2) {
      return _b => minBy(fn, a, _b);
    } else if (arguments.length === 1) {
      return (_a, _b) => minBy(fn, _a, _b);
    }
  
    return fn(b) < fn(a) ? b : a;
};
export const ISNIL = function(x) {
    return x === undefined || x === null;
};
export const PICK = function(keys, obj) {
    if (arguments.length === 1) return _obj => PICK(keys, _obj);
  
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
export const PICKALL = function(keys, obj) {
    if (arguments.length === 1) return _obj => PICKALL(keys, _obj);
  
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
export const PROP = function(key, obj) {
    if (arguments.length === 1) return _obj => PROP(key, _obj);
    if (!obj) return undefined;
    return obj[key];
};
export const PROPOR = function(defaultValue, p, obj) {
    if (arguments.length === 2) return _obj => PROPOR(defaultValue, p, _obj);
    if (arguments.length === 1) return (_p, _obj) => PROPOR(defaultValue, _p, _obj);
    if (!obj) return defaultValue;
    return DEFAULTTO(defaultValue, obj[p]);
};
export const SET = function(lens, v, x) {
    if (arguments.length === 1) return (_v, _x) => SET(lens, _v, _x);
    if (arguments.length === 2) return _x => SET(lens, v, _x);
    return OVER(lens, always(v), x);
};
export const TOPAIRS = function(obj) {
    return S._Object.entries(obj);
};
export const VALUES = function(obj) {
    if (DTYPE(obj) !== 'Object') return [];
    return S._Object.values(obj);
};
export const VIEW = function(lens, target) {
    if (arguments.length === 1) return _target => VIEW(lens, _target);
    return LENS(Const)(target).x;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 Copyright (c) 2012 Nevins Bartolomeo <nevins.bartolomeo@gmail.com>
 Copyright (c) 2012 Shane Girish <shaneGirish@gmail.com>
 Copyright (c) 2014 Daniel Wirtz <dcode@dcode.io>
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
 derived from this software without specific prior written permission.
 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/bcrypt.js for details
 */
// export const BCRYPT = (function(global, factory) {

//   /* AMD */ if (typeof define === 'function' && define["amd"])
//       define([], factory);
//   /* CommonJS */ else if (typeof require === 'function' && typeof module === "object" && module && module["exports"])
//       module["exports"] = factory();
//   /* Global */ else
//       (global["dcodeIO"] = global["dcodeIO"] || {})["bcrypt"] = factory();

// }(this, function() {
//   "use strict";

//   /**
//    * bcrypt namespace.
//    * @type {Object.<string,*>}
//    */
//   var bcrypt = {};

//   /**
//    * The random implementation to use as a fallback.
//    * @type {?function(number):!Array.<number>}
//    * @inner
//    */
//   var randomFallback = null;

//   /**
//    * Generates cryptographically secure random bytes.
//    * @function
//    * @param {number} len Bytes length
//    * @returns {!Array.<number>} Random bytes
//    * @throws {Error} If no random implementation is available
//    * @inner
//    */
//   function random(len) {
//       /* node */ if (typeof module !== 'undefined' && module && module['exports'])
//           try {
//               return require("crypto")['randomBytes'](len);
//           } catch (e) {}
//       /* WCA */ try {
//           var a; (self['crypto']||self['msCrypto'])['getRandomValues'](a = new Uint32Array(len));
//           return Array.prototype.slice.call(a);
//       } catch (e) {}
//       /* fallback */ if (!randomFallback)
//           throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
//       return randomFallback(len);
//   }

//   // Test if any secure randomness source is available
//   var randomAvailable = false;
//   try {
//       random(1);
//       randomAvailable = true;
//   } catch (e) {}

//   // Default fallback, if any
//   randomFallback = null;
//   /**
//    * Sets the pseudo random number generator to use as a fallback if neither node's `crypto` module nor the Web Crypto
//    *  API is available. Please note: It is highly important that the PRNG used is cryptographically secure and that it
//    *  is seeded properly!
//    * @param {?function(number):!Array.<number>} random Function taking the number of bytes to generate as its
//    *  sole argument, returning the corresponding array of cryptographically secure random byte values.
//    * @see http://nodejs.org/api/crypto.html
//    * @see http://www.w3.org/TR/WebCryptoAPI/
//    */
//   bcrypt.setRandomFallback = function(random) {
//       randomFallback = random;
//   };

//   /**
//    * Synchronously generates a salt.
//    * @param {number=} rounds Number of rounds to use, defaults to 10 if omitted
//    * @param {number=} seed_length Not supported.
//    * @returns {string} Resulting salt
//    * @throws {Error} If a random fallback is required but not set
//    */
//   bcrypt.genSaltSync = function(rounds, seed_length) {
//       rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
//       if (typeof rounds !== 'number')
//           throw Error("Illegal arguments: "+(typeof rounds)+", "+(typeof seed_length));
//       if (rounds < 4)
//           rounds = 4;
//       else if (rounds > 31)
//           rounds = 31;
//       var salt = [];
//       salt.push("$2a$");
//       if (rounds < 10)
//           salt.push("0");
//       salt.push(rounds.toString());
//       salt.push('$');
//       salt.push(base64_encode(random(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN)); // May throw
//       return salt.join('');
//   };

//   /**
//    * Asynchronously generates a salt.
//    * @param {(number|function(Error, string=))=} rounds Number of rounds to use, defaults to 10 if omitted
//    * @param {(number|function(Error, string=))=} seed_length Not supported.
//    * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting salt
//    * @returns {!Promise} If `callback` has been omitted
//    * @throws {Error} If `callback` is present but not a function
//    */
//   bcrypt.genSalt = function(rounds, seed_length, callback) {
//       if (typeof seed_length === 'function')
//           callback = seed_length,
//           seed_length = undefined; // Not supported.
//       if (typeof rounds === 'function')
//           callback = rounds,
//           rounds = undefined;
//       if (typeof rounds === 'undefined')
//           rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
//       else if (typeof rounds !== 'number')
//           throw Error("illegal arguments: "+(typeof rounds));

//       function _async(callback) {
//           nextTick(function() { // Pretty thin, but salting is fast enough
//               try {
//                   callback(null, bcrypt.genSaltSync(rounds));
//               } catch (err) {
//                   callback(err);
//               }
//           });
//       }

//       if (callback) {
//           if (typeof callback !== 'function')
//               throw Error("Illegal callback: "+typeof(callback));
//           _async(callback);
//       } else
//           return new Promise(function(resolve, reject) {
//               _async(function(err, res) {
//                   if (err) {
//                       reject(err);
//                       return;
//                   }
//                   resolve(res);
//               });
//           });
//   };

//   /**
//    * Synchronously generates a hash for the given string.
//    * @param {string} s String to hash
//    * @param {(number|string)=} salt Salt length to generate or salt to use, default to 10
//    * @returns {string} Resulting hash
//    */
//   bcrypt.hashSync = function(s, salt) {
//       if (typeof salt === 'undefined')
//           salt = GENSALT_DEFAULT_LOG2_ROUNDS;
//       if (typeof salt === 'number')
//           salt = bcrypt.genSaltSync(salt);
//       if (typeof s !== 'string' || typeof salt !== 'string')
//           throw Error("Illegal arguments: "+(typeof s)+', '+(typeof salt));
//       return _hash(s, salt);
//   };

//   /**
//    * Asynchronously generates a hash for the given string.
//    * @param {string} s String to hash
//    * @param {number|string} salt Salt length to generate or salt to use
//    * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting hash
//    * @param {function(number)=} progressCallback Callback successively called with the percentage of rounds completed
//    *  (0.0 - 1.0), maximally once per `MAX_EXECUTION_TIME = 100` ms.
//    * @returns {!Promise} If `callback` has been omitted
//    * @throws {Error} If `callback` is present but not a function
//    */
//   bcrypt.hash = function(s, salt, callback, progressCallback) {

//       function _async(callback) {
//           if (typeof s === 'string' && typeof salt === 'number')
//               bcrypt.genSalt(salt, function(err, salt) {
//                   _hash(s, salt, callback, progressCallback);
//               });
//           else if (typeof s === 'string' && typeof salt === 'string')
//               _hash(s, salt, callback, progressCallback);
//           else
//               nextTick(callback.bind(this, Error("Illegal arguments: "+(typeof s)+', '+(typeof salt))));
//       }

//       if (callback) {
//           if (typeof callback !== 'function')
//               throw Error("Illegal callback: "+typeof(callback));
//           _async(callback);
//       } else
//           return new Promise(function(resolve, reject) {
//               _async(function(err, res) {
//                   if (err) {
//                       reject(err);
//                       return;
//                   }
//                   resolve(res);
//               });
//           });
//   };

//   /**
//    * Compares two strings of the same length in constant time.
//    * @param {string} known Must be of the correct length
//    * @param {string} unknown Must be the same length as `known`
//    * @returns {boolean}
//    * @inner
//    */
//   function safeStringCompare(known, unknown) {
//       var diff = known.length ^ unknown.length;
//       for (var i = 0; i < known.length; ++i) {
//           diff |= known.charCodeAt(i) ^ unknown.charCodeAt(i);
//       }
//       return diff === 0;
//   }

//   /**
//    * Synchronously tests a string against a hash.
//    * @param {string} s String to compare
//    * @param {string} hash Hash to test against
//    * @returns {boolean} true if matching, otherwise false
//    * @throws {Error} If an argument is illegal
//    */
//   bcrypt.compareSync = function(s, hash) {
//       if (typeof s !== "string" || typeof hash !== "string")
//           throw Error("Illegal arguments: "+(typeof s)+', '+(typeof hash));
//       if (hash.length !== 60)
//           return false;
//       return safeStringCompare(bcrypt.hashSync(s, hash.substr(0, hash.length-31)), hash);
//   };

//   /**
//    * Asynchronously compares the given data against the given hash.
//    * @param {string} s Data to compare
//    * @param {string} hash Data to be compared to
//    * @param {function(Error, boolean)=} callback Callback receiving the error, if any, otherwise the result
//    * @param {function(number)=} progressCallback Callback successively called with the percentage of rounds completed
//    *  (0.0 - 1.0), maximally once per `MAX_EXECUTION_TIME = 100` ms.
//    * @returns {!Promise} If `callback` has been omitted
//    * @throws {Error} If `callback` is present but not a function
//    */
//   bcrypt.compare = function(s, hash, callback, progressCallback) {

//       function _async(callback) {
//           if (typeof s !== "string" || typeof hash !== "string") {
//               nextTick(callback.bind(this, Error("Illegal arguments: "+(typeof s)+', '+(typeof hash))));
//               return;
//           }
//           if (hash.length !== 60) {
//               nextTick(callback.bind(this, null, false));
//               return;
//           }
//           bcrypt.hash(s, hash.substr(0, 29), function(err, comp) {
//               if (err)
//                   callback(err);
//               else
//                   callback(null, safeStringCompare(comp, hash));
//           }, progressCallback);
//       }

//       if (callback) {
//           if (typeof callback !== 'function')
//               throw Error("Illegal callback: "+typeof(callback));
//           _async(callback);
//       } else
//           return new Promise(function(resolve, reject) {
//               _async(function(err, res) {
//                   if (err) {
//                       reject(err);
//                       return;
//                   }
//                   resolve(res);
//               });
//           });
//   };

//   /**
//    * Gets the number of rounds used to encrypt the specified hash.
//    * @param {string} hash Hash to extract the used number of rounds from
//    * @returns {number} Number of rounds used
//    * @throws {Error} If `hash` is not a string
//    */
//   bcrypt.getRounds = function(hash) {
//       if (typeof hash !== "string")
//           throw Error("Illegal arguments: "+(typeof hash));
//       return parseInt(hash.split("$")[2], 10);
//   };

//   /**
//    * Gets the salt portion from a hash. Does not validate the hash.
//    * @param {string} hash Hash to extract the salt from
//    * @returns {string} Extracted salt part
//    * @throws {Error} If `hash` is not a string or otherwise invalid
//    */
//   bcrypt.getSalt = function(hash) {
//       if (typeof hash !== 'string')
//           throw Error("Illegal arguments: "+(typeof hash));
//       if (hash.length !== 60)
//           throw Error("Illegal hash length: "+hash.length+" != 60");
//       return hash.substring(0, 29);
//   };

//   /**
//    * Continues with the callback on the next tick.
//    * @function
//    * @param {function(...[*])} callback Callback to execute
//    * @inner
//    */
//   var nextTick = typeof process !== 'undefined' && process && typeof process.nextTick === 'function'
//       ? (typeof setImmediate === 'function' ? setImmediate : process.nextTick)
//       : setTimeout;

//   /** Calculates the byte length of a string encoded as UTF8. */
//   function utf8Length(string) {
//     var len = 0,
//         c = 0;
//     for (var i = 0; i < string.length; ++i) {
//         c = string.charCodeAt(i);
//         if (c < 128)
//             len += 1;
//         else if (c < 2048)
//             len += 2;
//         else if (
//           (c                        & 0xFC00) === 0xD800 &&
//           (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00
//         ) {
//             ++i;
//             len += 4;
//         } else
//             len += 3;
//     }
//     return len;
//   }

//   /** Converts a string to an array of UTF8 bytes. */
//   function utf8Array(string) {
//     var offset = 0,
//         c1, c2;
//     var buffer = new Array(utf8Length(string));
//     for (var i = 0, k = string.length; i < k; ++i) {
//         c1 = string.charCodeAt(i);
//         if (c1 < 128) {
//             buffer[offset++] = c1;
//         } else if (c1 < 2048) {
//             buffer[offset++] = c1 >> 6       | 192;
//             buffer[offset++] = c1       & 63 | 128;
//         } else if (
//           ( c1                             & 0xFC00) === 0xD800 &&
//           ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00
//         ) {
//             c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
//             ++i;
//             buffer[offset++] = c1 >> 18      | 240;
//             buffer[offset++] = c1 >> 12 & 63 | 128;
//             buffer[offset++] = c1 >> 6  & 63 | 128;
//             buffer[offset++] = c1       & 63 | 128;
//         } else {
//             buffer[offset++] = c1 >> 12      | 224;
//             buffer[offset++] = c1 >> 6  & 63 | 128;
//             buffer[offset++] = c1       & 63 | 128;
//         }
//     }
//     return buffer;
//   }

//   /**
//    * Converts a JavaScript string to UTF8 bytes.
//    * @function
//    * @param {string} str String
//    * @returns {!Array.<number>} UTF8 bytes
//    * @inner
//    */
//   var stringToBytes = utf8Array;

//   // A base64 implementation for the bcrypt algorithm. This is partly non-standard.

//   /**
//    * bcrypt's own non-standard base64 dictionary.
//    * @type {!Array.<string>}
//    * @const
//    * @inner
//    **/
//   var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');

//   /**
//    * @type {!Array.<number>}
//    * @const
//    * @inner
//    **/
//   var BASE64_INDEX = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
//       -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
//       -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0,
//       1, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, -1, -1, -1, -1, -1, -1,
//       -1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//       20, 21, 22, 23, 24, 25, 26, 27, -1, -1, -1, -1, -1, -1, 28, 29, 30,
//       31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//       48, 49, 50, 51, 52, 53, -1, -1, -1, -1, -1];

//   /**
//    * @type {!function(...number):string}
//    * @inner
//    */
//   var stringFromCharCode = String.fromCharCode;

//   /**
//    * Encodes a byte array to base64 with up to len bytes of input.
//    * @param {!Array.<number>} b Byte array
//    * @param {number} len Maximum input length
//    * @returns {string}
//    * @inner
//    */
//   function base64_encode(b, len) {
//       var off = 0,
//           rs = [],
//           c1, c2;
//       if (len <= 0 || len > b.length)
//           throw Error("Illegal len: "+len);
//       while (off < len) {
//           c1 = b[off++] & 0xff;
//           rs.push(BASE64_CODE[(c1 >> 2) & 0x3f]);
//           c1 = (c1 & 0x03) << 4;
//           if (off >= len) {
//               rs.push(BASE64_CODE[c1 & 0x3f]);
//               break;
//           }
//           c2 = b[off++] & 0xff;
//           c1 |= (c2 >> 4) & 0x0f;
//           rs.push(BASE64_CODE[c1 & 0x3f]);
//           c1 = (c2 & 0x0f) << 2;
//           if (off >= len) {
//               rs.push(BASE64_CODE[c1 & 0x3f]);
//               break;
//           }
//           c2 = b[off++] & 0xff;
//           c1 |= (c2 >> 6) & 0x03;
//           rs.push(BASE64_CODE[c1 & 0x3f]);
//           rs.push(BASE64_CODE[c2 & 0x3f]);
//       }
//       return rs.join('');
//   }

//   /**
//    * Decodes a base64 encoded string to up to len bytes of output.
//    * @param {string} s String to decode
//    * @param {number} len Maximum output length
//    * @returns {!Array.<number>}
//    * @inner
//    */
//   function base64_decode(s, len) {
//       var off = 0,
//           slen = s.length,
//           olen = 0,
//           rs = [],
//           c1, c2, c3, c4, o, code;
//       if (len <= 0)
//           throw Error("Illegal len: "+len);
//       while (off < slen - 1 && olen < len) {
//           code = s.charCodeAt(off++);
//           c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
//           code = s.charCodeAt(off++);
//           c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
//           if (c1 == -1 || c2 == -1)
//               break;
//           o = (c1 << 2) >>> 0;
//           o |= (c2 & 0x30) >> 4;
//           rs.push(stringFromCharCode(o));
//           if (++olen >= len || off >= slen)
//               break;
//           code = s.charCodeAt(off++);
//           c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
//           if (c3 == -1)
//               break;
//           o = ((c2 & 0x0f) << 4) >>> 0;
//           o |= (c3 & 0x3c) >> 2;
//           rs.push(stringFromCharCode(o));
//           if (++olen >= len || off >= slen)
//               break;
//           code = s.charCodeAt(off++);
//           c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
//           o = ((c3 & 0x03) << 6) >>> 0;
//           o |= c4;
//           rs.push(stringFromCharCode(o));
//           ++olen;
//       }
//       var res = [];
//       for (off = 0; off<olen; off++)
//           res.push(rs[off].charCodeAt(0));
//       return res;
//   }

//   // Date.now = Date.now || function() { return +new Date; };

//   /**
//    * @type {number}
//    * @const
//    * @inner
//    */
//   var BCRYPT_SALT_LEN = 16;

//   /**
//    * @type {number}
//    * @const
//    * @inner
//    */
//   var GENSALT_DEFAULT_LOG2_ROUNDS = 10;

//   /**
//    * @type {number}
//    * @const
//    * @inner
//    */
//   var BLOWFISH_NUM_ROUNDS = 16;

//   /**
//    * @type {number}
//    * @const
//    * @inner
//    */
//   var MAX_EXECUTION_TIME = 100;

//   /**
//    * @type {Array.<number>}
//    * @const
//    * @inner
//    */
//   var P_ORIG = [
//       0x243f6a88, 0x85a308d3, 0x13198a2e, 0x03707344, 0xa4093822,
//       0x299f31d0, 0x082efa98, 0xec4e6c89, 0x452821e6, 0x38d01377,
//       0xbe5466cf, 0x34e90c6c, 0xc0ac29b7, 0xc97c50dd, 0x3f84d5b5,
//       0xb5470917, 0x9216d5d9, 0x8979fb1b
//   ];

//   /**
//    * @type {Array.<number>}
//    * @const
//    * @inner
//    */
//   var S_ORIG = [
//       0xd1310ba6, 0x98dfb5ac, 0x2ffd72db, 0xd01adfb7, 0xb8e1afed,
//       0x6a267e96, 0xba7c9045, 0xf12c7f99, 0x24a19947, 0xb3916cf7,
//       0x0801f2e2, 0x858efc16, 0x636920d8, 0x71574e69, 0xa458fea3,
//       0xf4933d7e, 0x0d95748f, 0x728eb658, 0x718bcd58, 0x82154aee,
//       0x7b54a41d, 0xc25a59b5, 0x9c30d539, 0x2af26013, 0xc5d1b023,
//       0x286085f0, 0xca417918, 0xb8db38ef, 0x8e79dcb0, 0x603a180e,
//       0x6c9e0e8b, 0xb01e8a3e, 0xd71577c1, 0xbd314b27, 0x78af2fda,
//       0x55605c60, 0xe65525f3, 0xaa55ab94, 0x57489862, 0x63e81440,
//       0x55ca396a, 0x2aab10b6, 0xb4cc5c34, 0x1141e8ce, 0xa15486af,
//       0x7c72e993, 0xb3ee1411, 0x636fbc2a, 0x2ba9c55d, 0x741831f6,
//       0xce5c3e16, 0x9b87931e, 0xafd6ba33, 0x6c24cf5c, 0x7a325381,
//       0x28958677, 0x3b8f4898, 0x6b4bb9af, 0xc4bfe81b, 0x66282193,
//       0x61d809cc, 0xfb21a991, 0x487cac60, 0x5dec8032, 0xef845d5d,
//       0xe98575b1, 0xdc262302, 0xeb651b88, 0x23893e81, 0xd396acc5,
//       0x0f6d6ff3, 0x83f44239, 0x2e0b4482, 0xa4842004, 0x69c8f04a,
//       0x9e1f9b5e, 0x21c66842, 0xf6e96c9a, 0x670c9c61, 0xabd388f0,
//       0x6a51a0d2, 0xd8542f68, 0x960fa728, 0xab5133a3, 0x6eef0b6c,
//       0x137a3be4, 0xba3bf050, 0x7efb2a98, 0xa1f1651d, 0x39af0176,
//       0x66ca593e, 0x82430e88, 0x8cee8619, 0x456f9fb4, 0x7d84a5c3,
//       0x3b8b5ebe, 0xe06f75d8, 0x85c12073, 0x401a449f, 0x56c16aa6,
//       0x4ed3aa62, 0x363f7706, 0x1bfedf72, 0x429b023d, 0x37d0d724,
//       0xd00a1248, 0xdb0fead3, 0x49f1c09b, 0x075372c9, 0x80991b7b,
//       0x25d479d8, 0xf6e8def7, 0xe3fe501a, 0xb6794c3b, 0x976ce0bd,
//       0x04c006ba, 0xc1a94fb6, 0x409f60c4, 0x5e5c9ec2, 0x196a2463,
//       0x68fb6faf, 0x3e6c53b5, 0x1339b2eb, 0x3b52ec6f, 0x6dfc511f,
//       0x9b30952c, 0xcc814544, 0xaf5ebd09, 0xbee3d004, 0xde334afd,
//       0x660f2807, 0x192e4bb3, 0xc0cba857, 0x45c8740f, 0xd20b5f39,
//       0xb9d3fbdb, 0x5579c0bd, 0x1a60320a, 0xd6a100c6, 0x402c7279,
//       0x679f25fe, 0xfb1fa3cc, 0x8ea5e9f8, 0xdb3222f8, 0x3c7516df,
//       0xfd616b15, 0x2f501ec8, 0xad0552ab, 0x323db5fa, 0xfd238760,
//       0x53317b48, 0x3e00df82, 0x9e5c57bb, 0xca6f8ca0, 0x1a87562e,
//       0xdf1769db, 0xd542a8f6, 0x287effc3, 0xac6732c6, 0x8c4f5573,
//       0x695b27b0, 0xbbca58c8, 0xe1ffa35d, 0xb8f011a0, 0x10fa3d98,
//       0xfd2183b8, 0x4afcb56c, 0x2dd1d35b, 0x9a53e479, 0xb6f84565,
//       0xd28e49bc, 0x4bfb9790, 0xe1ddf2da, 0xa4cb7e33, 0x62fb1341,
//       0xcee4c6e8, 0xef20cada, 0x36774c01, 0xd07e9efe, 0x2bf11fb4,
//       0x95dbda4d, 0xae909198, 0xeaad8e71, 0x6b93d5a0, 0xd08ed1d0,
//       0xafc725e0, 0x8e3c5b2f, 0x8e7594b7, 0x8ff6e2fb, 0xf2122b64,
//       0x8888b812, 0x900df01c, 0x4fad5ea0, 0x688fc31c, 0xd1cff191,
//       0xb3a8c1ad, 0x2f2f2218, 0xbe0e1777, 0xea752dfe, 0x8b021fa1,
//       0xe5a0cc0f, 0xb56f74e8, 0x18acf3d6, 0xce89e299, 0xb4a84fe0,
//       0xfd13e0b7, 0x7cc43b81, 0xd2ada8d9, 0x165fa266, 0x80957705,
//       0x93cc7314, 0x211a1477, 0xe6ad2065, 0x77b5fa86, 0xc75442f5,
//       0xfb9d35cf, 0xebcdaf0c, 0x7b3e89a0, 0xd6411bd3, 0xae1e7e49,
//       0x00250e2d, 0x2071b35e, 0x226800bb, 0x57b8e0af, 0x2464369b,
//       0xf009b91e, 0x5563911d, 0x59dfa6aa, 0x78c14389, 0xd95a537f,
//       0x207d5ba2, 0x02e5b9c5, 0x83260376, 0x6295cfa9, 0x11c81968,
//       0x4e734a41, 0xb3472dca, 0x7b14a94a, 0x1b510052, 0x9a532915,
//       0xd60f573f, 0xbc9bc6e4, 0x2b60a476, 0x81e67400, 0x08ba6fb5,
//       0x571be91f, 0xf296ec6b, 0x2a0dd915, 0xb6636521, 0xe7b9f9b6,
//       0xff34052e, 0xc5855664, 0x53b02d5d, 0xa99f8fa1, 0x08ba4799,
//       0x6e85076a, 0x4b7a70e9, 0xb5b32944, 0xdb75092e, 0xc4192623,
//       0xad6ea6b0, 0x49a7df7d, 0x9cee60b8, 0x8fedb266, 0xecaa8c71,
//       0x699a17ff, 0x5664526c, 0xc2b19ee1, 0x193602a5, 0x75094c29,
//       0xa0591340, 0xe4183a3e, 0x3f54989a, 0x5b429d65, 0x6b8fe4d6,
//       0x99f73fd6, 0xa1d29c07, 0xefe830f5, 0x4d2d38e6, 0xf0255dc1,
//       0x4cdd2086, 0x8470eb26, 0x6382e9c6, 0x021ecc5e, 0x09686b3f,
//       0x3ebaefc9, 0x3c971814, 0x6b6a70a1, 0x687f3584, 0x52a0e286,
//       0xb79c5305, 0xaa500737, 0x3e07841c, 0x7fdeae5c, 0x8e7d44ec,
//       0x5716f2b8, 0xb03ada37, 0xf0500c0d, 0xf01c1f04, 0x0200b3ff,
//       0xae0cf51a, 0x3cb574b2, 0x25837a58, 0xdc0921bd, 0xd19113f9,
//       0x7ca92ff6, 0x94324773, 0x22f54701, 0x3ae5e581, 0x37c2dadc,
//       0xc8b57634, 0x9af3dda7, 0xa9446146, 0x0fd0030e, 0xecc8c73e,
//       0xa4751e41, 0xe238cd99, 0x3bea0e2f, 0x3280bba1, 0x183eb331,
//       0x4e548b38, 0x4f6db908, 0x6f420d03, 0xf60a04bf, 0x2cb81290,
//       0x24977c79, 0x5679b072, 0xbcaf89af, 0xde9a771f, 0xd9930810,
//       0xb38bae12, 0xdccf3f2e, 0x5512721f, 0x2e6b7124, 0x501adde6,
//       0x9f84cd87, 0x7a584718, 0x7408da17, 0xbc9f9abc, 0xe94b7d8c,
//       0xec7aec3a, 0xdb851dfa, 0x63094366, 0xc464c3d2, 0xef1c1847,
//       0x3215d908, 0xdd433b37, 0x24c2ba16, 0x12a14d43, 0x2a65c451,
//       0x50940002, 0x133ae4dd, 0x71dff89e, 0x10314e55, 0x81ac77d6,
//       0x5f11199b, 0x043556f1, 0xd7a3c76b, 0x3c11183b, 0x5924a509,
//       0xf28fe6ed, 0x97f1fbfa, 0x9ebabf2c, 0x1e153c6e, 0x86e34570,
//       0xeae96fb1, 0x860e5e0a, 0x5a3e2ab3, 0x771fe71c, 0x4e3d06fa,
//       0x2965dcb9, 0x99e71d0f, 0x803e89d6, 0x5266c825, 0x2e4cc978,
//       0x9c10b36a, 0xc6150eba, 0x94e2ea78, 0xa5fc3c53, 0x1e0a2df4,
//       0xf2f74ea7, 0x361d2b3d, 0x1939260f, 0x19c27960, 0x5223a708,
//       0xf71312b6, 0xebadfe6e, 0xeac31f66, 0xe3bc4595, 0xa67bc883,
//       0xb17f37d1, 0x018cff28, 0xc332ddef, 0xbe6c5aa5, 0x65582185,
//       0x68ab9802, 0xeecea50f, 0xdb2f953b, 0x2aef7dad, 0x5b6e2f84,
//       0x1521b628, 0x29076170, 0xecdd4775, 0x619f1510, 0x13cca830,
//       0xeb61bd96, 0x0334fe1e, 0xaa0363cf, 0xb5735c90, 0x4c70a239,
//       0xd59e9e0b, 0xcbaade14, 0xeecc86bc, 0x60622ca7, 0x9cab5cab,
//       0xb2f3846e, 0x648b1eaf, 0x19bdf0ca, 0xa02369b9, 0x655abb50,
//       0x40685a32, 0x3c2ab4b3, 0x319ee9d5, 0xc021b8f7, 0x9b540b19,
//       0x875fa099, 0x95f7997e, 0x623d7da8, 0xf837889a, 0x97e32d77,
//       0x11ed935f, 0x16681281, 0x0e358829, 0xc7e61fd6, 0x96dedfa1,
//       0x7858ba99, 0x57f584a5, 0x1b227263, 0x9b83c3ff, 0x1ac24696,
//       0xcdb30aeb, 0x532e3054, 0x8fd948e4, 0x6dbc3128, 0x58ebf2ef,
//       0x34c6ffea, 0xfe28ed61, 0xee7c3c73, 0x5d4a14d9, 0xe864b7e3,
//       0x42105d14, 0x203e13e0, 0x45eee2b6, 0xa3aaabea, 0xdb6c4f15,
//       0xfacb4fd0, 0xc742f442, 0xef6abbb5, 0x654f3b1d, 0x41cd2105,
//       0xd81e799e, 0x86854dc7, 0xe44b476a, 0x3d816250, 0xcf62a1f2,
//       0x5b8d2646, 0xfc8883a0, 0xc1c7b6a3, 0x7f1524c3, 0x69cb7492,
//       0x47848a0b, 0x5692b285, 0x095bbf00, 0xad19489d, 0x1462b174,
//       0x23820e00, 0x58428d2a, 0x0c55f5ea, 0x1dadf43e, 0x233f7061,
//       0x3372f092, 0x8d937e41, 0xd65fecf1, 0x6c223bdb, 0x7cde3759,
//       0xcbee7460, 0x4085f2a7, 0xce77326e, 0xa6078084, 0x19f8509e,
//       0xe8efd855, 0x61d99735, 0xa969a7aa, 0xc50c06c2, 0x5a04abfc,
//       0x800bcadc, 0x9e447a2e, 0xc3453484, 0xfdd56705, 0x0e1e9ec9,
//       0xdb73dbd3, 0x105588cd, 0x675fda79, 0xe3674340, 0xc5c43465,
//       0x713e38d8, 0x3d28f89e, 0xf16dff20, 0x153e21e7, 0x8fb03d4a,
//       0xe6e39f2b, 0xdb83adf7, 0xe93d5a68, 0x948140f7, 0xf64c261c,
//       0x94692934, 0x411520f7, 0x7602d4f7, 0xbcf46b2e, 0xd4a20068,
//       0xd4082471, 0x3320f46a, 0x43b7d4b7, 0x500061af, 0x1e39f62e,
//       0x97244546, 0x14214f74, 0xbf8b8840, 0x4d95fc1d, 0x96b591af,
//       0x70f4ddd3, 0x66a02f45, 0xbfbc09ec, 0x03bd9785, 0x7fac6dd0,
//       0x31cb8504, 0x96eb27b3, 0x55fd3941, 0xda2547e6, 0xabca0a9a,
//       0x28507825, 0x530429f4, 0x0a2c86da, 0xe9b66dfb, 0x68dc1462,
//       0xd7486900, 0x680ec0a4, 0x27a18dee, 0x4f3ffea2, 0xe887ad8c,
//       0xb58ce006, 0x7af4d6b6, 0xaace1e7c, 0xd3375fec, 0xce78a399,
//       0x406b2a42, 0x20fe9e35, 0xd9f385b9, 0xee39d7ab, 0x3b124e8b,
//       0x1dc9faf7, 0x4b6d1856, 0x26a36631, 0xeae397b2, 0x3a6efa74,
//       0xdd5b4332, 0x6841e7f7, 0xca7820fb, 0xfb0af54e, 0xd8feb397,
//       0x454056ac, 0xba489527, 0x55533a3a, 0x20838d87, 0xfe6ba9b7,
//       0xd096954b, 0x55a867bc, 0xa1159a58, 0xcca92963, 0x99e1db33,
//       0xa62a4a56, 0x3f3125f9, 0x5ef47e1c, 0x9029317c, 0xfdf8e802,
//       0x04272f70, 0x80bb155c, 0x05282ce3, 0x95c11548, 0xe4c66d22,
//       0x48c1133f, 0xc70f86dc, 0x07f9c9ee, 0x41041f0f, 0x404779a4,
//       0x5d886e17, 0x325f51eb, 0xd59bc0d1, 0xf2bcc18f, 0x41113564,
//       0x257b7834, 0x602a9c60, 0xdff8e8a3, 0x1f636c1b, 0x0e12b4c2,
//       0x02e1329e, 0xaf664fd1, 0xcad18115, 0x6b2395e0, 0x333e92e1,
//       0x3b240b62, 0xeebeb922, 0x85b2a20e, 0xe6ba0d99, 0xde720c8c,
//       0x2da2f728, 0xd0127845, 0x95b794fd, 0x647d0862, 0xe7ccf5f0,
//       0x5449a36f, 0x877d48fa, 0xc39dfd27, 0xf33e8d1e, 0x0a476341,
//       0x992eff74, 0x3a6f6eab, 0xf4f8fd37, 0xa812dc60, 0xa1ebddf8,
//       0x991be14c, 0xdb6e6b0d, 0xc67b5510, 0x6d672c37, 0x2765d43b,
//       0xdcd0e804, 0xf1290dc7, 0xcc00ffa3, 0xb5390f92, 0x690fed0b,
//       0x667b9ffb, 0xcedb7d9c, 0xa091cf0b, 0xd9155ea3, 0xbb132f88,
//       0x515bad24, 0x7b9479bf, 0x763bd6eb, 0x37392eb3, 0xcc115979,
//       0x8026e297, 0xf42e312d, 0x6842ada7, 0xc66a2b3b, 0x12754ccc,
//       0x782ef11c, 0x6a124237, 0xb79251e7, 0x06a1bbe6, 0x4bfb6350,
//       0x1a6b1018, 0x11caedfa, 0x3d25bdd8, 0xe2e1c3c9, 0x44421659,
//       0x0a121386, 0xd90cec6e, 0xd5abea2a, 0x64af674e, 0xda86a85f,
//       0xbebfe988, 0x64e4c3fe, 0x9dbc8057, 0xf0f7c086, 0x60787bf8,
//       0x6003604d, 0xd1fd8346, 0xf6381fb0, 0x7745ae04, 0xd736fccc,
//       0x83426b33, 0xf01eab71, 0xb0804187, 0x3c005e5f, 0x77a057be,
//       0xbde8ae24, 0x55464299, 0xbf582e61, 0x4e58f48f, 0xf2ddfda2,
//       0xf474ef38, 0x8789bdc2, 0x5366f9c3, 0xc8b38e74, 0xb475f255,
//       0x46fcd9b9, 0x7aeb2661, 0x8b1ddf84, 0x846a0e79, 0x915f95e2,
//       0x466e598e, 0x20b45770, 0x8cd55591, 0xc902de4c, 0xb90bace1,
//       0xbb8205d0, 0x11a86248, 0x7574a99e, 0xb77f19b6, 0xe0a9dc09,
//       0x662d09a1, 0xc4324633, 0xe85a1f02, 0x09f0be8c, 0x4a99a025,
//       0x1d6efe10, 0x1ab93d1d, 0x0ba5a4df, 0xa186f20f, 0x2868f169,
//       0xdcb7da83, 0x573906fe, 0xa1e2ce9b, 0x4fcd7f52, 0x50115e01,
//       0xa70683fa, 0xa002b5c4, 0x0de6d027, 0x9af88c27, 0x773f8641,
//       0xc3604c06, 0x61a806b5, 0xf0177a28, 0xc0f586e0, 0x006058aa,
//       0x30dc7d62, 0x11e69ed7, 0x2338ea63, 0x53c2dd94, 0xc2c21634,
//       0xbbcbee56, 0x90bcb6de, 0xebfc7da1, 0xce591d76, 0x6f05e409,
//       0x4b7c0188, 0x39720a3d, 0x7c927c24, 0x86e3725f, 0x724d9db9,
//       0x1ac15bb4, 0xd39eb8fc, 0xed545578, 0x08fca5b5, 0xd83d7cd3,
//       0x4dad0fc4, 0x1e50ef5e, 0xb161e6f8, 0xa28514d9, 0x6c51133c,
//       0x6fd5c7e7, 0x56e14ec4, 0x362abfce, 0xddc6c837, 0xd79a3234,
//       0x92638212, 0x670efa8e, 0x406000e0, 0x3a39ce37, 0xd3faf5cf,
//       0xabc27737, 0x5ac52d1b, 0x5cb0679e, 0x4fa33742, 0xd3822740,
//       0x99bc9bbe, 0xd5118e9d, 0xbf0f7315, 0xd62d1c7e, 0xc700c47b,
//       0xb78c1b6b, 0x21a19045, 0xb26eb1be, 0x6a366eb4, 0x5748ab2f,
//       0xbc946e79, 0xc6a376d2, 0x6549c2c8, 0x530ff8ee, 0x468dde7d,
//       0xd5730a1d, 0x4cd04dc6, 0x2939bbdb, 0xa9ba4650, 0xac9526e8,
//       0xbe5ee304, 0xa1fad5f0, 0x6a2d519a, 0x63ef8ce2, 0x9a86ee22,
//       0xc089c2b8, 0x43242ef6, 0xa51e03aa, 0x9cf2d0a4, 0x83c061ba,
//       0x9be96a4d, 0x8fe51550, 0xba645bd6, 0x2826a2f9, 0xa73a3ae1,
//       0x4ba99586, 0xef5562e9, 0xc72fefd3, 0xf752f7da, 0x3f046f69,
//       0x77fa0a59, 0x80e4a915, 0x87b08601, 0x9b09e6ad, 0x3b3ee593,
//       0xe990fd5a, 0x9e34d797, 0x2cf0b7d9, 0x022b8b51, 0x96d5ac3a,
//       0x017da67d, 0xd1cf3ed6, 0x7c7d2d28, 0x1f9f25cf, 0xadf2b89b,
//       0x5ad6b472, 0x5a88f54c, 0xe029ac71, 0xe019a5e6, 0x47b0acfd,
//       0xed93fa9b, 0xe8d3c48d, 0x283b57cc, 0xf8d56629, 0x79132e28,
//       0x785f0191, 0xed756055, 0xf7960e44, 0xe3d35e8c, 0x15056dd4,
//       0x88f46dba, 0x03a16125, 0x0564f0bd, 0xc3eb9e15, 0x3c9057a2,
//       0x97271aec, 0xa93a072a, 0x1b3f6d9b, 0x1e6321f5, 0xf59c66fb,
//       0x26dcf319, 0x7533d928, 0xb155fdf5, 0x03563482, 0x8aba3cbb,
//       0x28517711, 0xc20ad9f8, 0xabcc5167, 0xccad925f, 0x4de81751,
//       0x3830dc8e, 0x379d5862, 0x9320f991, 0xea7a90c2, 0xfb3e7bce,
//       0x5121ce64, 0x774fbe32, 0xa8b6e37e, 0xc3293d46, 0x48de5369,
//       0x6413e680, 0xa2ae0810, 0xdd6db224, 0x69852dfd, 0x09072166,
//       0xb39a460a, 0x6445c0dd, 0x586cdecf, 0x1c20c8ae, 0x5bbef7dd,
//       0x1b588d40, 0xccd2017f, 0x6bb4e3bb, 0xdda26a7e, 0x3a59ff45,
//       0x3e350a44, 0xbcb4cdd5, 0x72eacea8, 0xfa6484bb, 0x8d6612ae,
//       0xbf3c6f47, 0xd29be463, 0x542f5d9e, 0xaec2771b, 0xf64e6370,
//       0x740e0d8d, 0xe75b1357, 0xf8721671, 0xaf537d5d, 0x4040cb08,
//       0x4eb4e2cc, 0x34d2466a, 0x0115af84, 0xe1b00428, 0x95983a1d,
//       0x06b89fb4, 0xce6ea048, 0x6f3f3b82, 0x3520ab82, 0x011a1d4b,
//       0x277227f8, 0x611560b1, 0xe7933fdc, 0xbb3a792b, 0x344525bd,
//       0xa08839e1, 0x51ce794b, 0x2f32c9b7, 0xa01fbac9, 0xe01cc87e,
//       0xbcc7d1f6, 0xcf0111c3, 0xa1e8aac7, 0x1a908749, 0xd44fbd9a,
//       0xd0dadecb, 0xd50ada38, 0x0339c32a, 0xc6913667, 0x8df9317c,
//       0xe0b12b4f, 0xf79e59b7, 0x43f5bb3a, 0xf2d519ff, 0x27d9459c,
//       0xbf97222c, 0x15e6fc2a, 0x0f91fc71, 0x9b941525, 0xfae59361,
//       0xceb69ceb, 0xc2a86459, 0x12baa8d1, 0xb6c1075e, 0xe3056a0c,
//       0x10d25065, 0xcb03a442, 0xe0ec6e0e, 0x1698db3b, 0x4c98a0be,
//       0x3278e964, 0x9f1f9532, 0xe0d392df, 0xd3a0342b, 0x8971f21e,
//       0x1b0a7441, 0x4ba3348c, 0xc5be7120, 0xc37632d8, 0xdf359f8d,
//       0x9b992f2e, 0xe60b6f47, 0x0fe3f11d, 0xe54cda54, 0x1edad891,
//       0xce6279cf, 0xcd3e7e6f, 0x1618b166, 0xfd2c1d05, 0x848fd2c5,
//       0xf6fb2299, 0xf523f357, 0xa6327623, 0x93a83531, 0x56cccd02,
//       0xacf08162, 0x5a75ebb5, 0x6e163697, 0x88d273cc, 0xde966292,
//       0x81b949d0, 0x4c50901b, 0x71c65614, 0xe6c6c7bd, 0x327a140a,
//       0x45e1d006, 0xc3f27b9a, 0xc9aa53fd, 0x62a80f00, 0xbb25bfe2,
//       0x35bdd2f6, 0x71126905, 0xb2040222, 0xb6cbcf7c, 0xcd769c2b,
//       0x53113ec0, 0x1640e3d3, 0x38abbd60, 0x2547adf0, 0xba38209c,
//       0xf746ce76, 0x77afa1c5, 0x20756060, 0x85cbfe4e, 0x8ae88dd8,
//       0x7aaaf9b0, 0x4cf9aa7e, 0x1948c25c, 0x02fb8a8c, 0x01c36ae4,
//       0xd6ebe1f9, 0x90d4f869, 0xa65cdea0, 0x3f09252d, 0xc208e69f,
//       0xb74e6132, 0xce77e25b, 0x578fdfe3, 0x3ac372e6
//   ];

//   /**
//    * @type {Array.<number>}
//    * @const
//    * @inner
//    */
//   var C_ORIG = [
//       0x4f727068, 0x65616e42, 0x65686f6c, 0x64657253, 0x63727944,
//       0x6f756274
//   ];

//   /**
//    * @param {Array.<number>} lr
//    * @param {number} off
//    * @param {Array.<number>} P
//    * @param {Array.<number>} S
//    * @returns {Array.<number>}
//    * @inner
//    */
//   function _encipher(lr, off, P, S) { // This is our bottleneck: 1714/1905 ticks / 90% - see profile.txt
//       var n,
//           l = lr[off],
//           r = lr[off + 1];

//       l ^= P[0];

//       /*
//       for (var i=0, k=BLOWFISH_NUM_ROUNDS-2; i<=k;)
//           // Feistel substitution on left word
//           n  = S[l >>> 24],
//           n += S[0x100 | ((l >> 16) & 0xff)],
//           n ^= S[0x200 | ((l >> 8) & 0xff)],
//           n += S[0x300 | (l & 0xff)],
//           r ^= n ^ P[++i],
//           // Feistel substitution on right word
//           n  = S[r >>> 24],
//           n += S[0x100 | ((r >> 16) & 0xff)],
//           n ^= S[0x200 | ((r >> 8) & 0xff)],
//           n += S[0x300 | (r & 0xff)],
//           l ^= n ^ P[++i];
//       */

//       //The following is an unrolled version of the above loop.
//       //Iteration 0
//       n  = S[l >>> 24];
//       n += S[0x100 | ((l >> 16) & 0xff)];
//       n ^= S[0x200 | ((l >> 8) & 0xff)];
//       n += S[0x300 | (l & 0xff)];
//       r ^= n ^ P[1];
//       n  = S[r >>> 24];
//       n += S[0x100 | ((r >> 16) & 0xff)];
//       n ^= S[0x200 | ((r >> 8) & 0xff)];
//       n += S[0x300 | (r & 0xff)];
//       l ^= n ^ P[2];
//       //Iteration 1
//       n  = S[l >>> 24];
//       n += S[0x100 | ((l >> 16) & 0xff)];
//       n ^= S[0x200 | ((l >> 8) & 0xff)];
//       n += S[0x300 | (l & 0xff)];
//       r ^= n ^ P[3];
//       n  = S[r >>> 24];
//       n += S[0x100 | ((r >> 16) & 0xff)];
//       n ^= S[0x200 | ((r >> 8) & 0xff)];
//       n += S[0x300 | (r & 0xff)];
//       l ^= n ^ P[4];
//       //Iteration 2
//       n  = S[l >>> 24];
//       n += S[0x100 | ((l >> 16) & 0xff)];
//       n ^= S[0x200 | ((l >> 8) & 0xff)];
//       n += S[0x300 | (l & 0xff)];
//       r ^= n ^ P[5];
//       n  = S[r >>> 24];
//       n += S[0x100 | ((r >> 16) & 0xff)];
//       n ^= S[0x200 | ((r >> 8) & 0xff)];
//       n += S[0x300 | (r & 0xff)];
//       l ^= n ^ P[6];
//       //Iteration 3
//       n  = S[l >>> 24];
//       n += S[0x100 | ((l >> 16) & 0xff)];
//       n ^= S[0x200 | ((l >> 8) & 0xff)];
//       n += S[0x300 | (l & 0xff)];
//       r ^= n ^ P[7];
//       n  = S[r >>> 24];
//       n += S[0x100 | ((r >> 16) & 0xff)];
//       n ^= S[0x200 | ((r >> 8) & 0xff)];
//       n += S[0x300 | (r & 0xff)];
//       l ^= n ^ P[8];
//       //Iteration 4
//       n  = S[l >>> 24];
//       n += S[0x100 | ((l >> 16) & 0xff)];
//       n ^= S[0x200 | ((l >> 8) & 0xff)];
//       n += S[0x300 | (l & 0xff)];
//       r ^= n ^ P[9];
//       n  = S[r >>> 24];
//       n += S[0x100 | ((r >> 16) & 0xff)];
//       n ^= S[0x200 | ((r >> 8) & 0xff)];
//       n += S[0x300 | (r & 0xff)];
//       l ^= n ^ P[10];
//       //Iteration 5
//       n  = S[l >>> 24];
//       n += S[0x100 | ((l >> 16) & 0xff)];
//       n ^= S[0x200 | ((l >> 8) & 0xff)];
//       n += S[0x300 | (l & 0xff)];
//       r ^= n ^ P[11];
//       n  = S[r >>> 24];
//       n += S[0x100 | ((r >> 16) & 0xff)];
//       n ^= S[0x200 | ((r >> 8) & 0xff)];
//       n += S[0x300 | (r & 0xff)];
//       l ^= n ^ P[12];
//       //Iteration 6
//       n  = S[l >>> 24];
//       n += S[0x100 | ((l >> 16) & 0xff)];
//       n ^= S[0x200 | ((l >> 8) & 0xff)];
//       n += S[0x300 | (l & 0xff)];
//       r ^= n ^ P[13];
//       n  = S[r >>> 24];
//       n += S[0x100 | ((r >> 16) & 0xff)];
//       n ^= S[0x200 | ((r >> 8) & 0xff)];
//       n += S[0x300 | (r & 0xff)];
//       l ^= n ^ P[14];
//       //Iteration 7
//       n  = S[l >>> 24];
//       n += S[0x100 | ((l >> 16) & 0xff)];
//       n ^= S[0x200 | ((l >> 8) & 0xff)];
//       n += S[0x300 | (l & 0xff)];
//       r ^= n ^ P[15];
//       n  = S[r >>> 24];
//       n += S[0x100 | ((r >> 16) & 0xff)];
//       n ^= S[0x200 | ((r >> 8) & 0xff)];
//       n += S[0x300 | (r & 0xff)];
//       l ^= n ^ P[16];

//       lr[off] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
//       lr[off + 1] = l;
//       return lr;
//   }

//   /**
//    * @param {Array.<number>} data
//    * @param {number} offp
//    * @returns {{key: number, offp: number}}
//    * @inner
//    */
//   function _streamtoword(data, offp) {
//       for (var i = 0, word = 0; i < 4; ++i)
//           word = (word << 8) | (data[offp] & 0xff),
//           offp = (offp + 1) % data.length;
//       return { key: word, offp: offp };
//   }

//   /**
//    * @param {Array.<number>} key
//    * @param {Array.<number>} P
//    * @param {Array.<number>} S
//    * @inner
//    */
//   function _key(key, P, S) {
//       var offset = 0,
//           lr = [0, 0],
//           plen = P.length,
//           slen = S.length,
//           sw;
//       for (var i = 0; i < plen; i++)
//           sw = _streamtoword(key, offset),
//           offset = sw.offp,
//           P[i] = P[i] ^ sw.key;
//       for (i = 0; i < plen; i += 2)
//           lr = _encipher(lr, 0, P, S),
//           P[i] = lr[0],
//           P[i + 1] = lr[1];
//       for (i = 0; i < slen; i += 2)
//           lr = _encipher(lr, 0, P, S),
//           S[i] = lr[0],
//           S[i + 1] = lr[1];
//   }

//   /**
//    * Expensive key schedule Blowfish.
//    * @param {Array.<number>} data
//    * @param {Array.<number>} key
//    * @param {Array.<number>} P
//    * @param {Array.<number>} S
//    * @inner
//    */
//   function _ekskey(data, key, P, S) {
//       var offp = 0,
//           lr = [0, 0],
//           plen = P.length,
//           slen = S.length,
//           sw;
//       for (var i = 0; i < plen; i++)
//           sw = _streamtoword(key, offp),
//           offp = sw.offp,
//           P[i] = P[i] ^ sw.key;
//       offp = 0;
//       for (i = 0; i < plen; i += 2)
//           sw = _streamtoword(data, offp),
//           offp = sw.offp,
//           lr[0] ^= sw.key,
//           sw = _streamtoword(data, offp),
//           offp = sw.offp,
//           lr[1] ^= sw.key,
//           lr = _encipher(lr, 0, P, S),
//           P[i] = lr[0],
//           P[i + 1] = lr[1];
//       for (i = 0; i < slen; i += 2)
//           sw = _streamtoword(data, offp),
//           offp = sw.offp,
//           lr[0] ^= sw.key,
//           sw = _streamtoword(data, offp),
//           offp = sw.offp,
//           lr[1] ^= sw.key,
//           lr = _encipher(lr, 0, P, S),
//           S[i] = lr[0],
//           S[i + 1] = lr[1];
//   }

//   /**
//    * Internaly crypts a string.
//    * @param {Array.<number>} b Bytes to crypt
//    * @param {Array.<number>} salt Salt bytes to use
//    * @param {number} rounds Number of rounds
//    * @param {function(Error, Array.<number>=)=} callback Callback receiving the error, if any, and the resulting bytes. If
//    *  omitted, the operation will be performed synchronously.
//    *  @param {function(number)=} progressCallback Callback called with the current progress
//    * @returns {!Array.<number>|undefined} Resulting bytes if callback has been omitted, otherwise `undefined`
//    * @inner
//    */
//   function _crypt(b, salt, rounds, callback, progressCallback) {
//       var cdata = C_ORIG.slice(),
//           clen = cdata.length,
//           err;

//       // Validate
//       if (rounds < 4 || rounds > 31) {
//           err = Error("Illegal number of rounds (4-31): "+rounds);
//           if (callback) {
//               nextTick(callback.bind(this, err));
//               return;
//           } else
//               throw err;
//       }
//       if (salt.length !== BCRYPT_SALT_LEN) {
//           err =Error("Illegal salt length: "+salt.length+" != "+BCRYPT_SALT_LEN);
//           if (callback) {
//               nextTick(callback.bind(this, err));
//               return;
//           } else
//               throw err;
//       }
//       rounds = (1 << rounds) >>> 0;

//       var P, S, i = 0, j;

//       //Use typed arrays when available - huge speedup!
//       if (Int32Array) {
//           P = new Int32Array(P_ORIG);
//           S = new Int32Array(S_ORIG);
//       } else {
//           P = P_ORIG.slice();
//           S = S_ORIG.slice();
//       }

//       _ekskey(salt, b, P, S);

//       /**
//        * Calcualtes the next round.
//        * @returns {Array.<number>|undefined} Resulting array if callback has been omitted, otherwise `undefined`
//        * @inner
//        */
//       function next() {
//           if (progressCallback)
//               progressCallback(i / rounds);
//           if (i < rounds) {
//               var start = Date.now();
//               for (; i < rounds;) {
//                   i = i + 1;
//                   _key(b, P, S);
//                   _key(salt, P, S);
//                   if (Date.now() - start > MAX_EXECUTION_TIME)
//                       break;
//               }
//           } else {
//               for (i = 0; i < 64; i++)
//                   for (j = 0; j < (clen >> 1); j++)
//                       _encipher(cdata, j << 1, P, S);
//               var ret = [];
//               for (i = 0; i < clen; i++)
//                   ret.push(((cdata[i] >> 24) & 0xff) >>> 0),
//                   ret.push(((cdata[i] >> 16) & 0xff) >>> 0),
//                   ret.push(((cdata[i] >> 8) & 0xff) >>> 0),
//                   ret.push((cdata[i] & 0xff) >>> 0);
//               if (callback) {
//                   callback(null, ret);
//                   return;
//               } else
//                   return ret;
//           }
//           if (callback)
//               nextTick(next);
//       }

//       // Async
//       if (typeof callback !== 'undefined') {
//           next();

//           // Sync
//       } else {
//           var res;
//           while (true)
//               if (typeof(res = next()) !== 'undefined')
//                   return res || [];
//       }
//   }

//   /**
//    * Internally hashes a string.
//    * @param {string} s String to hash
//    * @param {?string} salt Salt to use, actually never null
//    * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting hash. If omitted,
//    *  hashing is perormed synchronously.
//    *  @param {function(number)=} progressCallback Callback called with the current progress
//    * @returns {string|undefined} Resulting hash if callback has been omitted, otherwise `undefined`
//    * @inner
//    */
//   function _hash(s, salt, callback, progressCallback) {
//       var err;
//       if (typeof s !== 'string' || typeof salt !== 'string') {
//           err = Error("Invalid string / salt: Not a string");
//           if (callback) {
//               nextTick(callback.bind(this, err));
//               return;
//           }
//           else
//               throw err;
//       }

//       // Validate the salt
//       var minor, offset;
//       if (salt.charAt(0) !== '$' || salt.charAt(1) !== '2') {
//           err = Error("Invalid salt version: "+salt.substring(0,2));
//           if (callback) {
//               nextTick(callback.bind(this, err));
//               return;
//           }
//           else
//               throw err;
//       }
//       if (salt.charAt(2) === '$')
//           minor = String.fromCharCode(0),
//           offset = 3;
//       else {
//           minor = salt.charAt(2);
//           if ((minor !== 'a' && minor !== 'b' && minor !== 'y') || salt.charAt(3) !== '$') {
//               err = Error("Invalid salt revision: "+salt.substring(2,4));
//               if (callback) {
//                   nextTick(callback.bind(this, err));
//                   return;
//               } else
//                   throw err;
//           }
//           offset = 4;
//       }

//       // Extract number of rounds
//       if (salt.charAt(offset + 2) > '$') {
//           err = Error("Missing salt rounds");
//           if (callback) {
//               nextTick(callback.bind(this, err));
//               return;
//           } else
//               throw err;
//       }
//       var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10,
//           r2 = parseInt(salt.substring(offset + 1, offset + 2), 10),
//           rounds = r1 + r2,
//           real_salt = salt.substring(offset + 3, offset + 25);
//       s += minor >= 'a' ? "\x00" : "";

//       var passwordb = stringToBytes(s),
//           saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);

//       /**
//        * Finishes hashing.
//        * @param {Array.<number>} bytes Byte array
//        * @returns {string}
//        * @inner
//        */
//       function finish(bytes) {
//           var res = [];
//           res.push("$2");
//           if (minor >= 'a')
//               res.push(minor);
//           res.push("$");
//           if (rounds < 10)
//               res.push("0");
//           res.push(rounds.toString());
//           res.push("$");
//           res.push(base64_encode(saltb, saltb.length));
//           res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
//           return res.join('');
//       }

//       // Sync
//       if (typeof callback == 'undefined')
//           return finish(_crypt(passwordb, saltb, rounds));

//       // Async
//       else {
//           _crypt(passwordb, saltb, rounds, function(err, bytes) {
//               if (err)
//                   callback(err, null);
//               else
//                   callback(null, finish(bytes));
//           }, progressCallback);
//       }
//   }

//   /**
//    * Encodes a byte array to base64 with up to len bytes of input, using the custom bcrypt alphabet.
//    * @function
//    * @param {!Array.<number>} b Byte array
//    * @param {number} len Maximum input length
//    * @returns {string}
//    */
//   bcrypt.encodeBase64 = base64_encode;

//   /**
//    * Decodes a base64 encoded string to up to len bytes of output, using the custom bcrypt alphabet.
//    * @function
//    * @param {string} s String to decode
//    * @param {number} len Maximum output length
//    * @returns {!Array.<number>}
//    */
//   bcrypt.decodeBase64 = base64_decode;

//   return bcrypt;
// }));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const THROWE                  = function(){};
export const THROWE0 /* IMMEDIATE */ = function(){};
export const THROWE1 /* STACK */     = function(){};
export const THROWE2 /* PROGRAMMABLE*/=function(){};
export const THROWEZ                  =function(){};

export const UNFINISHED              = function(){throw new Error("UNFINISHED");};
export const UNFINSHED0 /*IMMEDIATE*/= function(){};
export const UNFINSHED1 /*STACK*/    = function(){};
export const UNFINSHEDZ              = function(){};

export const BUG                     = function(){};
export const BUG0                    = function(){};
export const BUGZ                    = function(){};

export const MAINTENANCE             = function(){};
export const MAINTENANCE0            = function(){};
export const MAINTENANCEZ            = function(){};

export const REVIEW                  = function(){};
export const REVIEW0                 = function(){};
export const REVIEWZ                 = function(){};

export const CLI         = function(){};
// https://www.npmjs.com/package/yow
export const REQUIRE     = function(){return ;};
export const MKDIR       = REQUIRE('YOW/MKDIR');
export const MKPATH      = REQUIRE('YOW/MKPATH');
export const FILEEXISTS  = REQUIRE('YOW/FILEEXISTS');
export const READJSON    = REQUIRE('YOW/READJSON');
export const WRITEJSON   = REQUIRE('YOW/WRITEJSON');


export const UI = function(){};
export const CODE = function(){};
export const DATA = function(){};
export const ANIMATE = function(){};


export const SAVE =  function(){};
export const LOAD =  function(){};
// export const DELETE =function(){};


export const ENCRYPT = function(){};
export const RANDOM = function(){};
export const SHUFFLE = function(){};

export const COMPRESS = function(){
  //https://github.com/cthackers/adm-zip
};



export const GLOBAL= function(){};
export const VAR   = function(){};
export const LET   = function(){};
export const CONST = function(){};

export const PUBLIC = function(){};
export const PRIVATE = function(){};
export const PROTECT = function(){};
export const STATIC  = function(){};
export const INTERNAL = function(){};
export const METHOD   = function(){};
// export const LAMBDA   = function(){};


export const RULE     = function(){};
export const PROTOCOL = function(){};


export const NAMINGSYSTEM = function(){
  let sys = {
    // syntax //
    // s<word>        ...  sroute ... singular
    // p<word>        ...  proute ... plural
    // new<word>()  ...  new Route()    ... noun ... new class
    // <word>()        ...  sroute() ... verb ... method/function
    // .<word>         ... .sroute    ... property ... of class result
    // <word>er()     ... s0route() ... action / doer
    // <word>able()  ... s1route() ... object building
    // un<word>()     ... s2route() ... revert
    // pre<word>()    ... s3route() ... event ... before
    // dur<word>()    ... s4route() ... event ... during
    // post<word>()   ... s5route() ... event ... after  
  };
};


export const TYP,DATATYPES:string[] = ["boolean","string","number","object","array","symbol","function","set"];

export const NUM,NUMBER    = function(){return S._Number (...arguments);};  
export const BOL,BOOLEAN   = function(){return S._Boolean(...arguments)};   
export const STR,STRING    = function(){return S._String (...arguments)};   
export const ARR,ARRAY     = function(){return S._Array  (...arguments)};   
export const OBJ,OBJECT    = function(){return S._Object (...arguments)};   
export const SET           = function(){return S._Set    (...arguments)};   
export const SYM,SYMBOL    = function(){return S._Symbol (...arguments)};   
export const FNC,FUNCTION  = function(){return S._Function(...arguments)};  
export const LMD,LAMBDA    = function(){return Lambda (...arguments)};   
export const CLS,CLASS     = function(){return Class  (...arguments)};   
export const NUL,NULL      = function(){return Null   (...arguments)};   
export const UND,UNDEFINED = function(){return Undefined(...arguments)}; 





/*export*/ export const CAPSULE = function(cb:Function, props:{[index:string]:any}) {
  for (let k in props) {
    !RESTRICTEDPROPS.includes(k) || THROWE()
}
return S._Object.freeze(S._Object.assign(cb,props));
};
/*export*/ export const RESTRICTEDPROPS = [
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

export const FORBIDDEN_OBJECT_PROPS = [/***/];
console.warn("FORBIDDEN OBJECT PROPS UNFINISHED");

export const VOBJ = CAPSULE(function(sel,val){
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
export const VNUM = CAPSULE(function(sel,val){
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
export const VSTR = CAPSULE(function(sel,val){
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
export const VFNC = CAPSULE(function(sel,val){
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
export const VLMD = CAPSULE(function(sel,val){
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
export const VSYM = CAPSULE(function(sel,val){
  return {
    0:["TYPE","ALTERED"],
    1:["TYPE"]
  }[sel].every(f=>{return VSYM[f](val);});
},{
  TYPE:   (v)=>{if (typeof v !== "symbol")                       return false;   else return true;},
  ALTERED:(v)=>{if (PROPSALTERED.SYM(v))                         return false;   else return true;}
});
export const VSET = CAPSULE(function(sel,val){
  throw new Error("UNFINISHED");
  return {
    0:["TYPE","ALTERED"],
    1:["TYPE"]
  }[sel].every(f=>{return VSET[f](val);});
},{
  TYPE:   (v)=>{if (typeof v !== "set")                          return false;  else return true;},
  ALTERED:(v)=>{if (PROPSALTERED.SET(v))                         return false;  else return true;}
});

export const VCLA = CAPSULE(function(sel,val){
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
export const VARR = CAPSULE(function(sel,val){
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
export const VUND = CAPSULE(function(sel,val){
  return {
    0:["TYPE","ALTERED"],
    1:["TYPE"]
  }[sel].every(f=>{return VUND[f](val);});
},{
  TYPE:   (v) => {if (v === undefined)                          return false;  else return true;},
  ALTERED:(v) => {if (PROPSALTERED.UND(v))                      return false;  else return true;}
});

export const VNUL = CAPSULE(function(sel,val){
  return {
    0:["TYPE","ALTERED"],
    1:["TYPE"]
  }[sel].every(f=>{return VNUL[f](val);});
},{
  TYPE:   (v) => {if (v === null)                               return false; else return true;},
  ALTERED:(v) => {if (PROPSALTERED.NUL(v))                      return false; else return true;}
});
export const VBOL = CAPSULE(function(sel,val){
  return {
    0:["TYPE","ALTERED"],
    1:["TYPE"]
  }[sel].every(f=>{return VBOL[f](val);});
},{
  TYPE:    (v) => {if (typeof v !== "boolean")                  return false; else return true;},
  ALTERED: (v) => {if (PROPSALTERED.BOL(v))                     return false; else return true;}
});

/*export*/ export const DTYPE = CAPSULE(function(typ?,sel?,val?){
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
export const TYPETRUTHY = CAPSULE(function(){
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
export const TYPEFALSEY = CAPSULE(function(){

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
export const TYPESTATE = CAPSULE(function(v,meth){

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
export const PROPSALTERED = CAPSULE(function(){

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
});


// export const CONST = function(script){
//   isString(script);
// };
// RAW STATEMENTS
export const UNHANDLED= function(){return THROWE("UNHANDLED EXCEPTION");}
export const IF0      = function(){if(c0) return cb0()};
export const IF1      = function(){if(c0) return cb0(); else return cb1();};
export const IF2      = function(){if(c0) return cb0(); else if (c1) return cb1(); else return cb2();};
export const IFZ      = function(){
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

// export const SWITCH = function(){
//   switch (key) {
//     case value:
      
//       break;
  
//     default:
//       break;
//   }
// };



export const LOWERCASE = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
export const UPPERCASE = LOWERCASE.map(v => v.toUpperCase());
export const ALPHA     = (LOWERCASE.join("")+UPPERCASE.join("")).split("");
export const SYMBOLS   = ["!@#$%^&*()_+{}[]-=|;:'\"\\?,.<>`~"];
export const NUMBERS   = ["0","1","2","3","4","5","6","7","8","9"];
export const OPS       = ["!","%","%=","^","^=","&","&&","&=","&&=","*","*=","**","**=","-","-=","+","+=","|","||","/","/="];

export const KYB5      = ["ESC","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"];
export const KYB4      = ["~`","!1","@2","#3","$4","%5","^6","&7","*8","(9",")0","_-","+=","DELETE"];
export const KYB3      = ["TAB","q","w","e","r","t","y","u","i","o","p","{[","}]","|\\"];
export const KYB2      = ["CAPS LOCK","A","S","D","F","G","H","J","K","L",":;","\"'","RETURN"];
export const KYB1      = ["SHIFT","Z","X","C","V","B","N","M","<,",">.","?/","SHIFT"];
export const KYB0      = ["FN","CONTROL","OPTION","COMMAND","SPACE","COMMAND","OPTION","LEFT","UP/DOWN","RIGHT"];

export const KYBRD         = {};
export const KYBRD_EN      = {};
export const KYBRD_PC      = {};
export const KYBRD_MACBOOK = {KYB5,KYB4,KYB3,KYB2,KYB1,KYB0};


export const TOBINARY = function(){};
export const TOHEX = function(){};
export const TODEC = function(){};
export const TOBASE = function(){};
export const TODATATYPE = function(){};


export const INTERFACE = function(){
  const fakeIfNull = function(obj,prop:string,val:any):void {
    if (!obj.hasOwnProperty(prop)) {obj[prop] = val;}
  };	
};
export const VALIDATE  = function(){};
export const BLOCK     = function(){};
export const SPEC      = function(){};

export const DELETEPROPKEY   = function(obj,prop){return delete obj[prop];};
export const DELETEPROPVALUE = function(obj,prop){return obj[prop] = undefined;};

export const KEYS = function(v){
  return S._Object.keys(v);
}

export const FUNC0BLOCK = function(func0props){
    return CAPSULE(
      function(){
        funC0validate(func0props.block,func0props.validate(arguments));
        return func0props.block(...arguments);
      },
      func0props
    );
};
export const FUNC0VALIDATE = function(funCBlock,funCvalidate) {
    if (typeof funCBlock    !== "function") {THROWE();}
    if (typeof funCvalidate !== "function") {THROWE();}
    const _params = getParams(funCBlock);
    return function() {
        return _params.every((e,i)=>{
            return pS[e](arguments[i]);
        }) && funCvalidate(arguments);
    };
};

export const INHERITCONFIG:Function = function(config_inherit:{[index: string]: {}}, config_inheritor:{[index: string]: {}}):void {
    for (let k in config_inherit) !config_inheritor.hasOwnProperty(k) && (config_inheritor[k]=config_inherit[k]);
};
export const CONFIGMAIN = function(config:{[index: string]: {}}){
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


/*export*/ export const PARSEFUNCTION = function(functioN:Function) {
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
hasName         	:() =>  {},
hasDescription      :() =>  {},
hasAuthor         	:() =>  {},
hasNotes         	:() => f.toString().includes("//"),
hasAsync         	:() => f.toString().indexOf("async") < 3,
hasThis         	:f =>  f.toString().indexOf("function") < 2,
hasCapsule         	:f =>  f.toString().slice(0,1) === "(",
hasInputType        :() =>  {},
hasOutputType       :() =>  {},
hasInputBehavior    :() =>  {},
hasOutputBehavior   :() =>  {},
hasOnError         	:() =>  f.toString().includes("throw"),
hasValidations      :() =>  {}/**memntioned 2x or more */,
hasBlock         	:() =>  {}/**mentioned once */,
hasSpec         	:() =>  {}/**recognized lib or console.assert */,
});
export const parserClass = function(){
    /**
     * 
     * 
     * returns the json result of parsed input
     */
};

export const GET       = function(){};
export const GETMETHOD = function(){};
// const SET       = function(){};
export const SETMETHOD = function(){};
export const IS        = CAPSULE(function(val,sel){

},{
// ...DATATYPES
});
export const KINDA     = CAPSULE(function(){

},{

});
export const HAS       = CAPSULE(function(val,sel){

},{

});

export const TO        = CAPSULE(function(val,sel){

},{
TOBINARY,
TOHEX,
TODEC,
TOBASE,
TODATATYPE
});

export const ESSENTIAL = function(){
    
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
export const CHARS = CAPSULE(function(){
    THROWE("UNFINISHED");
},{
    LOWERCASE,
    UPPERCASE,
    SYMBOLS,
    NUMBERS,
    KYBRD
})
// const SYM
export const TRIM = CAPSULE(function(){

},{
/*const*/ ALL      : function(){},
/*const*/ TRIMLEFT  : function(){},
/*const*/ TRIMRIGHT : function(){},
/*const*/ TRIMINNER : function(){},
/*const*/ TRIMOUTER : function(){},
});
export const SWAP = function(memA,memB) {
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
export const LIST = CAPSULE(function(){

},{
  queries: {
    ENDSWITH,
    // FILTER,
    FIND,
    // Model.deleteMany()
    // Model.deleteOne()
    // Model.find()
    // Model.findById()
    // Model.findByIdAndDelete()
    // Model.findByIdAndRemove()
    // Model.findByIdAndUpdate()
    // Model.findOne()
    // Model.findOneAndDelete()
    // Model.findOneAndRemove()
    // Model.findOneAndReplace()
    // Model.findOneAndUpdate()
    // Model.replaceOne()
    // Model.updateMany()
    // Model.updateOne()
    FINDINDEX,
    FLATTEN,
    FOREACH,
    FROMPAIRS,
    GROUPBY,
    GROUPWITH,
    INCLUDES,
    INDEXBY,
    INDEXOF,
    LAST,
    LASTINDEXOF,
    TAKELAST,
    UNIQ,
    UNIQWITH,
    UPDATE,
    HAS
  },
  qmods:   {},
  props:   function(){},
  conversion:function(){},
  replication:{}
})




export const POPULATION = CAPSULE(function(){
  FLOOD,
  BLAST,
  FILL,
  FLUSH
},{

});
export const LOGIC = function(){};
export const VISUAL = function(){};
export const VOCAL = function(){};
export const SOUND = function(){};

export const INTERFACECLASSIFICATIONS = CAPSULE(function(){

},{
  LOGIC,
  VISUAL,
  VOCAL,
  SOUND
});
export const CREATE = function(){};
export const READ = function(){};
export const UPDATE = function(){};
export const DELETE = function(){};

// export const CRUDS = CAPSULE(function(){

// },{
//   CREATE,
//   READ,
//   UPDATE,
//   DELETE
// });
// export const REMOTECALLS = CAPSULE(function(){

// },{
//   POST,
//   GET,
//   PUT,
//   DELETE,
//   PATCH
// });
// export const ??? = CAPSULE(function(){

// },{
//   STRUCTURE,
//   INTERFACE,
//   ORGANIZATION,
//   ANATOMY,
//   FRAME,
//   TEMPLATE
// });
// export const ??? = CAPSULE(function(){

// },{
//   PROTOCOL,
//   PACKET,
//   CONTRACT,
//   MESSAGE,
//   PACK,
//   HEAD
// });
// export const ??? = CAPSULE(function(){
//   CONFIG,
//   STANDARD,
//   CUSTOM
// },{
  
// });
// export const ??? = CAPSULE(function(){

// },{
//   STACK,
//   FIXED,
//   DYNAMIC
// });
// export const ??? = CAPSULE(function(){

// },{
//     FLOW,
//     STATEMENTS
// });
// export const ??? = CAPSULE(function(){

// },{
//   CLUSTER,
//   BATCH,
//   BUNDLE,
//   ARRAY,
//   COLLECTION,
//   HEAP,
//   STACK
// });

// export const ??? = CAPSULE(function(){

// },{
//   CONSTRAINT,
//   VALIDATION,
//   PROOF,
//   TEST,
//   AUTH,
//   GUARD,
//   FILTER
// });

// export const ??? = CAPSULE(function(){

// },{
//   REMOTE,
//   NETWORK,
//   CONTACT
// });

// export const ??? = CAPSULE(function(){

// },{
//   CONNECT,
//   LINK
// });


// export const ??? = CAPSULE(function(){

// },{
// DISCONNECT,
// SEPERATE
// });

// export const ??? = CAPSULE(function(){

// },{
// TRANSFER,
// TRANSPORT,
// SEND,
// RECEIVE,
// IMPORT,
// EXPORT
// });
// export const ??? = CAPSULE(function(){

// },{
// SCOPE,
// ACCESSABILITY,
// PERMISSIONS
// });

// export const ??? = CAPSULE(function(){

// },{
// LANGUAGE,
// COMPILE,
// INTERPRET,
// TRANSPILE
// });

// export const ??? = CAPSULE(function(){

// },{
// PROGRAM,
// FILE,
// MAIN,
// SCRIPT,
// EMBED
// });

// export const ??? = CAPSULE(function(){

// },{
// DIRECTORY,
// CATALOGABLE,
// ROSTER,
// BOOK
// });

// export const ??? = CAPSULE(function(){

// },{
// REFERENCE,
// VARIABLE,
// DEPENDENCY,
// INPUT,
// OUTPUT,
// PARAM,
// ARG,
// RESULT
// });

// export const ??? = CAPSULE(function(){

// },{
// CONDITION,
// PIVOT,
// SWITCHES,
// CASE
// });

// export const ??? = CAPSULE(function(){

// },{
// DATA,
// VALUE
// });

// export const ??? = CAPSULE(function(){

// },{
// ELEMENT,
// ROOT,
// BASE,
// SOURCE,
// CORE,
// SEED
// });

// export const ??? = CAPSULE(function(){

// },{
// CAUSE,
// EFFECT
// });

// export const ??? = CAPSULE(function(){

// },{
// OPERATE,
// EQUATION,
// FUNCTION,
// METHOD,
// LAMBDA,
// PROCEDURE,
// INSTRUCTION,
// ROUTINE,
// PROCESS,
// EXPRESSION
// });

// export const ??? = CAPSULE(function(){

// },{
// SINGULAR,
// PLURAL,
// UNI,
// MULTI,
// POLY
// });

// export const ??? = CAPSULE(function(){

// },{
// ACTION
// });

// export const ??? = CAPSULE(function(){

// },{
// TASK,
// JOB,
// PURPOSE
// });

// export const ??? = CAPSULE(function(){

// },{
// SERVICE,
// UTILITY,
// USE
// });

// export const ??? = CAPSULE(function(){

// },{
// CREATIONAL,
// STRUCTURAL,
// BEHAVIORAL
// });

// export const ??? = CAPSULE(function(){

// },{
// MERGE,
// JOIN,
// COMBINE,
// FUSE,
// MELD,
// SPLIT,
// SEVER
// });


// export const ??? = CAPSULE(function(){

// },{
// ASSEMBLE,
// BUILD,
// CONSTRUCT
// });

// export const ??? = CAPSULE(function(){

// },{
// COMPUTE,
// EXECUTE,
// INVOKE,
// CALL,
// RUN
// });

// export const ??? = CAPSULE(function(){

// },{
// STOP,
// HALT,
// KILL
// });

// export const ??? = CAPSULE(function(){

// },{
// LOCK,
// FREEZE,
// SEAL
// });

// export const ??? = CAPSULE(function(){

// },{
// BOX,
// CAPSULE,
// CONTAINER,
// BUBBLE,
// ISOLATE
// });

// export const ??? = CAPSULE(function(){

// },{
// BLOCK,
// CODE
// });

// export const ??? = CAPSULE(function(){

// },{
// OPEN,
// PEEL,
// CRACK
// });

// export const ??? = CAPSULE(function(){

// },{
// CONVERT,
// TRANSLATE,
// TRANSFORM,
// MODIFY
// });

// export const ??? = CAPSULE(function(){

// },{
// GENERATE,
// FACTORY,
// MACHINE
// });

// export const ??? = CAPSULE(function(){

// },{
//   HANDLE,
//   CONTROL
// });

// export const ??? = CAPSULE(function(){

// },{
// CIRCLE,
// CYCLE,
// REPEAT,
// ENGINE,
// DOWHILE,
// FOR,
// WHILE
// });

// export const ??? = CAPSULE(function(){

// },{
// ID,
// NAME,
// ALIAS,
// AKA
// });

// export const ??? = CAPSULE(function(){

// },{
// PROPERTIES,
// ATTRIBUTES,
// DESCRIPTION
// });

// export const ??? = CAPSULE(function(){

// },{
// INHERIT,
// EXTEND,
// IMPLEMENT
// });

// export const EVENTSTAGES = CAPSULE(function(){

// },{
// BEGIN,
// START,
// COMMENCE,
// PRE,
// DUR,
// FINISH,
// END,
// POST
// });

// export const ??? = CAPSULE(function(){

// },{
// BOOT,
// COLDBOOT,
// HOTBOOT
// });

// export const ??? = CAPSULE(function(){

// },{
// BREAK,
// CATCH
// });

// export const ??? = CAPSULE(function(){

// },{
// OBSERVE,
// SUBSCRIBE,
// INTERCEPT
// });

// export const ??? = CAPSULE(function(){

// },{
// COUNT,
// NUMER
// });

// export const ??? = CAPSULE(function(){

// },{
// INDICATE,
// FLAG,
// STAMP,
// SIGNAL
// });
// export const ??? = CAPSULE(function(){

// },{
// MIMESIS,
// SCHEMA,
// REFLECT,
// MIRROR,
// MODEL
// });

// export const ??? = CAPSULE(function(){

// },{
//   SHAPE, 
//   MORPH,
//   SHAPELESS
// });

export const FINDDEADCODE = function(func){
/*  find dead code
    * returns nothing
    * does not modify inputs
    * does not modify externally referenced code
*/
  let ps = GETPARAMS(func);
  let argS = func.toString().includes("arguments");


};



//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*2)  LANGUAGE CONSTRUCT REVAMP & HARDENING
*/
/*export*/ export const PARAMS:paramsLoader = function(paramsOBJ){
    // no duplicates allowed --> objects don't automatically overwrite duplications
    if (!paramsOBJ) {THROWE();}
    for (let k in paramsOBJ) { eval(`paramsOBJ[k] = function(${k}){ return ${paramsOBJ[k].replace("$p",k)}; }`); }
    return paramsOBJ;
};
//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ export const CLOSURE = function(cb, variables) {
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
export const REPLICATE = CAPSULE(function(sel,val){
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
export const CONFIG = function(config){
  /**should be used in funC & claS */
  const o = config;
  INTERFACE(o)    || o.onFailure();
  VALIDATION(o)   || o.onFailure();
  MEMASSIGN(o)    || o.onFailure();
  o.onSuccess();
};
export const VALIDATION = CAPSULE(function(){
  throw new Error();
  return Object.keys(VALIDATION).every(e=>{
    e()
  });
},{
  ITERATIVE:    function(){},
  CROSSEXAMINE: function(){}
});
export const MEMASSIGN = function(){

};
//////////////////////////////////////////////////////////////////////////////////////////////////
/*export*/ export const LOOP = {};
export const LOOP_FOR                = function(){}; // for loop
export const LOOP_FOREVER            = function(){}; // no explanation rqd
export const LOOP_WHILE              = function(){}; // while loop
export const LOOP_BREAK              = function(){}; // stops loop
export const LOOP_CONTINUE           = function(){}; // skips loop iteration
export const LOOP_EACH               = function(){}; // forEach iteration
export const LOOP_DEEP               = function(){}; // loops everything loopable
export const LOOP_DEEPRECURSION      = function(){}; // stacks all recursions into one list
export const LOOP_CYCLE              = function(){}; // loop in circles
export const LOOP_FILTER             = function(){}; // returns conditions matched
export const LOOP_CHECKLIST          = function(){}; // ensures all info meets passes conditions
export const LOOP_INTERVAL           = function(){}; // loop in time ms increments
export const LOOP_WHEN               = function(){}; // mem-value equals
export const LOOP_BEFORE             = function(){}; // 
export const LOOP_AFTER              = function(){}; // 
export const LOOP_NONEST             = function(){}; // 
export const LOOP_SPLIT              = function(){}; //
export const LOOP_MERGE              = function(){}; //

export const LOOP_SKIP               = function(){}; // iterator fluxor
    // vs
export const LOOP_PINGPONG           = function(v,cbs){  }; // next exe memory swaping // instead of conditionals drags
// export const ENTER = v => (typeof v=== "string"||typeof v==="object"||Array.isArray(v));
// export const filter = function(v,hit,miss,conditions){
//     if      (conditions(e)) return hit.push(v);
//     else                    return miss.push(v);
// };
// export const checklist = (v) => {for (let i=0;i^v.length;i++){ if (v[i] !== true) return false; }return true;}
// export const interval = (ms,cb)=>(setInterval(cb,ms));
// export const forever = function(cb){while (true) {cb();}};
// export const cycle = function() {};
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
export const FUNC = function(config){
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
export const FUNCINTERFACE = function(config){
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
export const FUNCFAKEIFNULL = function(obj,prop:string,val:any):void {
  let fakeIfNull = function(){
      if (!obj.hasOwnProperty(prop)) {obj[prop] = val;}
  }
  return Object.assign(function(){},{
      "namE" 			    : function(obj) {fakeIfNull(obj,'name',			    "fake name to pass test");},
      "description" 	: function(obj) {fakeIfNull(obj,'description',	"fake description to pass the test");},
      "author"		    : function(obj) {fakeIfNull(obj,'author',		    "fake author")},
      "notes" 		    : function(obj) {fakeIfNull(obj,'notes',		    ["fake notes to pass the test"]);},
      "validations" 	: function(obj) {fakeIfNull(obj,'validations',	()=>{/*fake*/});},
      "block" 		    : function(obj) {fakeIfNull(obj,'block',		    ()=>{/*fake*/});},
      "spec" 			    : function(obj) {fakeIfNull(obj,'spec',			    ()=>{/*fake*/});}
  });
};
export const FUNCINDEPEDENTVALIDATION = function(){};
export const FUNCCROSSEXAMINEVALIDATION = function(){};
export const FUNCMEMASSIGN = function(){};
export const FUNCTRETURN   = function(confiG){
  return Object.freeze({
      globalConfig:   FUNCCONFIGGLOBAL,
      instance:       FUNCCONFIGINSTANCE,
      funC:           FUNCTEMPLATE
  });
};
export const FUNCTEMPLATE  = function(){
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
export const FUNCCONFIGGLOBAL = function(){
  loopInterface(config);
  confiG(config);	
  gConfig = config;
  configs["global"] = gConfig;
  return pm;
};
export const FUNCCONFIGINSTANCE = function(){
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
export const FUNCCONFIGFUNC = function(){
  confiG(config);
  incConfig(config, config.name);
}
export const FUNCINCCONFIG = function(){
  name = name || THROWE();
  configs[name] = config;
};
export const FUNCCONFIG = function(){S._Object.freeze(S._Object.assign(confiGmain,meths))};
export const FUNCFAKEIFNULL = function(){};
export const FUNCMETHS = function(){
  return {
      global: FUNCCONFIGGLOBAL,
      instance: FUNCCONFIGINSTANCE,
      funC: FUNCCONFIGFUNC
  };
};
export const FUNCLOOPINTERFACE = function(config){S._Object.keys(fakeIfNull).forEach(e=>{fakeIfNull[e](config)})};
export const FUNCASSIGNINTERFACE = function(config,name){return instances[name]=config;};

export const gConfig:   {[index: string]: {}} = {};
export const FInstances: {[index: string]: {}} = {};
export const configs:   {[index: string]: {}} = {};
export const funcs:     {[index: string]: {}} = {};
export const intF:interface_funCinterface 	= function(){return funCinterface};
export const intF_keys: string[] 			= function(){return Object.keys(intF())};
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


// export const c = Clas({/*global config*/});

// export const ci0 = c.new(/*branch config*/);

// export const ci0i0 = ci0.new(/* branch instance config*/);


// export const CLAS = (function(){

//     // const configs = {
//     //   "GLOBAL":     {}, // FREEZE AFTER GLOBAL CONFIG ASSIGNED
//     //   "BRANCH":     {}, 
//     //   "BINSTANCES": {}
//     // };

//     /*export*/ const claS:claS = function(setupOBJ) {
//         const __MEM__ = CONFIG(setupOBJ,
//               CLASSINGULARVALIDATIONS,
//               CLASSCROSSEXAMINEVALIDATIONS,
//               function() {
//                 __mem__ = {
//                   __settings__   :CLASMEMSETUP["SETTINGS"]     [1](setupOBJ),
//                   __internal__   :CLASMEMSETUP["INTERNAL"]     [1](setupOBJ),
//                   __static__     :CLASMEMSETUP["STATIC"]       [1](setupOBJ),
//                   __public__     :CLASMEMSETUP["PUBLIC"]       [1](setupOBJ),
//                   __private__    :CLASMEMSETUP["PRIVATE"]      [1](setupOBJ),
//                   __protect__    :CLASMEMSETUP["PROTECT"]      [1](setupOBJ),
//                   __constructor__:CLASMEMSETUP["CONSTRUCTOR"]  [1](setupOBJ),
//                   __imports__    :CLASMEMSETUP["IMPORTS"]      [1](setupOBJ),
//                   __middlemans__ :CLASMEMSETUP["MIDDLEMANS"]   [1](setupOBJ),
//               };
//         });
//         // __MEM__.__middlemans__    = middlemans.block(__MEM__.__imports__);

//         // claS_roster.push(__MEM__);        

//         // setupOBJ = undefined;
//         // let PUBLIC;
//         // return __clas__public__instance(PUBLIC = function(__mem__) {
//         //     const buildPublic:buildPublic = function(__mem__) { return class c { constructor() {
//         //         constructMethods:   publicConstruction       (this,__mem__);
//         //         invokeConstructor:  constructorBlock    .bind(this)(...arguments);
//         //         onFinish:           constructionComplete     (this,__mem__);
//         //     }   }   };
//         //     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//         //     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//         //     const publicConstruction:publicConstruction = (function ww(__this__,__mem__) {
//         //         const pm = clone(__mem__.__public__.mp), pd = clone(JSON.parse(JSON.stringify(__mem__.__public__.dp)));
//         //         const sm = clone(__mem__.__static__.ms), sd = clone(JSON.parse(JSON.stringify(__mem__.__static__.ds)));
//         //         if (__mem__.__settings__.singleton===true) __mem__.__internal__.di.instances < 1 || (()=>{THROWE();})();
//         //         if (__mem__.__settings__.public_reflects_static === true) {
//         //             __mem__.getMethod.validate(__this__,__mem__.__settings__,"ds");__mem__.getMethod.block(__this__,__mem__.__settings__,"ds");
//         //             __mem__.setMethod.validate(__this__,__mem__.__settings__,"ds");__mem__.setMethod.block(__this__,__mem__.__settings__,"ds");
//         //             for (let k in sm) {__this__[k] = function() {return clone(sm[k](...arguments));}}
//         //         } else mp.block(__this__,pm,pd,__mem__);
//         //     });
//         //     const constructionComplete:constructionComplete = (__this__,__mem__)=>__settings__.public_mutable === false && Object.freeze(__this__),++__mem__.__internal__.di.instances;

//         //     return buildPublic(__mem__);
//         // }(__MEM__));
//     // };



//     const __clas__public = function(){};
//     const __clas__public__instance = function(PUBLIC){
//         return S._Object.freeze({
//             new:        CLASNEW      (PUBLIC),
//             delete:     CLASDELETE   (PUBLIC),
//             extend:     CLASEXTEND   (PUBLIC),
//             implement:  CLASIMPLEMENT(PUBLIC)
//         });
//     };
//     const CLASNEW       = function(PUBLIC)     {return function(){return new PUBLIC(...arguments);}};
//     const CLASDELETE    = function(PUBLIC)     {return function(){};};
//     const CLASEXTEND    = function(PUBLIC)     {return function(){};};
//     const CLASIMPLEMENT = function(PUBLIC)     {return function(){};};
    
//     const noDuplicates123456 = function(setupOBJ:setupOBJ) {
//         let a = KEYS(setupOBJ.dp||{});
//         let b = KEYS(setupOBJ.mp||{});
//         let c = KEYS(setupOBJ.protectData||{});
//         let e = KEYS(setupOBJ.privateData||{});
//         let f = KEYS(setupOBJ.privateMethods||{});
//         let oriG = a.concat(b).concat(c).concat(d).concat(e).concat(f);
//         let neW = UNIQ(oriG);
//         neW.length === oriG.length || (()=>{THROWE()})()
//     };

//     /*export*/ const parseClass = (function(){
        
//     });

//     let list_mem = ["__settings__","__imports__","__middlemans__","__internal__","__static__","__public__","__constructor__"];
//     const __mem__ = S._Object.assign(list_mem,list_mem.map((e,i)=>{
//         let obj;
//         eval(`
//             obj={
//                 default:    props[${i}][0],
//                 validate:   props[${i}][1],
//                 block:      props[${1}][2]
//             };
//         `);
//         return obj;
//     }));
//     const CLASMEMSETUP = CAPSULE(function(){

//     },{          // default                             // validate   // block
//     IMPORTS:     [() => ({})                            ,()=>{}       ,(o,z)  => CLASSETUPOBJ["imports"][1](o,z)],
//     MIDDLEMANS:  [() => ({})                            ,()=>{}       ,z      => CLONE(z)],
//     INTERNAL:    [() => ({"mi":{},"di":{"instances":0}}),()=>{}       ,(o,z)  => CLASSETUPOBJ["mi"][1](o,z),CLASSETUPOBJ["di"](o,z)],
//     STATIC:      [() => ({"ds":{},"ms":{}})             ,()=>{}       ,o      => CLASSETUPOBJ["ms"](o,CLASMEMSETUP["STATIC"][0])],
//     PUBLIC:      [() => ({"dp":{},"mp":{}})             ,()=>{}       ,o      => ({"dp": o.dp, "mp":o.mp})],
//     PRIVATE:     [],
//     PROTECT:     [],
//     SETTINGS:    [()=>{}],
//     CONSTRUCTOR: [()=>{}]
//     });
//     const CLASSETUPOBJ = function(){ return CAPSULE(function(){

//     },
//     {                      // SINGULAR VALIDATIONS                    BLOCK                       DEFAULT
//     /*const*/  extends    : [[HASPROPERTY,ISOBJECT,NOTEMPTY,UHHHH]      ,CLONE,                   {}],
//     /*const*/  implements : [[HASPROPERTY,ISOBJECT,NOTEMPTY,UHHHH]      ,CLONE,                   {}],
//     /*const*/  name       : [[HASPROPERTY,ISSTRING,NOTEMPTY]            ,CLONE,                   ""],
//     /*const*/  settings   : [[HASPROPERTY,ISOBJECT,NOTEMPTY]            ,CLONE,                   {}],
//     /*const*/  imports    : [[HASPROPERTY,ISOBJECT,NOTEMPTY]            ,[CLONE,block_imports],   {}],
//     /*const*/  events     : [[HASPROPERTY,ISOBJECT,NOTEMPTY]            ,CLONE,                   {}],
//     /*const*/  di         : [[enforce_object_datas]                     ,CLONE,                   {}],
//     /*const*/  ds         : [[enforce_object_datas]                     ,CLONE,                   {}],
//     /*const*/  dp         : [[enforce_object_datas]                     ,CLONE,                   {}],
//     /*const*/  dp1        : [[enforce_object_datas]                     ,CLONE,                   {}],
//     /*const*/  dp2        : [[enforce_object_datas]                     ,CLONE,                   {}],
//     /*const*/  mi         : [[enforce_object_methods]                   ,[block_mi,CLONE],        {}],
//     /*const*/  ms         : [[enforce_object_methods]                   ,[block_ms,CLONE],        {}],
//     /*const*/  mp         : [[enforce_object_methods]                   ,[block_mp,CLONE],        {}],
//     /*const*/  mp1        : [[enforce_object_methods]                   ,[block_mp1,CLONE],       {}],
//     /*const*/  mp2        : [[enforce_object_methods]                   ,[block_mp2,CLONE],       {}],
//     /*const*/  constructor: [[enforce_object_methods]                   ,[CLONE],                 function(){}]
//     });

//     // const methods = ["mi","ms","mp","mp1","mp2","constructor"];
//     // const datas   = ["di","ds","dp","dp1","dp2"];
//     // const properties = [
//     //     "name","extends","implements",/*"constructor"*/, "settings","imports","events",
//     //      ...datas,
//     //      ...methods
//     // ];
//     // let tempOBJ = {};
//     // properties.forEach((e,i)=>{
//     //     console.log(i);
//     //     tempOBJ[e] = {
//     //         default:  closure_default (e),
//     //         validate: closure_validate(e),
//     //         block:    closure_block   (e)
//     //     };
//     // });
//     // /*export*/ const setupOBJ = tempOBJ;
//     // //////////////////////////////////////////////////////////////////////////
//     // //////////////////////////////////////////////////////////////////////////
//     // const closure_default   = function(){ return function(){THROWE("unfinished");}; };
//     // const closure_validate  = function(sel){
//     //     let opts:any = {
//     //         "datas":    enforce_object_datas,
//     //         "methods":  enforce_object_methods,
//     //         "propsss":  enforce_object_propsss,
//     //         "nulls":    enforce_object_nulls,
//     //     };
//     //     if      (datas     .includes(sel)) opts = opts["datas"];
//     //     else if (methods   .includes(sel)) opts = opts["methods"];
//     //     else if (properties.includes(sel)) opts = opts["propsss"];
//     //     else    (nulls     .includes(sel)) opts = opts["nulls"];
//     //     return function(obj,val){
//     //         hasOwnProperty(obj,val);
//     //         opts(val);
//     //         return true;
//     //     };
//     // };
//     // const closure_block     = function(){return function(){THROWE("unfinished");}};
//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // consT(`

//     // `);
//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     const UHHHH = function(obj) {   
//         // loopObject(obj, (obj,k)=>{ loopObject(obj.extends, k) });
//         S._Object.keys(obj.extends).forEach(
//             e => Object.keys(obj.extends[e]).forEach(
//                     (k) => throwE("pm || pd",()=>(typeof obj.mp[k] === obj.extends[e][k] || typeof obj.dp[k] === obj.extends[e][k]))
//             )
//         );
//     };
//     ////////////////////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////////////////////
//     const CLASSLEGEND = {
//         "d0":    "data",
//         "m0":    "method",
//         "i0":    "internal",
//         "s0":    "static",
//         "p0":    "public",
//         "p1":    "private",
//         "p2":    "protect"
//     };
//     const CLASSLEGENDWRAP = Object.freeze(Object.assign(function() {},
//     {
//     /*const*/ method    : (v,f)=> {  },
//     /*const*/ data      : v => {},
//     /*const*/ internal  : v => {},  
//     /*const*/ static    : v => {},
//     /*const*/ public    : v => {},
//     /*const*/ private   : v => {},
//     /*const*/ protect   : v => {}
//     }));
//     /** 
//      *      internal 
//      *      static
//      *      public
//     */
//     const block_imports     :Function = obj => {
//         obj.imports.forEach((e:string)=>{
//             e = period(e);
//             let r = require(e);
//             __imports__[e.toLowerCase()] = [()=>(new r()),()=>(r),()=>{THROWE();}]  [(isClas(r)&&1) || (isFunC(r)||isFunction(r)||isObj(r) && 2) || 0];

//             });
//     };
//     // Object.keys(obj.ms).forEach(e => {const tempFunc = obj.ms[e];__static__.ms[e] = function () {return tempFunc.call(obj, ...arguments);};}); 
//     // getMethod.validate(pm);getMethod.block(__this__,__settings__,"dp");
//     // setMethod.validate(pm);setMethod.block(__this__,__settings__,"dp");
//     // for (let k in pm) {__this__[k] = pubM(pm[k].bind({dp: pd,mp: __this__,ms: __static__.ms,ds: __static__.ds,_: __middlemans__}),__this__);}
//     const block_mi          :Function = obj => { loopObject(obj.mi,  (obj,k)=>{__internal__["mi"] [k] = wrap.method("internal",obj["mi"] [k]); })};
//     const block_ms          :Function = obj => { loopObject(obj.ms,  (obj,k)=>{__static__  ["ms"] [k] = wrap.method("static",  obj["ms"] [k]); })};
//     const block_mp          :Function = obj => { loopObject(obj.mp,  (obj,k)=>{__public__  ["mp"] [k] = wrap.method("public",  obj["mp"] [k]); })};
//     const block_mp1         :Function = obj => { loopObject(obj.mp1, (obj,k)=>{__private__ ["mp1"][k] = wrap.method("private", obj["mp1"][k]); })};
//     const block_mp2         :Function = obj => { loopObject(obj.mp2, (obj,k)=>{__protect__ ["mp2"][k] = wrap.method("protect", obj["mp2"][k]); })};


//     const getMethod:funClite = {
//         validate:function(methods){
//             if ("get" in methods) {THROWE();} 
//         },
//         block:function(__this__,__settings__:interface_settings,enuM:string){
//             if (__settings__.public_gettable === true) {
//                 let obj = S._JSON.parse(`{"${enuM}:{}"}`); obj[enuM] = __this__[enuM];
//                 __this__["get"] = function(prop:string) {
//                     return CLONE(this[enuM][prop]||this[enuM])
//                 }.bind(obj);
//             }
//         }
//     };
//     const setMethod:funClite = {
//         validate:function(methods):void{
//             if ("set" in methods) {THROWE();}
//         },
//         block:function(__this__,__settings__:interface_settings,enuM:string):void{
//             if (__settings__.public_settable === true) {
//                 let obj = S._JSON.parse(`{"${enuM}:{}"}`); obj[enuM] = __this__[enuM];
//                 __this__["set"] = function(prop:string, val:any):void {
//                     this[enuM][prop] = val;
//                 }.bind(obj);
//             }
//         }
//     };



// })();
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*3)  LANGUAGE CONSTRUCT MUST HAVES
*/
export const INPUT     = function(){};
export const OUTPUT    = function(){};
export const RANGE     = function(){};
export const TEST      = function(){};
export const SPEC      = function(){};
export const AUDIT     = function(){};
export const ASSERT    = function(){};
export const SHOULD    = function(){};
export const EXPECT    = function(){};
export const LOG       = function(){};
export const RESOLVE   = function(){};
export const REJECT    = function(){};
export const BEFORE    = function(){};
export const AFTER     = function(){};
export const BEFOREEACH = function(){};
export const AFTEREACH = function(){};

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

// describe('hooks', function() {
//   before(function() {
//     // runs once before the first test in this block
//   });

//   after(function() {
//     // runs once after the last test in this block
//   });

//   beforeEach(function() {
//     // runs before each test in this block
//   });

//   afterEach(function() {
//     // runs after each test in this block
//   });

//   // test cases
// });

export const SPECDEV = CAPSULE(function(){
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
export const LAYERS = function(){
  // bottom layer: the functional layer   code density high,mostly imperative
  // top layer:    the highlevel layer    code density low, mostly english & pseudo
  // inbetween layers: programmable       code density med, mostly declarative & symbolic paradigm
};

//////////////////////////////////////////////////////////////////////////////////////////////////////
export const CODEDECONSTRUCTOR = function(inputs){


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
export const DIFFERENTIALBUILDCODING = function(){};

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*4)  ALGORITHMIC DATA STRUCTURES
*/
export const INTUITLIST = function(){};
export const TREES = function(){};
export const WEB   = function(){};
export const MATRIX= function(){};

export const STORE = function(){};
export const FETCH = function(){};
export const AMBIENT=function(){};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*5)  ALGORITHMIC ALGORITHMS
*/
export const SORT = function(){};
export const QUANTIFY = function(){};
export const SEARCH  = function(){};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*6)  WORKS OUT THE BOX
*/

export const MIDDLEWARE = function(){};


export const API           = function(){};
export const SERVER        = function(){};
export const CLIENT        = function(){};
export const ZENDB         = function(){};
export const PROXY         = function(){};
export const CLUSTER       = function(){};
export const DHCA          = function(){};
export const SOCKET        = function(){};
export const AUTOTEMPLATER = function(){};
export const SMARTCSS      = function(){};
export const TAPJS         = function(){};
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

export const COMPARTMENTALIZE = function(){
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
export const PARADIGMS = CAPSULE(function(sel){
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
export const SNIPPETS = {
  CAPSULE: {},
  CLOSURE: {},
  FUNCLITE:{},
  FUNC:{},
  CLAS:{}
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
export const LEARNDEVCORE = function(){
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





// export const weavePackageExportable = (function(){ 

//   // enforce LOOPCHECKLIST on pkgs & functional programs
//   // convert into pkg paradigm selection style
//   // convert into exportable ${PROGRAMMING LANGUAGE}`

// })();
