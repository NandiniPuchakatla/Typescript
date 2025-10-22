var person = {
    name: "nandu",
    gender: "female",
    age: 10,
    email: "nandu@mail.com" // if we add a property which is not defined in type then it shows error
};
console.log(person);
//optional property
var User = {
    name: "nandu",
    gender: "female",
    age: 10,
    //email is optional here
};
console.log(User);
function printStatus(message, code) {
    console.log("".concat(message, " + \" \" + ").concat(code));
}
printStatus("s", 9); //here the values can be string or number ,if give any other types it shows error
// the first value should be string only according to the function definition
