{
 //

    //Generic type
    
    type GenericArray<T> = Array<T>

    // const rollNumbers : number[] = [1,2,3,4]
    const rollNumbers : GenericArray<number> = [1,2,3,4]

    // const mentors : string[] = ['sakib','jhankar']
    const mentors : GenericArray<string> = ['sakib', 'jhankar']

    type User = {
        name: string;
        age : string
    }

    const user : GenericArray<User> = [ // we can use here type and interface in stead of {name:string,age:number} cause it will get messy when the object contain too many property. SO to make it cleaner we first define them through type or interface then we use it in <> braces
        {
            name : 'Sakib',
            age  : 25
        },
        {
            name : 'Nazmos',
            age : 24
        }
    ]

    //generic tupple

    type GenericTupple<X,Y> = [X,Y]

    const manush : GenericTupple<string,string> = ['mr.X', 'Mr.y']

    const userWithId: GenericTupple<number,{name:string,age:number}> = [1234, {name: 'sakib',age: 123}]

 //   
}