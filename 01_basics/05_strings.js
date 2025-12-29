const name = "Anisha"
const repoCount = 50

console.log(name + repoCount + "value");//Anisha50value

//by the heple of `` back spsce ,string interpulation we can create place holder for the variables

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);
//we can also add some method in string interpulation

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

//Another process of string declaration

const gameName = new String('Anisha-sahu');
console.log(gameName);
console.log(gameName[0]);//A
console.log(gameName.__proto__);//{} empty object
console.log(gameName.length);//6
console.log(gameName.toUpperCase());//ANISHA
console.log(gameName.charAt(2));//i
console.log(gameName.indexOf('i'));//2

const newString = gameName.substring(0,4)
console.log(newString);//Anis

const anotherString = gameName.slice(-8,4)
console.log(anotherString);//s

const newStringOne = "     Anisha   "
console.log(newStringOne);//    Anisha
console.log(newStringOne.trim());//Anisha  .trim() removes all whitwspace

const url = "https://anisha.com"
console.log(url.replace("//","'"));//https:'anisha.com
console.log(url.includes("z"));//false

const gameName1 = new String('Anisha-sahu-mony-repo');
console.log(gameName1.split('-'));//[ 'Anisha', 'sahu', 'mony', 'repo' ]




