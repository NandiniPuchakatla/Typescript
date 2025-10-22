//It basically allows us to cteate a ficed length of array where each element's type is known.
var employee = ["nandu", 18, true,]; //here if we change the order of types  while initializing values it shows error.
employee.push("extra"); // to add new values
console.log(employee);
//if add new value like "100" to the above tuple it shows error because we defined on;y 3 types.
// tuple in function
function getInfo(id, name) {
    return [id, name];
}
getInfo(1, "nandu");
//readonly tuple
var ourTuple;
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
// instead use our readonly tuple
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
