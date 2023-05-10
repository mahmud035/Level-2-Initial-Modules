//* Pick
interface Person {
  name: string;
  email?: string;
  contactNo: string;
}

type Email = Pick<Person, 'email'>;
type Contact = Pick<Person, 'contactNo' | 'email'>;

//* Omit
type Name = Omit<Person, 'email' | 'contactNo'>;

//* Partial
// To make all the properties Optional types => use Partial type
type Optional = Partial<Person>;

//* Required
// To make all the properties Required => use Required type
type RequiredProps = Required<Person>;

//* Readonly
const person: Readonly<Person> = {
  name: 'John',
  email: 'john@example.com',
  contactNo: '34341312',
};

// person.name = 'Alex'; // Error Here

//* Record Type
// type MyObj = {
//   a: string;
//   b: string;
//   c: string;
// };

// using index signature
// type MyObj = {
//   [key: string]: string;
// };

//! Record ('a' | 'b' | 'c')
type MyObj = Record<'a' | 'b' | 'c', string>; // OK
// type MyObj = Record<string, string>; // OK

const obj: MyObj = {
  a: '1',
  b: '2',
  c: '3',
  // d: '4', // Error Here (for first MyObj using Record)
};
