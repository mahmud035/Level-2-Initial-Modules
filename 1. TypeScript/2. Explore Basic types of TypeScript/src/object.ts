//* Normal way to define type
const user2: {
  company: 'Programming Hero'; // literal types => types with fixed value
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string; // Optional property
} = {
  company: 'Programming Hero',
  name: 'Montu Mia',
  age: 52,
  isMarried: true,
  wife: 'Bibi',
};

//* Using interface
interface User {
  readonly company: string; // make property just readonly
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string; // Optional property
}

const user3: User = {
  company: 'Programming Hero',
  name: 'John',
  age: 34,
  isMarried: true,
  wife: 'Alexa',
};

//* Using type
type User2 = {
  readonly company: string; // make property just readonly
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string; // Optional property
};

const user4: User2 = {
  company: 'Programming Hero',
  name: 'Smith',
  age: 40,
  isMarried: true,
  wife: 'Jeni',
};

console.log(user2);
console.log(user3);
console.log(user4);
