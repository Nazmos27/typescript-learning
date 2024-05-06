{
    class Animal{
        name : string;
        species : string;
        sound : string;

        constructor(name : string, species : string, sound : string){
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        
        //method
        makeSound(){
            console.log(`${this.species} sounds like ${this.sound}`); //arrow funtion e this kaaj kore na so have to use normal function
        }
    }
    class Animal2{
        // public name : string;
        // public species : string;
        // public sound : string;

        constructor(public name : string, public species : string, public sound : string){}
        makeSound(){
            console.log(`${this.species} sounds like ${this.sound}`);
        }
        //here using public in class constructor make it cleaner to construct and initialize Animal2 class!
    }

    const dog = new Animal("German Shephard","dog","gheu gheu")
    const cat = new Animal("Armin","cat","meow meow")
    cat.makeSound()

    const bird = new Animal2("Kukil", "bird", "kuhu kuhu")
    bird.makeSound();
}