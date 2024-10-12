class Counter {
  static counter: number = 0;

  static increment(): number {
    Counter.counter += 1;
    return Counter.counter;
  }

  static decrement(): number {
    Counter.counter -= 1;
    return Counter.counter;
  }
}

const instance1 = new Counter();
const instance2 = new Counter();

console.log(Counter.increment());
console.log(Counter.increment());
