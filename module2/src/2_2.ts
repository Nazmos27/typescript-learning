{
    //interface
    //bet use for object type data

    type User1 = {
        name : string;
        age  : number;
    }

    type UserWithRole1 = User1 & {role : 'manager'}
    
    interface User2 {
        name: string;
        age : number;
    }

    interface UserWithRole2 extends User2{
        role : string;
    }

    const user1 : UserWithRole2 = {
        name : 'Sakib',
        age : 24,
        role : "manager"
    }

    type Roll1 = number[]

    interface Roll2 {
        [index:number] : number
    }

    const rollNumber : Roll1 = [1,2,3,4,5]
    const rollNumber2 : Roll2 = [1,2,3,4,5]

    type Add = (num1: number,num2:number) => number

    interface Add2 {
        (num1 : number,num2:number) : number
    }

    const add : Add = (num1,num2) => num1+num2
    const add2 : Add2 = (num1,num2) => num1+num2
}