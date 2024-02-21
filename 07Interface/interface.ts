//Interfaces

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string; //another way to add method
  getCoupon(couponname: string, value: number): number;
}

//you can add property interface after creating it
interface User {
  githubToken: string;
}

//creating user
const sanjeet: User = {
  dbId: 22,
  email: "sanjeet@gmail.com",
  userId: 3455,
  githubToken: "sanjeet_github",
  startTrial: () => {
    return "trail started";
  },
  getCoupon: (name: "sanjeet10", exact: 10) => {
    return 10;
  },
};

sanjeet.email = "skc0845@gmail.com";

// read only variable can't change it
// sanjeet.dbId = 33;

// you can inhertiance the property and then you can add property
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const sanjeet2: Admin = {
  dbId: 22,
  email: "sanjeet@gmail.com",
  userId: 3455,
  role: "admin",
  githubToken: "sanjeet_github",
  startTrial: () => {
    return "trail started";
  },
  getCoupon: (name: "sanjeet10", exact: 10) => {
    return 10;
  },
};
