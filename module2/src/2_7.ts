{
    //generic constraints with keyof operator

    type Vehicle = {
        bike : string;
        car : string;
        ship : string
    }

    type Owner = "bike" | "car" | "ship"
    type Owner2 = keyof Vehicle

    const person1 : Owner | Owner2 = "bike" //here owner2 make is easy to have all the property 


    const getPropertyValue =<X, Y extends keyof X> (obj: X, key: Y) => { //we do it so that result variable can show proper output...we here explicitly defined what will be the type of Y(it will contain all the property of X now). by this we prevent error handling in a better way.
        return obj[key]
    }

    const user = {
        name : "Sakib",
        age : 21,
        gender : "male"
    }

    const result = getPropertyValue(user,"name")

    user['name'] //will return "Sakib"
}