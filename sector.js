// addition of string and number/
let a="hello"+30;
console.log(`${a}[${typeof a}]`);
// addition of string and boolean
let c="hello"+true;
console.log(`${c}[${typeof c}]`);
// addition of string and bigint
let d="10"+34n;
console.log(`${d}[${typeof d}]`);
// addition of undefined and string
let m=undefined+"code";
console.log(`${m}[${typeof m}]`);