//Function with no argument
function randomNumber() {
    return Math.random();
}
console.log(randomNumber());

//Using arrow function with no argument
let randomNumber2 = () => Math.random();
console.log(randomNumber2());

//let functionName = (arg1, arg2) => return value

//Function wtih a single argument
function number(x) {
    return x;
}
console.log(number(5));

//Using arrow function with a single argument
let number2 = (x) => x;
console.log(number2(23))