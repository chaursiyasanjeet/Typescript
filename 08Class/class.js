"use strict";
// class,public,private,getter,setter
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // private _courseCount=1 //it can't be use outside and inhertied class
        this._courseCount = 1; // protected keyword can be used in same calss or in inhertied class
        this.city = "Delhi";
    }
    //can't be access outside
    User.prototype.deleteToken = function () {
        console.log("Token delted");
    };
    Object.defineProperty(User.prototype, "getAppleEmail", {
        // getter function
        get: function () {
            return "apple ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        //you can't defined the return type in sette function beacuse it does not return any value
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var sanjeet = new User("skc0845@gmail.com", "sanjeet", 34);
//it can't aquire the private property
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4;
    };
    return SubUser;
}(User));
