const accountId = 12345
let accountEmail ="Viru@123.com"
var accountPassword = "123456"
accountCity = "Mumbai"
let accountState ;

// accountId =22 not allowed
accountEmail = "hvhs@12.com"
accountPassword = "12345678"
accountCity = "Pune"
console.log(accountId);

/*
Prefer not to use var, as it is function scoped and can lead to unexpected behavior. Use let for variables that may change and const for variables that should not change.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
