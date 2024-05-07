{
    // static

    //Shared Data: Static properties are shared among all instances of a class. This means that changes to a static property will affect all instances of the class.

    class Counter {
        static count : number = 0;
        increament(){
            return Counter.count = Counter.count + 1
        }
        decreament(){
            return Counter.count = Counter.count - 1
        }
        static test(){
            return console.log('testinng static method');
        }
    }

    const instance1 = new Counter()
    console.log(instance1.increament());

    const instance2 = new Counter()
    console.log(instance2.decreament());

    //Utility Methods: Static methods can be used as utility functions that are related to the class but do not depend on specific instance data. These methods can be called directly on the class without the need to create an instance.

    Counter.test() //here no instance need to create to call test()

    //using the static keyword in TypeScript provides a way to define class-level functionality and data that is independent of any specific instance of the class.
}