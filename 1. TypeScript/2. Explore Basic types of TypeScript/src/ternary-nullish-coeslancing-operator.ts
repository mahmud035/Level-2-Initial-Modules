//* ternary operator
const age: number = 20;

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

const userName = isAuthenticatedUser ?? 'Guest';
console.log(userName);

// Another Use Case:
type Human = {
  name: string;
  age: number;
  address: {
    city: string;
    road: string;
    home?: string; // optional property
  };
};

const human1: Human = {
  name: 'John',
  age: 18,
  address: {
    city: 'Dhaka',
    road: '78/A',
    // home: 'Gopalganj',
  },
};

const home = human1.address.home ?? 'No Home'; // default
console.log({ home });
