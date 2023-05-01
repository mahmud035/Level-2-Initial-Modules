"use strict";
// normal function
function addTwo(num1, num2) {
    return num1 + num2;
}
addTwo(11, 22);
// arrow function
const addTwoArrow = (num1, num2) => {
    return num1 + num2;
};
addTwoArrow(33, 44);
const arr = [2, 3, 4, 5];
const newArr = arr.map((num) => num * num);
console.log(newArr);
// Object & Method
const person = {
    name: 'Mezba',
    balance: 5,
    // addBalance(money: number) {
    //   return this.balance + money;
    // },
    addBalance(money) {
        console.log(`My new balance is ${this.balance + money}`);
    },
};
// NOTE: function inside an object is called method.
