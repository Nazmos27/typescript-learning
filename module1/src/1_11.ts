{
    const age: number = 15;
    if (age >= 18) {
        console.log('Adult');
    }else{
        console.log("not adult");
    }

    const isAdult = age >= 18 ? "adult" :"not adult"
    console.log(isAdult);

    //nullish coalescing operator

    const isAuthenticated = null;

    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : "Guest" //difference from nullish  coalescing it basically works for null or undefined value.
    console.log({result1}, {result2});

    //usage of nullish coalescing

    type User = {
        name : string;
        address : {
            city : string;
            road : string;
            presentAddress ? : string;
            permanentAdress: string;
        }
    }

    const userInfo : User ={
        name : "John Doe",
        address : {
            city : "ctg",
            road : "rdy",
            permanentAdress : 'ctg town'
        }
    }

    const presentAddress = userInfo?.address?.presentAddress ?? "No present Address"
    console.log({presentAddress}); //in js it will throw an error as there is no presenAddress but nullish coalescing prevent it and show something in case of null or undefined value
}