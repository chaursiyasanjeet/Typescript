const rollNo: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

//it automatically detect the type of value and return that type of value
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("sanjeet");

//you can call any
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

function identityFive<Bottle>({ Bottle }): string {
  return "Bottle;";
}

function getSearchProducts<T>(id: T[]): T {
  //do some operation
  const myIndex = 3;
  return id[3];
}

//take array as parameters
const getId = <T>(id: T[]): T => {
  //done some operations
  return id[3];
};

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

interface Database {
  connection: string;
  username: string;
  password: string;
}
function anotherFunction2<T extends Database, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
anotherFunction(3, 8);
anotherFunction2({ connection: "ss", username: "as", password: "ss" }, 3);

//Generic class
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class SellingCourse<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
