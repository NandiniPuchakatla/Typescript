function identity<T>(val: T): T {
    return val
}
identity("nandu")

//array 
function getSearchProducts<T>(products: T[]): T {
    return products[3]
}

//using arrow functions
const getMoreSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 4
    return products[myIndex]
}

//generic constraints
function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne, //here we can give any type of value
        valTwo // any other type is not accessible except number 
    }
}
anotherFunction(3, 6)

//classes in generics
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sell<T> {
    public cart: T[] = []

    addTocart(product: T) {
        this.cart.push(product)
    }
}