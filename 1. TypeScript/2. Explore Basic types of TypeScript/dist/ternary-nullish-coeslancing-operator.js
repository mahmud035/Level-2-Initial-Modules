"use strict";
var _a;
//* ternary operator
const age = 20;
// if (age > 18) {
//   console.log('Adult');
// } else {
//   console.log('Minor');
// }
const isAdult = age >= 18 ? 'Yes' : 'No';
//* Nullish Coeslancing Operator
/* null and undefined */
const isAuthenticatedUser = null; // userName will be Guest
// const isAuthenticatedUser = undefined; // userName will be Guest
// const isAuthenticatedUser = 'John'; // userName will be John
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
console.log(userName);
const human1 = {
    name: 'John',
    age: 18,
    address: {
        city: 'Dhaka',
        road: '78/A',
        // home: 'Gopalganj',
    },
};
const home = (_a = human1.address.home) !== null && _a !== void 0 ? _a : 'No Home'; // default
console.log({ home });
