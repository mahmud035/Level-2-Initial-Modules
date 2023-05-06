"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('German Shepherd', 'dog', 'Ghew Ghew');
const cat = new Animal('Persian', 'cat', 'meaw meaw');
console.log(dog.makeSound());
console.log(cat.makeSound());
