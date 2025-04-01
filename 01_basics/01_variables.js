const accountId = 14453
let accountEmail = "deep223@gmail.com"
var accountPassword = '12344'
accountCity = "jaipur"

//accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword="232323"
accountCity ="bengaluru"

console.log(accountId);

/*
prefer not to use var bcz of issue in block scope and functional scope 
*/
console.table([accountId ,accountEmail, accountPassword, accountCity]);
