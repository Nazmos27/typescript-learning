{
    //oop ---> inheritance

    



    class Student{
        name : string;
        age : number;
        address : string;

        constructor(name : string, age : number, address : string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHours : number){
            console.log(`${this.name} will sleep for ${numberOfHours}`);
        }
    }

    const student1 = new Student("Nazmos Sakib",24,"dhk")

    class Teacher{
        name : string;
        age : number;
        address : string;
        designation : string

        constructor(name : string, age : number, address : string, designation : string){
            this.name = name;
            this.age = age;
            this.address = address;
            this.designation = designation;
        }

        getSleep(numberOfHours : number){
            console.log(`${this.name} will sleep for ${numberOfHours}`);
        }
        takeClass(numberOfClass : number){
            console.log(`${this.name} teke toal ${numberOfClass} classes`);
        }
    }

    const teacher1 = new Teacher("Jhankar",34,"ctg","Professor")


    class Parent{
        name : string;
        age : number;
        address : string;

        constructor(name : string, age : number, address : string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHours : number){
            console.log(`${this.name} will sleep for ${numberOfHours}`);
        }
    }

    class Student2 extends Parent{
        constructor(name : string, age : number, address : string){
            super(name,age,address)
        }
    }

    class Teacher2 extends Parent{
        designation : string
        constructor(name : string, age : number, address : string, designation : string){
            super(name,age,address)
            this.designation = designation;
        }
        takeClass(numberOfClass : number){
            console.log(`${this.name} teke toal ${numberOfClass} classes`);
        }
    }

    const teacher2 = new Teacher2("Sadi Sir",45,"dhk","Professor")
    teacher2.takeClass(32)
}