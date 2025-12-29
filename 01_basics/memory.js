//*************memory*******************

//TYpes: 2 => 1.Stack, 2.Heap
//1.Stack
//in Stacks memory all primitive type of data are store
//give the copy value
//example
let myYoutubename = "anishasahudotcom"//yeh value direct stack mein jata hai
 let anothername = myYoutubename
 console.log(anothername);//anishasahudotcom

 let myYoutubename1 = "anishasahudotcom"//yeh value direct stack mein jata hai
 let anothername1 = myYoutubename1
 anothername1 = "chaiaurcode"
 console.log(anothername1);//chaiaurcode
 console.log(myYoutubename1);//anishasahudotcom
 console.log(anothername1);//chaiaurcode
//2.Heap
//in Heap memory all nonprimitive type of data are store
//gives the reference value or original value

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anisha@google.com"
console.log(userOne.email);//anisha@google.com
console.log(userTwo.email);//anisha@google.com

