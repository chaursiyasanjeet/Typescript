//There can be some cases where we need data in spcefic order
var user1 = ["hc", 1, 4];
//there is particular pattern and number of element is also fixed
var user2 = ["sanjeet", 1, true];
//use case
var rgb = [255, 123, 112];
//value can be changed
rgb[1] = 234;
//we can do operation in tuples and this can create issue
rgb.push(234);
