"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//define type of arguments and type of the value return by function
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
function getLower(val) {
    return val.toLowerCase();
}
getLower("SANJEET");
function signUpUser(name, email, isPaid) {
    return "".concat(name, " is  ").concat(isPaid ? "a paid" : "not a paid", " user");
}
signUpUser("Sanjeet", "skc0845@gmail.com", false);
//Here is paid have default value
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "Login success";
};
//There can be issue where you need to return two types(it will solve by union in upcoimg lectures)
// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 Ok";
// }
var getHello = function (name) {
    return "Hello ".concat(name);
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//when you are not returning anything from function
function consoleError(errmsg) {
    console.log(errmsg);
}
//it will use when you are handling error
function handleError(errmsg) {
    throw new Error(errmsg);
}
