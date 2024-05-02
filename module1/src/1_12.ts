{
    //Learning Nullable and Unknown datatypes

    //nullable types

    const searchName = (value:string | null) => {
        if(value){
            console.log("Searching");
        }else{
            console.log("there is nothing to search");
        }
    }

    searchName(null)

    //unknown types

    const getSpeedMeterPerSecond = (value :unknown) => { //here value: string will throw error but value:unknown indicates that typeof the value can be sured in execution
        if(typeof(value) === 'number'){
            const convertedSpeed = (value*1000)/3600;
            console.log(convertedSpeed);
        }else if(typeof(value) === 'string'){
            const valueInNumber = value.split(' ')[0]
            console.log("value in number",valueInNumber);
            const convertedSpeed = (parseFloat(value)*1000)/3600;
            console.log("converted speed = ", convertedSpeed);
        }else{
            console.log("wrong input");
        }
    }

    getSpeedMeterPerSecond(1000)
    getSpeedMeterPerSecond('1000 kmh-1')


    //never type 

    // const throwError = (msg:string) : never => {throw new Error(msg)}
    // //when you are sure that a function will never return anything u can use never type
    // throwError( "Oops!")
}