var rollNo = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//it automatically detect the type of value and return that type of value
function identityThree(val) {
    return val;
}
identityThree("sanjeet");
//you can call any
function identityFour(val) {
    return val;
}
function identityFive(_a) {
    var Bottle = _a.Bottle;
    return "Bottle;";
}
function getSearchProducts(id) {
    //do some operation
    var myIndex = 3;
    return id[3];
}
//take array as parameters
var getId = function (id) {
    //done some operations
    return id[3];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo,
    };
}
function anotherFunction2(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo,
    };
}
anotherFunction(3, 8);
anotherFunction2({ connection: "ss", username: "as", password: "ss" }, 3);
var SellingCourse = /** @class */ (function () {
    function SellingCourse() {
        this.cart = [];
    }
    SellingCourse.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return SellingCourse;
}());
