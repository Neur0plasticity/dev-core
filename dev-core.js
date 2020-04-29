
"use strict";
const HEADER = [`/**
* 
* 
* WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
* WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING  
* WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
* WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING  
* WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING  
* 
* 
* SELF MODIFYING DOCUMENT ON EVERY FILE EXECUTION
* 
* * 
* 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
* 
*/`, 
`/**
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 

        MIT LICENSE GRANTED MIT LICENSE GRANTED MIT LICENSE GRANTED MIT LICENSE GRANTED MIT LICENSE GRANTED 

   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
*/`];




const DOCSTRUCT = `
    header"
    docstruct
    errors
    attrs
    body
    xports
    buildfile
`;
const ERRORS = [R00,function (a) { exports.RS["00"] = a; },R01,function (a) { exports.RS["01"] = a; },R02,function (a) { exports.RS["02"] = a; },R03,function (a) { exports.RS["03"] = a; },R04,function (a) { exports.RS["04"] = a; },R05,function (a) { exports.RS["05"] = a; },R06,function (a) { exports.RS["06"] = a; },R07,function (a) { exports.RS["07"] = a; },R08,function (a) { exports.RS["08"] = a; },R09,function (a) { exports.RS["09"] = a; },R10,function (a) { exports.RS["10"] = a; },R11,function (a) { exports.RS["11"] = a; },R12,function (a) { exports.RS["12"] = a; },R13,function (a) { exports.RS["13"] = a; },R14,function (a) { exports.RS["14"] = a; },R15,function (a) { exports.RS["15"] = a; },SHU,function (m, a, b) { },SHD,function (m, a, b) { },B,function () { },BIC,function () { },BL,function () { },BX,function () { },CDP,function () { },CMN,function () { },CMP,function () { },EOR,function () { },LDC,function () { },LDM,function () { },LDR,function () { },MCR,function () { },MLA,function () { },MRC,function () { },MRS,function () { },MSR,function () { },MVN,function () { },ORR,function () { },RSB,function () { },RSC,function () { },SBC,function () { },STC,function () { },STM,function () { },STR,function () { },SWI,function () { },SWP,function () { },TEQ,function () { },TST,function () { },SWITCH,function () { },CASE,function () { },TRY,function () { },TRYCATCH,function () { },TRYCATCHFINALLY,function () { },GETCOMMENTS,function (func) { },GETOUTPUTTYPE,function (func) { },GETEXETYPE,function (func) { },GETSTATEMENTS,function (func) { },GETINNERMEM,function (func) { },ISEVEN,function () { },ISEVENFLOAT,function () { },ISODD,function () { },ISODDFLOAT,function () { },RANGE,function () { },HAS,function (val, sel) {
},UNFINISHED,function () { throw new Error("UNFINISHED"); },UNFINSHED0,function () { throw new Error("UNFINISHED"); },UNFINSHED1,function () { throw new Error("UNFINISHED"); },UNFINSHEDZ,function () { throw new Error("UNFINISHED"); },BUG,function () { throw new Error("BUG"); },BUG0,function () { throw new Error("BUG"); },BUGZ,function () { throw new Error("BUG"); },MAINTENANCE,function () { throw new Error("MAINTENANCE"); },MAINTENANCE0,function () { throw new Error("MAINTENANCE"); },MAINTENANCEZ,function () { throw new Error("MAINTENANCE"); },REVIEW,function () { throw new Error("REVIEW"); },REVIEW0,function () { throw new Error("REVIEW"); },REVIEWZ,function () { throw new Error("REVIEW"); },CLI,function () { },UI,function () { },CODE,function () { },ANIMATE,function () { },SAVE,function () { },LOAD,function () { },ENCRYPT,function () { },RANDOM,function () { },SHUFFLE,function () { },COMPRESS,function () {
    //https://github.com/cthackers/adm-zip
},GLOBAL,function () { },VAR,function () { },LET,function () { },CONST,function () { },RULE,function () { },PROTOCOL,function () { },FAKENATIVECODE,function (func) {
    func.toString = `function ${func.name}(){ [native code] }`;
},TYPEFALSEY,function () {
},TYPESTATE,function (v, meth) {
    // TYPEID[typeof v][]
},PROPSALTERED,function () {
},TOBINARY,function () { },TOHEX,function () { },TODEC,function () { },TOBASE,function () { },TODATATYPE,function () { },INTERFACESTRICT,function () { },INTERFACELOOSE,function () { },VALIDATE,function () { },BLOCK,function () { },SPEC,function () { },INHERITCONFIG,function (config_inherit, config_inheritor) {
    for (let k in config_inherit)
        !config_inheritor.hasOwnProperty(k) && (config_inheritor[k] = config_inherit[k]);
},CONFIGMAIN,function (config) {
    allPropsRequired: for (let k in itf_keys) {
        k = itf_keys[k];
        // console.log(k, config[k]);
        if (!config.hasOwnProperty(k)) {
            exports.THROWE(k);
        }
    }
    allPropsValidated: for (let k in itf_keys) {
        k = itf_keys[k];
        // console.log(k, config[k]);
        exports.intF[k](config[k]);
    }
},parserClass,function () {
},DATA,function () { },DATAPUBLIC,function () { },DATAPRIVATE,function () { },DATAPROTECT,function () { },DATASTATIC,function () { },DATAINTERNAL,function () { },DATAGET,function () { },DATASET,function () { },METHODSET,function (name, obj, xports, func) { },KINDA,function () {
},TO,function (val, sel) {
},CHARS,function () {
    exports.THROWE("UNFINISHED");
},TRIM,function () {
},LIST,function () {
},POPULATION,function () {
    FLOOD,
        BLAST,
        FILL,
        FLUSH;
},LOGIC,function () { },VISUAL,function () { },VOCAL,function () { },SOUND,function () { },INTERFACECLASSIFICATIONS,function () {
},CREATE,function () { },READ,function () { },UPDATE,function () { },DELETE,function () { },ATTRIBUTE,function () {
    // rules for the attributes
},SCHEMA,function () { },MODEL,function () { },CONFIG,function (config) {
    /**should be used in funC & claS */
    const o = config;
    INTERFACE(o) || o.onFailure();
    exports.VALIDATION(o) || o.onFailure();
    exports.MEMASSIGN(o) || o.onFailure();
    o.onSuccess();
},MEMASSIGN,function () {
},LOOP_FOR,function () { },LOOP_FOREVER,function () { },LOOP_WHILE,function () { },LOOP_BREAK,function () { },LOOP_CONTINUE,function () { },LOOP_EACH,function () { },LOOP_DEEP,function () { },LOOP_DEEPRECURSION,function () { },LOOP_CYCLE,function () { },LOOP_FILTER,function () { },LOOP_CHECKLIST,function () { },LOOP_INTERVAL,function () { },LOOP_WHEN,function () { },LOOP_BEFORE,function () { },LOOP_AFTER,function () { },LOOP_NONEST,function () { },LOOP_SPLIT,function () { },LOOP_MERGE,function () { },LOOP_SKIP,function () { },LOOP_PINGPONG,function (v, cbs) { },FUNCFAKEIFNULL,function () { },FUNCINDEPEDENTVALIDATION,function () { },FUNCCROSSEXAMINEVALIDATION,function () { },FUNCMEMASSIGN,function () { },FUNCCONFIGFUNC,function () {
    confiG(config);
    incConfig(config, config.name);
},FUNCCONFIG,function () { exports.S._Object.freeze(exports.S._Object.assign(confiGmain, meths)); },INPUT,function () { },OUTPUT,function () { },TEST,function () { },AUDIT,function () { },ASSERT,function () { },SHOULD,function () { },EXPECT,function () { },LOG,function () { },RESOLVE,function () { },REJECT,function () { },BEFORE,function () { },AFTER,function () { },BEFOREEACH,function () { },AFTEREACH,function () { },LAYERS,function () {
    // bottom layer: the functional layer   code density high,mostly imperative
    // top layer:    the highlevel layer    code density low, mostly english & pseudo
    // inbetween layers: programmable       code density med, mostly declarative & symbolic paradigm
},DIFFERENTIALBUILDCODING,function () { },INTUITLIST,function () { },TREES,function () { },WEB,function () { },MATRIX,function () { },STORE,function () { },FETCH,function () { },AMBIENT,function () { },SORT,function () { },QUANTIFY,function () { },SEARCH,function () { },MIDDLEWARE,function () { },API,function () { },SERVER,function () { },CLIENT,function () { },ZENDB,function () { },PROXY,function () { },CLUSTER,function () { },DHCA,function () { },SOCKET,function () { },AUTOTEMPLATER,function () { },SMARTCSS,function () { },TAPJS,function () { },COMPARTMENTALIZE,function () {
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
},PARADIGMS,function (sel) {
    throw new Error("UNFINISHED");
    exports.PARADIGMS.hasOwnProperty(sel) && exports.PARADIGMS[sel]();
},LEARNDEVCORE,function () {
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
}];




const ATTRS = {a:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
acc:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
args:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
arity:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
array:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
b:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
c:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
cache:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
cb:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
cbs:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
conditions:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
confiG:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
config:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
config_inherit:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
config_inheritor:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
d:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
defaultArgument:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
defaultValue:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
e:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
el:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
end:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
f:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
fn:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
fnOrPath:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
fns:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
funC:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
funCBlock:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
funCvalidate:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
func:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
func0props:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
g:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
getter:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
i:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
idx:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
input:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
inputArguments:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
inputs:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
iter:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
key:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
keys:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
left:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
lens:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
list:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
list1:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
list2:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
listOrString:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
m:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
max:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
maybeDate:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
maybeError:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
maybeRegex:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
memA:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
memB:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
meth:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
methodName:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
methodNames:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
n:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
name:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
obj:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
object:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
offset:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
p:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
paramsOBJ:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
pathInput:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
predicates:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
prefix:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
prop:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
props:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
right:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
sel:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
separator:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
setter:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
spec:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
start:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
suffix:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
target:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
typ:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
v:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
val:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
values:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
variables:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
x:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
xf:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},
xports};




const ADC = function (m, a, b, c) { m = a + b + c; };
const ADD = function (a, b) {
    if (arguments.length === 1)
        return _b => add(a, _b);
    return exports.S._Number(a) + exports.S._Number(b);
};
const AFTER = function () { };
const AFTEREACH = function () { };
const ALL = function (fn, list) {
    if (arguments.length === 1)
        return _list => exports.ALL(fn, _list);
    for (let i = 0; i < list.length; i++) {
        if (!fn(list[i], i))
            return false;
    }
    return true;
};
const ALLPASS = function (predicates) {
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
const ALPHA = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,Y,Z".split(",");;
const ALWAYS = function (x) {
    return () => x;
};
const AMBIENT = function () { };
const AND = function (a, b) {
    if (arguments.length === 1)
        return _b => exports.AND(a, _b);
    return a && b;
};
const ANIMATE = function () { };
const ANOARR = (v) => exports.EVERY(v, exports.ISANONYMOUS);
const ANOJSN = (v) => exports.EVERY(v, exports.ISANONYMOUS);
const ANY = function (fn, list) {
    if (arguments.length === 1)
        return _list => exports.ANY(fn, _list);
    let counter = 0;
    while (counter < list.length) {
        if (fn(list[counter], counter)) {
            return true;
        }
        counter++;
    }
    return false;
};
const ANYPASS = function (predicates) {
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
const API = function () { };
const APPEND = function (el, list) {
    if (arguments.length === 1)
        return _list => exports.APPEND(el, _list);
    if (typeof list === 'string')
        return `${list}${el}`;
    const clone = list.slice();
    clone.push(el);
    return clone;
};
const APPLYSPEC = function (spec, args) {
    const arity = exports.__FINDHIGHESTARITY(spec);
    if (arity === 0) {
        return () => ({});
    }
    const toReturn = exports.__APPLYSPECWITHARITY(spec, arity, args);
    return toReturn;
};
const ARRARR = (v) => exports.EVERY(v, exports.ISARRAY);
const ARRAY = function () { return exports.S._Array(...arguments); };
const ASSERT = function () { };
const ASSERTCOMPOUND = (f) => exports.EVERY(f.toString(), ALLTWOCASE) && exports.EVERY(f.toString(), ALLALPHA);
const ASSERTINDEPENDENCE = (f) => exports.EVERY(f.toString(), ALLSAMCASE) && exports.EVERY(f.toString(), ALLALPHA);
const ASSOC = function () {
    _curry3(function assoc(prop, val, obj) {
        var result = {};
        for (var p in obj) {
            result[p] = obj[p];
        }
        result[prop] = val;
        return result;
    });
};
const ASSOCPATH = function () {
    exports._CURRY3(function ASSOCPATH(path, val, obj) {
        if (path.length === 0) {
            return val;
        }
        var idx = path[0];
        if (path.length > 1) {
            var nextObj = (!exports.ISNIL(obj) && _HAS(idx, obj)) ? obj[idx] : exports.ISINTEGER(path[1]) ? [] : {};
            val = ASSOCPATH(exports.S._Array.prototype.slice.call(path, 1), val, nextObj);
        }
        if (exports.ISINTEGER(idx) && exports._ISARRAY(obj)) {
            var arr = [].concat(obj);
            arr[idx] = val;
            return arr;
        }
        else {
            return exports.ASSOC(idx, val, obj);
        }
    });
};
const ATTRIBUTE = function () {
    // rules for the attributes
};
const AUDIT = function () { };
const AUTOTEMPLATER = function () { };
const B = function () { };
const BASESLICE = function (array, start, end) {
    let index = -1;
    let { length } = array;
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
const BEFORE = function () { };
const BEFOREEACH = function () { };
const BIC = function () { };
const BIND = function f2(a, b) {
        switch (arguments.length) {
            case 0:
                return f2;
            case 1:
                return exports._ISPLACEHOLDER(a) ? f2
                    : exports._CURRY1(function (_b) { return fn(a, _b); });
            default:
                return exports._ISPLACEHOLDER(a) && exports._ISPLACEHOLDER(b) ? f2
                    : exports._ISPLACEHOLDER(a) ? exports._CURRY1(function (_a) { return fn(_a, b); })
                        : exports._ISPLACEHOLDER(b) ? exports._CURRY1(function (_b) { return fn(a, _b); })
                            : fn(a, b);
        }
    };
const BL = function () { };
const BLOCK = function () { };
const BOLARR = (v) => exports.EVERY(v, exports.ISBOOLEAN);
const BOLJSN = (v) => exports.EVERY(v, exports.ISBOOLEAN);
const BOOLEAN = function () { return exports.S._Boolean(...arguments); };
const BOTH = function (f, g) {
    if (arguments.length === 1)
        return _g => exports.BOTH(f, _g);
    return (input) => f(...input) && g(...input);
};
const BUG = function () { throw new Error("BUG"); };
const BUG0 = function () { throw new Error("BUG"); };
const BUGZ = function () { throw new Error("BUG"); };
const BX = function () { };
const CAPSULE = function (cb, props) {
    for (let k in props) {
        !exports.RESTRICTEDPROPS.includes(k) || exports.THROWE();
    }
    return exports.S._Object.freeze(exports.S._Object.assign(cb, props));
};
const CASE = function () { };
const CDP = function () { };
const CHARS = function () {
    exports.THROWE("UNFINISHED");
};
const CLASS = function () { return Class(...arguments); };
const CLI = function () { };
const CLIENT = function () { };
const CLOSURE = function (cb, variables) {
    /** Mock Representation ... real version needs to parse cb and variables,
     *
     * then replace real values in placheholders.
     *
     *
    */
    return cb.bind(v);
};
const CLUSTER = function () { };
const CMN = function () { };
const CMP = function () { };
const CODE = function () { };
const CODEDECONSTRUCTOR = function (inputs) {
    // codeparser     // converts findings into json jstructures
    // deconstruct    // strips code apart into distinct properties; procedures not needed
    // quantifier     // converts findings into numbers
    // procedureprint // converts unarranged distincts into executable code
    let props = {};
    let funcs = {};
    let dry = {};
    let found = [];
    let k = "";
    let j = "";
    const CODEPARSER = (function (inputs) {
    })(inputs);
    const DESCONSTRUCT = (function (inputs) {
        inputs.forEach(e => {
            for (let k in e) {
                if (!props.hasOwnProperty(k))
                    props[k] = [];
                if (!funcs.hasOwnProperty(k))
                    props[k] = [];
                props[k].push(e[k]);
            }
        });
    })(inputs);
    const QUANTIFIER = (function (inputs) {
        for (let k in props) {
            for (let j in props[k]) {
                if (!found.includes(props[k][j])) {
                    found.push(props[k][j]);
                }
            }
            dry[k] = found;
            found = [];
        }
    });
    const PROCEDUREPRINT = (function (inputs) {
    })(inputs);
    // console.log(props);
    // console.log(dry);
};
const COMPARTMENTALIZE = function () {
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
const COMPLEMENT = function (fn) {
    return (input) => !fn(...input);
};
const COMPOSE = function (fns) {
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
const COMPRESS = function () {
    //https://github.com/cthackers/adm-zip
};
const CONCAT = function (left, right) {
    if (arguments.length === 1)
        return _right => exports.CONCAT(left, _right);
    return typeof left === 'string' ? `${left}${right}` : [...left, ...right];
};
const COND = function (conditions) {
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
const CONFIG = function (config) {
    /**should be used in funC & claS */
    const o = config;
    INTERFACE(o) || o.onFailure();
    exports.VALIDATION(o) || o.onFailure();
    exports.MEMASSIGN(o) || o.onFailure();
    o.onSuccess();
};
const CONFIGMAIN = function (config) {
    allPropsRequired: for (let k in itf_keys) {
        k = itf_keys[k];
        // console.log(k, config[k]);
        if (!config.hasOwnProperty(k)) {
            exports.THROWE(k);
        }
    }
    allPropsValidated: for (let k in itf_keys) {
        k = itf_keys[k];
        // console.log(k, config[k]);
        exports.intF[k](config[k]);
    }
};
const CONST = function () { };
const CREATE = function () { };
const CURRY = function (fn, args) {
    if (!args)
        args = [];
    return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : exports.CURRY(fn, rest))([...args, ..._args]);
};
const Const = (x) => ({
    x,
    map: fn => exports.Const(x)
});
const DATA = function () { };
const DATAGET = function () { };
const DATAINTERNAL = function () { };
const DATAPRIVATE = function () { };
const DATAPROTECT = function () { };
const DATAPUBLIC = function () { };
const DATASET = function () { };
const DATASTATIC = function () { };
const DATATYPES = "boolean,string,number,object,array,symbol,function,set".split(",");;
const DEC = function (n) { return n - 1; };
const DEFAULTTO = function (defaultArgument, inputArguments) {
    if (arguments.length === 1) {
        return _inputArguments => exports.DEFAULTTO(defaultArgument, _inputArguments);
    }
    else if (arguments.length === 2) {
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
        }
        else if (FLAGIS(instance)) {
            len -= 1;
        }
        else {
            holder = instance;
            ready = true;
        }
    }
    return holder === undefined ? defaultArgument : holder;
};
const DELETE = function () { };
const DELETEPROPKEY = function (obj, prop) { return delete obj[prop]; };
const DELETEPROPVALUE = function (obj, prop) { return obj[prop] = undefined; };
const DHCA = function () { };
const DIFFERENCE = function (list1, list2) {
    if (arguments.length === 1)
        return _list => exports.DIFFERENCE(list1, _list);
    return exports.UNIQ(list1).filter(x1 => !exports.INCLUDES(x1, list2));
};
const DIFFERENTIALBUILDCODING = function () { };
const DISSOC = function (prop, obj) {
    if (arguments.length === 1)
        return _obj => exports.DISSOC(prop, _obj);
    if (obj === null || obj === undefined)
        return {};
    const willReturn = {};
    for (const p in obj) {
        willReturn[p] = obj[p];
    }
    delete willReturn[prop];
    return willReturn;
};
const DIV = function (m, a, b) { m = a / b; };
const DROP = function (n, listOrString) {
    if (arguments.length === 1)
        return _list => exports.DROP(n, _list);
    return listOrString.slice(n > 0 ? n : 0);
};
const DROPLAST = function (n, list) {
    if (arguments.length === 1)
        return _list => exports.DROPLAST(n, _list);
    return n > 0 ? list.slice(0, -n) : list.slice();
};
const DTYPE = function (typ, sel, val) {
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
        return DType[typ](sel, val);
};
const EEQ = function (m, a, b) { m = a === b; };
const EITHER = function (f, g) {
    if (arguments.length === 1)
        return _g => exports.EITHER(f, _g);
    return (input) => f(...input) || g(...input);
};
const ENCRYPT = function () { };
const ENDSWITH = function (suffix, list) {
    if (arguments.length === 1)
        return _list => exports.ENDSWITH(suffix, _list);
    return list.endsWith(suffix);
};
const EOR = function () { };
const EQUALS = function (a, b) {
    if (arguments.length === 1)
        return _b => exports.EQUALS(a, _b);
    const aType = exports.DTYPE(a);
    if (aType !== exports.DTYPE(b))
        return false;
    if (['NaN', 'Undefined', 'Null'].includes(aType))
        return true;
    if (['Boolean', 'Number', 'String'].includes(aType))
        return a.toString() === b.toString();
    if (aType === 'Array') {
        const aClone = exports.S._Array.from(a);
        const bClone = exports.S._Array.from(b);
        if (aClone.toString() !== bClone.toString()) {
            return false;
        }
        let loopArrayFlag = true;
        aClone.forEach((aCloneInstance, aCloneIndex) => {
            if (loopArrayFlag) {
                if (aCloneInstance !== bClone[aCloneIndex] && !exports.EQUALS(aCloneInstance, bClone[aCloneIndex])) {
                    loopArrayFlag = false;
                }
            }
        });
        return loopArrayFlag;
    }
    const aRegex = exports.PARSEREGEX(a);
    const bRegex = exports.PARSEREGEX(b);
    if (aRegex[0]) {
        return bRegex[0] ? aRegex[1] === bRegex[1] : false;
    }
    else if (bRegex[0])
        return false;
    const aDate = exports.PARSEDATE(a);
    const bDate = exports.PARSEDATE(b);
    if (aDate[0]) {
        return bDate[0] ? aDate[1] === bDate[1] : false;
    }
    else if (bDate[0])
        return false;
    const aError = parseError(a);
    const bError = parseError(b);
    if (aError[0]) {
        return bError[0] ? aError[0] === bError[0] && aError[1] === bError[1] : false;
    }
    if (aType === 'Object') {
        const aKeys = exports.S._Object.keys(a);
        if (aKeys.length !== exports.S._Object.keys(b).length) {
            return false;
        }
        let loopObjectFlag = true;
        aKeys.forEach(aKeyInstance => {
            if (loopObjectFlag) {
                const aValue = a[aKeyInstance];
                const bValue = b[aKeyInstance];
                if (aValue !== bValue && !exports.EQUALS(aValue, bValue)) {
                    loopObjectFlag = false;
                }
            }
        });
        return loopObjectFlag;
    }
    return false;
};
const ESSENTIAL = function () {
    throw new Error("UNFINISHED");
    return {
        /*const*/ COLLECTIONS: exports.CAPSULE(function () {
        }, {}),
        /*const*/ LISTS: exports.CAPSULE(function () {
        }, {}),
        /*const*/ FUNCTIONS: exports.CAPSULE(function () {
        }),
        /*const*/ MATHS: exports.CAPSULE(function () {
        }, {}),
        /*const*/ RELATIONS: exports.CAPSULE(function () {
        }, {}),
        /*const*/ LOGICS: exports.CAPSULE(function () {
        }, {}),
    };
};
const EVERY = function (v, cb) {
    if (typeof v === "string") {
        for (let k in v) {
            if (!cb(v[k]))
                return false;
        }
        ;
        return true;
    }
    else if (exports.S._Array.isArray(v)) {
        return v.every(cb);
    }
    else if (typeof v === "object") {
        for (let k in v) {
            if (!cb(v[k]))
                return false;
        }
        return true;
    }
    else if (typeof v === "symbol") {
        throw new Error("UNFINISHED");
    }
    else {
        throw new Error();
    }
};
const EXPECT = function () { };
const F = function () {
    return false;
};
const FAKENATIVECODE = function (func) {
    func.toString = `function ${func.name}(){ [native code] }`;
};
const FETCH = function () { };
const FILTER = function () {
    exports._CURRY2(exports._DISPATCHABLE(['filter'], _XFILTER, function (pred, filterable) {
        return (exports._ISOBJECT(filterable) ?
            exports._REDUCE(function (acc, key) {
                if (PRED(filterable[key])) {
                    acc[key] = filterable[key];
                }
                return acc;
            }, {}, exports.KEYS(filterable)) :
            // else
            exports._FILTER(pred, filterable));
    }));
};
const FIND = function (fn, list) {
    if (arguments.length === 1)
        return _list => exports.FIND(fn, _list);
    return list.find(fn);
};
const FINDDEADCODE = function (obj) {
    /** not the best solution to finding deadcode, just pulls most of the weeds out of the grass*/
    /*  find dead code
        * returns nothing
        * does not modify inputs
        * does not modify externally referenced code
    */
    let deadcode = [];
    let throws = [];
    let params = [];
    // let refargs   = [];
    // let returnV   = undefined;
    for (let k in obj) {
        if (typeof obj[k] === "function") {
            try {
                if ([
                    `function ${k}(){}`,
                    `function ${k}(){ }`,
                    `function ${k}(){  }`,
                    `function ${k}(){   }`,
                    `function ${k}(){    }`,
                    `function ${k}(){     }`,
                    `function ${k}(){      }`,
                    `function ${k}(){       }`,
                    `function ${k}(){        }`,
                ].includes(obj[k].toString().trim()))
                    deadcode.push([k, obj[k]]);
                else if ([
                    `function ${k}() {}`,
                    `function ${k}() { }`,
                    `function ${k}() {  }`,
                    `function ${k}() {   }`,
                    `function ${k}() {    }`,
                    `function ${k}() {     }`,
                    `function ${k}() {      }`,
                    `function ${k}() {       }`,
                    `function ${k}() {        }`,
                ].includes(obj[k].toString().trim()))
                    deadcode.push([k, obj[k]]);
                else if (([
                    `()=>()`,
                    `()=>( )`,
                    `()=>(  )`,
                    `()=>(   )`,
                    `()=>(    )`,
                    `()=>(     )`,
                    `()=>{}`,
                    `()=>{ }`,
                    `()=>{  }`,
                    `()=>{   }`,
                    `()=>{    }`,
                    `()=>{     }`,
                    `()=>{      }`,
                    `()=>{       }`,
                    `()=>{        }`,
                ].includes(obj[k].toString().trim())))
                    deadcode.push([k, obj[k]]);
                else if ([
                    `function ${k}(){return ;}`,
                    `function ${k}() {return ;}`
                ].includes(obj[k].toString().trim()))
                    deadcode.push([k, obj[k]]);
                else {
                    if (exports.ISLAMBDA(obj[k])) { } //notdeadcode
                    else if (obj[k].toString().includes("return")) { } //notdeadcode
                    else if (obj[k].toString().includes("arguments")) { } //kinda not dead code
                    else if (obj[k].toString().includes("this")) { } //notdeadcode because this is auto returned if no return statement
                    else {
                        params = exports.GETPARAMS(obj[k]);
                        let found = false;
                        for (let j in params) {
                            if (obj[k].toString().includes(`${params[j]} = `)) {
                                found = true;
                                break;
                            }
                        }
                        if (!found)
                            deadcode.push([k, obj[k]]);
                    }
                }
            }
            catch (e) {
                throws.push(e);
            }
        }
    }
    // if (throws.length !== 0)    console.log("throws",throws);
    // if (deadcode.length !== 0)  console.log("deadcode",deadcode);
    return { throws, deadcode };
};
const FINDINDEX = function (fn, list) {
    if (arguments.length === 1)
        return _list => exports.FINDINDEX(fn, _list);
    const len = list.length;
    let index = -1;
    while (++index < len) {
        if (fn(list[index], index)) {
            return index;
        }
    }
    return -1;
};
const FLATTEN = function (list, input) {
    const willReturn = input === undefined ? [] : input;
    for (let i = 0; i < list.length; i++) {
        if (exports.S._Array.isArray(list[i])) {
            exports.FLATTEN(list[i], willReturn);
        }
        else {
            willReturn.push(list[i]);
        }
    }
    return willReturn;
};
const FLI = function (m, a) { m = ~a; };
const FLIP = function (fn) {
    return exports.FLIPEXPORT(fn);
};
const FLIPEXPORT = function (fn) {
    return (input) => {
        if (input.length === 1) {
            return holder => fn(holder, input[0]);
        }
        else if (input.length === 2) {
            return fn(input[1], input[0]);
        }
        return undefined;
    };
};
const FNCARR = (v) => exports.EVERY(v, exports.ISFUNCTION);
const FNCJSN = (v) => exports.EVERY(v, exports.ISFUNCTION);
const FORBIDDEN_OBJECT_PROPS = "".split(",");;
const FOREACH = function (fn, list) {
    if (arguments.length === 1)
        return _list => exports.FOREACH(fn, _list);
    map(fn, list);
    return list;
};
const FROMPAIRS = function (list) {
    const toReturn = {};
    list.forEach(([prop, value]) => toReturn[prop] = value);
    return toReturn;
};
const FUNC = function (config) {
    const M = exports.MEM({
        gConfig: exports.gConfig,
        FInstances: exports.FInstances,
        configs: exports.configs,
        funcs: exports.funcs,
        intF: exports.intF,
        intF_keys: exports.intF_keys
    });
    exports.CONFIG(config, exports.FUNCINTERFACE, FUNCINDEPENDENTVALIDATION, exports.FUNCCROSSEXAMINEVALIDATION, exports.FUNCMEMASSIGN);
    return exports.FUNCTRETURN(config);
};
const FUNC0BLOCK = function (func0props) {
    return exports.CAPSULE(function () {
        funC0validate(func0props.block, func0props.validate(arguments));
        return func0props.block(...arguments);
    }, func0props);
};
const FUNC0VALIDATE = function (funCBlock, funCvalidate) {
    if (typeof funCBlock !== "function") {
        exports.THROWE();
    }
    if (typeof funCvalidate !== "function") {
        exports.THROWE();
    }
    const _params = getParams(funCBlock);
    return function () {
        return _params.every((e, i) => {
            return pS[e](arguments[i]);
        }) && funCvalidate(arguments);
    };
};
const FUNCASSIGNINTERFACE = function (config, name) { return instances[name] = config; };
const FUNCCONFIG = function () { exports.S._Object.freeze(exports.S._Object.assign(confiGmain, meths)); };
const FUNCCONFIGFUNC = function () {
    confiG(config);
    incConfig(config, config.name);
};
const FUNCCONFIGGLOBAL = function () {
    loopInterface(config);
    confiG(config);
    exports.gConfig = config;
    exports.configs["global"] = exports.gConfig;
    return pm;
};
const FUNCCONFIGINSTANCE = function () {
    if (!name) {
        exports.THROWE();
    }
    if (name && config) {
        if (instances[name]) {
            exports.THROWE("no duplicates allowed");
        }
        exports.gConfig = exports.S._Object.assign({}, exports.gConfig);
        inheritConfig(exports.gConfig, config);
        loopInterface(config);
        confiG(config);
        assignInstance(config, name);
        incConfig(config, name);
    }
    else if (name) {
        assignInstance(config, name) || (() => { exports.THROWE(); })();
    }
    else {
        exports.THROWE();
        s;
    }
    return { funC: func.bind({ config: config }) };
};
const FUNCCROSSEXAMINEVALIDATION = function () { };
const FUNCFAKEIFNULL = function () { };
const FUNCINCCONFIG = function () {
    name = name || exports.THROWE();
    exports.configs[name] = config;
};
const FUNCINDEPEDENTVALIDATION = function () { };
const FUNCINTERFACE = function (config) {
    let obj = config;
    const d = ["arguments", "console", "return", "callback", "onError/onSuccess", "onTrue/onFalse", "throw"];
    ["name", "description", "author"].forEach((e) => { obj[e] = standardString(e); });
    ["notes", "params"].forEach((e) => { obj[e] = standardStringArray(e); });
    ["isStrict", "isAsync", "isThis", "isCapsule"].forEach((e) => { obj[e] = standardBoolean(e); });
    ["inputType", "outputType"].forEach((e) => { obj[e] = arrayIncludes(datatypes); });
    ["inputBehavior"].forEach((e) => { obj[e] = arrayIncludes([d[0], d[1]]); });
    ["outputBehavior"].forEach((e) => { obj[e] = arrayIncludes([d[1], d[2], d[3], d[4], d[5]]); });
    ["onError"].forEach((e) => { obj[e] = arrayIncludes([d[6]]); });
    ["validations", "block", "spec"].forEach((e) => { obj[e] = vFunction; });
    return true;
};
const FUNCLOOPINTERFACE = function (config) { exports.S._Object.keys(fakeIfNull).forEach(e => { fakeIfNull[e](config); }); };
const FUNCMEMASSIGN = function () { };
const FUNCMETHS = function () {
    return {
        global: exports.FUNCCONFIGGLOBAL,
        instance: exports.FUNCCONFIGINSTANCE,
        funC: exports.FUNCCONFIGFUNC
    };
};
const FUNCTEMPLATE = function () {
    if (typeof this.config === "object") {
        inheritConfig(this.config, config);
    }
    confiG.funC(config);
    let c = config;
    templatefunction: {
        const strict = c.isStrict ? '"use strict";' : "";
        const async = c.isAsync ? 'async ' : '';
        const _this = c.isThis ? (`${async}function ${name}(${params}) `) : (`const ${name} = ${async}(${params}) => `);
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
        //console.log(cb); 
        return new Function(params, `${cb}`);
    }
};
const FUNCTION = function () { return exports.S._Function(...arguments); };
const FUNCTRETURN = function (confiG) {
    return Object.freeze({
        globalConfig: exports.FUNCCONFIGGLOBAL,
        instance: exports.FUNCCONFIGINSTANCE,
        funC: exports.FUNCTEMPLATE
    });
};
const GETCOMMENTS = function (func) { };
const GETEXETYPE = function (func) { };
const GETINNERMEM = function (func) { };
const GETINPUTTYPE = function (func) {
    // uses the attributes information
    let ps = exports.GETPARAMS(func);
    let IPT = [];
    for (let k in ps) {
        IPT.push({
            param: new String(ps[k]),
            types: new Array(ATTRS[ps[k]].types)
        });
    }
    return IPT;
};
const GETNAME = function (func) {
    return func.hasOwnPropert("name") && new String(func.name);
};
const GETOUTPUTTYPE = function (func) { };
const GETPARAMS = function (func) {
    /**
     * supports lamdbdas with params,
     * why? It's redundant to support unneeded syntaxes
     */
    let s = func.toString().trimLeft();
    let start = s.indexOf("(");
    let end = s.indexOf(")");
    return func.toString().slice(start + 1, end).split(",") || [];
};
const GETSTATEMENTS = function (func) { };
const GLOBAL = function () { };
const GROUPBY = function (fn, list) {
    if (arguments.length === 1)
        return _list => exports.GROUPBY(fn, _list);
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
const GROUPWITH = function f2(a, b) {
        switch (arguments.length) {
            case 0:
                return f2;
            case 1:
                return exports._ISPLACEHOLDER(a) ? f2
                    : exports._CURRY1(function (_b) { return fn(a, _b); });
            default:
                return exports._ISPLACEHOLDER(a) && exports._ISPLACEHOLDER(b) ? f2
                    : exports._ISPLACEHOLDER(a) ? exports._CURRY1(function (_a) { return fn(_a, b); })
                        : exports._ISPLACEHOLDER(b) ? exports._CURRY1(function (_b) { return fn(a, _b); })
                            : fn(a, b);
        }
    };
const GTE = function (m, a, b) { m = a >= b; };
const GTT = function (m, a, b) { m = a > b; };
const HAS = function (val, sel) {
};
const HASPROPERTY = (obj, prop) => exports.THROWE("must have prop " + prop, obj.hasOwnProperty(prop));
const HEAD = function (list) {
    if (typeof list === 'string')
        return list[0] || '';
    return list[0];
};
const IDENTICAL = function (a, b) {
    if (arguments.length === 1)
        return _b => exports.IDENTICAL(a, _b);
    return _OBJECTIS$1(a, b);
};
const IDENTITY = function (x) {
    return x;
};
const IF0 = function () { if (c0)
    return cb0(); };
const IF1 = function () { if (c0)
    return cb0();
else
    return cb1(); };
const IF2 = function () { if (c0)
    return cb0();
else if (c1)
    return cb1();
else
    return cb2(); };
const IFZ = function () {
    if (c0)
        return cb0();
    else {
        for (let k in arr)
            if (arr[k][0])
                return arr[k][1]();
    }
};
const INC = function (n) { return n + 1; };
const INCLUDES = function (target, list) {
    if (arguments.length === 1)
        return _input => exports.INCLUDES(target, _input);
    if (typeof list === 'string') {
        return list.includes(target);
    }
    if (!exports.S._Array.isArray(list))
        return false;
    let index = -1;
    while (++index < list.length) {
        if (equals(list[index], target)) {
            return true;
        }
    }
    return false;
};
const INDEXBY = function (fnOrPath, list) {
    if (arguments.length === 1) {
        return _list => exports.INDEXBY(fnOrPath, _list);
    }
    if (typeof fnOrPath === 'string') {
        return exports.INDEXBYPATH(fnOrPath, list);
    }
    const toReturn = {};
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        toReturn[fnOrPath(item)] = item;
    }
    return toReturn;
};
const INDEXBYPATH = function (pathInput, list) {
    const toReturn = {};
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        toReturn[exports.PATH(pathInput, item)] = item;
    }
    return toReturn;
};
const INDEXOF = function (target, list) {
    if (arguments.length === 1)
        return _list => exports.INDEXOF(target, _list);
    let index = -1;
    const { length } = list;
    while (++index < length) {
        if (list[index] === target) {
            return index;
        }
    }
    return -1;
};
const INHERITCONFIG = function (config_inherit, config_inheritor) {
    for (let k in config_inherit)
        !config_inheritor.hasOwnProperty(k) && (config_inheritor[k] = config_inherit[k]);
};
const INIT = function (list) {
    if (typeof list === 'string')
        return list.slice(0, -1);
    return list.length ? exports.BASESLICE(list, 0, -1) : [];
};
const INPUT = function () { };
const INTERFACECLASSIFICATIONS = function () {
};
const INTERFACELOOSE = function () { };
const INTERFACESTRICT = function () { };
const INTERSECTION = function (list1, list2) {
    if (arguments.length === 1)
        return _list => exports.INTERSECTION(list1, _list);
    return exports.FILTER(value => exports.INCLUDES(value, list2), list1);
};
const INTERSPERSE = function (separator, list) {
    if (arguments.length === 1)
        return _list => exports.INTERSPERSE(separator, _list);
    let index = -1;
    const len = list.length;
    const willReturn = [];
    while (++index < len) {
        if (index === len - 1) {
            willReturn.push(list[index]);
        }
        else {
            willReturn.push(list[index], separator);
        }
    }
    return willReturn;
};
const INTUITLIST = function () { };
const IS = function (sel, val) {
    return exports.CLISTS.hasOwnProperty(sel) && exports.INCLUDES(val, exports.CLISTS[sel]);
};
const ISALPHA = (v) => [...exports.LOWERCASE, ...exports.UPPERCASE].includes(v);
const ISANONYMOUS = (v) => exports.ISFUNCTION(v) && !exports.ISLAMBDA(v) && v["name"] === undefined;
const ISARRAY = (v) => exports.S._Array.isArray(v);
const ISBOOLEAN = (v) => typeof v === "boolean";
const ISCLASS = (v) => { throw new Error("UNFINISHED"); };
const ISDIVISIBLE = function (n, d) { return n % d === 0; };
const ISEMPTY = function (v) {
    return {
        "str": v => v.length === 0, "obj": v => exports.S._Object.keys(v).length === 0,
        "arr": v => v.length === 0, "fnc": (v) => v.toString()
    }[(exports.S._Array.isArray(v) && "arr") || (typeof v)](v);
};
const ISEVEN = function () { };
const ISEVENFLOAT = function () { };
const ISEVENINTEGER = function (v) { return (v & 1) ^ 1; };
const ISFALSE = (v) => v === false;
const ISFINITE = (v) => exports.S._isFinite(v);
const ISFLOAT = (v) => exports.S._String(v).includes(".");
const ISFUNC = (v) => exports.ISFUNCTION(v) && !exports.ISLAMBDA(v) && v.hasOwnProperty("name");
const ISFUNCTION = (v) => typeof v === "function";
const ISINFINITY = (v) => v === Infinity;
const ISINTEGER = (v) => (v << 0) === v;
const ISINTEGER$1 = (v) => (v << 0) === v;
const ISJSON = (v) => typeof v === "object" && !exports.S._Array.isArray(v);
const ISLAMBDA = (v) => exports.ISFUNCTION(v) && v.toString().includes("=>");
const ISLOWERCASE = (v) => exports.LOWERCASE.includes(v);
const ISMAXSAFEVALUE = (v) => v === exports.S._Number.MAX_SAFE_INTEGER;
const ISMAXVALUE = (v) => v === exports.S._Number.MAX_VALUE;
const ISMINSAFEVALUE = (v) => v === exports.S._Number.MIN_SAFE_INTEGER;
const ISMINVALUE = (v) => v === exports.S._Number.MAX_VALUE;
const ISNAN = (v) => exports.S._isNaN(v);
const ISNEGATIVE = (v) => 0 > v;
const ISNEWABLE = (v) => { throw new Error("UNFINISHED"); };
const ISNIL = function (x) {
    return x === undefined || x === null;
};
const ISNOTALPHA = (v) => !exports.ISALPHA(v);
const ISNOTANONYMOUS = (v) => !exports.ISANONYMOUS(v);
const ISNOTARRAY = (v) => !exports.ISARRAY(v);
const ISNOTBOOLEAN = (v) => !exports.ISBOOLEAN(v);
const ISNOTCLASS = (v) => !exports.ISCLASS(v);
const ISNOTEMPTY = (v) => {
    return {
        "str": v => v.length !== 0, "obj": v => exports.S._Object.keys(v).length !== 0,
        "arr": v => v.length !== 0, "fnc": v => v.toString()
    }[(exports.S._Array.isArray(v) && "arr") || (typeof v)](v);
};
const ISNOTFALSE = (v) => !exports.ISSAFE(v);
const ISNOTFINITE = (v) => !exports.ISFINITE(v);
const ISNOTFLOAT = (v) => !exports.ISFLOAT(v);
const ISNOTFUNC = (v) => !exports.ISFUNC(v);
const ISNOTFUNCTION = (v) => !exports.ISFUNCTION(v);
const ISNOTINFINITY = (v) => !exports.ISINFINITY(v);
const ISNOTINTEGER = (v) => !exports.ISINTEGER(v);
const ISNOTJSON = (v) => !exports.ISJSON(v);
const ISNOTLAMBDA = (v) => !exports.ISLAMBDA(v);
const ISNOTLOWERCASE = (v) => !exports.ISLOWERCASE(v);
const ISNOTMAXSAFEVALUE = (v) => !exports.ISMAXSAFEVALUE(v);
const ISNOTMAXVALUE = (v) => !exports.ISMAXVALUE(v);
const ISNOTMINSAFEVALUE = (v) => !exports.ISMINSAFEVALUE(v);
const ISNOTMINVALUE = (v) => !exports.ISMINVALUE(v);
const ISNOTNAN = (v) => !exports.ISNAN(v);
const ISNOTNEGATIVE = (v) => !exports.ISNEGATIVE(v);
const ISNOTNULL = (v) => !exports.ISNULL(v);
const ISNOTNUMBER = (v) => !exports.ISNUMBER(v);
const ISNOTOBJECT = (v) => !exports.ISOBJECT(v);
const ISNOTPOSITIVE = (v) => !exports.ISPOSITIVE(v);
const ISNOTSAFE = (v) => !exports.ISSAFE(v);
const ISNOTSTRING = (v) => !exports.ISSTRING(v);
const ISNOTSYMBOL = (v) => !exports.ISSYMBOL(v);
const ISNOTTHIS = (v) => !exports.ISTHIS(v);
const ISNOTTRUE = (v) => !exports.ISTRUE(v);
const ISNOTUNDEFINED = (v) => !exports.ISUNDEFINED(v);
const ISNOTUPPERCASE = (v) => !exports.ISUPPERCASE(v);
const ISNOTZERO = (v) => !exports.ISZERO(v);
const ISNULL = (v) => v === "null";
const ISNUMBER = (v) => typeof v === "number";
const ISOBJECT = (v) => typeof v === "object";
const ISODD = function () { };
const ISODDFLOAT = function () { };
const ISODDINTEGER = function (v) { return (v & 1) ^ 0; };
const ISPOSITIVE = (v) => 0 < v;
const ISSAFE = (v) => exports.S._Number.isSafeInteger(v);
const ISSTRING = (v) => typeof v === "string";
const ISSYMBOL = (v) => typeof v === "symbol";
const ISTHIS = (v) => v.toString().includes("function ");
const ISTRUE = (v) => v === true;
const ISUNDEFINED = (v) => v === undefined;
const ISUPPERCASE = (v) => exports.UPPERCASE.includes(v);
const ISZERO = (v) => v === 0;
const JOIN = function (separator, list) {
    if (arguments.length === 1)
        return _list => exports.JOIN(separator, _list);
    return list.join(separator);
};
const JSNARR = (v) => exports.EVERY(v, exports.ISJSON);
const JSNJSN = (v) => exports.EVERY(v, exports.ISJSON);
const KEYS = function (v) {
    return exports.S._Object.keys(v);
};
const KINDA = function () {
};
const LAMBDA = function () { return Lambda(...arguments); };
const LAST = function (list) {
    if (typeof list === 'string')
        return list[list.length - 1] || '';
    return list[list.length - 1];
};
const LASTINDEXOF = function (target, list) {
    if (arguments.length === 1)
        return _list => exports.LASTINDEXOF(target, _list);
    let index = list.length;
    while (--index > 0) {
        if (exports.EQUALS(list[index], target)) {
            return index;
        }
    }
    return -1;
};
const LAYERS = function () {
    // bottom layer: the functional layer   code density high,mostly imperative
    // top layer:    the highlevel layer    code density low, mostly english & pseudo
    // inbetween layers: programmable       code density med, mostly declarative & symbolic paradigm
};
const LDC = function () { };
const LDM = function () { };
const LDR = function () { };
const LEARNDEVCORE = function () {
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
const LENS = function (getter, setter) {
    if (arguments.length === 1)
        return _setter => lens(getter, _setter);
    return function (functor) {
        return function (target) {
            return FUNCTO(GETTER(target)).map(focus => SETTER(focus, target));
        };
    };
};
const LENSINDEX = function (i) {
    return exports.LENS(nth(i), exports.UPDATE(i));
};
const LENSPATH = function (key) {
    return lens(path(key), assocPath(key));
};
const LENSPROP = function (key) {
    return exports.LENS(prop(key), exports.ASSOC(key));
};
const LET = function () { };
const LIST = function () {
};
const LOAD = function () { };
const LOG = function () { };
const LOGIC = function () { };
const LOOP_AFTER = function () { };
const LOOP_BEFORE = function () { };
const LOOP_BREAK = function () { };
const LOOP_CHECKLIST = function () { };
const LOOP_CONTINUE = function () { };
const LOOP_CYCLE = function () { };
const LOOP_DEEP = function () { };
const LOOP_DEEPRECURSION = function () { };
const LOOP_EACH = function () { };
const LOOP_FILTER = function () { };
const LOOP_FOR = function () { };
const LOOP_FOREVER = function () { };
const LOOP_INTERVAL = function () { };
const LOOP_MERGE = function () { };
const LOOP_NONEST = function () { };
const LOOP_PINGPONG = function (v, cbs) { };
const LOOP_SKIP = function () { };
const LOOP_SPLIT = function () { };
const LOOP_WHEN = function () { };
const LOOP_WHILE = function () { };
const LOWERCASE = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,y,z".split(",");;
const LTE = function (m, a, b) { m = a <= b; };
const LTT = function (m, a, b) { m = a < b; };
const MAINTENANCE = function () { throw new Error("MAINTENANCE"); };
const MAINTENANCE0 = function () { throw new Error("MAINTENANCE"); };
const MAINTENANCEZ = function () { throw new Error("MAINTENANCE"); };
const MAP = function (fn, list) {
    if (arguments.length === 1)
        return _list => exports.MAP(fn, _list);
    if (list === undefined) {
        return [];
    }
    if (!exports.S._Array.isArray(list)) {
        return exports.MAPOBJECT(fn, list);
    }
    let index = -1;
    const len = list.length;
    const willReturn = exports.S._Array(len);
    while (++index < len) {
        willReturn[index] = fn(list[index], index);
    }
    return willReturn;
};
const MAPOBJECT = function (fn, obj) {
    const willReturn = {};
    for (const prop in obj) {
        willReturn[prop] = fn(obj[prop], prop, obj);
    }
    return willReturn;
};
const MATHMOD = function (m, p) {
    if (arguments.length === 1)
        return _p => exports.MATHMOD(m, _p);
    if (!exports.ISINTEGER$1(m) || !exports.ISINTEGER$1(p) || p < 1)
        return NaN;
    return (m % p + p) % p;
};
const MATRIX = function () { };
const MAX = function (a, b) {
    if (arguments.length === 1)
        return _b => exports.MAX(a, _b);
    return b > a ? b : a;
};
const MAXBy = function (fn, a, b) {
    if (arguments.length === 2) {
        return _b => exports.MAXBy(fn, a, _b);
    }
    else if (arguments.length === 1) {
        return (_a, _b) => exports.MAXBy(fn, _a, _b);
    }
    return fn(b) > fn(a) ? b : a;
};
const MCR = function () { };
const MEAN = function (list) {
    return exports.SUM(list) / list.length;
};
const MEDIAN = function (list) {
    const len = list.length;
    if (len === 0)
        return NaN;
    const width = 2 - len % 2;
    const idx = (len - width) / 2;
    return exports.MEAN(exports.S._Array.prototype.slice.call(list, 0).sort((a, b) => {
        if (a === b)
            return 0;
        return a < b ? -1 : 1;
    }).slice(idx, idx + width));
};
const MEMASSIGN = function () {
};
const MERGE = function (obj, props) {
    if (arguments.length === 1)
        return _props => exports.MERGE(obj, _props);
    return exports.S._Object.assign({}, obj || {}, props || {});
};
const METHOD = function (func, sel) {
    return func.toString().includes("this") && exports.CLOSURE(func, this);
};
const METHODGET = function (name, obj, xports, func) {
    xports.internal = exports.METHOD(func);
    return obj["mi"][name] = exports.METHOD(func || function (prop) {
        return;
    }.bind(obj));
};
const METHODINTERNAL = function (name, obj, xports, func) {
    xports.internal = exports.METHOD(func);
    return obj["mi"][name] = exports.METHOD(func).bind(obj);
};
const METHODPRIVATE = function (name, obj, xports, func) {
    xports.private = exports.METHOD(func);
    return obj["mp"][name] = exports.METHOD(func).bind(obj);
};
const METHODPROTECT = function (name, obj, xports, func) {
    xports.protect = exports.METHOD(func);
    return obj["mp"][name] = exports.METHOD(func).bind(obj);
};
const METHODPUBLIC = function (name, obj, xports, func) {
    xports.global = exports.METHOD(func);
    return obj["mp"][name] = exports.METHOD(func).bind(obj);
};
const METHODSET = function (name, obj, xports, func) { };
const METHODSTATIC = function (name, obj, xports, func) {
    xports.static = exports.METHOD(func);
    return obj["ms"][name] = exports.METHOD(func).bind(obj);
};
const MIDDLEWARE = function () { };
const MIN = function (a, b) {
    if (arguments.length === 1)
        return _b => exports.MIN(a, _b);
    return b < a ? b : a;
};
const MINBY = function (fn, a, b) {
    if (arguments.length === 2) {
        return _b => minBy(fn, a, _b);
    }
    else if (arguments.length === 1) {
        return (_a, _b) => minBy(fn, _a, _b);
    }
    return fn(b) < fn(a) ? b : a;
};
const MLA = function () { };
const MOD = function (m, a, b) { m = a % b; };
const MODEL = function () { };
const MODULO = function (a, b) {
    if (arguments.length === 1)
        return _b => exports.MODULO(a, _b);
    return a % b;
};
const MOV = function (m, a, c) { m = a; };
const MRC = function () { };
const MRS = function () { };
const MSR = function () { };
const MUL = function (m, a, b) { m = a * b; };
const MULTIPLY = function (a, b) {
    if (arguments.length === 1)
        return _b => exports.MULTIPLY(a, _b);
    return a * b;
};
const MVN = function () { };
const NAD = function (m, a, b) { m = a && b; };
const NAMINGSYSTEM = function () {
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
const NANOARR = (v) => exports.EVERY(v, exports.ISNOTANONYMOUS);
const NANOJSN = (v) => exports.EVERY(v, exports.ISNOTANONYMOUS);
const NARRARR = (v) => exports.EVERY(v, exports.ISNOTARRAY);
const NBOLARR = (v) => exports.EVERY(v, exports.ISNOTBOOLEAN);
const NBOLJSN = (v) => exports.EVERY(v, exports.ISNOTBOOLEAN);
const NEGATE = function (n) {
    return -n;
};
const NEQ = function (m, a, b) { m = a !== b; };
const NFNCARR = (v) => exports.EVERY(v, exports.ISNOTFUNCTION);
const NFNCJSN = (v) => exports.EVERY(v, exports.ISNOTFUNCTION);
const NJSNARR = (v) => exports.EVERY(v, exports.ISNOTJSON);
const NJSNJSN = (v) => exports.EVERY(v, exports.ISNOTJSON);
const NNULARR = (v) => exports.EVERY(v, exports.ISNOTNULL);
const NNULJSN = (v) => exports.EVERY(v, exports.ISNOTNULL);
const NNUMARR = (v) => exports.EVERY(v, exports.ISNOTNUMBER);
const NNUMJSN = (v) => exports.EVERY(v, exports.ISNOTNUMBER);
const NNUMSTR = (v) => exports.EVERY(v, function (a) { return !exports.NUMBERS.includes(a); });
const NOBJARR = (v) => exports.EVERY(v, exports.ISNOTOBJECT);
const NOBJJSN = (v) => exports.EVERY(v, exports.ISNOTOBJECT);
const NOBJLMD = (v) => exports.EVERY(v, exports.ISNOTLAMBDA);
const NONE = function (fn, list) {
    if (arguments.length === 1)
        return _list => exports.NONE(fn, _list);
    return list.filter(fn).length === 0;
};
const NOT = function (a) {
    return !a;
};
const NOTEMPTY = (v) => (exports.ISARRAY(v) && exports.THROWE("must not be empty", (v.length > 0))
    || (typeof v === "object" && exports.THROWE("must not be empty", (exports.S._Object.keys(v).length > 0)))
    || (typeof v === "string" && exports.THROWE("must not be empty", (v.length > 0)))
    || (false));
const NSTRARR = (v) => exports.EVERY(v, exports.ISNOTSTRING);
const NSTRJSN = (v) => exports.EVERY(v, exports.ISNOTSTRING);
const NSTRSTR = (v) => exports.EVERY(v, exports.ISNOTSTRING);
const NTH = function (offset, list) {
    if (arguments.length === 1)
        return _list => exports.NTH(offset, _list);
    const idx = offset < 0 ? list.length + offset : offset;
    return exports.S._Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
};
const NULARR = (v) => exports.EVERY(v, exports.ISNULL);
const NULJSN = (v) => exports.EVERY(v, exports.ISNULL);
const NULL = function () { return Null(...arguments); };
const NUMARR = (v) => exports.EVERY(v, exports.ISNUMBER);
const NUMBER = function () { return exports.S._Number(...arguments); };
const NUMBERS = "0,1,2,3,4,5,6,7,8,9".split(",");;
const NUMJSN = (v) => exports.EVERY(v, exports.ISNUMBER);
const NUMSTR = (v) => exports.EVERY(v, function (a) { return exports.NUMBERS.includes(a); });
const NUNDARR = (v) => exports.EVERY(v, exports.ISNOTUNDEFINED);
const NUNDJSN = (v) => exports.EVERY(v, exports.ISNOTUNDEFINED);
const OBJARR = (v) => exports.EVERY(v, exports.ISOBJECT);
const OBJECT = function () { return exports.S._Object(...arguments); };
const OBJJSN = (v) => exports.EVERY(v, exports.ISNOTLAMBDA);
const OBJLMD = (v) => exports.EVERY(v, exports.ISLAMBDA);
const OMIT = function (keys, obj) {
    if (arguments.length === 1)
        return _obj => exports.OMIT(keys, _obj);
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
const OOR = function (m, a, b) { m = a | b; };
const OPS = "!,%,%=,^,^=,&,&&,&=,&&=,*,*=,**,**=,-,-=,+,+=,|,||,/,/=".split(",");;
const ORO = function (m, a, b) { m = a || b; };
const ORR = function () { };
const OUTPUT = function () { };
const OVER = function (lens, fn, object) {
    if (arguments.length === 1)
        return (_fn, _object) => exports.OVER(lens, _fn, _object);
    if (arguments.length === 2)
        return _object => exports.OVER(lens, fn, _object);
    return exports.LENS(x => _identity(fn(x)))(object).x;
};
const PARADIGMS = function (sel) {
    throw new Error("UNFINISHED");
    exports.PARADIGMS.hasOwnProperty(sel) && exports.PARADIGMS[sel]();
};
const PARAMS = function (paramsOBJ) {
    // no duplicates allowed --> objects don't automatically overwrite duplications
    if (!paramsOBJ) {
        exports.THROWE();
    }
    for (let k in paramsOBJ) {
        eval(`paramsOBJ[k] = function(${k}){ return ${paramsOBJ[k].replace("$p", k)}; }`);
    }
    return paramsOBJ;
};
const PARSEDATE = function (maybeDate) {
    if (!maybeDate.toDateString)
        return [false];
    return [true, maybeDate.getTime()];
};
const PARSEERROR = function (maybeError) {
    const typeofError = maybeError.__proto__.toString();
    if (!['Error', 'TypeError'].includes(typeofError))
        return [];
    return [typeofError, maybeError.message];
};
const PARSEFUNC = function (funC) {
    /**
     * - extracts information from regular code into funC template
     * - possibly detects errors
     *         // looking for variables references.
    // does not allow this references

    // if it finds duplicate variable references it reports it's findings.

    // console.warn("parse progam unprogrammed");
    
    */
    return () => ({
        validate: () => ({}),
        block: () => ({})
    });
};
const PARSEREGEX = function (maybeRegex) {
    if (maybeRegex.constructor !== exports.S._RegExp)
        return [false];
    return [true, maybeRegex.toString()];
};
const PARTIAL = function (fn, args) {
    const len = fn.length;
    return (...rest) => {
        if (args.length + rest.length >= len) {
            return fn(...args, ...rest);
        }
        return partial(fn, ...[...args, ...rest]);
    };
};
const PATH = function (list, obj) {
    if (arguments.length === 1)
        return _obj => exports.PATH(list, _obj);
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
const PERIOD = (e) => {
    if (e[0] === ".") {
        if (e[1] === ".")
            e = "../" + e;
        else if (e[1] === "/")
            e.shift(), e.shift(), e = "../" + e;
        else {
            exports.THROWE();
        }
    }
    return e;
};
const PICK = function (keys, obj) {
    if (arguments.length === 1)
        return _obj => exports.PICK(keys, _obj);
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
const PICKALL = function (keys, obj) {
    if (arguments.length === 1)
        return _obj => exports.PICKALL(keys, _obj);
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
        else {
            willReturn[keysValue[counter]] = undefined;
        }
        counter++;
    }
    return willReturn;
};
const PIPE = function (fns) {
    if (fns.length === 0)
        throw new Error('pipe requires at least one argument');
    return exports.COMPOSE(...fns.reverse());
};
const PLUCK = function (key, list) {
    if (arguments.length === 1)
        return _list => exports.PLUCK(key, _list);
    const willReturn = [];
    exports.MAP(val => {
        if (val[key] !== undefined) {
            willReturn.push(val[key]);
        }
    }, list);
    return willReturn;
};
const POPULATION = function () {
    FLOOD,
        BLAST,
        FILL,
        FLUSH;
};
const POW = function (m, a, b) { m = a ** b; };
const PREPEND = function (el, list) {
    if (arguments.length === 1)
        return _list => exports.PREPEND(el, _list);
    if (typeof list === 'string')
        return `${el}${list}`;
    const clone = [el].concat(list);
    return clone;
};
const PROP = function (key, obj) {
    if (arguments.length === 1)
        return _obj => exports.PROP(key, _obj);
    if (!obj)
        return undefined;
    return obj[key];
};
const PROPOR = function (defaultValue, p, obj) {
    if (arguments.length === 2)
        return _obj => exports.PROPOR(defaultValue, p, _obj);
    if (arguments.length === 1)
        return (_p, _obj) => exports.PROPOR(defaultValue, _p, _obj);
    if (!obj)
        return defaultValue;
    return exports.DEFAULTTO(defaultValue, obj[p]);
};
const PROPSALTERED = function () {
};
const PROTOCOL = function () { };
const PROXY = function () { };
const QUANTIFY = function () { };
const R00 = function (a) { exports.RS["00"] = a; };
const R01 = function (a) { exports.RS["01"] = a; };
const R02 = function (a) { exports.RS["02"] = a; };
const R03 = function (a) { exports.RS["03"] = a; };
const R04 = function (a) { exports.RS["04"] = a; };
const R05 = function (a) { exports.RS["05"] = a; };
const R06 = function (a) { exports.RS["06"] = a; };
const R07 = function (a) { exports.RS["07"] = a; };
const R08 = function (a) { exports.RS["08"] = a; };
const R09 = function (a) { exports.RS["09"] = a; };
const R10 = function (a) { exports.RS["10"] = a; };
const R11 = function (a) { exports.RS["11"] = a; };
const R12 = function (a) { exports.RS["12"] = a; };
const R13 = function (a) { exports.RS["13"] = a; };
const R14 = function (a) { exports.RS["14"] = a; };
const R15 = function (a) { exports.RS["15"] = a; };
const RANDOM = function () { };
const RANGE = function () { };
const READ = function () { };
const REJECT = function () { };
const REPEAT = function (val, n) {
    if (arguments.length === 1)
        return _n => exports.REPEAT(val, _n);
    const willReturn = exports.S._Array(n);
    return willReturn.fill(val);
};
const REPLICATE = function (sel, val) {
    // clone          100% copy & memory seperation
    // mirror         100% copy & no memory seperation
    // depth          clone "n" layers deep in
    typeof sel === "string" || exports.THROWE();
    return exports.REPLICATE[sel](val);
};
const REQUIRE = function () { return; };
const RESOLVE = function () { };
const RESTRICTEDPROPS = "__defineGetter__,__defineSetter__,__lookupGetter__,__lookupSetter__,__proto__,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,valueOf,apply,bind,call,constructor,toString,arguments,caller,length,name,prototype".split(",");;
const REVERSE = function (input) {
    if (typeof input === 'string') {
        return input.split('').reverse().join('');
    }
    const clone = input.slice();
    return clone.reverse();
};
const REVIEW = function () { throw new Error("REVIEW"); };
const REVIEW0 = function () { throw new Error("REVIEW"); };
const REVIEWZ = function () { throw new Error("REVIEW"); };
const RSB = function () { };
const RSC = function () { };
const RULE = function () { };
const SAVE = function () { };
const SBC = function () { };
const SCHEMA = function () { };
const SEARCH = function () { };
const SERVER = function () { };
const SET = function () { return exports.S._Set(...arguments); };
const SHD = function (m, a, b) { };
const SHOULD = function () { };
const SHU = function (m, a, b) { };
const SHUFFLE = function () { };
const SMARTCSS = function () { };
const SOCKET = function () { };
const SORT = function () { };
const SOUND = function () { };
const SPEC = function () { };
const SPECDEV = function () {
    // console.warn(`
    // ** collects all tests from different projects and stores into one repository for data science
    // ** study the other testing frameworks to see what they did wrong
    // ** do everything in power to automate this
    // ** applications are written in node-terminal. "manual-mode" demands thinking ahead.
    // ** tests zoning are automated
    // ** tests styles are selectable & documented in db
    // ** notification system needs to be built. ??? display what notifications first? ???
    // ** 
    // `);
    throw new Error("UNFINISHED");
};
const SPLITEVERY = function (n, list) {
    if (arguments.length === 1)
        return _list => exports.SPLITEVERY(n, _list);
    if (n < 1)
        throw new Error('First argument to splitEvery must be a positive integer');
    const willReturn = [];
    let counter = 0;
    while (counter < list.length) {
        willReturn.push(list.slice(counter, counter += n));
    }
    return willReturn;
};
const STARTSWITH = function (prefix, list) {
    if (arguments.length === 1)
        return _list => exports.STARTSWITH(prefix, _list);
    return list.startsWith(prefix);
};
const STC = function () { };
const STM = function () { };
const STORE = function () { };
const STR = function () { };
const STRARR = (v) => exports.EVERY(v, exports.ISSTRING);
const STRING = function () { return exports.S._String(...arguments); };
const STRJSN = (v) => exports.EVERY(v, exports.ISSTRING);
const STRSTR = (v) => exports.EVERY(v, exports.ISSTRING);
const SUB = function (m, a, b) { m = a - b; };
const SUM = function (list) {
    return list.reduce((prev, current) => prev + current, 0);
};
const SWAP = function (memA, memB) {
    /**
     * it would be better if memory addresses were swapped
     * instead of memoryValues to save RAM & CPU.
     */
    arguments.length !== 2 && exports.THROWE();
    let temp = memA;
    memA = memB;
    memB = temp;
    temp = undefined;
    return [memA, memB];
};
const SWI = function () { };
const SWITCH = function () { };
const SWP = function () { };
const SYMBOL = function () { return exports.S._Symbol(...arguments); };
const T = function () {
    return true;
};
const TAKE = function (n, list) {
    if (arguments.length === 1)
        return _list => exports.TAKE(n, _list);
    if (n < 0)
        return list.slice();
    if (typeof list === 'string')
        return list.slice(0, n);
    return exports.BASESLICE(list, 0, n);
};
const TAKELAST = function (n, list) {
    if (arguments.length === 1)
        return _list => exports.TAKELAST(n, _list);
    const len = list.length;
    if (n < 0)
        return list.slice();
    let numValue = n > len ? len : n;
    if (typeof list === 'string')
        return list.slice(len - numValue);
    numValue = len - numValue;
    return exports.BASESLICE(list, numValue, len);
};
const TAP = function (fn, x) {
    if (arguments.length === 1)
        return (_x) => exports.TAP(fn, _x);
    fn(x);
    return x;
};
const TAPJS = function () { };
const TEQ = function () { };
const TEST = function () { };
const THROWE = function () { throw new Error(...arguments); };
const THROWE0 = function () { throw new Error(...arguments); };
const THROWE1 = function () { throw new Error(...arguments); };
const THROWE2 = function () { throw new Error(...arguments); };
const THROWEZ = function () { throw new Error(...arguments); };
const TIMES = function (fn, n) {
    if (arguments.length === 1)
        return _n => exports.TIMES(fn, _n);
    if (!exports.S._Number.isInteger(n) || n < 0)
        throw new RangeError('n must be an integer');
    return map(fn, range(0, n));
};
const TO = function (val, sel) {
};
const TOBASE = function () { };
const TOBINARY = function () { };
const TODATATYPE = function () { };
const TODEC = function () { };
const TOHEX = function () { };
const TOPAIRS = function (obj) {
    return exports.S._Object.entries(obj);
};
const TREES = function () { };
const TRIM = function () {
};
const TRY = function () { };
const TRYCATCH = function () { };
const TRYCATCHFINALLY = function () { };
const TST = function () { };
const TYPEFALSEY = function () {
};
const TYPESTATE = function (v, meth) {
    // TYPEID[typeof v][]
};
const TYPETRUTHY = function () {
    // console.warn(`this assumes the conditional statements are the same to all types of conditions`);
    // console.warn(`bewarned, bug is probable`);
};
const UI = function () { };
const UNDARR = (v) => exports.EVERY(v, exports.ISUNDEFINED);
const UNDEFINED = function () { return Undefined(...arguments); };
const UNDJSN = (v) => exports.EVERY(v, exports.ISUNDEFINED);
const UNFINISHED = function () { throw new Error("UNFINISHED"); };
const UNFINSHED0 = function () { throw new Error("UNFINISHED"); };
const UNFINSHED1 = function () { throw new Error("UNFINISHED"); };
const UNFINSHEDZ = function () { throw new Error("UNFINISHED"); };
const UNHANDLED = function () { return exports.THROWE("UNHANDLED EXCEPTION"); };
const UNIQ = function (list) {
    let index = -1;
    const willReturn = [];
    while (++index < list.length) {
        const value = list[index];
        if (!exports.INCLUDES(value, willReturn)) {
            willReturn.push(value);
        }
    }
    return willReturn;
};
const UNIQWITH = function (fn, list) {
    if (arguments.length === 1)
        return _list => exports.UNIQWITH(fn, _list);
    let index = -1;
    const len = list.length;
    const willReturn = [];
    while (++index < len) {
        const value = list[index];
        const flag = exports.ANY(willReturnInstance => fn(value, willReturnInstance), willReturn);
        if (!flag) {
            willReturn.push(value);
        }
    }
    return willReturn;
};
const UPDATE = function () { };
const UPPERCASE = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,Y,Z".split(",");;
const VALIDATE = function () { };
const VALIDATION = function () {
    throw new Error();
    return Object.keys(exports.VALIDATION).every(e => {
        e();
    });
};
const VALUES = function (obj) {
    if (exports.DTYPE(obj) !== 'Object')
        return [];
    return exports.S._Object.values(obj);
};
const VAR = function () { };
const VARR = function (sel, val) {
    return {
        0: ["TYPE", "NTEMPTY", "ALTERED"],
        1: ["TYPE", "EMPTY", "ALTERED"],
        2: ["TYPE", "ALTERED"],
        3: ["TYPE"]
    }[sel].every(f => { return exports.VARR[f](val); });
};
const VBOL = function (sel, val) {
    return {
        0: ["TYPE", "ALTERED"],
        1: ["TYPE"]
    }[sel].every(f => { return exports.VBOL[f](val); });
};
const VCLA = function (sel, val) {
    throw new Error("UNFINISHED");
    return {
        0: ["TYPE", "NEWABLE", "NTCLASS", "ALTERED", "NTEMPTY"],
        1: ["TYPE", "NEWABLE", "NTCLASS", "ALTERED", "EMPTY"],
        2: ["TYPE", "NEWABLE", "NTCLASS", "ALTERED"],
        3: ["TYPE", "NEWABLE", "NTCLASS"]
    }[sel].every(f => { return exports.VCLA[f](val); });
};
const VFNC = function (sel, val) {
    return {
        0: ["TYPE", "NTFUNCTION", "ALTERED", "NTEMPTY"],
        1: ["TYPE", "NTFUNCTION", "ALTERED", "EMPTY"],
        2: ["TYPE", "NTFUNCTION", "ALTERED"],
        3: ["TYPE", "NTFUNCTION"]
    }[sel].every(f => { return exports.FNC[f](val); });
};
const VIEW = function (lens, target) {
    if (arguments.length === 1)
        return _target => exports.VIEW(lens, _target);
    return exports.LENS(exports.Const)(target).x;
};
const VISUAL = function () { };
const VLMD = function (sel, val) {
    return {
        0: ["TYPE", "NTLAMBDA", "ALTERED", "NTEMPTY"],
        1: ["TYPE", "NTLAMBDA", "ALTERED", "EMPTY"],
        2: ["TYPE", "NTLAMBDA", "ALTERED"],
        3: ["TYPE", "NTLAMBDA"]
    }[sel].every(f => { return exports.VLMD[f](val); });
};
const VNUL = function (sel, val) {
    return {
        0: ["TYPE", "ALTERED"],
        1: ["TYPE"]
    }[sel].every(f => { return exports.VNUL[f](val); });
};
const VNUM = function (sel, val) {
    return {
        0: ["TYPE", "ISNAN", "ALTERED", "SAFEINT", "FINITE"],
        1: ["TYPE", "ISNAN", "ALTERED", "FINITE"],
        2: ["TYPE", "ISNAN", "ALTERED"],
        3: ["TYPE", "ALTERED"],
        4: ["TYPE"]
    }[sel].every(f => { return exports.VNUM[f](val); });
};
const VOBJ = function (sel, val) {
    return {
        0: ["TYPE", "ALTERED", "LEN0", "FORBID"],
        1: ["TYPE", "ALTERED", "LENZ", "FORBID"],
        2: ["TYPE", "ALTERED", "FORBID"],
        3: ["TYPE", "FORBID"]
    }[sel].every(f => { return exports.VOBJ[f](val); });
};
const VOCAL = function () { };
const VSET = function (sel, val) {
    throw new Error("UNFINISHED");
    return {
        0: ["TYPE", "ALTERED"],
        1: ["TYPE"]
    }[sel].every(f => { return exports.VSET[f](val); });
};
const VSTR = function (sel, val) {
    return {
        0: ["TYPE", "ALTERED", "EMPTY"],
        1: ["TYPE", "ALTERED", "NTEMPTY"],
        2: ["TYPE", "ALTERED"],
        3: ["TYPE"]
    }[sel].every(f => { return exports.VSTR[f](val); });
};
const VSYM = function (sel, val) {
    return {
        0: ["TYPE", "ALTERED"],
        1: ["TYPE"]
    }[sel].every(f => { return exports.VSYM[f](val); });
};
const VUND = function (sel, val) {
    return {
        0: ["TYPE", "ALTERED"],
        1: ["TYPE"]
    }[sel].every(f => { return exports.VUND[f](val); });
};
const WEB = function () { };
const WITHOUT = function (left, right) {
    if (right === undefined) {
        return _right => without(left, _right);
    }
    return reduce((accum, item) => includes(item, left) ? accum : accum.concat(item), [], right);
};
const XFILTER = function (f, xf) {
    this.xf = xf;
    this.f = f;
};
const XOR = function (a, b) {
    if (arguments.length === 1)
        return _b => exports.XOR(a, _b);
    return exports.S._Boolean(a) && !b || exports.S._Boolean(b) && !a;
};
const XWRAP = function (fn) {
    this.f = fn;
};
const ZENDB = function () { };
const ZIP = function (left, right) {
    if (arguments.length === 1)
        return _right => exports.ZIP(left, _right);
    const result = [];
    const length = exports.S._Math.min(left.length, right.length);
    for (let i = 0; i < length; i++) {
        result[i] = [left[i], right[i]];
    }
    return result;
};
const ZIPOBJ = function (keys, values) {
    if (arguments.length === 1)
        return yHolder => exports.ZIPOBJ(keys, yHolder);
    return exports.TAKE(values.length, keys).reduce((prev, xInstance, i) => {
        prev[xInstance] = values[i];
        return prev;
    }, {});
};
const _ARITY = function (n, fn) {
    /* eslint-disable no-unused-vars */
    switch (n) {
        case 0: return function () { return fn.apply(this, arguments); };
        case 1: return function (a0) { return fn.apply(this, arguments); };
        case 2: return function (a0, a1) { return fn.apply(this, arguments); };
        case 3: return function (a0, a1, a2) { return fn.apply(this, arguments); };
        case 4: return function (a0, a1, a2, a3) { return fn.apply(this, arguments); };
        case 5: return function (a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
        case 6: return function (a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
        case 7: return function (a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
        case 8: return function (a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
        case 9: return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
        case 10: return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
        default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
    }
};
const _ARRAYREDUCE = function (xf, acc, list) {
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
const _CURRY1 = function (fn) {
    return function f1(a) {
        if (arguments.length === 0 || exports._ISPLACEHOLDER(a)) {
            return f1;
        }
        else {
            return fn.apply(this, arguments);
        }
    };
};
const _CURRY2 = function (fn) {
    return function f2(a, b) {
        switch (arguments.length) {
            case 0:
                return f2;
            case 1:
                return exports._ISPLACEHOLDER(a) ? f2
                    : exports._CURRY1(function (_b) { return fn(a, _b); });
            default:
                return exports._ISPLACEHOLDER(a) && exports._ISPLACEHOLDER(b) ? f2
                    : exports._ISPLACEHOLDER(a) ? exports._CURRY1(function (_a) { return fn(_a, b); })
                        : exports._ISPLACEHOLDER(b) ? exports._CURRY1(function (_b) { return fn(a, _b); })
                            : fn(a, b);
        }
    };
};
const _CURRY3 = function (fn) {
    return function f3(a, b, c) {
        switch (arguments.length) {
            case 0:
                return f3;
            case 1:
                return exports._ISPLACEHOLDER(a) ? f3
                    : _curry2(function (_b, _c) { return fn(a, _b, _c); });
            case 2:
                return exports._ISPLACEHOLDER(a) && exports._ISPLACEHOLDER(b) ? f3
                    : exports._ISPLACEHOLDER(a) ? _curry2(function (_a, _c) { return fn(_a, b, _c); })
                        : exports._ISPLACEHOLDER(b) ? _curry2(function (_b, _c) { return fn(a, _b, _c); })
                            : exports._CURRY1(function (_c) { return fn(a, b, _c); });
            default:
                return exports._ISPLACEHOLDER(a) && exports._ISPLACEHOLDER(b) && exports._ISPLACEHOLDER(c) ? f3
                    : exports._ISPLACEHOLDER(a) && exports._ISPLACEHOLDER(b) ? _curry2(function (_a, _b) { return fn(_a, _b, c); })
                        : exports._ISPLACEHOLDER(a) && exports._ISPLACEHOLDER(c) ? _curry2(function (_a, _c) { return fn(_a, b, _c); })
                            : exports._ISPLACEHOLDER(b) && exports._ISPLACEHOLDER(c) ? _curry2(function (_b, _c) { return fn(a, _b, _c); })
                                : exports._ISPLACEHOLDER(a) ? exports._CURRY1(function (_a) { return fn(_a, b, c); })
                                    : exports._ISPLACEHOLDER(b) ? exports._CURRY1(function (_b) { return fn(a, _b, c); })
                                        : exports._ISPLACEHOLDER(c) ? exports._CURRY1(function (_c) { return fn(a, b, _c); })
                                            : fn(a, b, c);
        }
    };
};
const _DISPATCHABLE = function (methodNames, xf, fn) {
    return function () {
        if (arguments.length === 0) {
            return fn();
        }
        var args = exports.S._Array.prototype.slice.call(arguments, 0);
        var obj = args.pop();
        if (!exports._ISARRAY(obj)) {
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
const _FILTER = function (fn, list) {
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
const _IDENTITY = function (x) { return x; };
const _ISARRAY = function _ISARRAY(val) {
    return (val != null &&
        val.length >= 0 &&
        exports.S._Object.prototype.toString.call(val) === '[object Array]');
};
const _ISARRAYLIKE = function f1(a) {
        if (arguments.length === 0 || exports._ISPLACEHOLDER(a)) {
            return f1;
        }
        else {
            return fn.apply(this, arguments);
        }
    };
const _ISOBJECT = function (x) {
    return exports.S._Object.prototype.toString.call(x) === '[object Object]';
};
const _ISPLACEHOLDER = function (a) {
    return a != null &&
        typeof a === 'object' &&
        a['@@functional/placeholder'] === true;
};
const _ISSTRING = function (x) {
    return Object.prototype.toString.call(x) === '[object String]';
};
const _ISTRANSFORMER = function (obj) {
    return obj != null && typeof obj['@@transducer/step'] === 'function';
};
const _ITERABLEREDUCE = function (xf, acc, iter) {
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
const _METHODREDUCE = function (xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](exports.BIND(xf['@@transducer/step'], xf), acc));
};
const _OBJECTIS = function (a, b) {
    if (a === b) {
        return a !== 0 || 1 / a === 1 / b;
    }
    return a !== a && b !== b;
};
const _REDUCE = function (fn, acc, list) {
    if (typeof fn === 'function') {
        fn = exports._XWRAP(fn);
    }
    if (exports._ISARRAYLIKE(list)) {
        return exports._ARRAYREDUCE(fn, acc, list);
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
        return exports._METHODREDUCE(fn, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
        return exports._ITERABLEREDUCE(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
        return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
        return _methodReduce(fn, acc, list, 'reduce');
    }
    throw new TypeError('reduce: list must be array or iterable');
};
const _REDUCED = function (x) {
    return x && x['@@transducer/reduced'] ? x :
        {
            '@@transducer/value': x,
            '@@transducer/reduced': true
        };
};
const _UPDATE = function (idx, val, list) {
    if (val === undefined) {
        return (_val, _list) => exports.UPDATE(idx, _val, _list);
    }
    else if (list === undefined) {
        return _list => exports.UPDATE(idx, val, _list);
    }
    const arrClone = list.slice();
    return arrClone.fill(val, idx, idx + 1);
};
const _XWRAP = function (fn) { return new exports.XWRAP(fn); };
const __APPLYSPECWITHARITY = function (spec, arity, cache) {
    const remaining = arity - cache.length;
    if (remaining === 1)
        return (x) => exports.__APPLYSPECWITHARITY(spec, arity, exports.__FILTERUNDEFINED(...cache, x));
    if (remaining === 2)
        return (x, y) => exports.__APPLYSPECWITHARITY(spec, arity, exports.__FILTERUNDEFINED(...cache, x, y));
    if (remaining === 3)
        return (x, y, z) => exports.__APPLYSPECWITHARITY(spec, arity, exports.__FILTERUNDEFINED(...cache, x, y, z));
    if (remaining === 4)
        return (x, y, z, a) => exports.__APPLYSPECWITHARITY(spec, arity, exports.__FILTERUNDEFINED(...cache, x, y, z, a));
    if (remaining > 4)
        return (args) => exports.__APPLYSPECWITHARITY(spec, arity, exports.__FILTERUNDEFINED(...cache, ...args));
    if (exports.S._Array.isArray(spec)) {
        const ret = [];
        let i = 0;
        const l = LEN(spec);
        for (; i < l; i++) {
            if (typeof spec[i] === 'object' || exports.S._Array.isArray(spec[i])) {
                ret[i] = exports.__APPLYSPECWITHARITY(spec[i], arity, cache);
            }
            if (typeof spec[i] === 'function') {
                ret[i] = spec[i](...cache);
            }
        }
        return ret;
    }
};
const __FILTERUNDEFINED = function () {
    const defined = [];
    let i = 0;
    const l = arguments.length;
    while (i < l) {
        if (typeof arguments[i] === 'undefined')
            break;
        defined[i] = arguments[i];
        i++;
    }
    return defined;
};
const __FINDHIGHESTARITY = function (spec, max) {
    if (max === "undefined")
        max = 0;
    for (const key in spec) {
        if (exports.HASPROPERTY(spec, key) === false || key === 'constructor')
            continue;
        if (typeof spec[key] === 'object') {
            max = exports.S._Math.max(max, exports.__FINDHIGHESTARITY(spec[key]));
        }
        if (typeof spec[key] === 'function') {
            max = exports.S._Math.max(max, spec[key].length);
        }
    }
    return max;
};
const assertComplex = (f) => exports.EVERY(f.toString(), ALLMULCASE) && exports.EVERY(f.toString(), ALLALPHA);
const enforce_object_datas = (v) => { isObject(v); notEmpty(v); exports.S._Object.keys(v).forEach(isNotFunction); };
const enforce_object_methods = (v) => { isObject(v); notEmpty(v); exports.S._Object.keys(v).forEach(isFunction); };
const enforce_object_nulls = (v) => { isObject(v); isNull(v); };
const enforce_object_propsss = (v) => { isObject(v); notEmpty(v); exports.S._Object.keys(v).forEach(isNotFunction); };
const enforce_setting = (v) => { };
const enforce_settings = (v) => { isObject(v); notEmpty(v); exports.S._Object.keys(v).forEach(enforceSetting); };
const intF = function () { return funCinterface; };
const intF_keys = function () { return Object.keys(exports.intF()); };
const parserClass = function () {
}




exports.SANDBOX = SANDBOX; 
exports.S = S; 
exports.RS = RS; 
exports.MEM = MEM; 
exports.MOV = MOV; 
exports.R00 = R00; 
exports.R01 = R01; 
exports.R02 = R02; 
exports.R03 = R03; 
exports.R04 = R04; 
exports.R05 = R05; 
exports.R06 = R06; 
exports.R07 = R07; 
exports.R08 = R08; 
exports.R09 = R09; 
exports.R10 = R10; 
exports.R11 = R11; 
exports.R12 = R12; 
exports.R13 = R13; 
exports.R14 = R14; 
exports.R15 = R15; 
exports.AND = AND; 
exports.XOR = XOR; 
exports.OOR = OOR; 
exports.NOT = NOT; 
exports.NAD = NAD; 
exports.ORO = ORO; 
exports.FLI = FLI; 
exports.ADD = ADD; 
exports.SUB = SUB; 
exports.MUL = MUL; 
exports.DIV = DIV; 
exports.POW = POW; 
exports.MOD = MOD; 
exports.GTE = GTE; 
exports.GTT = GTT; 
exports.LTT = LTT; 
exports.LTE = LTE; 
exports.EEQ = EEQ; 
exports.NEQ = NEQ; 
exports.SHU = SHU; 
exports.SHD = SHD; 
exports.ADC = ADC; 
exports.B = B; 
exports.BIC = BIC; 
exports.BL = BL; 
exports.BX = BX; 
exports.CDP = CDP; 
exports.CMN = CMN; 
exports.CMP = CMP; 
exports.EOR = EOR; 
exports.LDC = LDC; 
exports.LDM = LDM; 
exports.LDR = LDR; 
exports.MCR = MCR; 
exports.MLA = MLA; 
exports.MRC = MRC; 
exports.MRS = MRS; 
exports.MSR = MSR; 
exports.MVN = MVN; 
exports.ORR = ORR; 
exports.RSB = RSB; 
exports.RSC = RSC; 
exports.SBC = SBC; 
exports.STC = STC; 
exports.STM = STM; 
exports.STR = STR; 
exports.SWI = SWI; 
exports.SWP = SWP; 
exports.TEQ = TEQ; 
exports.TST = TST; 
exports.UNHANDLED = UNHANDLED; 
exports.IF0 = IF0; 
exports.IF1 = IF1; 
exports.IF2 = IF2; 
exports.IFZ = IFZ; 
exports.SWITCH = SWITCH; 
exports.CASE = CASE; 
exports.TRY = TRY; 
exports.TRYCATCH = TRYCATCH; 
exports.TRYCATCHFINALLY = TRYCATCHFINALLY; 
exports.ISBOOLEAN = ISBOOLEAN; 
exports.ISNOTBOOLEAN = ISNOTBOOLEAN; 
exports.ISNUMBER = ISNUMBER; 
exports.ISNOTNUMBER = ISNOTNUMBER; 
exports.ISSTRING = ISSTRING; 
exports.ISNOTSTRING = ISNOTSTRING; 
exports.ISJSON = ISJSON; 
exports.ISNOTJSON = ISNOTJSON; 
exports.ISOBJECT = ISOBJECT; 
exports.ISNOTOBJECT = ISNOTOBJECT; 
exports.ISARRAY = ISARRAY; 
exports.ISNOTARRAY = ISNOTARRAY; 
exports.ISSYMBOL = ISSYMBOL; 
exports.ISNOTSYMBOL = ISNOTSYMBOL; 
exports.ISFUNCTION = ISFUNCTION; 
exports.ISNOTFUNCTION = ISNOTFUNCTION; 
exports.ISTHIS = ISTHIS; 
exports.ISNOTTHIS = ISNOTTHIS; 
exports.ISLAMBDA = ISLAMBDA; 
exports.ISNOTLAMBDA = ISNOTLAMBDA; 
exports.ISANONYMOUS = ISANONYMOUS; 
exports.ISNOTANONYMOUS = ISNOTANONYMOUS; 
exports.ISFUNC = ISFUNC; 
exports.ISNOTFUNC = ISNOTFUNC; 
exports.ISCLASS = ISCLASS; 
exports.ISNOTCLASS = ISNOTCLASS; 
exports.ISNEWABLE = ISNEWABLE; 
exports.ISUNDEFINED = ISUNDEFINED; 
exports.ISNOTUNDEFINED = ISNOTUNDEFINED; 
exports.ISNULL = ISNULL; 
exports.ISNOTNULL = ISNOTNULL; 
exports.ISSAFE = ISSAFE; 
exports.ISNOTSAFE = ISNOTSAFE; 
exports.ISTRUE = ISTRUE; 
exports.ISNOTTRUE = ISNOTTRUE; 
exports.ISFALSE = ISFALSE; 
exports.ISNOTFALSE = ISNOTFALSE; 
exports.ISINFINITY = ISINFINITY; 
exports.ISNOTINFINITY = ISNOTINFINITY; 
exports.ISFINITE = ISFINITE; 
exports.ISNOTFINITE = ISNOTFINITE; 
exports.ISMAXVALUE = ISMAXVALUE; 
exports.ISNOTMAXVALUE = ISNOTMAXVALUE; 
exports.ISMINVALUE = ISMINVALUE; 
exports.ISNOTMINVALUE = ISNOTMINVALUE; 
exports.ISMAXSAFEVALUE = ISMAXSAFEVALUE; 
exports.ISNOTMAXSAFEVALUE = ISNOTMAXSAFEVALUE; 
exports.ISMINSAFEVALUE = ISMINSAFEVALUE; 
exports.ISNOTMINSAFEVALUE = ISNOTMINSAFEVALUE; 
exports.ISNAN = ISNAN; 
exports.ISNOTNAN = ISNOTNAN; 
exports.ISPOSITIVE = ISPOSITIVE; 
exports.ISNOTPOSITIVE = ISNOTPOSITIVE; 
exports.ISNEGATIVE = ISNEGATIVE; 
exports.ISNOTNEGATIVE = ISNOTNEGATIVE; 
exports.ISZERO = ISZERO; 
exports.ISNOTZERO = ISNOTZERO; 
exports.ISFLOAT = ISFLOAT; 
exports.ISNOTFLOAT = ISNOTFLOAT; 
exports.ISINTEGER = ISINTEGER; 
exports.ISNOTINTEGER = ISNOTINTEGER; 
exports.ISALPHA = ISALPHA; 
exports.ISNOTALPHA = ISNOTALPHA; 
exports.ISLOWERCASE = ISLOWERCASE; 
exports.ISNOTLOWERCASE = ISNOTLOWERCASE; 
exports.ISUPPERCASE = ISUPPERCASE; 
exports.ISNOTUPPERCASE = ISNOTUPPERCASE; 
exports.ISEMPTY = ISEMPTY; 
exports.ISNOTEMPTY = ISNOTEMPTY; 
exports.GETNAME = GETNAME; 
exports.GETPARAMS = GETPARAMS; 
exports.GETCOMMENTS = GETCOMMENTS; 
exports.GETINPUTTYPE = GETINPUTTYPE; 
exports.GETOUTPUTTYPE = GETOUTPUTTYPE; 
exports.GETEXETYPE = GETEXETYPE; 
exports.GETSTATEMENTS = GETSTATEMENTS; 
exports.GETINNERMEM = GETINNERMEM; 
exports.ASSERTINDEPENDENCE = ASSERTINDEPENDENCE; 
exports.ASSERTCOMPOUND = ASSERTCOMPOUND; 
exports.assertComplex = assertComplex; 
exports.NOTEMPTY = NOTEMPTY; 
exports.HASPROPERTY = HASPROPERTY; 
exports.ISDIVISIBLE = ISDIVISIBLE; 
exports.ISEVEN = ISEVEN; 
exports.ISEVENINTEGER = ISEVENINTEGER; 
exports.ISEVENFLOAT = ISEVENFLOAT; 
exports.ISODD = ISODD; 
exports.ISODDINTEGER = ISODDINTEGER; 
exports.ISODDFLOAT = ISODDFLOAT; 
exports.PERIOD = PERIOD; 
exports.enforce_object_datas = enforce_object_datas; 
exports.enforce_object_methods = enforce_object_methods; 
exports.enforce_object_propsss = enforce_object_propsss; 
exports.enforce_object_nulls = enforce_object_nulls; 
exports.enforce_settings = enforce_settings; 
exports.enforce_setting = enforce_setting; 
exports.EVERY = EVERY; 
exports.ALL = ALL; 
exports.NUMSTR = NUMSTR; 
exports.NNUMSTR = NNUMSTR; 
exports.STRSTR = STRSTR; 
exports.NSTRSTR = NSTRSTR; 
exports.BOLARR = BOLARR; 
exports.NBOLARR = NBOLARR; 
exports.NUMARR = NUMARR; 
exports.NNUMARR = NNUMARR; 
exports.STRARR = STRARR; 
exports.NSTRARR = NSTRARR; 
exports.ARRARR = ARRARR; 
exports.NARRARR = NARRARR; 
exports.OBJARR = OBJARR; 
exports.NOBJARR = NOBJARR; 
exports.JSNARR = JSNARR; 
exports.NJSNARR = NJSNARR; 
exports.FNCARR = FNCARR; 
exports.NFNCARR = NFNCARR; 
exports.OBJLMD = OBJLMD; 
exports.NOBJLMD = NOBJLMD; 
exports.ANOARR = ANOARR; 
exports.NANOARR = NANOARR; 
exports.UNDARR = UNDARR; 
exports.NUNDARR = NUNDARR; 
exports.NULARR = NULARR; 
exports.NNULARR = NNULARR; 
exports.BOLJSN = BOLJSN; 
exports.NBOLJSN = NBOLJSN; 
exports.NUMJSN = NUMJSN; 
exports.NNUMJSN = NNUMJSN; 
exports.STRJSN = STRJSN; 
exports.NSTRJSN = NSTRJSN; 
exports.JSNJSN = JSNJSN; 
exports.NJSNJSN = NJSNJSN; 
exports.OBJJSN = OBJJSN; 
exports.NOBJJSN = NOBJJSN; 
exports.FNCJSN = FNCJSN; 
exports.NFNCJSN = NFNCJSN; 
exports.ANOJSN = ANOJSN; 
exports.NANOJSN = NANOJSN; 
exports.UNDJSN = UNDJSN; 
exports.NUNDJSN = NUNDJSN; 
exports.NULJSN = NULJSN; 
exports.NNULJSN = NNULJSN; 
exports.__FINDHIGHESTARITY = __FINDHIGHESTARITY; 
exports.__APPLYSPECWITHARITY = __APPLYSPECWITHARITY; 
exports.__FILTERUNDEFINED = __FILTERUNDEFINED; 
exports.FLIPEXPORT = FLIPEXPORT; 
exports.ISINTEGER$1 = ISINTEGER$1; 
exports.INDEXBYPATH = INDEXBYPATH; 
exports.BASESLICE = BASESLICE; 
exports.MAPOBJECT = MAPOBJECT; 
exports._CURRY3 = _CURRY3; 
exports.PARSEREGEX = PARSEREGEX; 
exports.PARSEDATE = PARSEDATE; 
exports.PARSEERROR = PARSEERROR; 
exports._OBJECTIS = _OBJECTIS; 
exports.DEFAULTTO = DEFAULTTO; 
exports.Const = Const; 
exports._CURRY1 = _CURRY1; 
exports._CURRY2 = _CURRY2; 
exports._ISPLACEHOLDER = _ISPLACEHOLDER; 
exports._DISPATCHABLE = _DISPATCHABLE; 
exports._ISOBJECT = _ISOBJECT; 
exports._REDUCED = _REDUCED; 
exports.XWRAP = XWRAP; 
exports._XWRAP = _XWRAP; 
exports._REDUCE = _REDUCE; 
exports._FILTER = _FILTER; 
exports._ISTRANSFORMER = _ISTRANSFORMER; 
exports._ISARRAY = _ISARRAY; 
exports._ISARRAYLIKE = _ISARRAYLIKE; 
exports._ARRAYREDUCE = _ARRAYREDUCE; 
exports._ARITY = _ARITY; 
exports.BIND = BIND; 
exports._METHODREDUCE = _METHODREDUCE; 
exports._ITERABLEREDUCE = _ITERABLEREDUCE; 
exports._ISSTRING = _ISSTRING; 
exports._IDENTITY = _IDENTITY; 
exports._XFBASE = _XFBASE; 
exports.XFILTER = XFILTER; 
exports.ALWAYS = ALWAYS; 
exports.APPLYSPEC = APPLYSPEC; 
exports.COMPOSE = COMPOSE; 
exports.CURRY = CURRY; 
exports.F = F; 
exports.FLIP = FLIP; 
exports.IDENTITY = IDENTITY; 
exports.NEGATE = NEGATE; 
exports.PARTIAL = PARTIAL; 
exports.PIPE = PIPE; 
exports.T = T; 
exports.TAP = TAP; 
exports.DEC = DEC; 
exports.INC = INC; 
exports.MATHMOD = MATHMOD; 
exports.MEAN = MEAN; 
exports.MEDIAN = MEDIAN; 
exports.MODULO = MODULO; 
exports.MULTIPLY = MULTIPLY; 
exports.SUM = SUM; 
exports.ANY = ANY; 
exports.APPEND = APPEND; 
exports.CONCAT = CONCAT; 
exports.DIFFERENCE = DIFFERENCE; 
exports.DROP = DROP; 
exports.DROPLAST = DROPLAST; 
exports.ENDSWITH = ENDSWITH; 
exports.FILTER = FILTER; 
exports.FIND = FIND; 
exports.FINDINDEX = FINDINDEX; 
exports.FLATTEN = FLATTEN; 
exports.FOREACH = FOREACH; 
exports.FROMPAIRS = FROMPAIRS; 
exports.GROUPBY = GROUPBY; 
exports.GROUPWITH = GROUPWITH; 
exports.HEAD = HEAD; 
exports.INCLUDES = INCLUDES; 
exports.INDEXBY = INDEXBY; 
exports.INDEXOF = INDEXOF; 
exports.INIT = INIT; 
exports.INTERSECTION = INTERSECTION; 
exports.INTERSPERSE = INTERSPERSE; 
exports.JOIN = JOIN; 
exports.LAST = LAST; 
exports.LASTINDEXOF = LASTINDEXOF; 
exports.MAP = MAP; 
exports.NONE = NONE; 
exports.NTH = NTH; 
exports.PLUCK = PLUCK; 
exports.PREPEND = PREPEND; 
exports.RANGE = RANGE; 
exports.REPEAT = REPEAT; 
exports.REVERSE = REVERSE; 
exports.SPLITEVERY = SPLITEVERY; 
exports.STARTSWITH = STARTSWITH; 
exports.TAKE = TAKE; 
exports.TAKELAST = TAKELAST; 
exports.TIMES = TIMES; 
exports.UNIQ = UNIQ; 
exports.UNIQWITH = UNIQWITH; 
exports._UPDATE = _UPDATE; 
exports.WITHOUT = WITHOUT; 
exports.ZIP = ZIP; 
exports.ZIPOBJ = ZIPOBJ; 
exports.DISSOC = DISSOC; 
exports.HAS = HAS; 
exports.LENS = LENS; 
exports.LENSINDEX = LENSINDEX; 
exports.LENSPATH = LENSPATH; 
exports.ASSOC = ASSOC; 
exports.ASSOCPATH = ASSOCPATH; 
exports.LENSPROP = LENSPROP; 
exports.MERGE = MERGE; 
exports.OMIT = OMIT; 
exports.OVER = OVER; 
exports.PATH = PATH; 
exports.ALLPASS = ALLPASS; 
exports.ANYPASS = ANYPASS; 
exports.BOTH = BOTH; 
exports.COMPLEMENT = COMPLEMENT; 
exports.COND = COND; 
exports.EITHER = EITHER; 
exports.EQUALS = EQUALS; 
exports.IDENTICAL = IDENTICAL; 
exports.MAX = MAX; 
exports.MAXBy = MAXBy; 
exports.MIN = MIN; 
exports.MINBY = MINBY; 
exports.ISNIL = ISNIL; 
exports.PICK = PICK; 
exports.PICKALL = PICKALL; 
exports.PROP = PROP; 
exports.PROPOR = PROPOR; 
exports.SET = SET; 
exports.TOPAIRS = TOPAIRS; 
exports.VALUES = VALUES; 
exports.VIEW = VIEW; 
exports.THROWE = THROWE; 
exports.THROWE0 = THROWE0; 
exports.THROWE1 = THROWE1; 
exports.THROWE2 = THROWE2; 
exports.THROWEZ = THROWEZ; 
exports.UNFINISHED = UNFINISHED; 
exports.UNFINSHED0 = UNFINSHED0; 
exports.UNFINSHED1 = UNFINSHED1; 
exports.UNFINSHEDZ = UNFINSHEDZ; 
exports.BUG = BUG; 
exports.BUG0 = BUG0; 
exports.BUGZ = BUGZ; 
exports.MAINTENANCE = MAINTENANCE; 
exports.MAINTENANCE0 = MAINTENANCE0; 
exports.MAINTENANCEZ = MAINTENANCEZ; 
exports.REVIEW = REVIEW; 
exports.REVIEW0 = REVIEW0; 
exports.REVIEWZ = REVIEWZ; 
exports.CLI = CLI; 
exports.REQUIRE = REQUIRE; 
exports.MKDIR = MKDIR; 
exports.MKPATH = MKPATH; 
exports.FILEEXISTS = FILEEXISTS; 
exports.READJSON = READJSON; 
exports.WRITEJSON = WRITEJSON; 
exports.UI = UI; 
exports.CODE = CODE; 
exports.ANIMATE = ANIMATE; 
exports.SAVE = SAVE; 
exports.LOAD = LOAD; 
exports.ENCRYPT = ENCRYPT; 
exports.RANDOM = RANDOM; 
exports.SHUFFLE = SHUFFLE; 
exports.COMPRESS = COMPRESS; 
exports.GLOBAL = GLOBAL; 
exports.VAR = VAR; 
exports.LET = LET; 
exports.CONST = CONST; 
exports.RULE = RULE; 
exports.PROTOCOL = PROTOCOL; 
exports.NAMINGSYSTEM = NAMINGSYSTEM; 
exports.DATATYPES = DATATYPES; 
exports.NUMBER = NUMBER; 
exports.BOOLEAN = BOOLEAN; 
exports.STRING = STRING; 
exports.ARRAY = ARRAY; 
exports.OBJECT = OBJECT; 
exports.SYMBOL = SYMBOL; 
exports.FUNCTION = FUNCTION; 
exports.LAMBDA = LAMBDA; 
exports.CLASS = CLASS; 
exports.NULL = NULL; 
exports.UNDEFINED = UNDEFINED; 
exports.FAKENATIVECODE = FAKENATIVECODE; 
exports.CAPSULE = CAPSULE; 
exports.RESTRICTEDPROPS = RESTRICTEDPROPS; 
exports.FORBIDDEN_OBJECT_PROPS = FORBIDDEN_OBJECT_PROPS; 
exports.VOBJ = VOBJ; 
exports.VNUM = VNUM; 
exports.VSTR = VSTR; 
exports.VFNC = VFNC; 
exports.VLMD = VLMD; 
exports.VSYM = VSYM; 
exports.VSET = VSET; 
exports.VCLA = VCLA; 
exports.VARR = VARR; 
exports.VUND = VUND; 
exports.VNUL = VNUL; 
exports.VBOL = VBOL; 
exports.DTYPE = DTYPE; 
exports.TYPETRUTHY = TYPETRUTHY; 
exports.TYPEFALSEY = TYPEFALSEY; 
exports.TYPESTATE = TYPESTATE; 
exports.PROPSALTERED = PROPSALTERED; 
exports.LOWERCASE = LOWERCASE; 
exports.UPPERCASE = UPPERCASE; 
exports.ALPHA = ALPHA; 
exports.NUMBERS = NUMBERS; 
exports.OPS = OPS; 
exports.CLISTS = CLISTS; 
exports.IS = IS; 
exports.TOBINARY = TOBINARY; 
exports.TOHEX = TOHEX; 
exports.TODEC = TODEC; 
exports.TOBASE = TOBASE; 
exports.TODATATYPE = TODATATYPE; 
exports.INTERFACESTRICT = INTERFACESTRICT; 
exports.INTERFACELOOSE = INTERFACELOOSE; 
exports.VALIDATE = VALIDATE; 
exports.BLOCK = BLOCK; 
exports.SPEC = SPEC; 
exports.DELETEPROPKEY = DELETEPROPKEY; 
exports.DELETEPROPVALUE = DELETEPROPVALUE; 
exports.KEYS = KEYS; 
exports.FUNC0BLOCK = FUNC0BLOCK; 
exports.FUNC0VALIDATE = FUNC0VALIDATE; 
exports.INHERITCONFIG = INHERITCONFIG; 
exports.CONFIGMAIN = CONFIGMAIN; 
exports.PARSEFUNC = PARSEFUNC; 
exports.parserClass = parserClass; 
exports.DATA = DATA; 
exports.DATAPUBLIC = DATAPUBLIC; 
exports.DATAPRIVATE = DATAPRIVATE; 
exports.DATAPROTECT = DATAPROTECT; 
exports.DATASTATIC = DATASTATIC; 
exports.DATAINTERNAL = DATAINTERNAL; 
exports.DATAGET = DATAGET; 
exports.DATASET = DATASET; 
exports.METHOD = METHOD; 
exports.METHODPUBLIC = METHODPUBLIC; 
exports.METHODPRIVATE = METHODPRIVATE; 
exports.METHODPROTECT = METHODPROTECT; 
exports.METHODSTATIC = METHODSTATIC; 
exports.METHODINTERNAL = METHODINTERNAL; 
exports.METHODGET = METHODGET; 
exports.METHODSET = METHODSET; 
exports.KINDA = KINDA; 
exports.TO = TO; 
exports.ESSENTIAL = ESSENTIAL; 
exports.CHARS = CHARS; 
exports.TRIM = TRIM; 
exports.SWAP = SWAP; 
exports.LIST = LIST; 
exports.POPULATION = POPULATION; 
exports.LOGIC = LOGIC; 
exports.VISUAL = VISUAL; 
exports.VOCAL = VOCAL; 
exports.SOUND = SOUND; 
exports.INTERFACECLASSIFICATIONS = INTERFACECLASSIFICATIONS; 
exports.CREATE = CREATE; 
exports.READ = READ; 
exports.UPDATE = UPDATE; 
exports.DELETE = DELETE; 
exports.FINDDEADCODE = FINDDEADCODE; 
exports.PARAMS = PARAMS; 
exports.ATTRIBUTE = ATTRIBUTE; 
exports.SCHEMA = SCHEMA; 
exports.MODEL = MODEL; 
exports.CLOSURE = CLOSURE; 
exports.REPLICATE = REPLICATE; 
exports.CONFIG = CONFIG; 
exports.VALIDATION = VALIDATION; 
exports.MEMASSIGN = MEMASSIGN; 
exports.LOOP = LOOP; 
exports.LOOP_FOR = LOOP_FOR; 
exports.LOOP_FOREVER = LOOP_FOREVER; 
exports.LOOP_WHILE = LOOP_WHILE; 
exports.LOOP_BREAK = LOOP_BREAK; 
exports.LOOP_CONTINUE = LOOP_CONTINUE; 
exports.LOOP_EACH = LOOP_EACH; 
exports.LOOP_DEEP = LOOP_DEEP; 
exports.LOOP_DEEPRECURSION = LOOP_DEEPRECURSION; 
exports.LOOP_CYCLE = LOOP_CYCLE; 
exports.LOOP_FILTER = LOOP_FILTER; 
exports.LOOP_CHECKLIST = LOOP_CHECKLIST; 
exports.LOOP_INTERVAL = LOOP_INTERVAL; 
exports.LOOP_WHEN = LOOP_WHEN; 
exports.LOOP_BEFORE = LOOP_BEFORE; 
exports.LOOP_AFTER = LOOP_AFTER; 
exports.LOOP_NONEST = LOOP_NONEST; 
exports.LOOP_SPLIT = LOOP_SPLIT; 
exports.LOOP_MERGE = LOOP_MERGE; 
exports.LOOP_SKIP = LOOP_SKIP; 
exports.LOOP_PINGPONG = LOOP_PINGPONG; 
exports.FUNC = FUNC; 
exports.FUNCINTERFACE = FUNCINTERFACE; 
exports.FUNCFAKEIFNULL = FUNCFAKEIFNULL; 
exports.FUNCINDEPEDENTVALIDATION = FUNCINDEPEDENTVALIDATION; 
exports.FUNCCROSSEXAMINEVALIDATION = FUNCCROSSEXAMINEVALIDATION; 
exports.FUNCMEMASSIGN = FUNCMEMASSIGN; 
exports.FUNCTRETURN = FUNCTRETURN; 
exports.FUNCTEMPLATE = FUNCTEMPLATE; 
exports.FUNCCONFIGGLOBAL = FUNCCONFIGGLOBAL; 
exports.FUNCCONFIGINSTANCE = FUNCCONFIGINSTANCE; 
exports.FUNCCONFIGFUNC = FUNCCONFIGFUNC; 
exports.FUNCINCCONFIG = FUNCINCCONFIG; 
exports.FUNCCONFIG = FUNCCONFIG; 
exports.FUNCMETHS = FUNCMETHS; 
exports.FUNCLOOPINTERFACE = FUNCLOOPINTERFACE; 
exports.FUNCASSIGNINTERFACE = FUNCASSIGNINTERFACE; 
exports.gConfig = gConfig; 
exports.FInstances = FInstances; 
exports.configs = configs; 
exports.funcs = funcs; 
exports.intF = intF; 
exports.intF_keys = intF_keys; 
exports.INPUT = INPUT; 
exports.OUTPUT = OUTPUT; 
exports.TEST = TEST; 
exports.AUDIT = AUDIT; 
exports.ASSERT = ASSERT; 
exports.SHOULD = SHOULD; 
exports.EXPECT = EXPECT; 
exports.LOG = LOG; 
exports.RESOLVE = RESOLVE; 
exports.REJECT = REJECT; 
exports.BEFORE = BEFORE; 
exports.AFTER = AFTER; 
exports.BEFOREEACH = BEFOREEACH; 
exports.AFTEREACH = AFTEREACH; 
exports.SPECDEV = SPECDEV; 
exports.LAYERS = LAYERS; 
exports.CODEDECONSTRUCTOR = CODEDECONSTRUCTOR; 
exports.DIFFERENTIALBUILDCODING = DIFFERENTIALBUILDCODING; 
exports.INTUITLIST = INTUITLIST; 
exports.TREES = TREES; 
exports.WEB = WEB; 
exports.MATRIX = MATRIX; 
exports.STORE = STORE; 
exports.FETCH = FETCH; 
exports.AMBIENT = AMBIENT; 
exports.SORT = SORT; 
exports.QUANTIFY = QUANTIFY; 
exports.SEARCH = SEARCH; 
exports.MIDDLEWARE = MIDDLEWARE; 
exports.API = API; 
exports.SERVER = SERVER; 
exports.CLIENT = CLIENT; 
exports.ZENDB = ZENDB; 
exports.PROXY = PROXY; 
exports.CLUSTER = CLUSTER; 
exports.DHCA = DHCA; 
exports.SOCKET = SOCKET; 
exports.AUTOTEMPLATER = AUTOTEMPLATER; 
exports.SMARTCSS = SMARTCSS; 
exports.TAPJS = TAPJS; 
exports.COMPARTMENTALIZE = COMPARTMENTALIZE; 
exports.PARADIGMS = PARADIGMS; 
exports.SNIPPETS = SNIPPETS; 
exports.LEARNDEVCORE = LEARNDEVCORE




const BUILDDEVCORE = function(){
const d = require("./dev-core.js");
const fs = require("fs");
// SAVE FILE STRUCTURE
let header          = [];   // ALL IMPORTANT DOCUMENT ADDRESSMENTS ARE IN THE HEADER
let errors          = [];   // ALL SPEC ERRORS ARE SHOWN SECOND
let attrs           = [];   // ALL PARAMETERS USED and useable for database storage
let body            = [];   // ALL VALUES AS CONSTANTS 
let xports          = [];   // ALL EXPORTABLE VALUES
let buildFile       = [];

let docstruct       = `
    header"
    docstruct
    errors
    attrs
    body
    xports
    buildfile
`;

let deadcode = [];


header[0] = `\`/**
* 
* 
* WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
* WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING  
* WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
* WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING  
* WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING  
* 
* 
* SELF MODIFYING DOCUMENT ON EVERY FILE EXECUTION
* 
* * 
* 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
* 
*/\``;
header[1] = `\`/**
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 

        MIT LICENSE GRANTED MIT LICENSE GRANTED MIT LICENSE GRANTED MIT LICENSE GRANTED MIT LICENSE GRANTED 

   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
   LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE LICENSE 
*/\``;

console.log(d);
for (let k in d) {
    if (typeof d[k] === "function") {
        // console.log(`const ${k} = ${d[k]};`);
        deadcode = d.FINDDEADCODE(d[k]);
        body.push(`const ${k} = ${d[k]}`);
    } else if (Array.isArray(d[k])) {
        // console.log(`const ${k} = "${d[k].join(",")}".split(",");`)
        body.push(`const ${k} = "${d[k].join(",")}".split(",");`);    
    } else {}
}
console.log("devcore props above");
console.log("devocore imported");
console.log("devcore props len = "+Object.keys(d).length);
console.log(`
    parse through the library and auto create 3letter alias

    26**3 = 17576 3letter namespaces

`);
console.log(`
    errors need debuggable timestamps
`);
console.log(`
    collect all attrs from property functions
`);
for (let k in d) {
    let ps = [];
    ps = typeof d[k] === "function" && d.GETPARAMS(d[k]);
    typeof d[k] === "function" && ps.forEach(e => {
        e = e.trim();
        e !== "" && !attrs.includes(e) && attrs.push(e);
        console.log(e);
    });
}
console.log("fake native code");
console.log(`
    find dead code
    * returns nothing
    * does not modify inputs
    * ETC
`);
let dt = d.FINDDEADCODE(d);

d.ISNOTEMPTY(dt.throws)     && errors.push(dt.throws);
d.ISNOTEMPTY(dt.deadcode)   && errors.push(dt.deadcode);

// console.log(`
//     collect all attrs from property functions
// `);
console.log(`
    once attrs collected fill out information to create a loose and strict version.
`)
console.log(`
    once strict loose version completed, organizeby input/output
`);
console.log(`
    once organizeby input/output, wrap props with funC
`);
console.log(`
    once completed,
    brute force test all softwares IO's, create an IO mapper
`);
console.log(`
    once completed, specdev can operate.
`);
console.log(`
    once completed, create a python version
`);

console.log(`
    export options
    * functional independents
    * as phonetics
    * as 1 -> 10 letter acronyms
    * as generic memory addresses
    * as categories
    * as categories - enumerical - linear ordering
`);
for (let k in d) {
    xports.push(`exports.${k} = ${k}`);
}
// if (errors.length !== 0) {
    // do not write to file
    // fs.writeFileSync("./dev-core.errors.txt",errors);
// } 
// else {
// writeToFile

const file = `
"use strict";
const HEADER = [${header.join(", \n")}];\n\n\n\n
const DOCSTRUCT = \`${docstruct}\`;
const ERRORS = [${errors.join(",\n")}];\n\n\n\n
const ATTRS = {${attrs.sort().join(`:{
    name:        "String() > 0",           // the attribute name
    description: undefined,
    types:       [],
    validate:    function(v){return v},     // verification
    block:       function(v){return v},     // generate value
    default:     undefined,                 // generate value is not present      
    sqlite:      undefined,                 // DB EQUIVALENT DATA TYPE
    mysql:       undefined,                 // DB EQUIVALENT DATA TYPE
    oracle:      undefined,                 // DB EQUIVALENT DATA TYPE
    mongodb:     unedfined,                 // DB EQUIVALENT DATA TYPE
},\n`)}};\n\n\n\n
${body.sort().join(";\n")}\n\n\n\n
${xports.join("; \n")}\n\n\n\n
const BUILDDEVCORE = ${BUILDDEVCORE.toString()}
// BUILDDEVCORE();
`;
    fs.writeFileSync("./dev-core.js",file);
// };
console.log("deadcode",deadcode);
console.log("attrs",attrs);
console.log("attrs len = ",attrs.length);
console.log("deadcode above deadcode cnt ", deadcode.length);
}
// BUILDDEVCORE();
