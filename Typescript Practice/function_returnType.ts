function addTwo(num: number) {
    return num + 2;
}

addTwo(2);


function signUp(name: string, email: string, isPaid: boolean) {
    return name.toUpperCase(),
        email.toUpperCase()
    // isPaid.toUpperCase()

}  // if the type is any toUpperCase() will not work and also not work in boolean type
signUp("r", "ra@.com", true)

function getValue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true
    } return "ok"
}

//arrow function 
const getHello = (s: string): string => {
    return ""
}

//array
const fruits = ["apple", "banana", "mango",] //if we add here 7 is also taken as string before specifying type in map function

fruits.map((fruit): string => { //when we specify a type here as string then it shows error
    return fruit
})