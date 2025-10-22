function identity(val) {
    return val;
}
identity("nandu");
//array 
function getSearchProducts(products) {
    return products[3];
}
//using arrow functions
var getMoreSearchProducts = function (products) {
    var myIndex = 4;
    return products[myIndex];
};
//generic constraints
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne, //here we can give any type of value
        valTwo: valTwo // any other type is not accessible except number 
    };
}
anotherFunction(3, 6);
var Sell = /** @class */ (function () {
    function Sell() {
        this.cart = [];
    }
    Sell.prototype.addTocart = function (product) {
        this.cart.push(product);
    };
    return Sell;
}());
