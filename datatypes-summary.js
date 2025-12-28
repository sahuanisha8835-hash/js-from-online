//primitive dataType

//7 types: 1.String 2.Number 3.Boolean 4.Null 5.Undefined 6.System 7.BigInt
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false
console.log(id === anotherId);//false

//Reference Type or Non premitive dataType

//Array,Objects,Functions
//Array
const heros = ["shaktiman", "naagraj", "dogo"]
console.log(typeof heros);//object

//Objects
let myObj = {
    name: "Anisha",
    age: 18,
}
console.log(typeof myObj);//object

//Functions
const myFunction = function(){
    console.log("Hello world");
    
}
console.log(typeof myFunction);//funtion