function addTwo(num) {
    return num + 2;
}
addTwo(2);
function signUp(name, email, isPaid) {
    return name.toUpperCase(),
        email.toUpperCase();
    // isPaid.toUpperCase()
} // if the type is any toUpperCase() will not work and also not work in boolean type
signUp("r", "ra@.com", true);
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "ok";
}
//arrow function 
var getHello = function (s) {
    return "";
};
//array
var fruits = ["apple", "banana", "mango",]; //if we add here 7 is also taken as string before specifying type in map function
fruits.map(function (fruit) {
    return fruit;
});
