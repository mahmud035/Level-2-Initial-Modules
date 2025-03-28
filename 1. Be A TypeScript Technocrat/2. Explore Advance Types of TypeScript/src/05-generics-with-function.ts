export {};

/**
 * Generics in functions allow you to create flexible, type-safe utilities that work with multiple types while preserving type information. This is one of the most powerful applications of TypeScript generics.
 
 * ✅ Why Use Generics in Functions?
 *  - Reusability → Write one function for different types.
 *  - Type Safety → Ensures proper type usage.
 *  - Flexibility → Works with various data types dynamically.
 */

//* ----------------------------------------
//* 1. Basic Generic Functions
//* ----------------------------------------

// ----------------------------------------
// Simple Identity Function
// ----------------------------------------

function identity<T>(arg: T): T {
  return arg;
}

// Usage with explicit type
const output1 = identity<string>('hello'); // Type: string

// Usage with type inference
const output2 = identity(42); // Type: number

// ----------------------------------------
// Generic Array Processing
// ----------------------------------------

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numbers = [1, 2, 3];
const firstNum = firstElement(numbers); // Type: number | undefined

const strings = ['a', 'b', 'c'];
const firstStr = firstElement(strings); // Type: string | undefined

//* ----------------------------------------
//* 2. Multiple Type Parameters
//* ----------------------------------------

// ----------------------------------------
// Function with Two Generic Types
// ----------------------------------------

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair('hello', 42); // Type: [string, number]

// ----------------------------------------
// Key-Value Mapper
// ----------------------------------------
