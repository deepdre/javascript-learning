let score = "hello45"
console.log(typeof score);
console.log(typeof(score))

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof(valueInNumber));

//"33" = 33
// "33abc" = nan
//true = 1 false =0 
let isLoggedIn = 0
let booleanValue = Boolean(isLoggedIn);
console.log(booleanValue);

// 1 = treu 0 = false , "" = false , "deep" = true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ************************************** OPERATION ************************************* //

let value = 3 
let negative = -value
console.log(negative);

//console.log(2+2)
// all mathematical concepts

let str1 = "hello"
let str2 = " deep"
let str3 = str1 + str2;

console.log("1" + 2);
console.log(1+ "2")
console.log(1+ Number("2"));
console.log("1" + 2+ 2); // 122
console.log(1 + 2+ "2"); // 32
//console.log(+true)//1 (+"")//0 if true+ then error\


//***** prefix and postfix */
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
