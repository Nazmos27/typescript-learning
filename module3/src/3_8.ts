{
    class Person {
        getSleep(){
            console.log('I sleep for 8 hours');
        }
    }

    class Student extends Person {
        getSleep(){
            console.log('Iam sleeping for 7 hours');
        }
    }

    class Developer extends Person{
        getSleep(){
            console.log('I am sleeping for 6 hrs');
        }
    }

    const getSleepingHours = (param : Person) => {
        param.getSleep()
    }

    const person1 = new Person;
    const person2 = new Student;
    const person3 = new Developer;

    getSleepingHours(person1)
    getSleepingHours(person2)
    getSleepingHours(person3)

    class Shape {
        getArea(){
            return 0
        }
    }

    class Circle extends Shape{
        radius : number;
        constructor(radius : number){
            super();
            this.radius = radius;
        }
        getArea(){
            return Math.PI*this.radius*this.radius;
        }
        
    }
    class Rectangle extends Shape{
        height : number;
        width : number;
        constructor(height : number, width : number){
            super();
            this.height = height;
            this.width = width;
        }
        getArea(){
            return this.height*this.width;
        }
        
    }

    const getShapeArea = ( param: Shape) =>{
        console.log(`Shape of the area is ${param.getArea()}`);
    }

    const shape1 = new Shape;
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(10,32);

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)

}