{
    ///maped type

    const arrOfNumbers : number[] = [1,2,3,4]
    const arrOfNumbersInString : string[] = arrOfNumbers.map(element => element.toString())
    console.log(arrOfNumbersInString);

    type AreaNumber = {
        height : number;
        width : number;
    }

    // type AreaString = {
    //     height : string;
    //     width : string;
    // }
    //we want to make this type is more smarter way with maping type

    type AreaString<T> = {
        [key in keyof T] : T[key];
    }

    const areaString2 : AreaString<{height : string; width : number}> = {
        height : '100',
        width : 40
    }
}