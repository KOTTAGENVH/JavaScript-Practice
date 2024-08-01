//Ecapsulation
//Encapsulation is used to reduce complexity and increase reusabulity.
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
  
    displayName() {
        console.log(this.name)
    }

    set setName(name) {
        this.name = name
    }

    get getName() {
        return this.name
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

const person = new Person('Randall', 25)
person.displayName()
person.name = 'Raj'
person.displayInfo()

//Inheritance
class Vehicle {
    constructor(brand){
        this.brand = brand
    }
    drive () {
        console.log(`${this.brand} is driving.`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand)
        this.model = model
    }

    drive() {
        console.log(`${this.brand} ${this.model} is driving.`);
    }
}

var car = new Car('Toyota', 'Corolla')
car.drive()

//Polymorphism
//Polymorphism is the ability to use a single interface to represent different data types or objects.
class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`)
    }
}

//Abstract Class
class AnimalAbstract {
    constructor(name) {
        this.name = name
    }

    speak() {
        throw new Error('You have to implement the method speak!')
    }
}

class Dogs extends AnimalAbstract {

    speak() {
        console.log(`${this.name} barks.`)
    }
}

const dog = new Dogs('Dog')
dog.speak()