{
    //learning type allias

    /*const student1:{
        name: string;
        age: number;
        gender: string;
        address: string;
    } = {
        name : "John",
        age : 23,
        gender : 'male',
        address : '43/5 B.K. Ganguly lane'
    }

    const student2 :{
        name : string;
        age: number;
        gender: string;
        contactNo: number;
        address : string;
    } = {
        name : 'Sakib',
        age: 24,
        gender : 'male',
        address : '78/9 A.M. Road',
        contactNo : 1234567
    }

    const student3 : {
        name : string;
        age : number;
        gender : string;
        address : string;
    } = {
        name : 'Priya',
        age : 23,
        gender : 'female',
        address : 'cumilla'
    }
    here in these 3 vaiable it is inconvenient to repeat  the same property again and agian so we will use type allias 
    */


    type Student = {
        name: string;
        age: number;
        contactNo?:number;
        gender: string;
        address: string;
    }

    const student1: Student= {
        name : "John",
        age : 23,
        gender : 'male',
        address : '43/5 B.K. Ganguly lane'
    }

    const student2 : Student = {
        name : 'Sakib',
        age: 24,
        gender : 'male',
        address : '78/9 A.M. Road',
        contactNo : 1234567
    }

    const student3 : Student= {
        name : 'Priya',
        age : 23,
        gender : 'female',
        address : 'cumilla'
    }

    type UserName  = string;
    const userName : UserName = 'Nazmos Sakib'

    //using type allias in function

    type Add = (num1:number,num2: number) => number
    const  addNumbers : Add = (a , b )=> a + b ;
}

