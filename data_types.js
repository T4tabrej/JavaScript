// object is a data type it is define as a key value pair in javascript
let studObject={
    firstName:"Tabrej",
    age:18,
    gender:'M',
    marks:{
        Hindi:23,
        eng:55,
        scie:99
    }
};
/* To access a object’s property, you can use

The dot notation (.)
The array-like notation ([]).*/

console.log(studObject);
console.log(studObject.firstName);
console.log(studObject.marks.Hindi);


// Number System
// An octal literal number starts with the digit zero (0) followed by a sequence of octal digits (numbers from 0 through 7).
let num1= 071;
console.log(num1);
//output will be 57 because it convert it into decimal from octal

// If an octal number contains a number that is not in the range from 0 to 7, the JavaScript engine ignores the 0 and treats the number as a decimal. 
let num2= 080;
console.log(num2);

//output will be 80 


// This implicit behavior might cause issues. Therefore, ES6 introduced a new octal literal that starts with the 0o followed by a sequence of octal digits (from 0 to 7)
let num3= 0o71;
console.log(num3);
// If you an invalid number after 0o, JavaScript will issue a syntax error like this:

// let num = 0o80;
// Hexadecimal numbers start with 0x or 0X followed by any number of hexadecimal digits (0 through 9, and a through f). 

// When you have a very big number, you can use e-notation. E-notation indicates a number should be multiplied by 10 raised to a given power. For example:

let amount1= 3.14e7;
// The notation 3.14e7 means that take 3.14 and multiply it by 10 to the power.
console.log(amount1);



// Likewise, you can use the E-notation to represent a very small number. For example:

let amount = 5e-7; 
// The 5e-7 notation means that take 5 and divide it by 10,000,000.
console.log(amount);


// JavaScript introduced the bigint type starting in ES2022. The bigint type stores whole numbers whose values are greater than 2 to the power 53 – 1.
let pageView = 9007199254740991n;
console.log(pageView);


// JavaScript numeric separator
// The numeric separator allows you to create a visual separation between groups of digits by using underscores (_) as separators.
const budget1 = 1000000000;
// Is this a billion or a hundred million?

// The numeric separator fixes this readability issue as follows:

const budget = 1_000_000_000;
console.log(budget);

// BigInt
const max = 9_223_372_036_854_775_807n;

// binary
let nibbles = 0b1011_0101_0101;

// octal
let val = 0o1234_5670;

// hex
let message = 0xD0_E0_F0;

