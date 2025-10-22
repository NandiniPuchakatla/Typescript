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
var User = /** @class */ (function () {
    function User(name, email) {
        this.city = "";
        this.name = name;
        this.email = email;
    }
    return User;
}());
var user1 = new User("Nandu", "n@n.com");
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var Youtube = /** @class */ (function () {
    function Youtube(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    return Youtube;
}());
//getters and setters -- we can't set type to setter 
var Account = /** @class */ (function () {
    function Account() {
        this._balance = 0;
    }
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (amount) {
            if (amount < 0)
                throw new Error("Invalid amount");
            this._balance = amount;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var acc = new Account();
acc.balance = 100; // uses setter
console.log(acc.balance); // uses getter
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rect = new Rectangle(10, 5);
console.log(rect.getArea()); // 50
//abstract classes 
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("The animal moves ");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Bow!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.makeSound(); // Woof! 
dog.move(); // The animal moves 
// makeSound() is abstract → child must define it.
// move() is a regular method → can be used directly.
// const animal = new Animal(); ❌ Error: cannot create an instance of an abstract class
