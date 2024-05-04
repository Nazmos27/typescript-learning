{
    //constraints

    const addCourseToStudent = <T extends  {
        name : string;
        email: string
    }>(student : T) => {
        const course  = "Next level web development"
        return {
            ...student,
            course
        }
    } 

    const student3 = addCourseToStudent({price : 123}) //here student# take any object but we want to ensure that every student should have some specific property.So it can be done by constraints

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