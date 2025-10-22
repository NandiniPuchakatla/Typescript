function printStatusCode(code: number | string) {
    console.log("the status code is" + code)
}
printStatusCode(200)
printStatusCode("404 not found")
// printStatusCode(true)  -- // shows error because type is not 




type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let nandu: User | Admin = {
    name: " nandu",
    id: 18
}

nandu = { username: "rn", id: 1 }


//api
function getDbId(id: number | string) {
    // id.toLowerCase()--- // we get error here because number type does not have toLowerCase() method
    if (typeof id === "string") {
        id.toLowerCase()
    }
    console.log(`Db id is: ${id}`)
}
getDbId(4)
getDbId("4")


// union in array
const data: number[] = [1, 2, 2, 4]
const data1: string[] = ["1", "2", "2", "4"]
const data2: (number | string)[] = [1, 2, 2, "8"]