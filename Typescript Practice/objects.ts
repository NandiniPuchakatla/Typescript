let person: { name: string, gender: string, age: number, email: string } = {
    name: "nandu",
    gender: "female",
    age: 10,
    email: "nandu@mail.com" // if we add a property which is not defined in type then it shows error
};

console.log(person);

//optional property
let User: { name: string, gender: string, age: number, email?: string } = {
    name: "nandu",
    gender: "female",
    age: 10,
    //email is optional here
};

console.log(User);

//type alias
type aliases = string | number;
function printStatus(message: string, code: aliases) {
    console.log(`${message} + " " + ${code}`)
}
printStatus("s", 9); //here the values can be string or number ,if give any other types it shows error
// the first value should be string only according to the function definition