const d = require("./dev-core.js");
const fs = require("fs");
let errors = [];
let header = [];
let abstractions = [];
let params = [];
let body = [];
let xports = [];

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
* SELF MODIFYING DOCUMENT ON EVERY EXECUTION
* 
* * 
* 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
*  WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
* 
*/\``;

console.log(d);
for (let k in d) {
    if (typeof d[k] === "function") {
        console.log(`const ${k} = ${d[k]};`);
        body.push(`const ${k} = ${d[k]}`);    
    } else if (Array.isArray(d[k])) {
        console.log(`const ${k} = [${d[k].join(",")}];`);
        body.push(`const ${k} = [${d[k].join(",")}];`);    
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
    collect all params from property functions
`);
for (let k in d) {
    let ps = [];
    ps = typeof d[k] === "function" && d.GETPARAMS(d[k]);
    typeof d[k] === "function" && ps.forEach(e => {
        e = e.trim();
        e
        !params.includes(e) && params.push(e);
    });
}
console.log(`
    find dead code
    * returns nothing
    * does not modify inputs
`);
console.log(`
    collect all params from property functions
`);
console.log(`
    once params collected fill out information to create a loose and strict version.
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
for (let k in body) {
    xports[k] = `exports.${k} = ${k}`;
}
if (errors.length !== 0) {
    // do not write to file
    fs.writeFileSync("./dev-core.errors.txt",errors);
} else {
    // writeToFile
    let file = `const __HEADER = [${header.join(", \n")}];\n\n\n\nconst __ERRORS = [${errors.join(",\n")}];\n\n\n\nconst __PARAMS = {${params.sort().join(":{},\n")}};\n\n\n\nconst __ABSTRACTIONS = [${abstractions.join(",\n")}];\n\n\n\n${body.sort().join(";\n")}};\n\n\n\n${xports.join("; \n")}`;
    fs.writeFileSync("./dev-core.js",file);
}

console.log("params",params);
console.log("params len = ",params.length);