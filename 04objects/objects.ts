const user = {
  name: "sanjeet kumar",
  email: "skc0845@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolen }) {}

let newUser = { name: "sanjeet", isPaid: false, email: "skc0845@gmail.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "Typescript", price: 500 };
}

//Type alias-> we can define the type of data an use it in code

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUserType(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUserType({ name: "", email: "", isActive: true });

type Userdatabase = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number /* credit card value will be optional */;
};

let myUser: Userdatabase = {
  _id: "123345",
  name: "sanjeet",
  email: "skc0845@gmail.com",
  isActive: false,
};

// cannot edit id because it is read only type
// myUser._id = "093908";
myUser.email = "sanjeet@gmail.com";

//AND in typescript
type cardNumber = {
  cardNumber: number;
};

type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let userCard: cardDetails = { cardNumber: 23233, cardDate: "23 nov", cvv: 345 };

export {};
