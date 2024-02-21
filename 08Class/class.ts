// class,public,private,getter,setter

// class User {
//   public email: string; //it will be automatically public in typescript
//   name: string; //#name
//   readonly city: string = "Delhi"; // after private you can access outside
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city = "sanjeet"; // you can modify here even after private
//   }
// }

// professional writing

class User {
  // private _courseCount=1 //it can't be use outside and inhertied class
  protected _courseCount = 1; // protected keyword can be used in same calss or in inhertied class
  readonly city: string = "Delhi";
  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {}

  //can't be access outside
  private deleteToken() {
    console.log("Token delted");
  }

  // getter function
  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  //you can't defined the return type in sette function beacuse it does not return any value
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const sanjeet = new User("skc0845@gmail.com", "sanjeet", 34);

//it can't aquire the private property
class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

export {};
