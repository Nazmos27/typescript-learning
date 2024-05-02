//Reference type ---> object

const user : {
    institution : "Jagannath University";  //type ---> literal types(to make any value fixed for the whole project)
    readonly id : string
    firstName : string,
    lastName : string,
    age : number,
    isMarried : boolean
} = {
    institution: "Jagannath University",
    id: '1789',
    firstName : 'Nazmos',
    lastName : 'Sakib',
    age : 24,
    isMarried : true
}

// user.id = 'sad' //this will show error as this id can not be assignable(read-only)