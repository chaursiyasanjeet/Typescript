//Union in type script->any of the the mnetion data type will be allowed
let score: number | string = 33;
score = 44;
score = "f";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let sanjeet: User | Admin = {
  name: "sanjeet",
  id: 845,
};

sanjeet = { username: "Sanjeet", id: 845 };

function getDbID(id: string | number) {
  if (typeof id === "string") {
    return id.toLowerCase();
  } else {
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
const data3: string[] | number[] = [3, 4];

//it can be mix of string and number
const data4: (string | number | boolean)[] = ["1", 3, "5", 4, true];

//any type of data is allowed
const data5: any = [4, "4", "4", 444];

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";

// only specific value is allowed which is defined above
// seatAllotment = "crew";
