{
    //instance of guard

    class Animal {
        name : string;
        species : string;

        constructor (name : string, species : string){
            this.name = name;
            this.species = species
        }
        makeSound(){
            return console.log(`${this.name} is a ${this.species}`);
        }
    }

    class Dog extends Animal{
        constructor(name : string, species : string){
            super(name,species)
        }
        makeBark(){
            console.log(`${this.name} is Barking`);
        }
    }
    class Cat extends Animal{
        constructor(name : string, species : string){
            super(name,species)
        }
        makeMeow(){
            console.log(`${this.name} is meowing`);
        }
    }

    const dog = new Dog("german shepherd","dog")
    const cat = new Cat("Armin","cat")
    
    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal : Animal) => {
        if(animal instanceof Dog){
            animal.makeBark()
        }else if(isCat(animal)){ //type narrowing
            animal.makeMeow()
        }else{
            animal.makeSound()
        }
    }

    getAnimal(dog)
}