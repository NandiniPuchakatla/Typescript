function printStatusCode(code) {
    console.log("the status code is" + code);
}
printStatusCode(200);
printStatusCode("404 not found");
var nandu = {
    name: " nandu",
    id: 18
};
nandu = { username: "rn", id: 1 };
//api
function getDbId(id) {
    // id.toLowerCase()--- // we get error here because number type does not have toLowerCase() method
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("Db id is: ".concat(id));
}
getDbId(4);
getDbId("4");
// union in array
var data = [1, 2, 2, 4];
var data1 = ["1", "2", "2", "4"];
var data2 = [1, 2, 2, "8"];
