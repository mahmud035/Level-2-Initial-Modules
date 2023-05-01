// normal function

function addTwo(num1: number, num2: number): number {
  return num1 + num2;
}

addTwo(11, 22);

// arrow function
const addTwoArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

addTwoArrow(33, 44);

const arr: number[] = [2, 3, 4, 5];

const newArr = arr.map((num) => num * num);
console.log(newArr);

// Object & Method
const person: {
  name: string;
  balance: number;
  // addBalance(money: number): number;
  addBalance(money: number): void;
} = {
  name: 'Mezba',
  balance: 5,
  // addBalance(money: number) {
  //   return this.balance + money;
  // },
  addBalance(money: number) {
    console.log(`My new balance is ${this.balance + money}`);
  },
};

// NOTE: function inside an object is called method.
