//There can be some cases where we need data in spcefic order
const user1: (string | number)[] = ["hc", 1, 4];

//there is particular pattern and number of element is also fixed
const user2: [string, number, boolean] = ["sanjeet", 1, true];

//use case
let rgb: [number, number, number] = [255, 123, 112];

//value can be changed
rgb[1] = 234;

//we can do operation in tuples and this can create issue
rgb.push(234);
