{
 //

    //Generic type
    
    type GenericArray<T> = Array<T>

    // const rollNumbers : number[] = [1,2,3,4]
    const rollNumbers : GenericArray<number> = [1,2,3,4]

    // const mentors : string[] = ['sakib','jhankar']
    const mentors : GenericArray<string> = ['sakib', 'jhankar']

    const user : GenericArray<{name:string,age:number}> = [
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