class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal('German Shepherd', 'dog', 'Ghew Ghew');
const cat = new Animal('Persian', 'cat', 'meaw meaw');

console.log(dog.makeSound());
console.log(cat.makeSound());
