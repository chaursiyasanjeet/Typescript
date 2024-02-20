//define type of arguments and type of the value return by function
function addTwo(num: number): number {
  return num + 2;
}
console.log(addTwo(5));

function getLower(val: string) {
  return val.toLowerCase();
}
getLower("SANJEET");

function signUpUser(name: string, email: string, isPaid: boolean) {
  return `${name} is  ${isPaid ? "a paid" : "not a paid"} user`;
}
signUpUser("Sanjeet", "skc0845@gmail.com", false);

//Here is paid have default value
let loginUser = (
  email: "string",
  password: "string",
  isPaid: boolean = false
) => {
  return "Login success";
};

//There can be issue where you need to return two types(it will solve by union in upcoimg lectures)
// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 Ok";
// }

const getHello = (name: string): string => {
  return `Hello ${name}`;
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero: string): string => {
  return `hero is ${hero}`;
});

//when you are not returning anything from function
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

//it will use when you are handling error
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

// temprary get rid of error
export {};
