"use strict";
//* parameter default value
function add(num1, num2 = 0) {
    return num1 + num2;
}
add(11, 22); // OK
add(11); // OK
//* spread operator
const friends = ['chandler', 'joey', 'ross'];
const newFriends = ['monica', 'rachel', 'pheobe'];
// friends.push(...newFriends);
// console.log(friends);
const allFriends = [...friends, ...newFriends];
// console.log(allFriends);
//* rest operator
const greetFriends = (...friends) => {
    console.log(friends);
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriends('John', 'Alex', 'Smith', 'Moin');
//* array and object destructuring
// NOTE: same as Javascript
