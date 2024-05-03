{
    //interface

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
}