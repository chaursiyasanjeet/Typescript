//Union in type script->any of the the mnetion data type will be allowed
var score = 33;
score = 44;
score = "f";
var sanjeet = {
    name: "sanjeet",
    id: 845,
};
sanjeet = { username: "Sanjeet", id: 845 };
function getDbID(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    else {
        return id + 2;
    }
}
getDbID(6);
getDbID("56");
//this can contain only number
// const data1: number[] = [1, 3, 4, "5"];
// this can contain only string
// const data2: string[] = [2, 4, 5, 5, "2"];
//either can be only string or number
var data3 = [3, 4];
//it can be mix of string and number
var data4 = ["1", 3, "5", 4];
//any type of data is allowed
var data5 = [4, "4", "4", 444];
