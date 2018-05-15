//Evaluate these:
//#1
[2] === [2] 
{} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // a = 4
const object2 = object1; //a = 4
const object3 = object2; // a = 4
const object4 = { a: 5}; // a = 5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 

class Animal {
    constructor(name, species, legs) {
        this.name = name;
        this.species = species;
        this.legs = legs;
    }

    introduce() {
        console.log(`Hi, My name is ${this.name} and I am a ${this.species} with ${this.legs} legs`)
    }
}

class Mammal extends Animal {
    constructor(name, species, legs, boobs) {
        super(name, species, legs);
        this.boobs = boobs;
    }

    produceMilk() {
        console.log(`I am a ${this.species} with ${this.boobs} boobs`);
    }
}

let cow = new Animal("Dumb Cow", "Bovine", 4);
cow.introduce();

let human = new Mammal("Samrah", "Homo Sapiens", 2, 2);
human.produceMilk();
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
