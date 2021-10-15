// for (var index = 0; index < 10; index++) {
//     setTimeout(() => {
//         console.log(index);
//     }, 1);
// }

let c = { greeting: "Hey!" };
let d = c;
c.greeting = "Hello";
console.log(d.greeting);

let a = 1
let b = a
a = 2
console.log(b);

let x = [1, 2]
let y = x
x[0] = 3
console.log(y);

String.prototype.giveLydiaPizza = () => {
    return "Just give Lydia pizza already!";
};
const name = "Lydia";
console.log(name.giveLydiaPizza())

function sayHi() {
    return {}
}
console.log(typeof sayHi());

let ab = [1, 2, 3]
ab[10] = 4
console.log(ab);
console.log(ab[5]);

const abc = [1, 2, 3]
const tong = abc.reduce((tong, item) => {
    return tong += item
}, 2)
console.log('reduce', tong); //8

console.log('filter', abc.filter(item => item >= 2));
console.log('map', abc.map(item => {
    return item += 1
}));
console.log('Goc', abc);
console.log(abc.filter(function (item) {
    return item < 3
}));

"use strict"
variable = "hellopeople";
console.log(variable);

const anonyFunc = function () {
    console.log("Hello PhongvanIT.com");
}
anonyFunc();

function phongVanIT(name) {
    return function (action) {
        return action + ' ' + name;
    }
}
var hello = phongVanIT('PhongvanIT.com');
var love = phongVanIT('PhongvanIT.com');

console.log(hello('Hello')); // Kết quả: "Hello PhongvanIT.com"
console.log(love('Love')); // Kết quả: "Love PhongvanIT.com"

var abcd;
typeof abcd; // "undefined"

abcd = "hello world";
typeof abcd; // "string"

abcd = 42;
typeof abcd; // "number"

abcd = true;
typeof abcd; // "boolean"

abcd = null;
typeof abcd; // "object"

abcd = undefined;
typeof abcd; // "undefined"

abcd = { b: "c" };
typeof abcd; // "object"
console.log(typeof [1, 2, 3]);