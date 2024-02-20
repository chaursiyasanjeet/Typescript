var user = {
    name: "sanjeet kumar",
    email: "skc0845@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolen = _a.isPaid;
}
var newUser = { name: "sanjeet", isPaid: false, email: "skc0845@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "Typescript", price: 500 };
}
function createUserType(user) {
    return { name: "", email: "", isActive: true };
}
createUserType({ name: "", email: "", isActive: true });
var myUser = {
    _id: "123345",
    name: "sanjeet",
    email: "skc0845@gmail.com",
    isActive: false,
};
// cannot edit id because it is read only type
// myUser._id = "093908";
myUser.email = "sanjeet@gmail.com";
var userCard = { cardNumber: 23233, cardDate: "23 nov", cvv: 345 };
