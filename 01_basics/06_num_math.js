const score = 400
console.log(score);//400

const balance = new Number(100)
console.log(balance);//[Number: 100]
console.log(balance.toString());//100
console.log(balance.toString().length);//3
console.log( typeof balance);//object
//The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places.
//Example-mdn

/*function financial(x) {
  return Number.parseFloat(x).toFixed(2);//The parseFloat() function parses a string argument and returns a floating point number.
console.log(financial(123.456));
// Expected output: "123.46"

console.log(financial(0.004));
// Expected output: "0.00"

console.log(financial("1.23e+5"));
// Expected output: "123000.00"*/


const balance2 = new Number(100);
console.log(balance2.toFixed(2));//100.00 => basically to.Fixed method is used in ecommerce like website

//The toPrecision() method of Number values returns a string representing this number to the specified number of significant digits.


const num1 = 23.86995
console.log(num1.toPrecision(3));//23.9 => presize the value by roundingup

const num2 = 123.86995
console.log(num2.toPrecision(3));//124

const num3 = 1123.86995
console.log(num3.toPrecision(3));//1.12e+3

//
const num4 = 1000000
console.log(num4.toLocaleString());//1,000,000 => bydefault give the value with separated by commas according to US

const num5 = 1000000
console.log(num5.toLocaleString('en-IN'));//10,00,000 => according to indian method

//in GOOGLE  CONSOLE

/*const score = 400
undefined
score
400
console.log(score)
VM366:1 400
undefined
const balance = new Number(100)
console.log(balance);

VM386:2 Number {100}
*/


//+++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++

console.log(Math);//Object [Math] {}
console.log(Math.abs(-4));//4 -ve value change in to +ve ,but +ve value remain unchange
console.log(Math.round(3.123));//3 converts the float value in to decimal num
console.log(Math.round(3.523));//4 
console.log(Math.ceil(3.123));//4 => ceiling is its pronounciation and take the heightest value
console.log(Math.ceil(3.000));//3
console.log(Math.ceil(3.023));//4
console.log(Math.floor(3.123));//3 => take the lowest value
console.log(Math.floor(3.9));//3
console.log(Math.min(3,4,5,6));//3
console.log(Math.max(3,2,1,0,7));//7
console.log(Math.random());//in 1st run 0.05093961150445714,in 2nd run 0.12794754407954212
// the range of random() is always in between 0 and 1
console.log((Math.random()*10) + 1);////3.305483256318568 => range in between 1 and 9
console.log(Math.floor(Math.random()*10) + 1);//1

const min = 10
const max = 20

Math.random() * (max - min + 1)
console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1)) + min);//***imp

