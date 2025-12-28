const accountId = 144567
let accountEmail = "money@google.com"
var accountPassword ="12345"
accountCity = "jaipur"
let accountState;//returns undefined value
/*
prefer not to use var
bacause of issue in block scope and functional scope
*/
//accountId = 2;//not allowed
accountEmail = "monty@amazon.com"
accountPassword = "345679"
accountCity = "bengaluru"

console.log(accountId);
//instead of writing console.log 4 times we can write console.table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

