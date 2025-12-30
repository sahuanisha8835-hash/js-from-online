//Dates

let myDate = new Date()
console.log(myDate);//2025-12-30T06:47:37.109Z it is not readable

console.log(myDate.toString());//Tue Dec 30 2025 06:49:03 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Tue Dec 30 2025
console.log(myDate.toISOString());//2025-12-30T06:52:04.285Z
console.log(myDate.toJSON());//2025-12-30T06:52:38.859Z
console.log(myDate.toLocaleDateString());//12/30/2025
console.log(myDate.toLocaleString());//12/30/2025, 6:54:29 AM
console.log(typeof myDate);//object

let myDate1 = new Date(2025,0,23)
console.log(myDate1);//2025-01-23T00:00:00.000Z
console.log(myDate1.toDateString());//Thu Jan 23 2025 month is started from 0=january

let myDate2 = new Date(2025,0,23,5,3)
console.log(myDate2.toLocaleString());//1/23/2025, 5:03:00 AM

let myDate3 = new Date("2023-01-14")
console.log(myDate3.toLocaleString());//1/14/2023, 12:00:00 AM

//TIME

let myTimeStamp = Date.now()
console.log(myTimeStamp);//1767078502915 mili sec

console.log(myDate3.getTime());//1673654400000

//convert the time in mili sec to sec

console.log(Math.floor(Date.now()/1000));//1767078948 sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());//2025
console.log(newDate.getHours());//7
console.log(newDate.getMonth() + 1);//12

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));//Tuesday
