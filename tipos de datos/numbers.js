let aa = 2;
let bb = new Number(3);
let cc = 7.19;
let dd = "5.33";

console.log(aa, bb);
console.log(cc.toFixed(5));
console.log(parseInt(cc));

console.log(typeof cc, typeof dd);

console.log(aa + bb);
console.log(cc + parseInt(dd));
console.log(cc + parseFloat(dd));
