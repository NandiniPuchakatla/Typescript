interface Person {
    name: string; //required property
    age: number;  //required property
    email?: string; // optional property
}

const user1: Person = {
    name: "Nandu",
    age: 20,
};

const user2: Person = {
    name: "Navya",
    age: 19,
    email: "bob@example.com",
};   //user1 and user2 both follow the Person interface structure.



// extending interface like inheritance
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: string;
}

const emp: Employee = {
    name: "Nandini",
    age: 22,
    employeeId: "E123"
};


// readonly properties
interface Car {
    readonly name: string;
    model: string;

}
const myCar: Car = {
    name: "Toyota",
    model: "2020"
}
myCar.model = "2021"; //valid
// myCar.name="Honda";---- //error