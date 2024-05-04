{
    //function with generics

    const createArray = (param : string) : string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param : T) : T[] => {
        return [param];
    }

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<string>("Bangladesh")

    type User = {
        id:number;
        name:string;
    }
    const resGenericObj = createArrayWithGeneric<User>({
        id: 123,
        name: "John Doe"
    })

    //generic with tupple
    const createArrayWithTupple = <T,Q = null>(param1 : T, param2 : Q) : [T,Q] => {
        return [param1,param2];
    }

    const res10 = createArrayWithTupple<string,number>('Bangladesh',1234)
    const resGenericWithTupple = createArrayWithTupple<string,{name:string}>("Bangladesh",{name:'sakib'})

    //generic with function

    const addCourseToStudent = <T>(student : T) => {
        const course  = "Next level web development"
        return {
            ...student,
            course
        }
    } 

    const student1 = addCourseToStudent({
        name : "Nazmos",
        email : "nazmos@gmail.com",
        devType : "NLWD" 
    })

    const student2 = addCourseToStudent({
        name : "Sakib",
        email : "sakib@gmail.com",
        paymentStatus : true
    })
    
}