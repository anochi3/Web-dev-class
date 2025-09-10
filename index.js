// const_ = require("lodash"); - for "type" : commonjs,
import _ from "lodash";

console.log("Hello World!\n");
let a = 3;
let b = 4;

let c = a;
a = b;
b = c;

console.log(`a = ${a} b = ${b}\n `);

function multiply(a, b){
    if (typeof a == "number" && typeof b == "number"){
        return a * b;
    }
    else{

        throw new Error("Both arguments must be numbers\n")
    }
}

console.log(multiply(a, b));

function greeting(name){
    return `Hello ${name}!\n`;
}

console.log(greeting("Anokye"));

function even_or_odd(num){
    return num % 2 ==0;
}

console.log(even_or_odd(25));

const myObject = {
    name : "Jane Doe",
    age : 25,
}

function changeAge(Object){
    Object.age = 30;
}

changeAge(myObject);
console.log(myObject.age);

const numberArray = [1, 2, 3, 4, 5];
const letterArray = ['a', 'b', 'c', 'd', 'e'];
const mixedArray = [1, 'a', 2, 'b', 3, 'c'];
// numberArray.find((num) => num > 3);
// numberArray.filter((num) => num > 3);
// numberArray.map((num) => num * 2);
// numberArray.reduce((acc, num) => acc + num, 0);
// numberArray.forEach((num) => console.log(num));

// for (let i = 0; i < letterArray.length; i++){
//     console.log(letterArray[i]);
// }

function sumArray(Array){
    let sum = 0;
    for (let i = 0; i < Array.length; i++){
        sum += Array[i];
    }
    return (sum);
}

// console.log(sumArray(numberArray));

// numberArray.forEach((element) => {
//     console.log(element);
// });

function findMax(Array){
    let max = Array[0];
    for (let i = 1; i < Array.length; i++){
        if (Array[i] > max){
            max = Array[i];
        }
    }
    return max;
}

console.log(findMax(numberArray));

function ReverseArray(Array){
    let reversedArray = [];
    for (let i = Array.length - 1; i >= 0; i--){
        reversedArray.push(Array[i]);
    }
    return reversedArray;
}

console.log(ReverseArray(letterArray));

function calculateAverageValue(Array){
    let sum = sumArray(Array);
    return sum / Array.length;
}

function recursiveFibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(9));

function nonRecursiveFibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    let a = 1;
    let b = 1;
    let c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(nonRecursiveFibonacci(9));

const newarray = [4, 3, 2, 1, 5, 2, 3];
const sortedArray = _.sortBy(newarray);
console.log(sortedArray);
console.log(_.uniq(newarray));
const newSet = new Set(newarray);
console.log(newSet);
console.log(Array.from(newSet));