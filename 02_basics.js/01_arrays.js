//BASICS OF ARRAY
//he Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
/*
Description
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

1.JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
2.JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
3.JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
4.JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).*/

//SHALLOW COPY
/*
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.*/

//DEEP COPY
/*
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.*/


//EXAMPLE

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","nagraj"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);//1

//METHODS OF ARRAY

//1.push()
myArr.push(6)
console.log(myArr);//[  0, 1, 2, 3, 4, 5, 6 ]

//2.pop()
myArr.pop()
console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]

//3.unshift() . it add the elements in the first index
myArr.unshift(9)
console.log(myArr);//[ 9, 0, 1, 2, 3, 4, 5 ]

//4.shift() .it remove the first element in the array
myArr.shift()
console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]

//5.includes(9) .it give weather a num is present or not
console.log(myArr.includes(9));//false

//6.indexof() .gives the index nnum of the element
console.log(myArr.indexOf(3));//3

//join()
const myArr1 = myArr.join()
console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
console.log(myArr1);//0,1,2,3,4,5
console.log(typeof myArr1);//string

//slice,splice
console.log("A" , myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);

console.log(myn2);

//slice()
//syntax
/*
slice()
slice(start)
slice(start, end) */
//EXAMPLE
/*
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]*/

//splice()
//syntax
/*splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2,  …,  itemN)*/

//EXAMPLE

/*const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]*/