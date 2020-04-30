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
        deadcode.push(d.FINDDEADCODE(d[k]));
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
// console.log("fake native code");
// for (let k in d) {
//     let ps = [];
//     ps = typeof d[k] === "function" && d.FAKENATIVECODE(d[k]);
// }
console.log(`
    find dead code
    * returns nothing
    * does not modify inputs
    * ETC
`);
let dt = d.FINDDEADCODE(d);

d.ISNOTEMPTY(dt.throws)     && errors.push(dt.throws);
d.ISNOTEMPTY(dt.deadcode)   && errors.push(dt.deadcode);


console.log(`
    once organizeby input/output, wrap props with funC
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
};
BUILDDEVCORE();