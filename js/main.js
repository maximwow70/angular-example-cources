"use strict";

var qwe;

function sum(a, b = 10) {
  const summa = a + b;
  return summa;
}
console.log(sum(1));

console.error("Error");
console.warn("Warning");
// my single row comment

let myString = true;
console.log(myString);

myString = 5;
console.log(myString);

myString = "My first string";
console.log(myString);

let str = "str";
str = "str2";
str = `str2 ${myString} ${5 - 10} ${sum(2, 1)}`;
console.log(str);

let myBooleanVariable;
console.log(myBooleanVariable);
myBooleanVariable = false;
console.log(myBooleanVariable);
myBooleanVariable = 1 < 0;
console.log(myBooleanVariable);
myBooleanVariable = undefined;
console.log(myBooleanVariable);
myBooleanVariable = null;
console.log(myBooleanVariable);

// it's an object
let person = {
  name: "Vasya",
  age: 5,
  permissions: {
    admin: false,
    myFavorite: true,
  },
};
person.permissions.admin;

const list = [1, 2, 3];

// alert("Hello");

// let result = prompt("Are you ok?");
// console.log(result);

// let isBoss = confirm("Ты здесь главный?");
// console.log(isBoss); // true, если нажата OK

if (false) {
  console.log("привет");
  console.log();
} else if (true) {
  console.log();
} else {
  console.log("Пока");
}

let a;
if (1 > 2) {
  a = 5;
} else {
  a = 6;
}

const b = !sum(2, -2) ? sum(2, 3) : sum(sum(5, 6), sum(1, 2));
console.log(b);
