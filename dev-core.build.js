const d = require("./dev-core.js");
const fs = require("fs");
let errors = [];

let abstractions = {};
let params = [];
let body = {};

console.log(d);
for (let k in d) {
    console.log(`export ${k} = ${d[k]};`);
    body[k] = `export ${k} = ${d[k]};`
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
    ps = d.GETPARAMS(d[k]);
    ps.forEach(e => {
        e = e.trim();
        e
        !params.includes(e) && params.push(e);
    });
}
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


if (errors.length !== 0) {
    // do not write to file
    fs.writeFileSync("./dev-core.errors.txt",errors);
} else {
    // writeToFile
    // let file = `${params} \n ${abstractions} ${body}`;
    // fs.writeFileSync("./dev-core.js",file);
}

console.log("params",params);
console.log("params len = ",params.length);