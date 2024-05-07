{
    //abstraction ---> 1.through interface  2.through abstraction class


    //it is the idea how should be the class
    interface Vehicle1 {
        startEngine() : void;
        stopEngine():void;
        move() : void;
    }
    //and this is the actual implemantation here
    class Car implements Vehicle1{
        startEngine(): void {
            console.log("Car started");
        }
        stopEngine(): void {
            console.log("Car stopped")
        }
        move(): void {
            console.log('Moving the car')
        }
        test(){
            console.log('testing');
        }
    }

    const car = new Car;
    car.startEngine();

    //abstractor class

    //idea

    abstract class Vehicle2 {
        abstract startEngine() : void;
        abstract stopEngine() : void;
        abstract move() : void;
        test(){
            console.log('testing');
        }
    }

    class Car2 extends Vehicle2{
        startEngine() : void {
            console.log('Starting');
        }
        stopEngine() : void {
            console.log('Stopped');
        }
        move() : void {
            console.log('moving');
        }
    }

    const hondaCar = new Car2
    hondaCar.stopEngine()
}