class User {
    name: string;  // by default it is taken as public
    email: string;
    private city: string = ""
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;

    }
}

const user1 = new User("Nandu", "n@n.com")
// user1.city="Nellore" --  //it is not accessible here bcs it is named as private property and it is accessible within class


//we have private methods like private porperties {i.e private deleteUser()}
//protected will be accessible with in the class and its derived classes i.e subclasses  or inherited classes



//interface implementation in classes
interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }
}

class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ) { }
}

//getters and setters -- we can't set type to setter 
class Account {
    private _balance: number = 0;

    get balance(): number {
        return this._balance;
    }

    set balance(amount: number) {
        if (amount < 0) throw new Error("Invalid amount");
        this._balance = amount;
    }
}

const acc = new Account();
acc.balance = 100; // uses setter
console.log(acc.balance); // uses getter


//class implements interfaces ------A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {
//inheritance : implements
interface Shape {
    getArea(): number;
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) { }

    getArea(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // 50


//abstract classes 
abstract class Animal {
    abstract makeSound(): void; // must be implemented by subclasses

    move(): void {
        console.log("The animal moves ");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bow!");
    }
}

const dog = new Dog();
dog.makeSound(); // Woof! 
dog.move();      // The animal moves 

// makeSound() is abstract → child must define it.
// move() is a regular method → can be used directly.

// const animal = new Animal(); ❌ Error: cannot create an instance of an abstract class
