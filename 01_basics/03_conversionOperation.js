let score = "33"

console.log(typeof score);//string
console.log(typeof(score));//string
let valueInNumber = Number(score);
console.log(typeof score);//string
console.log(typeof valueInNumber);//number

let mark = "33aa"
let markInNumber = Number(mark);//number
console.log(typeof markInNumber);//number
console.log(markInNumber);//NaN

let marks = null
console.log(typeof marks);//object
let marksInNumber = Number(marks);//number
console.log(typeof marksInNumber);//Number
console.log(marksInNumber);//0

let mark1 = undefined
console.log(typeof mark1);//undefined
let mark1InNumber = Number(mark1);//number
console.log(typeof mark1InNumber);//number
console.log(mark1InNumber);//NaN

let mark2 = true
console.log(typeof mark2);//boolean
let mark2InNumber = Number(mark2);
console.log(typeof mark2InNumber);//number
console.log(mark2InNumber);//1 if false is given then it returns 0

let mark3 = "Anisha"
console.log(typeof mark3);//string
let mark3InNumber = Number(mark3);
console.log(typeof mark3InNumber);//number
console.log(mark3InNumber);//NaN

//NOTE

//"33" => 33
//"33aa" => NaN
//true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//true

let isLogedIn = ""
let booleanIsLogedIn = Boolean(isLogedIn)
console.log(booleanIsLogedIn);//false

let isLggedIn = "Anisha"
let booleanIsLggedIn = Boolean(isLggedIn)
console.log(booleanIsLggedIn);//true

//1 => true; 0 => false
//"" => false
//"Anisha" => true

let somenumber = 33
console.log(typeof somenumber);

let stringNumber= String(somenumber);
console.log(typeof stringNumber);//string
console.log(stringNumber);//33



//************************OPERATION**************************

let value1 = 3;
let negvalue1 = -value1
console.log(negvalue1);//-3
console.log(2+2);//4
console.log(2-2);//0
console.log(2*2);//4
console.log(2**2);//4
console.log(2/2);//1
console.log(2%2);//0

let str1 = "Hello"
let str2 = " Anisha"
let str3 = str1 + str2
console.log(str3);//Hello Anisha

//important
console.log(1+"2");//12
console.log("1"+2);//12
console.log("1"+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32

console.log(true);//true
console.log(+true);//1
console.log(+"");//0

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);//101

let gameCounter1 = 100;
gameCounter1++;
console.log(gameCounter1);//101
