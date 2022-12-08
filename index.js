function newfunction(name, age, country) {
    var name = name ||"miguel";
    var age = age || 13
    var country = country || "cali";
    console.log(name, age, country)
}

// es6
function newfunction2(name = "miguel", age = 32, country = "cali"){
    console.log(name, age, country)
}

newfunction2();
newfunction2("ricardo", 23, "co");

let hello = "hello";
let world = "world";
let epicPharse = hello + " " + world;
console.log(epicPharse);
