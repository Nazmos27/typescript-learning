{
    //interface --- generic

    interface Developer<T, Y = null> { // here "=null" used in default of any value,it will allow now any value or property without any error 
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T,
        bike?: Y
    }

    type Kimilab = {
        brand: string;
        model: number;
        type: string

    }

    const poorDeveloper: Developer<Kimilab> = {
        name: "naxmos Sakib",
        computer: {
            brand: "Asus",
            model: "X-222UR",
            releaseYear: 2013
        },
        smartWatch: {
            brand: "Kimlib",
            type: "Smart",
            model: 342
        }
    }

    interface Apple {
        brand: string;
        model: number;
        price: number
    }
    interface Bike {
        model : string;
        color : string;
        price : number
    }
    const richDeveloper: Developer<Apple,Bike> = {
        name: "naxmos Sakib",
        computer: {
            brand: "Asus",
            model: "X-222UR",
            releaseYear: 2013
        },
        smartWatch: {
            brand: "Apple",
            model: 342,
            price: 3234
        },
        bike:{
            model : "Yamahaa",
            price : 10000000,
            color : "Red"
        }
    }
}