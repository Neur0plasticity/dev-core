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


*** ORGANIZE THE MODULES TO GROUPED TOGETHER

    //// ????
    - SANDBOX-JS
    - code-file-structure
    //// LANGUAGE CONSTRUCT REVAMP & HARDENING
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


0)  SHARED MEMORY VARIABLES
1)  STRUCTURAL PRESENTATIONS
2)  LANGUAGE CONSTRUCT REVAMP & HARDENING
3)  LANGUAGE CONSTRUCT MUST HAVES
4)  ALGORITHMIC DATA STRUCTURES
5)  ALGORITHMIC ALGORITHMS
6)  WORKS OUT THE BOX





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
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*0)  SHARED MEMORY VARIABLES

    *** evaluate modules one by one, do not leave any
    *** anything global non related to module gets bumped to SHARED MEMORY VARIABLES



*/
const THROWE = function(){throw new Error();};
const datatypes:string[] = ["boolean","string","number","object","array","symbol","function"];
const _lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
const _upperCase = _lowerCase.map(v => v.toUpperCase());
const _symbols   = ["!@#$%^&*()_+{}[]-=|;:'\"\\?,.<>`~"];
const isSafe        =   v => Number.isSafeInteger(v);
const isTrue        =   v => v === true;
const isFalse       =   v => v === false;
const isInfinity    =   v => v === Infinity;
const isFinite      =   v => Number.isFinite(v);
const isMaxValue    =   v => v === Number.MAX_VALUE;
const isMinValue    =   v => v === Number.MAX_VALUE;
const isMaxSafeValue=   v => v === Number.MAX_SAFE_INTEGER;
const isMinSafeValue=   v => v === Number.MIN_SAFE_INTEGER;
const isNaN         =   v => Number.isNaN(v);
const isPositive    =   v => 0 < v;
const isNegative    =   v => 0 > v;
const isZero        =   v => v === 0;
const isFloat       =   v => String(v).includes(".");
const isInteger     =   v => !String(v).includes(".");
const isAlpha       =   v => [..._lowerCase,..._upperCase].includes(v);
const isLowerCase   =   v => _lowerCase.includes(v);
const isUpperCase   =   v => _upperCase.includes(v);
const isSymbol      =   v => _symbols.includes(v);
const isThis        =   v => v.toString().includes("function ");
const isAnon        =   v => v.toString().includes("function(");
const isLambda      =   v => v.toString().includes("=>");
const isEmpty       =   function(v){
                            return {
                                "str":v=>v.length===0,"obj":v=>Object.keys(v).length===0,
                                "arr":v=>v.length===0,"fnc":v => v.toString()
                            }[(Array.isArray(v) && "arr") || (typeof v)](v);
};
const isNotEmpty    = (v)=>{
                            return {
                                "str":v=>v.length!==0,"obj":v=>Object.keys(v).length !== 0,
                                "arr":v=>v.length!==0,"fnc":v=>v.toString()
                            }[(Array.isArray(v) && "arr") || (typeof v)](v);
};
const getParams = function(func){
    const start = func.toString().indexOf("(");
    const end   = func.toString().indexOf(")");
    return func.toString().slice(start+1,end).split(",");
};
const assertIndependence = f => name(f.toString()).is(allSamCase)&&name(f.toString()).is(allAlpha);
const assertCompound     = f => name(f.toString()).is(allTwoCase)&&name(f.toString()).is(allAlpha);
const assertComplex      = f => name(f.toString()).is(allMulCase)&&name(f.toString()).is(allAlpha);

const allSamCase         = e => {let _ = e.slice().shift(); e = (isLowerCase(_) && isLowerCase) || (isUpperCase(_) && isUpperCase);  for (let k in e) { true === _(e) || (()=>{throw new Error();})() }};
const allTwoCase         = e => {let a,b,c;   for (let k in e){ (isLowerCase(_) && a=true) || (isUpperCase(_) && b=true) || c=true; }; return (a&&b)^c};
const allMulCase         = e => {let a = false, b = false, c = false;for (let k in e) { (isLowerCase(k)&&a=true) || (isUpperCase(k)&&b=true) || (isSymbol(k)&&c=true)};return a&&b&&c;};
const allAlpha           = e => {e.forEach(isAlpha); return true};
const isAlpha            = e => {return e >= "a" && e <= "Z";};
const isSymbol           = e => {return "`~!@#$%^&*()_+-=[]{};':\",.<>/?".includes(e);};
const isLowerCase        = e => {return e >= "a" && e <= "z";};
const isUpperCase        = e => {return e => "A" && e <= "Z";};

const standardString		:Function = (val:string):void    => {typeof val === "string"   || throwE("string required"); val.length > 0 || throwE("len must be gt 0");};
const standardStringArray	:Function = (val:string[]):void  => {Array.isArray(val) 	   || throwE("array required");val.forEach(standardString);};
const arrayIncludes			:Function = (arr:any[]):Function => {return (val:any):void=>{arr.includes(val) || throwE("unexpected value");}};

const period = (e: string) => {
    if (e[0] === ".") {
        if (e[1] === ".")           e = "../" + e;
        else if (e[1] === "/")      e.shift(), e.shift(), e = "../" + e;
        else                        {throw new Error();}
    }
    return e;
};

const loopObject             = (obj,cb) => { for (let k in obj) cb(obj,k); };


const enforce_object_datas   = v => {isObject(v);notEmpty(v);Object.keys(v).forEach(isNotFunction);};
const enforce_object_methods = v => {isObject(v);notEmpty(v);Object.keys(v).forEach(isFunction);};
const enforce_object_propsss = v => {isObject(v);notEmpty(v);Object.keys(v).forEach(isNotFunction);};
const enforce_object_nulls   = v => {isObject(v);isNull(v);};
const enforce_settings       = v => {isObject(v);notEmpty(v);Object.keys(v).forEach(enforceSetting);};
const enforce_setting        = v => {};


const removeDuplicateUsingSet = function(arr){
    let unique_array = Array.from(new Set(arr))
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

const is                 = v => {};
// const name               = e => {for (let k in e) {}return {};};


const ARRPROPSALTERED    = v => {return Object.assign([],v).length !== 0};





/*1)  STRUCTURAL PRESENTATIONS


    * TYPES
    * INTERACES
    * ABSTRACTIONS


*/
export interface paramsLoader {
    (paramsOBJ:paramsOBJ): {paramsOBJ} | {create,read,update,delete}
};
export interface paramsOBJ {
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
export interface func0props {
    validate: Function,
    block: Function
}
export interface func0loaderobj {
    funClite: Function,
    paramsOBJ:paramsOBJ
}
export interface func0Loader {
    (paramsOBJ:paramsOBJ): func0loaderobj
}
export interface interface_pm {
	globalConfig,
	instance,
	funC
};
export interface interface_funCinterface {
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

export interface funClite                   {   
    validate:   validate,   block:  block    
};
export interface claS {
    (setupOBJ:setupOBJ):__claS__public
}
export interface __claS__public             {};
export interface __claS__instance_public    {
    new:        neW,        extend:     extend,
    delete:     deletE,     implement:  implement
};
export interface enumStrFunc    {   [index: string]: Function   };
export interface enumStrAny     {   [index: string]: any        };
export interface settings {
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
export interface setupOBJ {
    name:String, extends:Array<object>, implements:Array<object>,
    constructor:    constructor,
    settings:       settings,
    imports:        imports,
    events:         events,
    di:di,ds:ds,dp:dp,dp1:dp1,dp2:dp2,
    mi:mi,ms:ms,mp:mp,mp1:mp1,mp2:mp2
};
export interface events         {   

};
export interface __this__       {   [index:string]:any              };

export interface __internal__   {   di: enumStrAny, mi: enumStrFunc };
// export interface __imports__    {                                   };
export interface __public__     {   dp: enumStrAny, mp: enumStrFunc };
export interface __middlemans__ {                                   };
export interface __static__     {   ds: enumStrAny, ms: enumStrFunc };
// export interface __settings__   {
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
export interface __mem__ {
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
export interface buildPublic {
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
export interface publicConstruction {
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
export interface constructionComplete {
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
export const params:paramsLoader = function(paramsOBJ){
    // no duplicates allowed --> objects don't automatically overwrite duplications
    if (!paramsOBJ) {throw new Error();}
    for (let k in paramsOBJ) { eval(`paramsOBJ[k] = function(${k}){ return ${paramsOBJ[k].replace("$p",k)}; }`); }
    return paramsOBJ;
};
//////////////////////////////////////////////////////////////////////////////////////////////////
export const capsule = function(cb:Function, props:{[index:string]:any}) {
    for (let k in props) {
        !restrictedProps.includes(k) || (()=>{throw new Error()});
    }
    return Object.freeze(Object.assign(cb,props));
};
export const restrictedProps = [
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
export const closure = function(cb, variables) {
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
export const clone = capsule(function(v:any):any {
	let tP = typeof v;
	if (typeof tP === 'boolean') 	return clone[tP](v);
	if (typeof tP === 'number')  	return clone[tP](v);
	if (typeof tP === 'string')  	return clone[tP](v);
	if (Array.isArray(tP)) 		    return clone['array'](v);
	if (typeof tP === 'function')	return clone[tP](v);
	if (typeof tP === 'object')     return clone[tP];
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
    if (Array.isArray(v) || typeof v !== "object")  return false;
    let k = Object.keys(v);
    if (k.len === 0)                                return false;
    for (let e in k) {
        if (FORBIDDEN_OBJECT_PROPS.includes(k[e]))  return false;    
    }
                                                    return true;
};
const Vobj1 = function(v:any){   // loosest object validation
    if (Array.isArray(v) || typeof v !== "object")  return false;
    let k = Object.keys(v);
    if (k.len !== 0)                                return false;
    for (let e in k) {
        if (FORBIDDEN_OBJECT_PROPS.includes(k[e]))  return false;    
    }
                                                    return true;
};
const Vobj2 = function(v:any){   // loosest object validation
    if (Array.isArray(v) || typeof v !== "object")  return false;
    let k = Object.keys(v);
    for (let e in k) {
        if (FORBIDDEN_OBJECT_PROPS.includes(k[e]))  return false;    
    }
                                                    return true;
};

const Vnum0 = function(v:any){  // strictest number validation
    if (Number.isNaN(v))                            return false;
    if (typeof v !== "number")                      return false;
    if (!Number.isSafeInteger(v))                   return false;
    if (!Number.isFinite(v))                        return false;
    /*passed*/                                      return true;
};
const Vnum1 = function(v:any){ // second strictest number validation
    if (Number.isNaN(v))                            return false;
    if (typeof v !== "number")                      return false;
    if (!Number.isFinite(v))                        return false;
    /*passed*/                                      return true;
};
const Vnum2 = function(v:any){ // 3rd strictest number validation
    if (Number.isNaN(v))                            return false;
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
    throw new Error("UNFINISHED");
    /*passed*/                                      return true;
};
const Vsym1 = function(v:any){ // strictest symbol validation
    if (typeof v !== "symbol")                      return false;
    throw new Error("UNFINISHED");
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
    if (!Array.isArray(v))                          return false;
    if (isEmpty(v))                                 return false;
    if (ARRPROPSALTERED(v))                         return false;                
    /*passed*/                                      return true;
};
const Varr1 = function(v:any){ // 2nd strictest array validation
    if (!Array.isArray(v))                          return false;
    if (!isEmpty(v))                                return false;
    if (ARRPROPSALTERED(v))                         return false;                
    /*passed*/                                      return true;
};
const Varr2 = function(v:any){ // loosest array validation
    if (!Array.isArray(v))                          return false;
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

export const DType = capsule(function(){
    throw new Error("NOTFINISHED");
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
export const LOOP = {};
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
export const funCLite:func0Loader = function(paramsOBJ){
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
    if (typeof funCBlock    !== "function") {throw new Error();}
    if (typeof funCvalidate !== "function") {throw new Error();}
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

const intF:interface_funCinterface 	= funCinterface;
const itf_keys: string[] 			= Object.keys(intF);

const incConfig:Function = function(config:{[index: string]: {}},name:string):void {
	name = name || (()=>{throw new Error()})();
	configs[name] = config;
};
const inheritConfig:Function = function(config_inherit:{[index: string]: {}}, config_inheritor:{[index: string]: {}}):void {
	for (let k in config_inherit) !config_inheritor.hasOwnProperty(k) && (config_inheritor[k]=config_inherit[k]);
};
let confiGmain = function(config:{[index: string]: {}}){
		allPropsRequired:for (let k in itf_keys) {
			k = itf_keys[k];
			// console.log(k, config[k]);
			if (!config.hasOwnProperty(k)) {throw new Error(k);}
		}
		allPropsValidated:for (let k in itf_keys) {
			k = itf_keys[k];
			// console.log(k, config[k]);
			intF[k](config[k]);
		}
};
export const parseFunction = (function(func:Function) {
    
    // looking for variables references.
    // does not allow this references

    // if it finds duplicate variable references it reports it's findings.

    // console.warn("parse progam unprogrammed");
    
    

});
export const parser = function(functioN:Function) {
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
export const funCinterface:interface_funCinterface = obj;
const fakeIfNull = Object.assign(function(){},{
"namE" 			: function(obj) {fakeIfNull(obj,'name',			"fake name to pass test");};
"description" 	: function(obj) {fakeIfNull(obj,'description',	"fake description to pass the test");};
"author"		: function(obj) {fakeIfNull(obj,'author',		"fake author")};
"notes" 		: function(obj) {fakeIfNull(obj,'notes',		["fake notes to pass the test"]);};
"validations" 	: function(obj) {fakeIfNull(obj,'validations',	()=>{/*fake*/});};
"block" 		: function(obj) {fakeIfNull(obj,'block',		()=>{/*fake*/});};
"spec" 			: function(obj) {fakeIfNull(obj,'spec',			()=>{/*fake*/});};
});

const loopInterface = function(config){Object.keys(fakeIfNull).forEach(e=>{fakeIfNull[e](config)})};
const assignInstance = function(config,name){return instances[name]=config;};
const confiGglobal:Function = function(config:{[index: string]: {}}):interface_pm{
	loopInterface(config);
	confiG(config);	
	gConfig = config;
	configs["global"] = gConfig;
	return pm;
};
const confiGinstance:Function = function(name:string,config:{[index: string]: {}}) {
	if (!name) 				 {throw new Error();}
	if (name&&config) {
		if (instances[name]) {throw new Error("no duplicates allowed")}
		gConfig = Object.assign({},gConfig);
		inheritConfig(gConfig, config);
		loopInterface(config);
		confiG(config);	
		assignInstance(config,name);
		incConfig(config,name);
	} 
	else if (name) 		   {	assignInstance(config,name) || (()=>{throw new Error();})();} 
	else 				   {	throw new Error();	s}
	return {funC:func.bind({config:config})};
};
const confiGfunC:Function = function(config):void {
	confiG(config);
	incConfig(config, config.name);
};
export interface interface_meths {
	global,
	instance,
	funC
};
const meths = {
	global:confiGglobal,
	instance: confiGinstance,
	funC: confiGfunC
};
const confiG = Object.freeze(Object.assign(confiGmain,meths));
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
// export const funC:interface_pm = pm;

export const funC = pm000;

//////////////////////////////////////////////////////////////////////////////////////////////////











let claS_roster = [];

export const claS:claS = function(setupOBJ) {

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
    //         if (__mem__.__settings__.singleton===true) __mem__.__internal__.di.instances < 1 || (()=>{throw new Error();})();
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
    return Object.freeze({
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
    let a = Object.keys(setupOBJ.dp||{});
    let b = Object.keys(setupOBJ.mp||{});
    let c = Object.keys(setupOBJ.protectData||{});
    let d = Object.keys(setupOBJ.protectMethods||{});
    let e = Object.keys(setupOBJ.privateData||{});
    let f = Object.keys(setupOBJ.privateMethods||{});
    let oriG = a.concat(b).concat(c).concat(d).concat(e).concat(f);
    let neW = removeDuplicateUsingSet(oriG);
    neW.length === oriG.length || (()=>{throw new Error()})()
};

export const parseClass = (function(){
    
});

let list_mem = ["__settings__","__imports__","__middlemans__","__internal__","__static__","__public__","__constructor__"];
const __mem__ = Object.assign(list_mem,list_mem.map((e,i)=>{
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
/*imports*/     [() => ({})                            ,()=>{}       ,(o,z)  => iP.block(o,z)],
/*middlemans*/  [() => ({})                            ,()=>{}       ,z      => clone(z)],
/*intenal*/     [() => ({"mi":{},"di":{"instances":0}}),()=>{}       ,(o,z)  => ([mi.block(o,z),di.block(o,z)],
/*static*/      [() => ({"ds":{},"ms":{}})             ,()=>{}       ,o      => ms.block(o,statiC.default())],
/*public*/      [() => ({"dp":{},"mp":{}})             ,()=>{}       ,o      => ({"dp": o.dp, "mp":o.mp})],
                [() => ({})],
/*settings*/    [()=>{}],
/*constructor*/ [()=>{}]
//  block__constructor__   = 
];



/** //// setupOBJ is the main JSON input for claS /////
 * Everything on this page belongs here. Nowhere else.
 * Everything on this page belongs here. Nowhere else.
 * Everything on this page belongs here. Nowhere else.
 * Everything on this page belongs here. Nowhere else.
 * Everything on this page belongs here. Nowhere else.
*/

console.warn(`A distinction needs to be made between internal, static, public`);
console.warn(`A distinction needs to be made between method & data`);
const setupobj = function(){ Object.freeze(Object.assign(function(){},
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
}));
};
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const consT = Object.freeze(Object.assign(function(script){isString(script);},{
{
    
}
}));
const methods = ["mi","ms","mp","mp1","mp2","constructor"];
const datas   = ["di","ds","dp","dp1","dp2"];
const properties = [
    "name","extends","implements",/*"constructor"*/, "settings","imports","events",
     ...datas,
     ...methods
];
let tempOBJ = {};
properties.forEach((e,i)=>{
    console.log(i);
    tempOBJ[e] = {
        default:  closure_default (e),
        validate: closure_validate(e),
        block:    closure_block   (e)
    };
});
export const setupOBJ = tempOBJ;
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const closure_default   = function(){ return function(){throw new Error("unfinished");}; };
const closure_validate  = function(sel){
    let opts:any = {
        "datas":    enforce_object_datas,
        "methods":  enforce_object_methods,
        "propsss":  enforce_object_propsss,
        "nulls":    enforce_object_nulls,
    };
    if      (datas     .includes(sel)) opts = opts["datas"];
    else if (methods   .includes(sel)) opts = opts["methods"];
    else if (properties.includes(sel)) opts = opts["propsss"];
    else    (nulls     .includes(sel)) opts = opts["nulls"];
    return function(obj,val){
        hasOwnProperty(obj,val);
        opts(val);
        return true;
    };
};
const closure_block     = function(){return function(){throw new Error("unfinished");}};
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
const hasOwnProperty         = (obj,prop) => throwE("must have prop "+prop, obj.hasOwnProperty(prop));
const isNull                 = v => throwE("must be type null"    ,       v === null);
const isString               = v => throwE("must be type function",typeof v === "string");
const isFunction             = v => throwE("must be type function",typeof v === "function");
const isNotFunction          = v => throwE("must be type function",typeof v !== "function");
const isObject               = v => throwE("must be type object", !isArray(v)&&typeof v==="object");
const isArray                = v => throwE("must be type function",Array.isArray(v));
const notEmpty               = v => (isArray(v)            && throwE("must not be empty",(v.length > 0))
                                ||  (typeof v === "object" && throwE("must not be empty",(Object.keys(v).length > 0)))
                                ||  (typeof v === "string" && throwE("must not be empty",(v.length > 0)))
                                ||  (false)
);
const uhhhh = function(obj) {   
    // loopObject(obj, (obj,k)=>{ loopObject(obj.extends, k) });
    Object.keys(obj.extends).forEach(e => Object.keys(obj.extends[e]).forEach((k) => 
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
        __imports__[e.toLowerCase()] = [()=>(new r()),()=>(r),()=>{throw new Error();}]  [(isClas(r)&&1) || (isFunC(r)||isFunction(r)||isObj(r) && 2) || 0];

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


export const getMethod:funClite = {
    validate:function(methods){
        if ("get" in methods) {throw new Error();} 
    },
    block:function(__this__,__settings__:interface_settings,enuM:string){
        if (__settings__.public_gettable === true) {
            
            let obj = JSON.parse(`{"${enuM}:{}"}`); obj[enuM] = __this__[enuM];

            __this__["get"] = function(prop:string) {
                return clone(this[enuM][prop]||this[enuM])
            }.bind(obj);
        }
    }
};
export const setMethod:funClite = {
    validate:function(methods):void{
        if ("set" in methods) {throw new Error();}
    },
    block:function(__this__,__settings__:interface_settings,enuM:string):void{
        if (__settings__.public_settable === true) {

            let obj = JSON.parse(`{"${enuM}:{}"}`); obj[enuM] = __this__[enuM];

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


























