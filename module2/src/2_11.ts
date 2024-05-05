{
    //utility types

    //Pick
    type Person = {
        name : string;
        age : number;
        role : string;
        gender : string
        contact? :  string
    }

    type NameAge = Pick<Person , "name" | "age">

    //Omit 
    type genderContact = Omit<Person, "gender" | "contact">

    //Required
    type PersonRequired = Required<Person>

    //Partial Required 
    type PartialPerson = Partial<Person>

    //ReadOnly
    type PersonReadonly = Readonly<Person>

    const readOnly : PersonReadonly = {
        name : "sakib",
        age : 21,
        role: "Developer",
        contact : "012",
        gender : "male"
    }

    readOnly.age = 32; //showing error because it is readONly

    //Record

    type MyObj = Record <string, string>

    const obj : MyObj = {
        a : "aa",
        b : "bb",
        c : 21 //showing error cause type recieved property as string and it;s value as string
    }

    //to make it dynamic we can write this as ;
    type dynObj = Record<string,unknown>

    const obj2 : dynObj = {
        a : "aa",
        b : "bb",
        c : 21 //now it will accept number type value dynamically
    }
}