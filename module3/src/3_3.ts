{
    //type guards

    //typeof ---> type guard


    type Alphaneumeric = string | number
    const add = (param1 : Alphaneumeric, param2 : Alphaneumeric) : Alphaneumeric => {
        if(typeof param1 === 'number' && param2 === 'number'){
            return param1 + param2;
        }else{
            return param1.toString() + param2.toString()
        }
    }
    const result1 = add(5,'5')
    console.log(result1);

    type NormalUser = {
        name : string
    }
    type AdminUser = {
        name : string;
        role : "admin"
    }

    const getUser = (user : NormalUser | AdminUser) => {
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name} and i will not access role property here through user.role`);
        }
    }

    const normalUser : NormalUser = {
        name : "normal user vai"
    }
    const adminUser : AdminUser = {
        name : "admin user vai",
        role : "admin"
    }

    getUser(normalUser)
    getUser(adminUser)
}