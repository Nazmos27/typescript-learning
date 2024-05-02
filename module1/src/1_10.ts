{
    //Learning union and intersections types

    //union types

    type FrontendDeveloper = 'reactJs developer' | 'nextJs developer'
    type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

    type Developer = FrontendDeveloper | FullstackDeveloper

    const newDeveloper : Developer = 'nextJs developer' //if we misspell it will show an error

    type User = {
        name: string;
        email ? : string;
        gender : "male" | "female"; 
        bloodGroup : "O+" |  "A+" | "B+";
    }

    const user1 : User = {
        name : 'Nazmos Sakib',
        gender : 'Male', //showing error for misspelling gender property
        bloodGroup : 'AB+' //showing error for assigning wrong value
    } 

    //intersecrtion types

    type MernDeveloper = {
        skills : string[];
        designation1 : 'Frontend Developer'
    }
    type  BackEndDeveloper = {
        skills : string[];
        designation2 : 'Backend Developer'
    }

    type Fullstack = MernDeveloper & BackEndDeveloper


    const fullstackDeveloper : Fullstack = {
        skills : ['HTML','CSS','Express'],
        designation1 : 'Frontend Developer',
        designation2 : 'Backend Developer'
    }
}